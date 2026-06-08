const questions = [
    {
        q: "You suddenly get a high fever in Seoul. What do you do?",
        a: [
            { text: "Panic and hope it goes away.", score: 20 },
            { text: "Go to a pharmacy using body language.", score: 10 },
            { text: "Search for an English-speaking clinic.", score: 5 },
            { text: "Call a Korean friend to help.", score: 15 }
        ]
    },
    {
        q: "You arrive at a clinic, but the receptionists don't speak English. Your reaction?",
        a: [
            { text: "Turn around and walk out.", score: 20 },
            { text: "Use Papago/Google Translate.", score: 5 },
            { text: "Show them a pre-written translated text.", score: 10 },
            { text: "Just nod and say 'Yes' to everything.", score: 15 }
        ]
    },
    {
        q: "They hand you a complex medical history form entirely in Korean.",
        a: [
            { text: "Use Google Lens to translate line by line.", score: 5 },
            { text: "Sign the bottom without reading.", score: 20 },
            { text: "Ask the nurse to explain it in simple terms.", score: 15 },
            { text: "Call someone to translate over the phone.", score: 10 }
        ]
    },
    {
        q: "You need to book a follow-up appointment with a specialist.",
        a: [
            { text: "Book it via phone call in broken Korean.", score: 10 },
            { text: "Try to book online but get stuck at verification.", score: 20 },
            { text: "Ask the front desk to book it before leaving.", score: 5 },
            { text: "I'll just wait until I'm back in my home country.", score: 15 }
        ]
    },
    {
        q: "How do you feel about dealing with Korean healthcare administration overall?",
        a: [
            { text: "Terrified. It's too complex.", score: 20 },
            { text: "Stressful, but I manage somehow.", score: 10 },
            { text: "I rely entirely on my Korean partner/friend.", score: 15 },
            { text: "It's fine, I can handle it myself.", score: 0 }
        ]
    }
];

let currentQ = 0;
let totalScore = 0;

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

function renderQuestion() {
    const qData = questions[currentQ];
    
    // Update progress
    const progress = ((currentQ) / questions.length) * 100;
    document.getElementById('progress-fill').style.width = progress + '%';
    document.getElementById('q-current').innerText = currentQ + 1;
    
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
    
    if (currentQ < questions.length) {
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

function showResult() {
    switchScreen('result-screen');
    
    let title = "";
    let level = "";
    let desc = "";
    let gaugeColor = "";
    let gaugeWidth = "";

    // Score max is 100
    if (totalScore >= 70) {
        title = "Lost in Translation 🚨";
        level = "High Risk";
        gaugeColor = "var(--danger)";
        gaugeWidth = "90%";
        desc = "You are currently highly vulnerable to the Korean medical system. Language barriers and complex procedures are causing you significant stress. You definitely need administrative support!";
    } else if (totalScore >= 40) {
        title = "Papago Warrior ⚔️";
        level = "Moderate Risk";
        gaugeColor = "var(--warning)";
        gaugeWidth = "50%";
        desc = "You can get by with basic needs using translation apps, but you still struggle with specialized clinics, complex forms, and appointment bookings. Professional help would save you hours of stress.";
    } else {
        title = "K-Health Master 🏆";
        level = "Low Risk";
        gaugeColor = "var(--success)";
        gaugeWidth = "20%";
        desc = "You navigate the Korean medical system surprisingly well! However, dealing with administrative tasks is still a hassle. Why not delegate the boring stuff and save your precious time?";
    }

    document.getElementById('r-title').innerText = title;
    document.getElementById('r-level-text').innerText = level;
    document.getElementById('r-level-text').style.color = gaugeColor;
    document.getElementById('r-desc').innerText = desc;
    
    setTimeout(() => {
        document.getElementById('gauge-fill').style.width = gaugeWidth;
        document.getElementById('gauge-fill').style.background = gaugeColor;
    }, 100);
}
