// 70개의 필수 영단어 데이터 (중상위~고급 수준)
const vocabData = [
    // Day 1
    { day: 1, word: "ubiquitous", meaning: "어디에나 있는" }, { day: 1, word: "ephemeral", meaning: "수명이 짧은, 단명하는" },
    { day: 1, word: "pragmatic", meaning: "실용적인" }, { day: 1, word: "meticulous", meaning: "꼼꼼한, 세심한" },
    { day: 1, word: "obscure", meaning: "모호한, 무명의" }, { day: 1, word: "resilient", meaning: "회복력 있는, 탄력 있는" },
    { day: 1, word: "ambiguous", meaning: "애매모호한" }, { day: 1, word: "diligent", meaning: "부지런한" },
    { day: 1, word: "lucid", meaning: "명쾌한, 맑은" }, { day: 1, word: "eloquent", meaning: "유창한, 설득력 있는" },
    
    // Day 2
    { day: 2, word: "plausible", meaning: "그럴듯한, 타당한" }, { day: 2, word: "lucrative", meaning: "수익성이 좋은" },
    { day: 2, word: "obsolete", meaning: "구식의, 쓸모없게 된" }, { day: 2, word: "profound", meaning: "심오한, 깊은" },
    { day: 2, word: "tentative", meaning: "잠정적인, 머뭇거리는" }, { day: 2, word: "vulnerable", meaning: "취약한, 연약한" },
    { day: 2, word: "serene", meaning: "고요한, 평온한" }, { day: 2, word: "rigorous", meaning: "엄격한, 철저한" },
    { day: 2, word: "redundant", meaning: "불필요한, 중복되는" }, { day: 2, word: "prevalent", meaning: "널리 퍼진, 만연한" },
    
    // Day 3
    { day: 3, word: "mitigate", meaning: "완화하다, 경감시키다" }, { day: 3, word: "alleviate", meaning: "고통 등을 덜다" },
    { day: 3, word: "exacerbate", meaning: "악화시키다" }, { day: 3, word: "delineate", meaning: "상세히 묘사하다" },
    { day: 3, word: "fluctuate", meaning: "변동하다, 오르내리다" }, { day: 3, word: "deviate", meaning: "벗어나다, 빗나가다" },
    { day: 3, word: "scrutinize", meaning: "면밀히 조사하다" }, { day: 3, word: "consolidate", meaning: "통합하다, 굳건히 하다" },
    { day: 3, word: "eradicate", meaning: "근절하다, 뿌리뽑다" }, { day: 3, word: "initiate", meaning: "시작하다, 개시하다" },
    
    // Day 4
    { day: 4, word: "anomaly", meaning: "변칙, 이례적인 것" }, { day: 4, word: "paradigm", meaning: "패러다임, 전형적인 예" },
    { day: 4, word: "paradox", meaning: "역설, 모순" }, { day: 4, word: "arbitrary", meaning: "임의적인, 제멋대로인" },
    { day: 4, word: "empirical", meaning: "경험적인, 실증적인" }, { day: 4, word: "aesthetic", meaning: "미학적인, 심미적인" },
    { day: 4, word: "indigenous", meaning: "토착의, 고유한" }, { day: 4, word: "formidable", meaning: "가공할, 어마어마한" },
    { day: 4, word: "feasible", meaning: "실행 가능한" }, { day: 4, word: "tangible", meaning: "만질 수 있는, 실체가 있는" },
    
    // Day 5
    { day: 5, word: "versatile", meaning: "다재다능한, 다용도의" }, { day: 5, word: "volatile", meaning: "변동성이 큰, 휘발성의" },
    { day: 5, word: "viable", meaning: "실행 가능한, 생존 가능한" }, { day: 5, word: "superficial", meaning: "표면적인, 피상적인" },
    { day: 5, word: "subtle", meaning: "미묘한, 감지하기 힘든" }, { day: 5, word: "spontaneous", meaning: "자발적인, 즉흥적인" },
    { day: 5, word: "simultaneous", meaning: "동시의" }, { day: 5, word: "relevant", meaning: "관련 있는, 적절한" },
    { day: 5, word: "reluctant", meaning: "꺼리는, 마지못한" }, { day: 5, word: "prominent", meaning: "저명한, 두드러진" },
    
    // Day 6
    { day: 6, word: "imperative", meaning: "필수적인, 반드시 해야 하는" }, { day: 6, word: "implicit", meaning: "암시된, 내포된" },
    { day: 6, word: "explicit", meaning: "명백한, 뚜렷한" }, { day: 6, word: "inevitable", meaning: "불가피한, 필연적인" },
    { day: 6, word: "inherent", meaning: "내재하는, 본질적인" }, { day: 6, word: "intrinsic", meaning: "고유한, 본질적인" },
    { day: 6, word: "extrinsic", meaning: "외적인, 비본질적인" }, { day: 6, word: "indispensable", meaning: "없어서는 안 될, 필수적인" },
    { day: 6, word: "innate", meaning: "타고난, 선천적인" }, { day: 6, word: "trivial", meaning: "사소한, 하찮은" },
    
    // Day 7
    { day: 7, word: "decipher", meaning: "해독하다" }, { day: 7, word: "deduce", meaning: "추론하다" },
    { day: 7, word: "depict", meaning: "묘사하다" }, { day: 7, word: "deter", meaning: "단념시키다, 방해하다" },
    { day: 7, word: "distract", meaning: "주의를 딴 데로 돌리다" }, { day: 7, word: "distort", meaning: "왜곡하다" },
    { day: 7, word: "disguise", meaning: "변장하다, 위장하다" }, { day: 7, word: "discern", meaning: "알아차리다, 식별하다" },
    { day: 7, word: "disperse", meaning: "흩어지다, 해산하다" }, { day: 7, word: "dissipate", meaning: "소멸되다, 낭비하다" },

    // Season 2: Day 8 ~ Day 14
    // Day 8
    { day: 8, word: "anomaly", meaning: "이례적인 것" }, { day: 8, word: "benevolent", meaning: "자비로운" },
    { day: 8, word: "candid", meaning: "솔직한" }, { day: 8, word: "condone", meaning: "용납하다" },
    { day: 8, word: "dearth", meaning: "부족, 결핍" }, { day: 8, word: "eccentric", meaning: "별난, 기이한" },
    { day: 8, word: "fastidious", meaning: "까다로운" }, { day: 8, word: "garrulous", meaning: "수다스러운" },
    { day: 8, word: "hinder", meaning: "방해하다" }, { day: 8, word: "impartial", meaning: "공정한" },

    // Day 9
    { day: 9, word: "lucid", meaning: "명쾌한" }, { day: 9, word: "malleable", meaning: "유연한" },
    { day: 9, word: "novel", meaning: "새로운" }, { day: 9, word: "obscure", meaning: "모호한" },
    { day: 9, word: "partisan", meaning: "편파적인" }, { day: 9, word: "quell", meaning: "진압하다" },
    { day: 9, word: "refute", meaning: "반박하다" }, { day: 9, word: "sanguine", meaning: "낙관적인" },
    { day: 9, word: "taciturn", meaning: "과묵한" }, { day: 9, word: "ubiquitous", meaning: "어디에나 있는" },

    // Day 10
    { day: 10, word: "vacillate", meaning: "망설이다" }, { day: 10, word: "wary", meaning: "경계하는" },
    { day: 10, word: "zealous", meaning: "열성적인" }, { day: 10, word: "absolve", meaning: "용서하다" },
    { day: 10, word: "belligerent", meaning: "호전적인" }, { day: 10, word: "capricious", meaning: "변덕스러운" },
    { day: 10, word: "debilitate", meaning: "악화시키다" }, { day: 10, word: "elusive", meaning: "찾기 힘든" },
    { day: 10, word: "fallacy", meaning: "오류" }, { day: 10, word: "gregarious", meaning: "사교적인" },

    // Day 11
    { day: 11, word: "haughty", meaning: "거만한" }, { day: 11, word: "impetuous", meaning: "성급한" },
    { day: 11, word: "jovial", meaning: "명랑한" }, { day: 11, word: "kindle", meaning: "불을 붙이다" },
    { day: 11, word: "lament", meaning: "슬퍼하다" }, { day: 11, word: "magnanimous", meaning: "관대한" },
    { day: 11, word: "nostalgia", meaning: "향수" }, { day: 11, word: "obliterate", meaning: "지우다" },
    { day: 11, word: "paramount", meaning: "최고의" }, { day: 11, word: "quandary", meaning: "진퇴양난" },

    // Day 12
    { day: 12, word: "reclusive", meaning: "은둔하는" }, { day: 12, word: "sagacious", meaning: "현명한" },
    { day: 12, word: "tenacious", meaning: "집요한" }, { day: 12, word: "unprecedented", meaning: "전례 없는" },
    { day: 12, word: "venerate", meaning: "존경하다" }, { day: 12, word: "wan", meaning: "창백한" },
    { day: 12, word: "yield", meaning: "양보하다, 산출하다" }, { day: 12, word: "zenith", meaning: "정점" },
    { day: 12, word: "aesthetic", meaning: "미적인" }, { day: 12, word: "brevity", meaning: "간결함" },

    // Day 13
    { day: 13, word: "corroborate", meaning: "확증하다" }, { day: 13, word: "daunting", meaning: "벅찬" },
    { day: 13, word: "embellish", meaning: "장식하다" }, { day: 13, word: "fabricate", meaning: "날조하다" },
    { day: 13, word: "gratuitous", meaning: "무료의, 불필요한" }, { day: 13, word: "hypocritical", meaning: "위선적인" },
    { day: 13, word: "illustrious", meaning: "저명한" }, { day: 13, word: "jeopardize", meaning: "위태롭게 하다" },
    { day: 13, word: "lucrative", meaning: "수익성이 좋은" }, { day: 13, word: "mundane", meaning: "평범한" },

    // Day 14
    { day: 14, word: "nefarious", meaning: "사악한" }, { day: 14, word: "opulent", meaning: "호화로운" },
    { day: 14, word: "perplex", meaning: "당혹스럽게 하다" }, { day: 14, word: "quintessential", meaning: "전형적인" },
    { day: 14, word: "resilient", meaning: "탄력 있는" }, { day: 14, word: "sporadic", meaning: "산발적인" },
    { day: 14, word: "trepidation", meaning: "두려움" }, { day: 14, word: "usurp", meaning: "빼앗다" },
    { day: 14, word: "vindicate", meaning: "정당성을 입증하다" }, { day: 14, word: "whimsical", meaning: "기발한" }
];

