/**
 * FinFlow MY 가계부/달력 Engine
 * Permanent LocalStorage Data Persistence for Each Device & Browser
 */

(function () {
    // Helper Functions
    function parseKoreanCurrency(input) {
        if (!input) return 0;
        let str = input.toString().trim().replace(/,/g, '');

        if (/^\d+$/.test(str)) {
            return parseInt(str, 10);
        }

        let total = 0;

        const eokMatch = str.match(/(\d+)\s*억/);
        if (eokMatch) total += parseInt(eokMatch[1], 10) * 100000000;

        const manMatch = str.match(/(\d+)\s*만/);
        if (manMatch) total += parseInt(manMatch[1], 10) * 10000;

        const cheonMatch = str.match(/(\d+)\s*천/);
        if (cheonMatch) total += parseInt(cheonMatch[1], 10) * 1000;

        const rawMatch = str.match(/(\d+)\s*원?$/);
        if (rawMatch && !manMatch && !cheonMatch && !eokMatch) {
            total += parseInt(rawMatch[1], 10);
        }

        return total;
    }

    function formatKoreanText(num) {
        if (!num || isNaN(num)) return '0원';

        const absNum = Math.abs(num);
        let result = '';

        const eok = Math.floor(absNum / 100000000);
        const remEok = absNum % 100000000;
        const man = Math.floor(remEok / 10000);
        const remMan = remEok % 10000;

        if (eok > 0) result += `${eok}억 `;
        if (man > 0) result += `${man}만 `;
        if (remMan > 0) result += `${remMan.toLocaleString()}원`;
        else if (result.length > 0) result = result.trim() + '원';
        else result = '0원';

        return (num < 0 ? '-' : '') + result;
    }

    function formatCompactText(num) {
        if (!num || isNaN(num)) return '0';
        const absNum = Math.abs(num);
        if (absNum >= 10000) {
            const man = Math.floor(absNum / 10000);
            const remCheon = Math.floor((absNum % 10000) / 1000);
            return remCheon > 0 ? `${man}.${remCheon}만` : `${man}만`;
        }
        if (absNum >= 1000) {
            return `${Math.floor(absNum / 1000)}천`;
        }
        return `${absNum}`;
    }

    function formatNumber(num) {
        return new Intl.NumberFormat('ko-KR').format(num || 0);
    }

    function getFormatDateString(d) {
        const year = d.getFullYear();
        const month = String(d.getMonth() + 1).padStart(2, '0');
        const day = String(d.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }

    function escapeHtml(str) {
        if (!str) return '';
        return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
    }

    // Robust Safe Storage Wrapper (Supports LocalStorage with SessionStorage Fallback)
    const Storage = {
        get(key) {
            try {
                return localStorage.getItem(key);
            } catch (e) {
                try { return sessionStorage.getItem(key); } catch (err) { return null; }
            }
        },
        set(key, val) {
            try {
                localStorage.setItem(key, val);
            } catch (e) {
                try { sessionStorage.setItem(key, val); } catch (err) {}
            }
        },
        remove(key) {
            try {
                localStorage.removeItem(key);
            } catch (e) {
                try { sessionStorage.removeItem(key); } catch (err) {}
            }
        }
    };

    // Main Init
    function initApp() {
        const CATEGORIES = {
            income: [
                { id: 'salary', name: '🌼 해바라기 · 정기 급여' },
                { id: 'investment', name: '📈 주식 · 배당수익' },
                { id: 'allowance', name: '🎁 상여금 · 용돈' },
                { id: 'other_inc', name: '✨ 기타 수입' }
            ],
            expense: [
                { id: 'food', name: '🌸 벚꽃 · 식비/카페' },
                { id: 'transport', name: '🌿 풀잎 · 교통비' },
                { id: 'shopping', name: '🛍️ 쇼핑 · 의류' },
                { id: 'housing', name: '🏠 주거 · 통신' },
                { id: 'culture', name: '🎮 문화 · 유흥' },
                { id: 'medical', name: '💊 건강 · 약국' },
                { id: 'other_exp', name: '📜 기타 지출' }
            ]
        };

        let currentDate = new Date();
        let selectedDateStr = getFormatDateString(new Date());

        // PERMANENT USER DATA LOAD FROM LOCALSTORAGE
        let initialAsset = 0;
        let transactions = [];
        let schedules = [];
        let monthlyGoal = "이번 달 꼭 식비 30만원 이하로 아끼기! 🌸";

        try {
            const rawAsset = Storage.get('finflow_user_asset');
            if (rawAsset !== null) {
                const parsedVal = parseInt(rawAsset, 10);
                if (!isNaN(parsedVal)) initialAsset = parsedVal;
            }
        } catch (e) {
            initialAsset = 0;
        }

        try {
            const rawTx = Storage.get('finflow_user_transactions');
            if (rawTx !== null) {
                const parsedTx = JSON.parse(rawTx);
                if (Array.isArray(parsedTx)) transactions = parsedTx;
            }
        } catch (e) {
            transactions = [];
        }

        try {
            const rawSch = Storage.get('finflow_user_schedules');
            if (rawSch !== null) {
                const parsedSch = JSON.parse(rawSch);
                if (Array.isArray(parsedSch)) schedules = parsedSch;
            }
        } catch (e) {
            schedules = [];
        }

        try {
            const rawGoal = Storage.get('finflow_user_goal');
            if (rawGoal !== null) monthlyGoal = rawGoal;
        } catch (e) {}

        const state = {
            initialAsset,
            transactions,
            schedules,
            monthlyGoal
        };

        // DOM Elements
        const prevMonthBtn = document.getElementById('prev-month-btn');
        const nextMonthBtn = document.getElementById('next-month-btn');
        const todayBtn = document.getElementById('today-btn');
        const currentMonthDisplay = document.getElementById('current-month-display');
        const calendarGridEl = document.getElementById('calendar-grid');

        const assetChipBtn = document.getElementById('asset-chip-btn');
        const totalAssetValEl = document.getElementById('total-asset-val');
        const monthlyIncomeValEl = document.getElementById('monthly-income-val');
        const monthlyExpenseValEl = document.getElementById('monthly-expense-val');
        const monthlyNetValEl = document.getElementById('monthly-net-val');

        // Goal Elements
        const goalBannerBtn = document.getElementById('goal-banner-btn');
        const monthlyGoalTextEl = document.getElementById('monthly-goal-text');
        const goalModal = document.getElementById('goal-modal');
        const goalInput = document.getElementById('goal-input');
        const goalSaveBtn = document.getElementById('goal-save-btn');
        const goalCancelBtn = document.getElementById('goal-cancel-btn');
        const goalModalCloseX = document.getElementById('goal-modal-close-x');

        // Entry Modal & Mode Switch Elements
        const entryModal = document.getElementById('entry-modal');
        const modalCloseX = document.getElementById('modal-close-x');
        const modalDateTitleEl = document.getElementById('modal-date-title');
        const entryDateHiddenEl = document.getElementById('entry-date-hidden');

        const modeMoneyBtn = document.getElementById('mode-money-btn');
        const modeScheduleBtn = document.getElementById('mode-schedule-btn');
        const entryForm = document.getElementById('entry-form');
        const scheduleForm = document.getElementById('schedule-form');

        const amountInput = document.getElementById('amount-input');
        const parsedAmountTextEl = document.getElementById('parsed-amount-text');
        const categorySelect = document.getElementById('category-select');
        const memoInput = document.getElementById('memo-input');

        const scheduleTextInput = document.getElementById('schedule-text-input');
        const scheduleIconSelect = document.getElementById('schedule-icon-select');

        const dayHistoryListEl = document.getElementById('day-history-list');

        const assetModal = document.getElementById('asset-modal');
        const assetInput = document.getElementById('asset-input');
        const assetPreviewTextEl = document.getElementById('asset-preview-text');
        const assetCancelBtn = document.getElementById('asset-cancel-btn');
        const assetSaveBtn = document.getElementById('asset-save-btn');
        const assetModalCloseX = document.getElementById('asset-modal-close-x');
        const clearAllDataBtn = document.getElementById('clear-all-data-btn');

        const updateCategoryOptions = (type) => {
            if (!categorySelect) return;
            const catList = CATEGORIES[type] || [];
            categorySelect.innerHTML = catList.map(c => `<option value="${c.id}">${c.name}</option>`).join('');
        };

        document.querySelectorAll('input[name="type"]').forEach(r => {
            r.addEventListener('change', (e) => updateCategoryOptions(e.target.value));
        });

        updateCategoryOptions('expense');

        if (amountInput && parsedAmountTextEl) {
            amountInput.addEventListener('input', (e) => {
                const parsed = parseKoreanCurrency(e.target.value);
                parsedAmountTextEl.textContent = `${formatNumber(parsed)}원 (${formatKoreanText(parsed)})`;
            });
        }

        document.querySelectorAll('.unit-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                if (!amountInput || !parsedAmountTextEl) return;
                if (btn.id === 'clear-amount-btn') {
                    amountInput.value = '';
                    parsedAmountTextEl.textContent = '0원';
                    return;
                }
                const addVal = parseInt(btn.dataset.val, 10);
                const currentVal = parseKoreanCurrency(amountInput.value);
                const newVal = currentVal + addVal;
                amountInput.value = formatKoreanText(newVal);
                parsedAmountTextEl.textContent = `${formatNumber(newVal)}원 (${formatKoreanText(newVal)})`;
            });
        });

        if (assetInput && assetPreviewTextEl) {
            assetInput.addEventListener('input', (e) => {
                const parsed = parseKoreanCurrency(e.target.value);
                assetPreviewTextEl.textContent = `${formatNumber(parsed)}원 (${formatKoreanText(parsed)})`;
            });
        }

        // Mode Switcher
        if (modeMoneyBtn && modeScheduleBtn) {
            modeMoneyBtn.addEventListener('click', () => {
                modeMoneyBtn.classList.add('active');
                modeScheduleBtn.classList.remove('active');
                entryForm.classList.remove('hidden');
                scheduleForm.classList.add('hidden');
            });

            modeScheduleBtn.addEventListener('click', () => {
                modeScheduleBtn.classList.add('active');
                modeMoneyBtn.classList.remove('active');
                scheduleForm.classList.remove('hidden');
                entryForm.classList.add('hidden');
            });
        }

        // PERMANENT SAVE TO LOCALSTORAGE & FALLBACK
        const saveState = () => {
            Storage.set('finflow_user_transactions', JSON.stringify(state.transactions));
            Storage.set('finflow_user_schedules', JSON.stringify(state.schedules));
            Storage.set('finflow_user_asset', state.initialAsset.toString());
            Storage.set('finflow_user_goal', state.monthlyGoal);
            renderApp();
        };

        const renderApp = () => {
            renderGoal();
            renderSummary();
            renderCalendar();
        };

        const renderGoal = () => {
            if (monthlyGoalTextEl) {
                monthlyGoalTextEl.textContent = state.monthlyGoal || "이번 달 목표를 입력하세요! 🌸";
            }
        };

        const renderSummary = () => {
            const currentYear = currentDate.getFullYear();
            const currentMonth = currentDate.getMonth() + 1;

            let monthlyIncome = 0;
            let monthlyExpense = 0;
            let totalIncomeAllTime = 0;
            let totalExpenseAllTime = 0;

            state.transactions.forEach(t => {
                const amt = parseInt(t.amount, 10) || 0;
                const dParts = t.date ? t.date.split('-') : [];
                if (dParts.length === 3) {
                    const tYear = parseInt(dParts[0], 10);
                    const tMonth = parseInt(dParts[1], 10);
                    const isThisMonth = (tYear === currentYear) && (tMonth === currentMonth);

                    if (t.type === 'income') {
                        totalIncomeAllTime += amt;
                        if (isThisMonth) monthlyIncome += amt;
                    } else if (t.type === 'expense') {
                        totalExpenseAllTime += amt;
                        if (isThisMonth) monthlyExpense += amt;
                    }
                }
            });

            const monthlyNet = monthlyIncome - monthlyExpense;
            const totalAsset = state.initialAsset + totalIncomeAllTime - totalExpenseAllTime;

            if (totalAssetValEl) totalAssetValEl.textContent = formatKoreanText(totalAsset);
            if (monthlyIncomeValEl) monthlyIncomeValEl.textContent = `+${formatKoreanText(monthlyIncome)}`;
            if (monthlyExpenseValEl) monthlyExpenseValEl.textContent = `-${formatKoreanText(monthlyExpense)}`;

            if (monthlyNetValEl) {
                monthlyNetValEl.textContent = `${monthlyNet >= 0 ? '+' : ''}${formatKoreanText(monthlyNet)}`;
                monthlyNetValEl.className = monthlyNet >= 0 ? 'chip-val text-sage' : 'chip-val text-coral';
            }
        };

        const renderCalendar = () => {
            if (!calendarGridEl || !currentMonthDisplay) return;

            const year = currentDate.getFullYear();
            const month = currentDate.getMonth(); // 0-indexed

            currentMonthDisplay.textContent = `${year}년 ${month + 1}월 🌸`;

            const firstDayIndex = new Date(year, month, 1).getDay(); // 0: Sun
            const totalDays = new Date(year, month + 1, 0).getDate();
            const prevMonthTotalDays = new Date(year, month, 0).getDate();

            const dailyData = {};

            state.transactions.forEach(t => {
                const dParts = t.date ? t.date.split('-') : [];
                if (dParts.length === 3) {
                    const tYear = parseInt(dParts[0], 10);
                    const tMonth = parseInt(dParts[1], 10) - 1;
                    const tDay = parseInt(dParts[2], 10);

                    if (tYear === year && tMonth === month) {
                        if (!dailyData[tDay]) {
                            dailyData[tDay] = { income: 0, expense: 0, schedules: [] };
                        }
                        if (t.type === 'income') dailyData[tDay].income += parseInt(t.amount, 10);
                        if (t.type === 'expense') dailyData[tDay].expense += parseInt(t.amount, 10);
                    }
                }
            });

            state.schedules.forEach(s => {
                const dParts = s.date ? s.date.split('-') : [];
                if (dParts.length === 3) {
                    const tYear = parseInt(dParts[0], 10);
                    const tMonth = parseInt(dParts[1], 10) - 1;
                    const tDay = parseInt(dParts[2], 10);

                    if (tYear === year && tMonth === month) {
                        if (!dailyData[tDay]) {
                            dailyData[tDay] = { income: 0, expense: 0, schedules: [] };
                        }
                        if (!dailyData[tDay].schedules) dailyData[tDay].schedules = [];
                        dailyData[tDay].schedules.push(s);
                    }
                }
            });

            let gridHTML = '';

            // Previous Month Tail Days
            for (let i = firstDayIndex - 1; i >= 0; i--) {
                const prevDayNum = prevMonthTotalDays - i;
                gridHTML += `
                    <div class="calendar-day other-month">
                        <div class="day-top"><span class="day-number">${prevDayNum}</span></div>
                    </div>
                `;
            }

            // Current Month Days
            const todayObj = new Date();
            const isCurrentMonthView = (todayObj.getFullYear() === year) && (todayObj.getMonth() === month);
            const isMobile = window.innerWidth <= 480;

            for (let day = 1; day <= totalDays; day++) {
                const dayOfWeek = new Date(year, month, day).getDay();
                const dayStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                const isToday = isCurrentMonthView && (todayObj.getDate() === day);

                let dayClass = 'calendar-day';
                if (dayOfWeek === 0) dayClass += ' sun';
                if (dayOfWeek === 6) dayClass += ' sat';
                if (isToday) dayClass += ' today';

                const data = dailyData[day] || { income: 0, expense: 0, schedules: [] };

                let badgesHTML = '';

                // Schedules Badges (Render ALL schedules registered on this day)
                if (data.schedules && data.schedules.length > 0) {
                    data.schedules.forEach(sch => {
                        const icon = sch.icon || '📌';
                        const text = isMobile ? `${icon}${escapeHtml(sch.text)}` : `${icon} ${escapeHtml(sch.text)}`;
                        badgesHTML += `<div class="badge-row badge-schedule" title="${escapeHtml(sch.text)}"><span>${text}</span></div>`;
                    });
                }

                // Income Badge
                if (data.income > 0) {
                    const incText = isMobile ? `+${formatCompactText(data.income)}` : `+${formatKoreanText(data.income)}`;
                    badgesHTML += `<div class="badge-row badge-inc"><span>+수입</span><span>${incText}</span></div>`;
                }

                // Expense Badge
                if (data.expense > 0) {
                    const expText = isMobile ? `-${formatCompactText(data.expense)}` : `-${formatKoreanText(data.expense)}`;
                    badgesHTML += `<div class="badge-row badge-exp"><span>-지출</span><span>${expText}</span></div>`;
                }

                gridHTML += `
                    <div class="${dayClass}" data-date="${dayStr}">
                        <div class="day-top">
                            <span class="day-number">${day}</span>
                            <div class="day-quick-actions">
                                <button class="quick-btn btn-add-inc" data-date="${dayStr}" data-type="income" title="수입(+) 추가">+</button>
                                <button class="quick-btn btn-add-exp" data-date="${dayStr}" data-type="expense" title="지출(-) 추가">-</button>
                            </div>
                        </div>
                        <div class="day-content">
                            ${badgesHTML}
                        </div>
                    </div>
                `;
            }

            // Next Month Tail Days
            const totalCells = firstDayIndex + totalDays;
            const nextDaysCount = (7 - (totalCells % 7)) % 7;
            for (let j = 1; j <= nextDaysCount; j++) {
                gridHTML += `
                    <div class="calendar-day other-month">
                        <div class="day-top"><span class="day-number">${j}</span></div>
                    </div>
                `;
            }

            calendarGridEl.innerHTML = gridHTML;

            // Attach Click Handlers
            document.querySelectorAll('.calendar-day:not(.other-month)').forEach(tile => {
                tile.addEventListener('click', (e) => {
                    const quickBtn = e.target.closest('.quick-btn');
                    const dateStr = tile.dataset.date;
                    if (quickBtn) {
                        e.stopPropagation();
                        const type = quickBtn.dataset.type;
                        openEntryModal(dateStr, type);
                    } else {
                        openEntryModal(dateStr);
                    }
                });
            });
        };

        if (prevMonthBtn) {
            prevMonthBtn.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() - 1);
                renderApp();
            });
        }

        if (nextMonthBtn) {
            nextMonthBtn.addEventListener('click', () => {
                currentDate.setMonth(currentDate.getMonth() + 1);
                renderApp();
            });
        }

        if (todayBtn) {
            todayBtn.addEventListener('click', () => {
                currentDate = new Date();
                renderApp();
            });
        }

        // Goal Modal Handlers
        const openGoalModal = () => {
            if (!goalModal || !goalInput) return;
            goalInput.value = state.monthlyGoal || "";
            goalModal.classList.remove('hidden');
        };

        if (goalBannerBtn) goalBannerBtn.addEventListener('click', openGoalModal);

        if (goalSaveBtn) {
            goalSaveBtn.addEventListener('click', () => {
                const val = goalInput ? goalInput.value.trim() : "";
                state.monthlyGoal = val || "이번 달 목표를 실천해 보세요! 🌸";
                saveState();
                if (goalModal) goalModal.classList.add('hidden');
            });
        }

        // Entry Modal Handlers
        const openEntryModal = (dateStr, defaultType = 'expense') => {
            if (!entryModal) return;
            selectedDateStr = dateStr;
            if (entryDateHiddenEl) entryDateHiddenEl.value = dateStr;

            const dParts = dateStr.split('-');
            if (modalDateTitleEl && dParts.length === 3) {
                modalDateTitleEl.innerHTML = `<i class="fa-solid fa-pen-nib text-coral"></i> ${dParts[0]}년 ${parseInt(dParts[1], 10)}월 ${parseInt(dParts[2], 10)}일 기록 🌸`;
            }

            const incRadio = document.getElementById('type-income');
            const expRadio = document.getElementById('type-expense');
            if (defaultType === 'income' && incRadio) {
                incRadio.checked = true;
                updateCategoryOptions('income');
            } else if (expRadio) {
                expRadio.checked = true;
                updateCategoryOptions('expense');
            }

            if (amountInput) amountInput.value = '';
            if (parsedAmountTextEl) parsedAmountTextEl.textContent = '0원';
            if (memoInput) memoInput.value = '';
            if (scheduleTextInput) scheduleTextInput.value = '';

            renderDayHistoryList(dateStr);
            entryModal.classList.remove('hidden');
        };

        const renderDayHistoryList = (dateStr) => {
            if (!dayHistoryListEl) return;

            const dayMoneyItems = state.transactions.filter(t => t.date === dateStr);
            const daySchItems = state.schedules.filter(s => s.date === dateStr);

            if (dayMoneyItems.length === 0 && daySchItems.length === 0) {
                dayHistoryListEl.innerHTML = '<p class="text-muted font-sm" style="font-size: 0.85rem; color: #A89B94;">등록된 내역이나 일정이 없습니다. 🌸</p>';
                return;
            }

            let html = '';

            // Render Schedule items first
            daySchItems.forEach(item => {
                const icon = item.icon || '📌';
                html += `
                    <div class="history-item" style="border-left: 3px solid #8B5CF6;">
                        <div>
                            <span class="badge-row badge-schedule" style="display:inline-block; margin-right: 0.4rem;">📌 일정</span>
                            <strong>${icon} ${escapeHtml(item.text)}</strong>
                        </div>
                        <div>
                            <button class="delete-schedule-btn" data-id="${item.id}" title="삭제"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                `;
            });

            // Render Money items
            dayMoneyItems.forEach(item => {
                const isInc = item.type === 'income';
                const badgeClass = isInc ? 'badge-inc' : 'badge-exp';
                const sign = isInc ? '+' : '-';
                const catName = getCategoryName(item.type, item.category);

                html += `
                    <div class="history-item">
                        <div>
                            <span class="badge-row ${badgeClass}" style="display:inline-block; margin-right: 0.4rem;">${sign}${isInc ? '수입' : '지출'}</span>
                            <strong>${escapeHtml(item.memo)}</strong>
                            <span style="font-size:0.75rem; color:#82756E;">(${catName})</span>
                        </div>
                        <div>
                            <strong>${sign}₩${formatNumber(item.amount)}</strong>
                            <button class="delete-money-btn" data-id="${item.id}" title="삭제"><i class="fa-solid fa-trash-can"></i></button>
                        </div>
                    </div>
                `;
            });

            dayHistoryListEl.innerHTML = html;

            document.querySelectorAll('.delete-money-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idToDelete = e.currentTarget.dataset.id;
                    deleteMoneyTransaction(idToDelete);
                });
            });

            document.querySelectorAll('.delete-schedule-btn').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    const idToDelete = e.currentTarget.dataset.id;
                    deleteScheduleItem(idToDelete);
                });
            });
        };

        const getCategoryName = (type, catId) => {
            const list = CATEGORIES[type] || [];
            const found = list.find(c => c.id === catId);
            return found ? found.name : '🌸 기타';
        };

        // Money Entry Submit
        if (entryForm) {
            entryForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const checkedTypeRadio = document.querySelector('input[name="type"]:checked');
                const type = checkedTypeRadio ? checkedTypeRadio.value : 'expense';
                const amount = parseKoreanCurrency(amountInput ? amountInput.value : '');
                const category = categorySelect ? categorySelect.value : 'other_exp';
                const memo = memoInput ? memoInput.value.trim() : '';
                const dateStr = entryDateHiddenEl ? entryDateHiddenEl.value : selectedDateStr;

                if (!amount || amount <= 0) {
                    alert('올바른 금액을 입력해 주세요. (예: 3만원, 5천원, 35000)');
                    return;
                }

                if (!memo) {
                    alert('사용 내역 메모를 입력해 주세요.');
                    return;
                }

                const newItem = {
                    id: Date.now().toString(),
                    type,
                    amount,
                    category,
                    date: dateStr,
                    memo
                };

                state.transactions.unshift(newItem);
                saveState();

                if (amountInput) amountInput.value = '';
                if (parsedAmountTextEl) parsedAmountTextEl.textContent = '0원';
                if (memoInput) memoInput.value = '';

                renderDayHistoryList(dateStr);
            });
        }

        // Schedule Entry Submit
        if (scheduleForm) {
            scheduleForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const text = scheduleTextInput ? scheduleTextInput.value.trim() : '';
                const icon = scheduleIconSelect ? scheduleIconSelect.value : '📌';
                const dateStr = entryDateHiddenEl ? entryDateHiddenEl.value : selectedDateStr;

                if (!text) {
                    alert('일정/할일 메모 내용을 입력해 주세요.');
                    return;
                }

                const newSchedule = {
                    id: Date.now().toString(),
                    date: dateStr,
                    text,
                    icon
                };

                state.schedules.unshift(newSchedule);
                saveState();

                if (scheduleTextInput) scheduleTextInput.value = '';
                renderDayHistoryList(dateStr);
            });
        }

        const deleteMoneyTransaction = (id) => {
            if (confirm('이 가계부 항목을 삭제하시겠습니까?')) {
                state.transactions = state.transactions.filter(t => t.id !== id);
                saveState();
                renderDayHistoryList(selectedDateStr);
            }
        };

        const deleteScheduleItem = (id) => {
            if (confirm('이 일정 항목을 삭제하시겠습니까?')) {
                state.schedules = state.schedules.filter(s => s.id !== id);
                saveState();
                renderDayHistoryList(selectedDateStr);
            }
        };

        const openAssetModal = () => {
            if (!assetModal || !assetInput || !assetPreviewTextEl) return;
            assetInput.value = formatKoreanText(state.initialAsset);
            assetPreviewTextEl.textContent = `${formatNumber(state.initialAsset)}원`;
            assetModal.classList.remove('hidden');
        };

        if (assetChipBtn) assetChipBtn.addEventListener('click', openAssetModal);

        if (assetSaveBtn) {
            assetSaveBtn.addEventListener('click', () => {
                const val = parseKoreanCurrency(assetInput ? assetInput.value : '');
                if (!isNaN(val) && val >= 0) {
                    state.initialAsset = val;
                    saveState();
                    if (assetModal) assetModal.classList.add('hidden');
                } else {
                    alert('올바른 자산 금액을 입력해 주세요.');
                }
            });
        }

        if (clearAllDataBtn) {
            clearAllDataBtn.addEventListener('click', () => {
                if (confirm('정말 모든 기록과 일정을 지우고 0원으로 초기화하시겠습니까? 🌸')) {
                    state.transactions = [];
                    state.schedules = [];
                    state.initialAsset = 0;
                    state.monthlyGoal = "이번 달 목표를 입력해 보세요! 🌸";
                    saveState();
                    Storage.remove('finflow_user_transactions');
                    Storage.remove('finflow_user_schedules');
                    Storage.remove('finflow_user_asset');
                    Storage.remove('finflow_user_goal');
                    renderDayHistoryList(selectedDateStr);
                }
            });
        }

        [modalCloseX, assetCancelBtn, assetModalCloseX, goalCancelBtn, goalModalCloseX].forEach(el => {
            if (el) {
                el.addEventListener('click', () => {
                    if (entryModal) entryModal.classList.add('hidden');
                    if (assetModal) assetModal.classList.add('hidden');
                    if (goalModal) goalModal.classList.add('hidden');
                });
            }
        });

        document.querySelectorAll('.modal-overlay').forEach(overlay => {
            overlay.addEventListener('click', () => {
                if (entryModal) entryModal.classList.add('hidden');
                if (assetModal) assetModal.classList.add('hidden');
                if (goalModal) goalModal.classList.add('hidden');
            });
        });

        window.addEventListener('resize', renderCalendar);

        // Initial Render from Persistent LocalStorage
        renderApp();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initApp);
    } else {
        initApp();
    }
})();
