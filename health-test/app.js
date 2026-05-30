const questions = [
    {
        q: "When planning a medical trip to Korea, what is your top priority?",
        a: [
            { text: "Getting the absolute best premium service and VIP treatment.", type: "VIP" },
            { text: "Getting it done quickly so I have more time for sightseeing.", type: "QUICK" },
            { text: "Combining health checks with skincare or plastic surgery consultations.", type: "BEAUTY" },
            { text: "Thoroughly checking specific health concerns with top-tier equipment (MRI/CT).", type: "INTENSIVE" }
        ]
    },
    {
        q: "How much time are you willing to spend in the hospital?",
        a: [
            { text: "1~2 full days. I want a relaxing, private ward experience.", type: "VIP" },
            { text: "Half a day max. Let's make it fast.", type: "QUICK" },
            { text: "A day or two, if I can also visit dermatology clinics nearby.", type: "BEAUTY" },
            { text: "As long as it takes to get detailed results from specialists.", type: "INTENSIVE" }
        ]
    },
    {
        q: "What is your main concern regarding your health?",
        a: [
            { text: "Overall wellness, anti-aging, and premium lifestyle maintenance.", type: "VIP" },
            { text: "Just a general checkup for peace of mind, nothing specific.", type: "QUICK" },
            { text: "Skin condition, body shape, or aesthetic improvements.", type: "BEAUTY" },
            { text: "Family history of diseases like cancer, heart, or brain conditions.", type: "INTENSIVE" }
        ]
    },
    {
        q: "What kind of hospital environment do you prefer?",
        a: [
            { text: "Feels like a 5-star hotel with dedicated concierge staff.", type: "VIP" },
            { text: "A modern clinic that is close to major tourist spots (Myeongdong, Hongdae).", type: "QUICK" },
            { text: "A trendy center in Gangnam known for beauty and wellness.", type: "BEAUTY" },
            { text: "A massive university hospital with the most advanced medical technology.", type: "INTENSIVE" }
        ]
    },
    {
        q: "How do you handle medical interpreting/translation?",
        a: [
            { text: "I expect a 1:1 dedicated professional medical interpreter by my side.", type: "VIP" },
            { text: "Basic English instructions or translation apps are fine.", type: "QUICK" },
            { text: "I need someone who can also translate complex beauty consultation terms.", type: "BEAUTY" },
            { text: "I need highly accurate translation of medical terms and scan results.", type: "INTENSIVE" }
        ]
    },
    {
        q: "After the checkup is done, what is your next schedule?",
        a: [
            { text: "Returning to a luxury hotel or enjoying fine dining.", type: "VIP" },
            { text: "Going shopping, cafe-hopping, and exploring Seoul immediately.", type: "QUICK" },
            { text: "Getting a facial treatment, spa massage, or hair makeover.", type: "BEAUTY" },
            { text: "Resting and waiting for the detailed doctor's briefing.", type: "INTENSIVE" }
        ]
    },
    {
        q: "What is your budget for the health screening package?",
        a: [
            { text: "Budget is not an issue for top quality ($3,000+).", type: "VIP" },
            { text: "I want an affordable and reasonable basic package (Under $500).", type: "QUICK" },
            { text: "I have a flexible budget for both health and aesthetic procedures ($1,000+).", type: "BEAUTY" },
            { text: "I am willing to pay for highly specific and advanced tests ($1,500+).", type: "INTENSIVE" }
        ]
    }
];

let currentQ = 0;
let scores = { VIP: 0, QUICK: 0, BEAUTY: 0, INTENSIVE: 0 };

function startTest() {
    document.getElementById('screen-start').classList.remove('active');
    document.getElementById('screen-question').classList.add('active');
    currentQ = 0;
    scores = { VIP: 0, QUICK: 0, BEAUTY: 0, INTENSIVE: 0 };
    showQuestion();
}

function showQuestion() {
    if (currentQ >= questions.length) {
        showResult();
        return;
    }

    const q = questions[currentQ];
    document.getElementById('q-num').innerText = currentQ + 1;
    document.getElementById('question-text').innerText = q.q;

    // Update Progress Bar
    const progress = ((currentQ) / questions.length) * 100;
    document.getElementById('progress-bar').style.width = progress + '%';

    const container = document.getElementById('options-container');
    container.innerHTML = '';

    q.a.forEach((ans) => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = ans.text;
        btn.onclick = () => selectOption(ans.type);
        container.appendChild(btn);
    });
}

function selectOption(type) {
    scores[type]++;
    currentQ++;
    showQuestion();
}

function showResult() {
    // Find the type with max score
    let maxType = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
    
    // Save to localStorage so result page can access it
    localStorage.setItem('healthTestResult', maxType);
    
    // Redirect to result page
    window.location.href = 'result.html';
}