// 상태
let completedDays = [];
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
    
    // 시즌 2 (Day 8~14) 잠금 해제 여부 체크
    const isSeason2Unlocked = [1,2,3,4,5,6,7].every(d => completedDays.includes(d));
    const totalDays = isSeason2Unlocked ? 14 : 7;
    
    for (let i = 1; i <= totalDays; i++) {
        const isCompleted = completedDays.includes(i);
        const card = document.createElement('div');
        
        let cardClass = 'day-card';
        if (isCompleted) cardClass += ' completed';
        if (i > 7) cardClass += ' season-2-card'; // 시즌 2 특수 디자인용 클래스
        
        card.className = cardClass;
        card.innerHTML = `
            <h3>Day ${i}</h3>
            <p>${isCompleted ? '학습 완료!' : (i > 7 ? '시즌 2 단어' : '단어 10개')}</p>
        `;
        card.addEventListener('click', () => openStudy(i));
        ui.dayGrid.appendChild(card);
    }
    
    if (isSeason2Unlocked && !document.getElementById('season2-badge')) {
        const badge = document.createElement('div');
        badge.id = 'season2-badge';
        badge.className = 'season2-unlock-badge';
        badge.innerHTML = '🎉 축하합니다! 시즌 2 (심화 70단어) 잠금 해제! 🎉';
        ui.dayGrid.parentNode.insertBefore(badge, ui.dayGrid);
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
            if (!completedDays.includes(currentDay)) {
                completedDays.push(currentDay);
                saveProgress();
                
                // 만약 방금 Day 7까지 다 깼다면 시즌2 알림 효과
                const isSeason2Unlocked = [1,2,3,4,5,6,7].every(d => completedDays.includes(d));
                if(isSeason2Unlocked && currentDay <= 7) {
                    ui.resultMessage.innerHTML = "최고예요! 완벽하게 외우셨네요! 🌟<br><br><span style='color: var(--pastel-purple); font-weight: bold; font-size: 20px;'>🎉 짝짝짝! 심화 영단어 [시즌 2]가 잠금 해제되었습니다! 메인에서 확인하세요! 🎉</span>";
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
