let currentLang = 'en';
let currentQ = 0;
let totalScore = 0;

// Update static text elements
function updateStaticTexts() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.innerHTML = t[key];
        }
    });
    
    // Special handling for subtitle with html
    const subtitleEl = document.getElementById('i18n-subtitle');
    if (subtitleEl && t.subtitle) subtitleEl.innerHTML = t.subtitle;

    const ctaSubtitleEl = document.getElementById('i18n-ctaSubtitle');
    if (ctaSubtitleEl && t.ctaSubtitle) ctaSubtitleEl.innerHTML = t.ctaSubtitle;
}

function changeLanguage(lang) {
    currentLang = lang;
    updateStaticTexts();
    
    // If currently on quiz screen, re-render question
    if (document.getElementById('quiz-screen').classList.contains('active')) {
        renderQuestion();
    }
    
    // If currently on result screen, re-render result
    if (document.getElementById('result-screen').classList.contains('active')) {
        renderResultData();
    }
}

function switchScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
    window.scrollTo(0, 0);
}

function startTest() {
    currentQ = 0;
    totalScore = 0;
    switchScreen('quiz-screen');
    renderQuestion();
}

function getQuestionData(index) {
    const t = translations[currentLang];
    const qNum = index + 1;
    return {
        q: t[`q${qNum}_q`],
        a: [
            { text: t[`q${qNum}_o1`], score: (qNum===1?20:qNum===2?20:qNum===3?5:qNum===4?10:20) },
            { text: t[`q${qNum}_o2`], score: (qNum===1?10:qNum===2?5:qNum===3?20:qNum===4?20:10) },
            { text: t[`q${qNum}_o3`], score: (qNum===1?5:qNum===2?10:qNum===3?15:qNum===4?5:15) },
            { text: t[`q${qNum}_o4`], score: (qNum===1?15:qNum===2?15:qNum===3?10:qNum===4?15:0) }
        ]
    };
}

function renderQuestion() {
    const qData = getQuestionData(currentQ);
    
    // Update progress
    const progress = ((currentQ) / 5) * 100;
    document.getElementById('track-fill').style.width = progress + '%';
    const runner = document.getElementById('runner-icon');
    if (runner) {
        runner.style.left = progress + '%';
        runner.classList.add('running');
        setTimeout(() => runner.classList.remove('running'), 400);
    }
    document.getElementById('q-counter').innerText = `STAGE ${currentQ + 1} / 5`;
    
    // Set text
    document.getElementById('q-title').innerText = qData.q;
    
    // Set options
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    qData.a.forEach((option) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = option.text;
        btn.onclick = () => selectOption(option.score);
        optionsContainer.appendChild(btn);
    });
}

function selectOption(score) {
    totalScore += score;
    currentQ++;
    
    if (currentQ < 5) {
        renderQuestion();
    } else {
        showLoading();
    }
}

function showLoading() {
    switchScreen('loading-screen');
    
    setTimeout(() => { document.getElementById('step1').classList.add('done'); }, 800);
    setTimeout(() => { document.getElementById('step2').classList.add('done'); }, 1800);
    setTimeout(() => { document.getElementById('step3').classList.add('done'); }, 2800);
    
    setTimeout(() => {
        showResult();
    }, 3800);
}

function renderResultData() {
    const t = translations[currentLang];
    let title = "";
    let level = "";
    let desc = "";
    let gaugeColor = "";
    let gaugeWidth = "";

    if (totalScore >= 70) {
        title = t.r1_title;
        level = t.r1_level;
        gaugeColor = "var(--danger)";
        gaugeWidth = "90%";
        desc = t.r1_desc;
    } else if (totalScore >= 40) {
        title = t.r2_title;
        level = t.r2_level;
        gaugeColor = "var(--warning)";
        gaugeWidth = "50%";
        desc = t.r2_desc;
    } else {
        title = t.r3_title;
        level = t.r3_level;
        gaugeColor = "var(--success)";
        gaugeWidth = "20%";
        desc = t.r3_desc;
    }

    document.getElementById('r-title').innerText = title;
    document.getElementById('r-level-text').innerText = level;
    document.getElementById('r-level-text').style.color = gaugeColor;
    document.getElementById('r-desc').innerText = desc;
    
    setTimeout(() => {
        const fill = document.getElementById('gauge-fill');
        if (fill) {
            fill.style.width = gaugeWidth;
            fill.style.background = gaugeColor;
        }
    }, 100);
}

function showResult() {
    switchScreen('result-screen');
    renderResultData();
}

// Initialize on load
document.addEventListener("DOMContentLoaded", () => {
    updateStaticTexts();
});
