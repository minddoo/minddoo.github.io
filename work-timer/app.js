// Elements
const setupModal = document.getElementById('setup-modal');
const dashboard = document.getElementById('dashboard');
const inputSalary = document.getElementById('input-salary');
const inputStart = document.getElementById('input-start');
const inputEnd = document.getElementById('input-end');

const timeLeftDisplay = document.getElementById('time-left');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const moneyEarnedDisplay = document.getElementById('money-earned');
const moneyRateDisplay = document.getElementById('money-rate');

// Lupin Elements
const lupinIdle = document.getElementById('lupin-idle');
const lupinActive = document.getElementById('lupin-active');
const lupinTaskName = document.getElementById('lupin-task-name');
const lupinTimerDisplay = document.getElementById('lupin-timer');
const resultModal = document.getElementById('result-modal');
const resultMsg = document.getElementById('result-msg');

// State
let userConfig = {
    salary: 0, // monthly in 10,000 KRW (만원)
    startHour: 9,
    startMin: 0,
    endHour: 18,
    endMin: 0
};

let moneyPerSecond = 0;
let mainInterval;
let lupinInterval;
let lupinStartTime = null;
let currentLupinTask = '';

// Check Local Storage
function checkSetup() {
    const saved = localStorage.getItem('kaltoe_config');
    if (saved) {
        userConfig = JSON.parse(saved);
        // Fill inputs
        inputSalary.value = userConfig.salary;
        inputStart.value = `${String(userConfig.startHour).padStart(2,'0')}:${String(userConfig.startMin).padStart(2,'0')}`;
        inputEnd.value = `${String(userConfig.endHour).padStart(2,'0')}:${String(userConfig.endMin).padStart(2,'0')}`;
        
        setupModal.style.display = 'none';
        dashboard.style.display = 'block';
        startEngine();
    } else {
        setupModal.style.display = 'flex';
        dashboard.style.display = 'none';
    }
}

// Open Setup
window.openSetup = function() {
    setupModal.style.display = 'flex';
}

// Save Setup
window.saveSetup = function() {
    const salary = parseInt(inputSalary.value);
    const startParts = inputStart.value.split(':');
    const endParts = inputEnd.value.split(':');
    
    if(!salary || startParts.length !== 2 || endParts.length !== 2) {
        alert("모든 정보를 정확히 입력해주세요.");
        return;
    }
    
    userConfig.salary = salary;
    userConfig.startHour = parseInt(startParts[0]);
    userConfig.startMin = parseInt(startParts[1]);
    userConfig.endHour = parseInt(endParts[0]);
    userConfig.endMin = parseInt(endParts[1]);
    
    localStorage.setItem('kaltoe_config', JSON.stringify(userConfig));
    
    setupModal.style.display = 'none';
    dashboard.style.display = 'block';
    
    startEngine();
}

// Engine
function startEngine() {
    if(mainInterval) clearInterval(mainInterval);
    
    // Calculate money per second
    // Assumption: 20 working days per month. 
    // Salary = (salary in 만원) * 10,000
    const totalSalary = userConfig.salary * 10000;
    const dailySalary = totalSalary / 20; // Avg 20 work days
    
    const startTotalMins = userConfig.startHour * 60 + userConfig.startMin;
    const endTotalMins = userConfig.endHour * 60 + userConfig.endMin;
    let workDurationMins = endTotalMins - startTotalMins;
    if(workDurationMins < 0) workDurationMins += 24 * 60; // night shift support
    
    const totalSeconds = workDurationMins * 60;
    moneyPerSecond = dailySalary / totalSeconds;
    
    moneyRateDisplay.innerText = `${moneyPerSecond.toFixed(1)}원/초`;
    
    updateDashboard();
    mainInterval = setInterval(updateDashboard, 1000);
}

function updateDashboard() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMin = now.getMinutes();
    const currentSec = now.getSeconds();
    
    const startTotalMins = userConfig.startHour * 60 + userConfig.startMin;
    const endTotalMins = userConfig.endHour * 60 + userConfig.endMin;
    const nowTotalMins = currentHour * 60 + currentMin;
    
    const totalWorkSecs = (endTotalMins - startTotalMins) * 60;
    let elapsedSecs = 0;
    
    if (nowTotalMins >= startTotalMins && nowTotalMins < endTotalMins) {
        // Working
        elapsedSecs = ((nowTotalMins - startTotalMins) * 60) + currentSec;
        
        let secsLeft = totalWorkSecs - elapsedSecs;
        let h = Math.floor(secsLeft / 3600);
        let m = Math.floor((secsLeft % 3600) / 60);
        let s = secsLeft % 60;
        timeLeftDisplay.innerText = `${String(h).padStart(2,'0')}:${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
        
        const currentMoney = elapsedSecs * moneyPerSecond;
        // Format with commas, up to 0 decimal places but we can show climbing effect
        moneyEarnedDisplay.innerText = Math.floor(currentMoney).toLocaleString();
        
        const percent = (elapsedSecs / totalWorkSecs) * 100;
        progressBar.style.width = `${percent}%`;
        progressText.innerText = `${percent.toFixed(4)}%`;
        
    } else if (nowTotalMins >= endTotalMins || (endTotalMins < startTotalMins && nowTotalMins < startTotalMins)) {
        // After work
        timeLeftDisplay.innerText = "00:00:00";
        moneyEarnedDisplay.innerText = Math.floor(totalWorkSecs * moneyPerSecond).toLocaleString();
        progressBar.style.width = `100%`;
        progressText.innerText = "100.00% (OFFLINE)";
        moneyRateDisplay.innerText = "퇴근 완료! 수고하셨습니다.";
    } else {
        // Before work
        timeLeftDisplay.innerText = "WAITING";
        moneyEarnedDisplay.innerText = "0";
        progressBar.style.width = `0%`;
        progressText.innerText = "0.00% (STANDBY)";
        moneyRateDisplay.innerText = "출근 대기 중...";
    }
}

// Lupin Mode
window.startLupin = function(taskName) {
    currentLupinTask = taskName;
    lupinStartTime = new Date();
    
    lupinTaskName.innerText = taskName + ' 중...';
    lupinIdle.style.display = 'none';
    lupinActive.style.display = 'block';
    
    updateLupinTimer();
    lupinInterval = setInterval(updateLupinTimer, 1000);
}

function updateLupinTimer() {
    const now = new Date();
    const diffSecs = Math.floor((now - lupinStartTime) / 1000);
    const m = Math.floor(diffSecs / 60);
    const s = diffSecs % 60;
    lupinTimerDisplay.innerText = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`;
}

window.stopLupin = function() {
    clearInterval(lupinInterval);
    const now = new Date();
    const diffSecs = Math.floor((now - lupinStartTime) / 1000);
    const earned = Math.floor(diffSecs * moneyPerSecond);
    
    lupinIdle.style.display = 'flex';
    lupinActive.style.display = 'none';
    
    // Show Result Modal
    resultMsg.innerHTML = `${currentLupinTask}을(를) 하는 동안 회삿돈<br><strong>${earned.toLocaleString()}원</strong>을 벌었습니다!`;
    resultModal.style.display = 'flex';
}

window.closeResult = function() {
    resultModal.style.display = 'none';
}

// Init
checkSetup();
