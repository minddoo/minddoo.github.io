// SVGs
const cassetteSVG = `<svg width="32" height="20" viewBox="0 0 100 65" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(2px 2px 0px #000);"><rect x="0" y="0" width="100" height="65" rx="8" fill="#1b4fb3" stroke="#111" stroke-width="3"/><rect x="15" y="15" width="70" height="35" rx="4" fill="#a1c4fd" stroke="#111" stroke-width="2"/><circle cx="30" cy="32.5" r="10" fill="#ff9ff3" stroke="#111" stroke-width="2"/><circle cx="70" cy="32.5" r="10" fill="#ff9ff3" stroke="#111" stroke-width="2"/><circle cx="30" cy="32.5" r="4" fill="#111"/><circle cx="70" cy="32.5" r="4" fill="#111"/><path d="M 25 65 L 35 55 L 65 55 L 75 65 Z" fill="#0f2f70" stroke="#111" stroke-width="2"/></svg>`;

const gachaMachineSVG = `<svg width="30" height="40" viewBox="0 0 100 130" xmlns="http://www.w3.org/2000/svg" style="filter: drop-shadow(2px 2px 0px #000);"><rect x="20" y="60" width="60" height="60" rx="5" fill="#4facfe" stroke="#111" stroke-width="4"/><rect x="35" y="75" width="30" height="30" rx="3" fill="#ecf0f1" stroke="#111" stroke-width="3"/><rect x="45" y="80" width="10" height="15" rx="2" fill="#bdc3c7" stroke="#111" stroke-width="2"/><rect x="40" y="105" width="20" height="15" fill="#bdc3c7" stroke="#111" stroke-width="3"/><circle cx="50" cy="35" r="30" fill="rgba(255,255,255,0.9)" stroke="#111" stroke-width="4"/><circle cx="35" cy="45" r="7" fill="#ff9ff3" stroke="#111" stroke-width="1"/><circle cx="50" cy="50" r="7" fill="#feca57" stroke="#111" stroke-width="1"/><circle cx="65" cy="45" r="7" fill="#54a0ff" stroke="#111" stroke-width="1"/><circle cx="45" cy="35" r="7" fill="#55efc4" stroke="#111" stroke-width="1"/><circle cx="55" cy="25" r="7" fill="#ff9ff3" stroke="#111" stroke-width="1"/><path d="M 30 20 Q 40 10 50 10" fill="none" stroke="#fff" stroke-width="4" stroke-linecap="round"/><rect x="40" y="2" width="20" height="5" rx="2" fill="#4facfe" stroke="#111" stroke-width="3"/></svg>`;

// State
let selectedDateStr = null;

// LocalStorage data
let events = JSON.parse(localStorage.getItem('wanna_calendar_events')) || {};
let goalInfo = JSON.parse(localStorage.getItem('wanna_calendar_goal')) || null;
let habitChecks = JSON.parse(localStorage.getItem('wanna_calendar_checks')) || {};

// Wanna One Default Events (MM-DD)
const defaultEvents = {
    '01-29': ['🎂 대휘 생일'],
    '03-08': ['🎂 지성 생일'],
    '03-22': ['🎂 성운 생일'],
    '05-10': ['🎂 진영 생일'],
    '05-27': ['🎂 재환 생일'],
    '05-29': ['🎂 지훈 생일'],
    '08-07': ['💖 워너원 데뷔일!'],
    '08-09': ['🎂 민현 생일'],
    '08-25': ['🎂 성우 생일'],
    '09-23': ['🎂 관린 생일'],
    '11-02': ['🎂 우진 생일'],
    '12-10': ['🎂 다니엘 생일']
};

document.addEventListener('DOMContentLoaded', () => {
    renderCalendar();
    renderGoalInfo();
});

function getCombinedEvents(dateStr) {
    const mmdd = dateStr.substring(5); // gets "MM-DD"
    const userEvents = events[dateStr] || [];
    const defaults = defaultEvents[mmdd] || [];
    // Convert defaults to object format matching user events
    const mappedDefaults = defaults.map(title => ({ title, isDefault: true }));
    return [...mappedDefaults, ...userEvents];
}

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
        
        // Habit Check Stamp (Gacha Capsule)
        if (habitChecks[dateStr]) {
            html += `<div class="habit-stamp">${gachaMachineSVG}</div>`;
        }
        
        // Event Tape highlight
        const combined = getCombinedEvents(dateStr);
        if (combined.length > 0) {
            html += `<div class="event-cloud">${cassetteSVG}</div>`;
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
        document.getElementById('goal-input-rewards').value = (goalInfo.rewards || []).join('\n');
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
    renderCalendar(); 
    renderGoalInfo(); 
}

// === Goal Tracker ===
function saveGoal() {
    const title = document.getElementById('goal-input-title').value;
    const endDate = document.getElementById('goal-input-date').value;
    const rewardsRaw = document.getElementById('goal-input-rewards').value || '';
    const rewards = rewardsRaw.split('\n').map(r => r.trim()).filter(r => r);
    
    if (!title || !endDate) return alert('약속 이름과 디데이를 입력해주세요 💖');
    
    goalInfo = { title, endDate, startDate: new Date().toISOString().split('T')[0], rewards };
    localStorage.setItem('wanna_calendar_goal', JSON.stringify(goalInfo));
    
    closeGoalModal();
    renderGoalInfo();
}

