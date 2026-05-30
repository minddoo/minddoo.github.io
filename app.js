// 70개의 필수 영단어 데이터 (Day 1 ~ Day 7)
const vocabData = [
    // Day 1
    { day: 1, word: "apple", meaning: "사과" }, { day: 1, word: "banana", meaning: "바나나" },
    { day: 1, word: "water", meaning: "물" }, { day: 1, word: "bread", meaning: "빵" },
    { day: 1, word: "milk", meaning: "우유" }, { day: 1, word: "house", meaning: "집" },
    { day: 1, word: "school", meaning: "학교" }, { day: 1, word: "book", meaning: "책" },
    { day: 1, word: "desk", meaning: "책상" }, { day: 1, word: "chair", meaning: "의자" },
    // Day 2
    { day: 2, word: "car", meaning: "자동차" }, { day: 2, word: "bus", meaning: "버스" },
    { day: 2, word: "train", meaning: "기차" }, { day: 2, word: "plane", meaning: "비행기" },
    { day: 2, word: "ship", meaning: "배" }, { day: 2, word: "tree", meaning: "나무" },
    { day: 2, word: "flower", meaning: "꽃" }, { day: 2, word: "river", meaning: "강" },
    { day: 2, word: "mountain", meaning: "산" }, { day: 2, word: "sky", meaning: "하늘" },
    // Day 3
    { day: 3, word: "dog", meaning: "개" }, { day: 3, word: "cat", meaning: "고양이" },
    { day: 3, word: "bird", meaning: "새" }, { day: 3, word: "fish", meaning: "물고기" },
    { day: 3, word: "horse", meaning: "말" }, { day: 3, word: "sun", meaning: "태양" },
    { day: 3, word: "moon", meaning: "달" }, { day: 3, word: "star", meaning: "별" },
    { day: 3, word: "cloud", meaning: "구름" }, { day: 3, word: "rain", meaning: "비" },
    // Day 4
    { day: 4, word: "friend", meaning: "친구" }, { day: 4, word: "family", meaning: "가족" },
    { day: 4, word: "father", meaning: "아버지" }, { day: 4, word: "mother", meaning: "어머니" },
    { day: 4, word: "brother", meaning: "형제" }, { day: 4, word: "sister", meaning: "자매" },
    { day: 4, word: "baby", meaning: "아기" }, { day: 4, word: "doctor", meaning: "의사" },
    { day: 4, word: "teacher", meaning: "선생님" }, { day: 4, word: "student", meaning: "학생" },
    // Day 5
    { day: 5, word: "time", meaning: "시간" }, { day: 5, word: "day", meaning: "하루" },
    { day: 5, word: "week", meaning: "주" }, { day: 5, word: "month", meaning: "월" },
    { day: 5, word: "year", meaning: "년" }, { day: 5, word: "morning", meaning: "아침" },
    { day: 5, word: "afternoon", meaning: "오후" }, { day: 5, word: "evening", meaning: "저녁" },
    { day: 5, word: "night", meaning: "밤" }, { day: 5, word: "today", meaning: "오늘" },
    // Day 6
    { day: 6, word: "head", meaning: "머리" }, { day: 6, word: "eye", meaning: "눈" },
    { day: 6, word: "ear", meaning: "귀" }, { day: 6, word: "nose", meaning: "코" },
    { day: 6, word: "mouth", meaning: "입" }, { day: 6, word: "hand", meaning: "손" },
    { day: 6, word: "foot", meaning: "발" }, { day: 6, word: "leg", meaning: "다리" },
    { day: 6, word: "arm", meaning: "팔" }, { day: 6, word: "body", meaning: "몸" },
    // Day 7
    { day: 7, word: "happy", meaning: "행복한" }, { day: 7, word: "sad", meaning: "슬픈" },
    { day: 7, word: "angry", meaning: "화난" }, { day: 7, word: "tired", meaning: "피곤한" },
    { day: 7, word: "hungry", meaning: "배고픈" }, { day: 7, word: "full", meaning: "배부른" },
    { day: 7, word: "hot", meaning: "더운" }, { day: 7, word: "cold", meaning: "추운" },
    { day: 7, word: "good", meaning: "좋은" }, { day: 7, word: "bad", meaning: "나쁜" }
];

// 상태
let completedDays = []; // 예: [1, 2]
let currentDay = null; // 현재 선택된 Day
let quizMode = ''; // 'daily' or 'final'
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
        renderDayGrid(); // 진척도 갱신
    } else if(screenId === 'study') {
        ui.screenStudy.classList.add('active');
        ui.btnGoHome.style.display = 'block';
    } else if(screenId === 'quiz') {
        ui.screenQuiz.classList.add('active');
        ui.btnGoHome.style.display = 'none'; // 퀴즈 중 이탈 금지
    } else if(screenId === 'result') {
        ui.screenResult.classList.add('active');
        ui.btnGoHome.style.display = 'none';
    }
}

// 진행도 로드
function loadProgress() {
    const saved = localStorage.getItem('vocabChallengeProgress');
    if (saved) {
        completedDays = JSON.parse(saved);
    }
}

function saveProgress() {
    localStorage.setItem('vocabChallengeProgress', JSON.stringify(completedDays));
}

// Day 카드 렌더링
function renderDayGrid() {
    ui.dayGrid.innerHTML = '';
    
    for (let i = 1; i <= 7; i++) {
        const isCompleted = completedDays.includes(i);
        const card = document.createElement('div');
        card.className = `day-card ${isCompleted ? 'completed' : ''}`;
        card.innerHTML = `
            <h3>Day ${i}</h3>
            <p>${isCompleted ? '학습 완료!' : '단어 10개'}</p>
        `;
        card.addEventListener('click', () => openStudy(i));
        ui.dayGrid.appendChild(card);
    }
}

// 단어 학습창 열기
function openStudy(day) {
    currentDay = day;
    ui.studyTitle.textContent = `Day ${day} 학습하기 📖`;
    
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
    
    let targetWords = [];
    let numQuestions = 10;
    
    if (mode === 'daily') {
        // 일일 퀴즈: 현재 선택된 Day의 10개 단어 전부
        targetWords = shuffleArray(vocabData.filter(item => item.day === currentDay));
        numQuestions = 10;
    } else if (mode === 'final') {
        // 최종 테스트: 전체 70개 중 20개 랜덤 추출
        targetWords = shuffleArray(vocabData).slice(0, 20);
        numQuestions = 20;
    }
    
    // 문제 만들기 (정답 1 + 오답 3)
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
        score += 10; // 점수: 10점씩
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
        
        // 일일 퀴즈 완료 시 (점수 상관없이 끝까지 풀면 완료 처리)
        if (quizMode === 'daily') {
            ui.resultTitle.textContent = `Day ${currentDay} 완료! 🎉`;
            if (!completedDays.includes(currentDay)) {
                completedDays.push(currentDay);
                saveProgress();
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
