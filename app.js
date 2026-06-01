// 상태
let currentLang = 'en';
let completedDays = { en: [], ja: [], zh: [] };
let currentDay = null;
let quizMode = '';
let quizQuestions = [];
let currentQuizIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 15;

// DOM 요소
const ui = {
    screenHome: document.getElementById('screen-home'),
    screenStudy: document.getElementById('screen-study'),
    screenQuiz: document.getElementById('screen-quiz'),
    screenResult: document.getElementById('screen-result'),
    btnGoHome: document.getElementById('btn-go-home'),
    
    // Home
    dayGrid: document.getElementById('day-grid'),
    btnFinalTest: document.getElementById('btn-final-test'),
    
    // Study
    studyTitle: document.getElementById('study-title'),
    studyList: document.getElementById('study-list'),
    btnStartDaily: document.getElementById('btn-start-daily'),
    
    // Quiz
    questionWord: document.getElementById('question-word'),
    optionsContainer: document.getElementById('options-container'),
    questionCount: document.getElementById('question-count'),
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progress-bar'),
    
    // Result
    resultTitle: document.getElementById('result-title'),
    finalScore: document.getElementById('final-score'),
    resultMessage: document.getElementById('result-message'),
    btnRestartQuiz: document.getElementById('btn-restart-quiz'),
    btnResultHome: document.getElementById('btn-result-home')
};

// 언어 변경
window.changeLanguage = function(lang) {
    currentLang = lang;
    
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if(event && event.target) {
        event.target.classList.add('active');
    }
    
    document.getElementById('blog-link').href = `dictionary-${lang}.html`;
    showScreen('home');
}

// 초기화
function init() {
    loadProgress();
    renderDayGrid();
    setupEventListeners();
}

function setupEventListeners() {
    ui.btnGoHome.addEventListener('click', () => showScreen('home'));
    ui.btnResultHome.addEventListener('click', () => showScreen('home'));
    
    ui.btnStartDaily.addEventListener('click', () => startQuiz('daily'));
    ui.btnFinalTest.addEventListener('click', () => startQuiz('final'));
    
    ui.btnRestartQuiz.addEventListener('click', () => startQuiz(quizMode));
}

function showScreen(screenId) {
    [ui.screenHome, ui.screenStudy, ui.screenQuiz, ui.screenResult].forEach(s => s.classList.remove('active'));
    
    if(screenId === 'home') {
        ui.screenHome.classList.add('active');
        ui.btnGoHome.style.display = 'none';
        renderDayGrid();
    } else if(screenId === 'study') {
        ui.screenStudy.classList.add('active');
        ui.btnGoHome.style.display = 'block';
    } else if(screenId === 'quiz') {
        ui.screenQuiz.classList.add('active');
        ui.btnGoHome.style.display = 'none';
    } else if(screenId === 'result') {
        ui.screenResult.classList.add('active');
        ui.btnGoHome.style.display = 'none';
    }
}

// 진행도 로드
function loadProgress() {
    const saved = localStorage.getItem('vocabChallengeProgressV2');
    if (saved) {
        completedDays = JSON.parse(saved);
    } else {
        const oldSaved = localStorage.getItem('vocabChallengeProgress');
        if(oldSaved) {
            completedDays.en = JSON.parse(oldSaved);
        }
    }
}

function saveProgress() {
    localStorage.setItem('vocabChallengeProgressV2', JSON.stringify(completedDays));
}

// Day 카드 렌더링
function renderDayGrid() {
    ui.dayGrid.innerHTML = '';
    
    const progress = completedDays[currentLang];
    const isSeason2Unlocked = [1,2,3,4,5,6,7].every(d => progress.includes(d));
    const totalDays = isSeason2Unlocked ? 14 : 7;
    
    for (let i = 1; i <= totalDays; i++) {
        const isCompleted = progress.includes(i);
        const card = document.createElement('div');
        
        let cardClass = 'day-card';
        if (isCompleted) cardClass += ' completed';
        if (i > 7) cardClass += ' season-2-card';
        
        card.className = cardClass;
        card.innerHTML = `
            <h3>Day ${i}</h3>
            <p>${isCompleted ? '학습 완료!' : (i > 7 ? '시즌 2 단어' : '단어 10개')}</p>
        `;
        card.addEventListener('click', () => openStudy(i));
        ui.dayGrid.appendChild(card);
    }
    
    const badgeId = 'season2-badge';
    const existingBadge = document.getElementById(badgeId);
    const existingCertBtn = document.getElementById('btn-view-cert');
    
    if (isSeason2Unlocked && !existingBadge) {
        const badge = document.createElement('div');
        badge.id = badgeId;
        badge.className = 'season2-unlock-badge';
        badge.innerHTML = '🎉 축하합니다! 시즌 2 잠금 해제! 🎉';
        ui.dayGrid.parentNode.insertBefore(badge, ui.dayGrid);
        
        const certBtn = document.createElement('button');
        certBtn.id = 'btn-view-cert';
        certBtn.className = 'btn-cute btn-pink';
        certBtn.style.marginTop = '15px';
        certBtn.style.marginBottom = '20px';
        certBtn.style.width = '100%';
        certBtn.innerHTML = '🏅 내 7일 마스터 수료증 보기';
        certBtn.onclick = openCertificate;
        ui.dayGrid.parentNode.insertBefore(certBtn, ui.dayGrid);
        
    } else if (!isSeason2Unlocked) {
        if (existingBadge) existingBadge.remove();
        if (existingCertBtn) existingCertBtn.remove();
    }
}

