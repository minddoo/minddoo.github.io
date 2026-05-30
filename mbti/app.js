const questions = [
    { type: 'EI', q: '주말을 앞둔 금요일 저녁! 당신의 선택은?', a: { text: '친구들과 핫플 카페 가기! 🍰', value: 'E' }, b: { text: '집에서 넷플릭스 보며 혼자만의 힐링 타임 📺', value: 'I' } },
    { type: 'EI', q: '처음 간 모임에서 당신은?', a: { text: '먼저 말을 걸고 분위기를 주도한다 🗣️', value: 'E' }, b: { text: '누가 말을 걸어줄 때까지 조용히 미소만 짓는다 🤐', value: 'I' } },
    { type: 'EI', q: '스트레스 받을 때 푸는 방법은?', a: { text: '사람들을 만나서 수다 떨기! 🗣️', value: 'E' }, b: { text: '혼자 방에서 푹 자거나 생각 정리하기 🛌', value: 'I' } },
    
    { type: 'SN', q: '메뉴판을 볼 때 당신은?', a: { text: '늘 먹던 베스트 메뉴 주문 😋', value: 'S' }, b: { text: '신메뉴나 독특한 이름의 메뉴에 도전 🤔', value: 'N' } },
    { type: 'SN', q: '멍 때릴 때 주로 하는 생각은?', a: { text: '오늘 저녁 뭐 먹지? 내일 할 일은? (현실적인 생각) 🍚', value: 'S' }, b: { text: '만약 내가 좀비 사태에 떨어진다면...? (상상력 풀가동) 🧟', value: 'N' } },
    { type: 'SN', q: '친구에게 길을 설명할 때', a: { text: '쭉 가다가 첫 번째 골목에서 오른쪽이야 ➡️', value: 'S' }, b: { text: '거기 파란색 큰 간판 보이지? 그 느낌 나는 골목! 🎨', value: 'N' } },
    
    { type: 'TF', q: '친구가 "나 우울해서 케이크 샀어" 라고 한다면?', a: { text: '무슨 케이크 샀어? (사실 확인) 🎂', value: 'T' }, b: { text: '무슨 일 있어? 왜 우울해 ㅠㅠ (감정 공감) 🥺', value: 'F' } },
    { type: 'TF', q: '고민 상담을 할 때 바라는 것은?', a: { text: '확실하고 현실적인 해결책 💡', value: 'T' }, b: { text: '나를 향한 따뜻한 위로와 편들어주기 💖', value: 'F' } },
    { type: 'TF', q: '거절해야 하는 상황에서 당신은?', a: { text: '단호하고 명확하게 안 된다고 말한다 🙅‍♂️', value: 'T' }, b: { text: '상처받지 않게 최대한 돌려 말한다 💦', value: 'F' } },
    
    { type: 'JP', q: '여행을 준비할 때 당신은?', a: { text: '일별로 시간 단위 일정표를 엑셀로 짠다 📅', value: 'J' }, b: { text: '일단 숙소만 예약하고 발길 닿는 대로 간다 🚶', value: 'P' } },
    { type: 'JP', q: '책상 정리 스타일은?', a: { text: '항상 깔끔하게 물건 제자리를 유지한다 ✨', value: 'J' }, b: { text: '조금 지저분해 보여도 나만의 규칙이 있다 📚', value: 'P' } },
    { type: 'JP', q: '친구가 갑자기 오늘 만나자고 한다면?', a: { text: '미리 약속 안 된 만남은 당황스럽고 귀찮다 😰', value: 'J' }, b: { text: '오히려 좋아! 즉흥적인 만남이 더 재밌다 😆', value: 'P' } }
];

