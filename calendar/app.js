// State
let currentDate = new Date();
let selectedDateStr = null;

// LocalStorage data
let events = JSON.parse(localStorage.getItem('calendar_events')) || {};
let goalInfo = JSON.parse(localStorage.getItem('calendar_goal')) || null;
let habitChecks = JSON.parse(localStorage.getItem('calendar_checks')) || {};

document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    renderGoalInfo();
});

// === Calendar Core ===
function renderCalendar() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    document.getElementById('month-display').innerText = `${year}년 ${month + 1}월`;
    
    const firstDay = new Date(year, month, 1).getDay();
    const lastDate = new Date(year, month + 1, 0).getDate();
    
    const grid = document.getElementById('calendar-days');
    grid.innerHTML = '';
    
    const today = new Date();
    
    // Empty cells before start
    for (let i = 0; i < firstDay; i++) {
        const cell = document.createElement('div');
        cell.className = 'day-cell empty';
        grid.appendChild(cell);
    }
    
    // Days
    for (let i = 1; i <= lastDate; i++) {
        const cell = document.createElement('div');
        cell.className = 'day-cell';
        
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
        
        // Weekend styling
        const currentDayOfWeek = new Date(year, month, i).getDay();
        if (currentDayOfWeek === 0) cell.classList.add('sun');
        if (currentDayOfWeek === 6) cell.classList.add('sat');
        
        // Today
        if (year === today.getFullYear() && month === today.getMonth() && i === today.getDate()) {
            cell.classList.add('today');
        }
        
        cell.onclick = () => openDayModal(dateStr);
        
        let html = `<div class="day-num">${i}</div>`;
        
        // Habit Check Stamp
        if (habitChecks[dateStr]) {
            html += `<div class="habit-stamp">🏅</div>`;
        }
        
        // Event Dots
        if (events[dateStr] && events[dateStr].length > 0) {
            html += `<div class="event-dots">`;
            for(let e = 0; e < Math.min(events[dateStr].length, 4); e++) {
                html += `<div class="event-dot"></div>`;
            }
            html += `</div>`;
        }
        
        cell.innerHTML = html;
        grid.appendChild(cell);
    }
}

function prevMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
}

// === Modals ===
function openGoalModal() {
    document.getElementById('goal-modal').classList.add('active');
    if (goalInfo) {
        document.getElementById('goal-input-title').value = goalInfo.title;
        document.getElementById('goal-input-date').value = goalInfo.endDate;
    }
}

function closeGoalModal() {
    document.getElementById('goal-modal').classList.remove('active');
}

function openDayModal(dateStr) {
    selectedDateStr = dateStr;
    const parts = dateStr.split('-');
    document.getElementById('modal-date-title').innerText = `${parts[0]}. ${parts[1]}. ${parts[2]}`;
    
    // Goal Section
    const goalSection = document.getElementById('modal-goal-section');
    if (goalInfo) {
        const selectedDate = new Date(dateStr);
        selectedDate.setHours(0,0,0,0);
        
        const goalStart = new Date(goalInfo.startDate);
        goalStart.setHours(0,0,0,0);
        
        const goalEnd = new Date(goalInfo.endDate);
        goalEnd.setHours(0,0,0,0);
        
        // 목표 기간 내의 날짜만 체크 가능
        if (selectedDate >= goalStart && selectedDate <= goalEnd) {
            goalSection.style.display = 'block';
            document.getElementById('modal-goal-text').innerText = goalInfo.title;
            document.getElementById('goal-checkbox').checked = !!habitChecks[dateStr];
        } else {
            goalSection.style.display = 'none';
        }
    } else {
        goalSection.style.display = 'none';
    }
    
    renderEventList();
    document.getElementById('day-modal').classList.add('active');
}

function closeDayModal() {
    document.getElementById('day-modal').classList.remove('active');
    document.getElementById('new-event-title').value = '';
    renderCalendar(); // Refresh main view to show dots/stamps
    renderGoalInfo(); // Refresh progress
}

// === Goal Tracker ===
function saveGoal() {
    const title = document.getElementById('goal-input-title').value;
    const endDate = document.getElementById('goal-input-date').value;
    
    if (!title || !endDate) return alert('목표 이름과 날짜를 입력하세요.');
    
    goalInfo = { title, endDate, startDate: new Date().toISOString().split('T')[0] };
    localStorage.setItem('calendar_goal', JSON.stringify(goalInfo));
    
    closeGoalModal();
    renderGoalInfo();
}

