// 전역 상태
let myWords = [];
let quizQuestions = [];
let currentQuizIndex = 0;
let score = 0;
let timerInterval = null;
let timeLeft = 15;

// DOM 요소
const ui = {
    tabManager: document.getElementById('tab-manager'),
    tabQuiz: document.getElementById('tab-quiz'),
    screenManager: document.getElementById('screen-manager'),
    screenQuiz: document.getElementById('screen-quiz'),
    screenResult: document.getElementById('screen-result'),
    
    // Manager UI
    inputWord: document.getElementById('input-word'),
    inputMeaning: document.getElementById('input-meaning'),
    btnAdd: document.getElementById('btn-add'),
    wordList: document.getElementById('word-list'),
    wordCount: document.getElementById('word-count'),
    
    // Quiz UI
    questionWord: document.getElementById('question-word'),
    optionsContainer: document.getElementById('options-container'),
    questionCount: document.getElementById('question-count'),
    timer: document.getElementById('timer'),
    progressBar: document.getElementById('progress-bar'),
    
    // Result UI
    finalScore: document.getElementById('final-score'),
    resultMessage: document.getElementById('result-message'),
    btnRestart: document.getElementById('btn-restart'),
    btnGoManager: document.getElementById('btn-go-manager')
};

// 초기화
function init() {
    loadWords();
    renderWords();
    setupEventListeners();
}

function setupEventListeners() {
    // 탭 이동
    ui.tabManager.addEventListener('click', () => switchTab('manager'));
    ui.tabQuiz.addEventListener('click', () => startQuiz());
    ui.btnGoManager.addEventListener('click', () => switchTab('manager'));
    
    // 단어 추가
    ui.btnAdd.addEventListener('click', addWord);
    ui.inputMeaning.addEventListener('keypress', (e) => {
        if(e.key === 'Enter') addWord();
    });
    
    // 퀴즈 액션
    ui.btnRestart.addEventListener('click', () => startQuiz());
}

// 탭 스위칭 로직
function switchTab(tab) {
    ui.tabManager.classList.remove('active');
    ui.tabQuiz.classList.remove('active');
    
    ui.screenManager.classList.remove('active');
    ui.screenQuiz.classList.remove('active');
    ui.screenResult.classList.remove('active');
    
    if (tab === 'manager') {
        ui.tabManager.classList.add('active');
        ui.screenManager.classList.add('active');
        renderWords();
    } else if (tab === 'quiz') {
        ui.tabQuiz.classList.add('active');
        ui.screenQuiz.classList.add('active');
    } else if (tab === 'result') {
        ui.tabQuiz.classList.add('active');
        ui.screenResult.classList.add('active');
    }
}

// --- 단어장 관리 (Local Storage) ---

function loadWords() {
    const saved = localStorage.getItem('myVocabData');
    if (saved) {
        myWords = JSON.parse(saved);
    } else {
        // 처음 오는 사용자를 위한 샘플 데이터
        myWords = [
            { id: 1, word: 'apple', meaning: '사과' },
            { id: 2, word: 'banana', meaning: '바나나' },
            { id: 3, word: 'grape', meaning: '포도' },
            { id: 4, word: 'orange', meaning: '오렌지' }
        ];
        saveWords();
    }
}

function saveWords() {
    localStorage.setItem('myVocabData', JSON.stringify(myWords));
}

function addWord() {
    const word = ui.inputWord.value.trim();
    const meaning = ui.inputMeaning.value.trim();
    
    if (!word || !meaning) {
        alert("단어와 뜻을 모두 입력해주세요!");
        return;
    }
    
    myWords.push({
        id: Date.now(),
        word: word,
        meaning: meaning
    });
    
    saveWords();
    renderWords();
    
    // 입력창 초기화
    ui.inputWord.value = '';
    ui.inputMeaning.value = '';
    ui.inputWord.focus();
}

function deleteWord(id) {
    myWords = myWords.filter(w => w.id !== id);
    saveWords();
    renderWords();
}

function renderWords() {
    ui.wordList.innerHTML = '';
    
    // 역순 정렬 (최신이 위로)
    const sortedWords = [...myWords].reverse();
    
    sortedWords.forEach(w => {
        const li = document.createElement('li');
        li.className = 'word-item';
        li.innerHTML = `
            <div>
                <strong style="color:var(--pastel-blue-shadow); font-family:'Baloo 2', sans-serif;">${w.word}</strong> 
                <span style="color:#aaa; margin:0 5px;">:</span> 
                ${w.meaning}
            </div>
            <button class="btn-delete" title="삭제">✕</button>
        `;
        
        li.querySelector('.btn-delete').addEventListener('click', () => deleteWord(w.id));
        ui.wordList.appendChild(li);
    });
    
    ui.wordCount.textContent = `총 ${myWords.length}개`;
}


// --- 퀴즈 로직 ---

function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

function startQuiz() {
    if (myWords.length < 4) {
        alert("퀴즈를 보려면 최소 4개의 단어를 등록해주세요!");
        return;
    }
    
    switchTab('quiz');
    
    // 퀴즈 생성 로직
    // 최대 10문제 (단어가 적으면 있는 만큼만)
    const maxQuestions = Math.min(10, myWords.length);
    const shuffledWords = shuffleArray(myWords);
    
    quizQuestions = [];
    
    for (let i = 0; i < maxQuestions; i++) {
        const currentWord = shuffledWords[i];
        
        // 정답을 제외한 나머지 단어들 중에서 오답 3개 추출
        const otherWords = myWords.filter(w => w.id !== currentWord.id);
        const randomWrongs = shuffleArray(otherWords).slice(0, 3);
        
        // 정답과 오답 섞어서 옵션 배열 생성
        const options = [currentWord, ...randomWrongs];
        const shuffledOptions = shuffleArray(options);
        
        quizQuestions.push({
            word: currentWord.word,
            correctMeaning: currentWord.meaning,
            options: shuffledOptions.map(opt => opt.meaning)
        });
    }
    
    currentQuizIndex = 0;
    score = 0;
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
    
    // 중복 클릭 방지
    buttons.forEach(b => b.style.pointerEvents = 'none');
    
    const isCorrect = selectedText === question.correctMeaning;
    
    if (isCorrect) {
        btnElement.classList.add('correct');
        score += 10;
    } else {
        btnElement.classList.add('wrong');
        // 정답 버튼 찾아 표시
        buttons.forEach(b => {
            if(b.textContent === question.correctMeaning) {
                b.classList.add('correct');
            }
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
            // 시간 초과 처리
            const buttons = ui.optionsContainer.querySelectorAll('.option-btn');
            buttons.forEach(b => b.style.pointerEvents = 'none');
            
            const question = quizQuestions[currentQuizIndex];
            buttons.forEach(b => {
                if(b.textContent === question.correctMeaning) {
                    b.classList.add('correct');
                }
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
        switchTab('result');
        const maxScore = quizQuestions.length * 10;
        ui.finalScore.textContent = `${score}점`;
        
        if (score === maxScore) {
            ui.resultMessage.textContent = "최고예요! 백점 만점에 백점! 🌟";
        } else if (score >= maxScore * 0.7) {
            ui.resultMessage.textContent = "참 잘했어요! 거의 다 맞췄네요 😊";
        } else {
            ui.resultMessage.textContent = "괜찮아요! 다시 한 번 연습해볼까요? 💪";
        }
    }, 500);
}

// 앱 시작
init();