const results = {
    'ISTJ': { name: '정직한 단팥빵', desc: '겉과 속이 똑같은 당신! 원칙을 지키며 묵묵히 자기 일을 하는 성실한 타입입니다.', good: '달달한 솜사탕 (ENFP)', bad: '톡 쏘는 레몬에이드 (ESTP)' },
    'ISFJ': { name: '포근한 카스테라', desc: '주변 사람들을 따뜻하게 챙기는 배려의 아이콘! 부드러운 매력으로 사랑받습니다.', good: '화려한 마카롱 (ESFP)', bad: '차가운 아이스 아메리카노 (ENTJ)' },
    'INFJ': { name: '깊은 맛 말차 케이크', desc: '속이 깊고 통찰력이 뛰어납니다. 다수보다는 소수의 사람들과 깊은 관계를 맺습니다.', good: '톡톡 튀는 팝핑 캔디 (ENTP)', bad: '정직한 단팥빵 (ISTJ)' },
    'INTJ': { name: '다크 초콜릿', desc: '쌉쌀하지만 중독성 있는 매력! 완벽을 추구하며 전략적이고 분석적인 뇌섹남녀입니다.', good: '상큼한 딸기 타르트 (ENFJ)', bad: '포근한 카스테라 (ISFJ)' },
    'ISTP': { name: '시크한 소금빵', desc: '무심한 듯 하지만 짭짤한 매력! 귀찮은 건 딱 질색인 효율성 끝판왕입니다.', good: '화려한 파르페 (ESFJ)', bad: '깊은 맛 말차 케이크 (INFJ)' },
    'ISFP': { name: '말랑말랑 푸딩', desc: '유연하고 둥글둥글한 성격! 갈등을 싫어하며 현재의 소소한 행복을 가장 중요하게 생각합니다.', good: '열정적인 핫초코 (ESTJ)', bad: '다크 초콜릿 (INTJ)' },
    'INFP': { name: '부드러운 생크림 케이크', desc: '몽글몽글한 상상력과 따뜻한 마음을 가진 낭만주의자! 나만의 확고한 가치관이 있습니다.', good: '든든한 샌드위치 (ENTJ)', bad: '시크한 소금빵 (ISTP)' },
    'INTP': { name: '차가운 민트초코', desc: '호불호가 확실한 독창적인 마이웨이! 끊임없이 "왜?"라는 호기심을 가집니다.', good: '따뜻한 밀크티 (ENFJ)', bad: '말랑말랑 푸딩 (ISFP)' },
    'ESTP': { name: '톡 쏘는 레몬에이드', desc: '지루한 건 못 참는 스릴 시커! 눈치가 빠르고 어디서든 적응력이 뛰어난 인싸입니다.', good: '정직한 단팥빵 (ISTJ)', bad: '부드러운 생크림 케이크 (INFP)' },
    'ESFP': { name: '화려한 마카롱', desc: '분위기 메이커 등장! 사람 만나는 걸 좋아하고 오늘을 가장 즐겁게 사는 욜로족입니다.', good: '포근한 카스테라 (ISFJ)', bad: '차가운 민트초코 (INTP)' },
    'ENFP': { name: '달달한 솜사탕', desc: '통통 튀는 아이디어 뱅크! 사람을 좋아하고 리액션이 좋아 주변에 늘 사람이 넘칩니다.', good: '깊은 맛 말차 케이크 (INFJ)', bad: '시크한 소금빵 (ISTP)' },
    'ENTP': { name: '톡톡 튀는 팝핑 캔디', desc: '말싸움에서 절대 지지 않는 논리왕! 틀에 박힌 것을 싫어하는 자유로운 영혼입니다.', good: '다크 초콜릿 (INTJ)', bad: '말랑말랑 푸딩 (ISFP)' },
    'ESTJ': { name: '열정적인 핫초코', desc: '철저한 계획과 실행력의 대명사! 리더십이 뛰어나며 일 처리가 깔끔한 보스 체질입니다.', good: '말랑말랑 푸딩 (ISFP)', bad: '부드러운 생크림 케이크 (INFP)' },
    'ESFJ': { name: '화려한 파르페', desc: '모두를 챙기는 다정한 오지라퍼! 사회성이 뛰어나고 주변 사람들의 감정에 공감을 잘합니다.', good: '시크한 소금빵 (ISTP)', bad: '차가운 민트초코 (INTP)' },
    'ENFJ': { name: '상큼한 딸기 타르트', desc: '말을 예쁘게 하는 선한 영향력의 소유자! 사람들의 성장을 돕는 것을 좋아합니다.', good: '차가운 민트초코 (INTP)', bad: '정직한 단팥빵 (ISTJ)' },
    'ENTJ': { name: '든든한 샌드위치', desc: '목표 달성을 향해 돌진하는 불도저! 추진력이 뛰어나며 카리스마 넘치는 지도자입니다.', good: '부드러운 생크림 케이크 (INFP)', bad: '포근한 카스테라 (ISFJ)' }
};