function deleteGoal() {
    if(!confirm('정말 약속을 삭제할까요?')) return;
    goalInfo = null;
    habitChecks = {};
    localStorage.removeItem('wanna_calendar_goal');
    localStorage.removeItem('wanna_calendar_checks');
    
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
    document.getElementById('goal-status-display').innerText = `${ddayText} | 총 ${checkCount}일 달성! 🔮`;
    
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
    localStorage.setItem('wanna_calendar_checks', JSON.stringify(habitChecks));
}

// === Events ===
function renderEventList() {
    const ul = document.getElementById('event-list');
    ul.innerHTML = '';
    
    const combined = getCombinedEvents(selectedDateStr);
    
    if (combined.length === 0) {
        ul.innerHTML = '<li style="color:#999; text-align:center; padding:10px;">저장된 스케줄이 없어요.</li>';
        return;
    }
    
    combined.forEach((ev, idx) => {
        const li = document.createElement('li');
        li.className = 'event-item';
        
        if (ev.isDefault) {
            li.innerHTML = `
                <span style="font-weight:bold; color:var(--primary);">${ev.title}</span>
                <span style="font-size:0.8rem; color:#aaa;">(기본)</span>
            `;
        } else {
            // idx needs to be offset by default events length to delete the correct one from user events array
            const defaultCount = combined.filter(c => c.isDefault).length;
            const userEventIndex = idx - defaultCount;
            
            li.innerHTML = `
                <span>${ev.title}</span>
                <button class="delete-event" onclick="deleteEvent(${userEventIndex})">❌</button>
            `;
        }
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
    localStorage.setItem('wanna_calendar_events', JSON.stringify(events));
    
    document.getElementById('new-event-title').value = '';
    renderEventList();
}

function deleteEvent(index) {
    if (index < 0 || !events[selectedDateStr]) return;
    
    events[selectedDateStr].splice(index, 1);
    if (events[selectedDateStr].length === 0) {
        delete events[selectedDateStr];
    }
    localStorage.setItem('wanna_calendar_events', JSON.stringify(events));
    renderEventList();
}

// === Lunar/Solar ===
function convertLunar() {
    const type = document.getElementById('lunar-type').value;
    const dateStr = document.getElementById('lunar-date-input').value;
    const resultBox = document.getElementById('lunar-result');
    
    if(!dateStr) return alert('날짜를 픽해주세요!');
    
    if (typeof Lunar === 'undefined' || typeof Solar === 'undefined') {
        resultBox.innerText = '달력 라이브러리 로딩 실패 😭';
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
        resultBox.innerText = '앗, 오류가 났어요! 😭';
    }
}

// === Gacha ===
function playGacha() {
    document.getElementById('gacha-modal').classList.add('active');
    document.getElementById('gacha-item').innerHTML = '<div style="font-size: 3rem;">🎁</div>';
    document.getElementById('gacha-result-text').innerText = "버튼을 눌러 뽑기를 시작하세요!";
    const btn = document.getElementById('gacha-action-btn');
    btn.style.display = 'block';
    btn.innerText = "뽑기 시작!";
    btn.onclick = startGachaRoll;
}

function closeGachaModal() {
    document.getElementById('gacha-modal').classList.remove('active');
}

function startGachaRoll() {
    const rewards = (goalInfo && goalInfo.rewards && goalInfo.rewards.length > 0) 
        ? goalInfo.rewards 
        : ['맛있는 치킨 시켜먹기 🍗', '덕질용 굿즈 하나 사기 🛍️', '하루 종일 푹 쉬기 🛌'];
    
    let count = 0;
    const itemEl = document.getElementById('gacha-item');
    const btn = document.getElementById('gacha-action-btn');
    const resultText = document.getElementById('gacha-result-text');
    
    btn.style.display = 'none';
    resultText.innerText = "으랏가챠 캡슐 뽑는 중... 🌀";
    
    const capsules = ['🔴', '🔵', '🟡', '🟢', '🟣', '🔮'];
    
    const interval = setInterval(() => {
        itemEl.innerHTML = `<div style="font-size: 4rem;">${capsules[count % capsules.length]}</div>`;
        count++;
        if(count > 25) {
            clearInterval(interval);
            const finalReward = rewards[Math.floor(Math.random() * rewards.length)];
            itemEl.innerHTML = `<div style="font-size: 2.5rem; transform: scale(1.1);">🎉</div><div style="color:var(--pop-pink); font-size: 1.1rem; margin-top:5px; text-align:center;">${finalReward}</div>`;
            resultText.innerText = "당첨을 축하합니다!! 꺄아아앙 💖";
            
            btn.innerText = "확인";
            btn.onclick = closeGachaModal;
            btn.style.display = 'block';
        }
    }, 100);
}
