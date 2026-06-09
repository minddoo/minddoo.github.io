document.addEventListener('DOMContentLoaded', () => {
    // Views
    const viewCategories = document.getElementById('view-categories');
    const viewQuiz = document.getElementById('view-quiz');
    const viewResult = document.getElementById('view-result');

    // Category elements
    const categoryGrid = document.getElementById('category-grid');

    // Quiz elements
    const quizTitle = document.getElementById('quiz-title');
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const qScenario = document.getElementById('q-scenario');
    const qText = document.getElementById('q-text');
    const qTranslation = document.getElementById('q-translation');
    const optionsGrid = document.getElementById('options-grid');
    const feedbackArea = document.getElementById('feedback-area');
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackExplanation = document.getElementById('feedback-explanation');
    const btnNext = document.getElementById('btn-next');
    const btnBackQuiz = document.getElementById('btn-back-quiz');

    // Result elements
    const finalScoreEl = document.getElementById('final-score');
    const totalQuestionsEl = document.getElementById('total-questions');
    const resultMessage = document.getElementById('result-message');
    const btnRestart = document.getElementById('btn-restart');

    // State
    let currentCategory = null;
    let currentQuestions = [];
    let currentQuestionIndex = 0;
    let score = 0;
    let hasAnswered = false;

    // Initialize Categories
    function initCategories() {
        categoryGrid.innerHTML = '';
        for (const [key, data] of Object.entries(quizData)) {
            const card = document.createElement('div');
            card.className = 'category-card';
            card.innerHTML = `
                <div class="category-icon">${data.icon}</div>
                <div class="category-title">${data.title}</div>
            `;
            card.addEventListener('click', () => startQuiz(key));
            categoryGrid.appendChild(card);
        }
    }

    function switchView(viewId) {
        document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
        document.getElementById(viewId).classList.add('active');
    }

    function startQuiz(categoryKey) {
        currentCategory = quizData[categoryKey];
        currentQuestions = [...currentCategory.questions];
        currentQuestionIndex = 0;
        score = 0;
        
        quizTitle.textContent = currentCategory.title;
        totalQuestionsEl.textContent = currentQuestions.length;
        
        loadQuestion();
        switchView('view-quiz');
    }

    function loadQuestion() {
        hasAnswered = false;
        feedbackArea.classList.add('hidden');
        feedbackArea.classList.remove('correct-mode', 'wrong-mode');
        btnNext.className = 'btn-primary';
        
        const q = currentQuestions[currentQuestionIndex];
        
        // Update Progress
        const progress = ((currentQuestionIndex) / currentQuestions.length) * 100;
        progressBar.style.width = `${progress}%`;
        progressText.textContent = `Question ${currentQuestionIndex + 1} of ${currentQuestions.length}`;

        // Load content
        qScenario.textContent = q.scenario;
        qText.textContent = q.question;
        qTranslation.textContent = q.translation;

        // Load options
        optionsGrid.innerHTML = '';
        q.options.forEach((optText, index) => {
            const btn = document.createElement('button');
            btn.className = 'option-btn';
            btn.textContent = optText;
            btn.addEventListener('click', () => selectAnswer(index, btn));
            optionsGrid.appendChild(btn);
        });
    }

    function selectAnswer(selectedIndex, btnElement) {
        if (hasAnswered) return;
        hasAnswered = true;

        const q = currentQuestions[currentQuestionIndex];
        const isCorrect = selectedIndex === q.correct;
        const allOptions = optionsGrid.querySelectorAll('.option-btn');

        // Disable all options
        allOptions.forEach((btn, idx) => {
            btn.disabled = true;
            if (idx === q.correct) {
                btn.classList.add('correct');
            }
        });

        // Show feedback
        feedbackArea.classList.remove('hidden');
        
        if (isCorrect) {
            score++;
            btnElement.classList.add('correct');
            feedbackArea.classList.add('correct-mode');
            feedbackTitle.textContent = 'Correct! ✅';
            btnNext.textContent = 'Continue';
            btnNext.classList.add('btn-next-correct');
        } else {
            btnElement.classList.add('wrong');
            feedbackArea.classList.add('wrong-mode');
            feedbackTitle.textContent = 'Incorrect ❌';
            btnNext.textContent = 'Got it';
            btnNext.classList.add('btn-next-wrong');
        }
        
        feedbackExplanation.textContent = q.explanation;
    }

    function handleNext() {
        currentQuestionIndex++;
        if (currentQuestionIndex < currentQuestions.length) {
            loadQuestion();
        } else {
            showResults();
        }
    }

    function showResults() {
        // Final progress bar full
        progressBar.style.width = '100%';
        
        finalScoreEl.textContent = score;
        
        if (score === currentQuestions.length) {
            resultMessage.textContent = "Perfect score! You are ready to speak Korean like a native.";
        } else if (score >= currentQuestions.length / 2) {
            resultMessage.textContent = "Great job! Keep practicing and you'll master it.";
        } else {
            resultMessage.textContent = "Good try! Review the phrases and try again.";
        }

        switchView('view-result');
    }

    // Event Listeners
    btnNext.addEventListener('click', handleNext);
    
    btnBackQuiz.addEventListener('click', () => {
        if (confirm("Are you sure you want to exit? Your progress will be lost.")) {
            switchView('view-categories');
        }
    });

    btnRestart.addEventListener('click', () => {
        switchView('view-categories');
    });

    // Start
    initCategories();
});