let currentQ = 0;
let scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };

const ui = {
    screenStart: document.getElementById('screen-start'),
    screenQuestion: document.getElementById('screen-question'),
    qCount: document.getElementById('question-count'),
    qText: document.getElementById('question-text'),
    btnA: document.getElementById('btn-answer-a'),
    btnB: document.getElementById('btn-answer-b'),
    progressBar: document.getElementById('progress-bar')
};

function startTest() {
    ui.screenStart.classList.remove('active');
    ui.screenQuestion.classList.add('active');
    currentQ = 0;
    scores = { E:0, I:0, S:0, N:0, T:0, F:0, J:0, P:0 };
    showQuestion();
}

function showQuestion() {
    if (currentQ >= questions.length) {
        calculateResult();
        return;
    }
    
    const q = questions[currentQ];
    ui.qCount.textContent = `${currentQ + 1} / ${questions.length}`;
    ui.progressBar.style.width = `${((currentQ) / questions.length) * 100}%`;
    ui.qText.textContent = q.q;
    ui.btnA.textContent = q.a.text;
    ui.btnB.textContent = q.b.text;
}

function selectAnswer(choice) {
    const q = questions[currentQ];
    const val = choice === 'A' ? q.a.value : q.b.value;
    scores[val]++;
    
    currentQ++;
    if(currentQ >= questions.length) {
        ui.progressBar.style.width = '100%';
        setTimeout(calculateResult, 300);
    } else {
        showQuestion();
    }
}

function calculateResult() {
    const mbti = 
        (scores.E > scores.I ? 'E' : 'I') +
        (scores.S > scores.N ? 'S' : 'N') +
        (scores.T > scores.F ? 'T' : 'F') +
        (scores.J > scores.P ? 'J' : 'P');
        
    localStorage.setItem('mbtiResult', mbti);
    window.location.href = 'result.html';
}

// Result Page Logic
document.addEventListener("DOMContentLoaded", () => {
    if(document.getElementById('screen-result')) {
        const mbti = localStorage.getItem('mbtiResult') || 'ENFP';
        const result = results[mbti];
        
        document.getElementById('result-title').textContent = result.name;
        document.getElementById('result-desc').textContent = result.desc;
        document.getElementById('match-good').textContent = result.good;
        document.getElementById('match-bad').textContent = result.bad;
        
        const emojis = ['🍰', '🍩', '🍪', '🍮', '🍨', '🍧', '🥐', '🥞'];
        document.getElementById('result-emoji').textContent = emojis[Math.floor(Math.random()*emojis.length)];
    }
});

function shareKakao() {
    if(typeof Kakao !== 'undefined' && Kakao.isInitialized()) {
        const mbti = localStorage.getItem('mbtiResult') || 'ENFP';
        const result = results[mbti];
        
        Kakao.Share.sendDefault({
            objectType: 'feed',
            content: {
                title: `나와 찰떡궁합인 디저트는? [${result.name}]`,
                description: result.desc,
                imageUrl: 'https://minddoo.github.io/og-image-mbti.png',
                link: { mobileWebUrl: 'https://minddoo.github.io/mbti/', webUrl: 'https://minddoo.github.io/mbti/' }
            },
            buttons: [
                { title: '결과 보기 & 나도 테스트하기', link: { mobileWebUrl: 'https://minddoo.github.io/mbti/', webUrl: 'https://minddoo.github.io/mbti/' } }
            ]
        });
    } else {
        alert("카카오톡 공유 기능을 설정해주세요.");
    }
}