function deleteGoal() {
    if(!confirm('정말 목표를 삭제하시겠습니까? 관련 달성 기록도 의미를 잃게 됩니다.')) return;
    goalInfo = null;
    habitChecks = {};
    localStorage.removeItem('calendar_goal');
    localStorage.removeItem('calendar_checks');
    
    closeGoalModal();
    renderGoalInfo();
    renderCalendar();
}

function renderGoalInfo() {
    const infoDiv = document.getElementById('goal-info');
    const noInfoDiv = document.getElementById('no-goal-info');
    
    if (!goalInfo) {
        infoDiv.style.display = 'none';
        noInfoDiv.style.display = 'block';
        return;
    }
    
    infoDiv.style.display = 'block';
    noInfoDiv.style.display = 'none';
    
    document.getElementById('goal-title-display').innerText = goalInfo.title;
    
    const today = new Date();
    today.setHours(0,0,0,0);
    const end = new Date(goalInfo.endDate);
    end.setHours(0,0,0,0);
    
    const diffTime = end.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    let ddayText = diffDays > 0 ? `D-${diffDays}` : (diffDays === 0 ? `D-Day` : `D+${Math.abs(diffDays)}`);
    
    const checkCount = Object.keys(habitChecks).length;
    document.getElementById('goal-status-display').innerText = `${ddayText} | 총 ${checkCount}일 달성! 🏅`;
    
    // Progress bar mock logic (just visuals based on arbitrary max 100 days for fun, or fixed percentage)
    // Here we just let the bar grow by 1% per check up to 100%
    let progress = Math.min(checkCount * 2, 100); 
    document.getElementById('goal-progress-bar').style.width = progress + '%';
}

function toggleGoalCheck() {
    const isChecked = document.getElementById('goal-checkbox').checked;
    if (isChecked) {
        habitChecks[selectedDateStr] = true;
    } else {
        delete habitChecks[selectedDateStr];
    }
    localStorage.setItem('calendar_checks', JSON.stringify(habitChecks));
}

// === Events ===
function renderEventList() {
    const ul = document.getElementById('event-list');
    ul.innerHTML = '';
    
    const dayEvents = events[selectedDateStr] || [];
    
    if (dayEvents.length === 0) {
        ul.innerHTML = '<li style="color:#999; text-align:center; padding:10px;">일정이 없습니다.</li>';
        return;
    }
    
    dayEvents.forEach((ev, idx) => {
        const li = document.createElement('li');
        li.className = 'event-item';
        li.innerHTML = `
            <span>${ev.title}</span>
            <button class="delete-event" onclick="deleteEvent(${idx})">×</button>
        `;
        ul.appendChild(li);
    });
}

function addEvent() {
    const title = document.getElementById('new-event-title').value.trim();
    if (!title) return;
    
    if (!events[selectedDateStr]) {
        events[selectedDateStr] = [];
    }
    events[selectedDateStr].push({ title });
    localStorage.setItem('calendar_events', JSON.stringify(events));
    
    document.getElementById('new-event-title').value = '';
    renderEventList();
}

function deleteEvent(index) {
    events[selectedDateStr].splice(index, 1);
    if (events[selectedDateStr].length === 0) {
        delete events[selectedDateStr];
    }
    localStorage.setItem('calendar_events', JSON.stringify(events));
    renderEventList();
}

// === Lunar/Solar ===
function convertLunar() {
    const type = document.getElementById('lunar-type').value;
    const dateStr = document.getElementById('lunar-date-input').value;
    const resultBox = document.getElementById('lunar-result');
    
    if(!dateStr) return alert('날짜를 선택하세요.');
    
    if (typeof Lunar === 'undefined' || typeof Solar === 'undefined') {
        resultBox.innerText = '달력 라이브러리 로딩 실패';
        return;
    }
    
    try {
        const parts = dateStr.split('-');
        const y = parseInt(parts[0]);
        const m = parseInt(parts[1]);
        const d = parseInt(parts[2]);
        
        if (type === 'solar-to-lunar') {
            const solar = Solar.fromYmd(y, m, d);
            const lunar = solar.getLunar();
            resultBox.innerHTML = `음력: ${lunar.getYear()}년 ${lunar.getMonth()}월 ${lunar.getDay()}일<br><span style="font-size:0.9rem; color:#666;">(${lunar.getYearInGanZhi()}년 ${lunar.getMonthInGanZhi()}월 ${lunar.getDayInGanZhi()}일)</span>`;
        } else {
            const lunar = Lunar.fromYmd(y, m, d);
            const solar = lunar.getSolar();
            resultBox.innerHTML = `양력: ${solar.getYear()}년 ${solar.getMonth()}월 ${solar.getDay()}일`;
        }
    } catch(e) {
        resultBox.innerText = '변환 오류 발생';
    }
}