// 단어 학습창 열기
function openStudy(day) {
    currentDay = day;
    ui.studyTitle.textContent = `Day ${day} 학습하기 📖`;
    
    const vocabData = vocabDB[currentLang];
    const wordsForDay = vocabData.filter(item => item.day === day);
    ui.studyList.innerHTML = '';
    
    wordsForDay.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="study-word">${item.word}</span>
            <span class="study-meaning">${item.meaning}</span>
        `;
        ui.studyList.appendChild(li);
    });
    
    showScreen('study');
}

// 유틸리티
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// 퀴즈 시작
function startQuiz(mode) {
    quizMode = mode;
    quizQuestions = [];
    
    const vocabData = vocabDB[currentLang];
    let targetWords = [];
    
    if (mode === 'daily') {
        targetWords = shuffleArray(vocabData.filter(item => item.day === currentDay));
    } else if (mode === 'final') {
        targetWords = shuffleArray(vocabData).slice(0, 20);
    }
    
    targetWords.forEach(wordItem => {
        const otherWords = vocabData.filter(item => item.word !== wordItem.word);
        const randomWrongs = shuffleArray(otherWords).slice(0, 3);
        
        const options = [wordItem, ...randomWrongs];
        const shuffledOptions = shuffleArray(options);
        
        quizQuestions.push({
            word: wordItem.word,
            correctMeaning: wordItem.meaning,
            options: shuffledOptions.map(opt => opt.meaning)
        });
    });
    
    currentQuizIndex = 0;
    score = 0;
    showScreen('quiz');
    loadQuestion();
}

function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 15;
    updateTimerUI();
    
    const question = quizQuestions[currentQuizIndex];
    
    ui.questionCount.textContent = `문제 ${currentQuizIndex + 1} / ${quizQuestions.length}`;
    ui.progressBar.style.width = `${(currentQuizIndex / quizQuestions.length) * 100}%`;
    ui.questionWord.textContent = question.word;
    
    ui.optionsContainer.innerHTML = '';
    
    question.options.forEach(optText => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.textContent = optText;
        btn.addEventListener('click', () => handleAnswer(optText, btn));
        ui.optionsContainer.appendChild(btn);
    });
    
    startTimer();
}

function handleAnswer(selectedText, btnElement) {
    clearInterval(timerInterval);
    const question = quizQuestions[currentQuizIndex];
    const buttons = ui.optionsContainer.querySelectorAll('.option-btn');
    
    buttons.forEach(b => b.style.pointerEvents = 'none');
    
    const isCorrect = selectedText === question.correctMeaning;
    
    if (isCorrect) {
        btnElement.classList.add('correct');
        score += 10;
    } else {
        btnElement.classList.add('wrong');
        buttons.forEach(b => {
            if(b.textContent === question.correctMeaning) b.classList.add('correct');
        });
    }
    
    setTimeout(() => {
        currentQuizIndex++;
        if (currentQuizIndex < quizQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1200);
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerUI();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            const buttons = ui.optionsContainer.querySelectorAll('.option-btn');
            buttons.forEach(b => b.style.pointerEvents = 'none');
            
            const question = quizQuestions[currentQuizIndex];
            buttons.forEach(b => {
                if(b.textContent === question.correctMeaning) b.classList.add('correct');
            });
            
            setTimeout(() => {
                currentQuizIndex++;
                if (currentQuizIndex < quizQuestions.length) {
                    loadQuestion();
                } else {
                    showResult();
                }
            }, 1200);
        }
    }, 1000);
}

function updateTimerUI() {
    ui.timer.textContent = timeLeft;
    if(timeLeft <= 5) {
        ui.timer.parentElement.style.background = 'var(--pastel-red)';
        ui.timer.parentElement.style.boxShadow = '0 3px 0 var(--pastel-red-shadow)';
    } else {
        ui.timer.parentElement.style.background = 'var(--pastel-pink)';
        ui.timer.parentElement.style.boxShadow = '0 3px 0 var(--pastel-pink-shadow)';
    }
}

function showResult() {
    ui.progressBar.style.width = '100%';
    setTimeout(() => {
        showScreen('result');
        const maxScore = quizQuestions.length * 10;
        
        if (quizMode === 'daily') {
            ui.resultTitle.textContent = `Day ${currentDay} 완료! 🎉`;
            const progress = completedDays[currentLang];
            if (!progress.includes(currentDay)) {
                progress.push(currentDay);
                saveProgress();
                
                const isSeason2Unlocked = [1,2,3,4,5,6,7].every(d => progress.includes(d));
                if(isSeason2Unlocked && currentDay <= 7) {
                    ui.resultMessage.innerHTML = "최고예요! 완벽하게 외우셨네요! 🌟<br><br><span style='color: var(--pastel-purple); font-weight: bold; font-size: 20px;'>🎉 짝짝짝! 심화 [시즌 2]가 잠금 해제되었습니다! 메인에서 확인하세요! 🎉</span>";
                    setTimeout(() => {
                        openCertificate();
                    }, 1000);
                }
            }
        } else {
            ui.resultTitle.textContent = `최종 주간 테스트 결과 🏆`;
        }
        
        ui.finalScore.textContent = `${score}점`;
        
        const percent = score / maxScore;
        if (percent === 1) {
            ui.resultMessage.textContent = "최고예요! 완벽하게 외우셨네요! 🌟";
        } else if (percent >= 0.7) {
            ui.resultMessage.textContent = "참 잘했어요! 거의 다 맞췄네요 😊";
        } else {
            ui.resultMessage.textContent = "괜찮아요! 반복 학습이 중요합니다. 💪";
        }
    }, 500);
}

// 앱 시작
init();

// Certificate Modal Logic
function openCertificate() {
    document.getElementById('certificate-modal').classList.add('active');
}
function closeCertificate() {
    document.getElementById('certificate-modal').classList.remove('active');
}
