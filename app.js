// 단어 데이터 (실제 서비스 시 서버에서 가져오거나 더 많은 데이터를 로드할 수 있습니다)
const vocabData = [
    { word: "ubiquitous", options: ["어디에나 있는", "희귀한", "위험한", "비싼"], answer: 0 },
    { word: "ephemeral", options: ["영원한", "수명이 짧은", "단단한", "투명한"], answer: 1 },
    { word: "pragmatic", options: ["이론적인", "실용적인", "감성적인", "비관적인"], answer: 1 },
    { word: "meticulous", options: ["대충하는", "꼼꼼한", "사나운", "게으른"], answer: 1 },
    { word: "obscure", options: ["명백한", "모호한", "거대한", "날카로운"], answer: 1 },
    { word: "resilient", options: ["부서지기 쉬운", "탄력 있는, 회복력 있는", "무거운", "차가운"], answer: 1 },
    { word: "ambiguous", options: ["확실한", "애매모호한", "아름다운", "지루한"], answer: 1 },
    { word: "diligent", options: ["부지런한", "게으른", "똑똑한", "어리석은"], answer: 0 },
    { word: "lucid", options: ["명쾌한, 맑은", "흐릿한", "시끄러운", "조용한"], answer: 0 },
    { word: "eloquent", options: ["말을 잘 못하는", "유창한", "조용한", "화난"], answer: 1 }
];

// 상태 변수
let currentQuestions = [];
let currentIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 15;

// DOM 요소
const screens = {
    start: document.getElementById('start-screen'),
    quiz: document.getElementById('quiz-screen'),
    result: document.getElementById('result-screen')
};

const elements = {
    startBtn: document.getElementById('start-btn'),
    restartBtn: document.getElementById('restart-btn'),
    questionWord: document.getElementById('question-word'),
    optionsContainer: document.getElementById('options-container'),
    questionCount: document.getElementById('question-count'),
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progress-bar'),
    scoreDisplay: document.getElementById('score-display'),
    finalScore: document.getElementById('final-score'),
    resultMessage: document.getElementById('result-message')
};

// 유틸리티: 배열 섞기 (Fisher-Yates)
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// 화면 전환
function showScreen(screenName) {
    Object.values(screens).forEach(screen => screen.classList.remove('active'));
    screens[screenName].classList.add('active');
}

// 퀴즈 초기화
function initQuiz() {
    currentQuestions = shuffleArray(vocabData).slice(0, 10); // 10문제 추출
    
    // 각 문제의 보기들도 섞기
    currentQuestions = currentQuestions.map(q => {
        const correctAnswerText = q.options[q.answer];
        const shuffledOptions = shuffleArray(q.options);
        const newAnswerIndex = shuffledOptions.indexOf(correctAnswerText);
        return {
            ...q,
            options: shuffledOptions,
            answer: newAnswerIndex
        };
    });

    currentIndex = 0;
    score = 0;
    updateScoreDisplay();
    showScreen('quiz');
    loadQuestion();
}

// 문제 불러오기
function loadQuestion() {
    clearInterval(timerInterval);
    timeLeft = 15;
    updateTimerDisplay();
    
    const question = currentQuestions[currentIndex];
    
    // UI 업데이트
    elements.questionCount.textContent = `문제 ${currentIndex + 1}/${currentQuestions.length}`;
    elements.progressBar.style.width = `${(currentIndex / currentQuestions.length) * 100}%`;
    elements.questionWord.textContent = question.word;
    
    // 보기 렌더링
    elements.optionsContainer.innerHTML = '';
    question.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerHTML = `
            <span>${opt}</span>
            <span class="icon"></span>
        `;
        btn.addEventListener('click', () => handleOptionClick(index, btn));
        elements.optionsContainer.appendChild(btn);
    });

    // 타이머 시작
    startTimer();
}

// 정답 처리
function handleOptionClick(selectedIndex, btnElement) {
    clearInterval(timerInterval);
    const question = currentQuestions[currentIndex];
    const buttons = elements.optionsContainer.querySelectorAll('.option-btn');
    
    // 모든 버튼 비활성화 (중복 클릭 방지)
    buttons.forEach(btn => btn.style.pointerEvents = 'none');

    const isCorrect = selectedIndex === question.answer;

    if (isCorrect) {
        btnElement.classList.add('correct');
        btnElement.querySelector('.icon').innerHTML = '✓';
        score += 10;
        updateScoreDisplay();
    } else {
        btnElement.classList.add('wrong');
        btnElement.querySelector('.icon').innerHTML = '✕';
        // 정답 버튼 표시
        buttons[question.answer].classList.add('correct');
    }

    // 약간의 딜레이 후 다음 문제로
    setTimeout(() => {
        currentIndex++;
        if (currentIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

// 타이머
function startTimer() {
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            // 시간 초과 처리 (오답으로 간주하고 강제로 아무 버튼이나 틀리게 처리하는 로직 추가 가능)
            const buttons = elements.optionsContainer.querySelectorAll('.option-btn');
            buttons.forEach(btn => btn.style.pointerEvents = 'none');
            const question = currentQuestions[currentIndex];
            buttons[question.answer].classList.add('correct'); // 정답만 보여줌
            
            setTimeout(() => {
                currentIndex++;
                if (currentIndex < currentQuestions.length) {
                    loadQuestion();
                } else {
                    showResult();
                }
            }, 1500);
        }
    }, 1000);
}

function updateTimerDisplay() {
    elements.timer.textContent = `${timeLeft}s`;
    if(timeLeft <= 5) {
        elements.timer.style.color = 'var(--error)';
    } else {
        elements.timer.style.color = 'var(--primary)';
    }
}

function updateScoreDisplay() {
    elements.scoreDisplay.textContent = `점수: ${score}`;
}

// 결과 화면
function showResult() {
    elements.progressBar.style.width = '100%';
    setTimeout(() => {
        showScreen('result');
        elements.finalScore.textContent = `${score}점`;
        
        if (score === 100) {
            elements.resultMessage.textContent = "완벽합니다! 어휘력이 대단하시네요.";
        } else if (score >= 70) {
            elements.resultMessage.textContent = "훌륭합니다! 조금만 더 하면 마스터할 수 있어요.";
        } else {
            elements.resultMessage.textContent = "꾸준히 연습하면 더 좋아질 거예요. 다시 도전해보세요!";
        }
    }, 500);
}

// 이벤트 리스너 등록
elements.startBtn.addEventListener('click', initQuiz);
elements.restartBtn.addEventListener('click', initQuiz);
