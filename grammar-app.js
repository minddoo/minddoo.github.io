// 현재 선택된 상태 저장
let currentLang = 'en';
let currentLevel = 'basic';

document.addEventListener('DOMContentLoaded', () => {
    // 초기 로딩 시 렌더링
    renderGrammarList();
});

// 언어 탭 전환 기능
function switchLang(lang) {
    currentLang = lang;
    
    // 탭 버튼 스타일 변경
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const clickedBtn = document.querySelector(`.lang-btn[onclick="switchLang('${lang}')"]`);
    if(clickedBtn) clickedBtn.classList.add('active');
    
    // 데이터 다시 렌더링
    renderGrammarList();
}

// 난이도 탭 전환 기능
function switchLevel(level) {
    currentLevel = level;
    
    // 탭 버튼 스타일 변경
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    const clickedBtn = document.querySelector(`.tab-btn[onclick="switchLevel('${level}')"]`);
    if(clickedBtn) clickedBtn.classList.add('active');
    
    // 데이터 다시 렌더링
    renderGrammarList();
}

// 문법 리스트 렌더링
function renderGrammarList() {
    const listContainer = document.getElementById('grammar-list');
    listContainer.innerHTML = ''; // 초기화
    
    // 현재 언어와 난이도에 맞는 데이터 가져오기
    const data = grammarDB[currentLang][currentLevel];
    
    if(!data || data.length === 0) {
        listContainer.innerHTML = '<div style="text-align:center; padding:30px; color:#999;">데이터가 없습니다.</div>';
        return;
    }
    
    data.forEach((item, index) => {
        // 문법 카드 생성
        const card = document.createElement('div');
        card.className = 'grammar-card';
        
        // 카드 헤더 (클릭 시 아코디언 토글)
        const header = document.createElement('div');
        header.className = 'grammar-header';
        header.innerHTML = `
            <span>${item.title}</span>
            <span class="toggle-icon">+</span>
        `;
        header.onclick = () => toggleAccordion(card);
        
        // 카드 본문 (설명 + 예문)
        const body = document.createElement('div');
        body.className = 'grammar-body';
        
        let examplesHTML = '';
        item.examples.forEach(ex => {
            examplesHTML += `
                <li class="example-item">
                    <div class="ex-en">${ex.original}</div>
                    <div class="ex-ko">${ex.translated}</div>
                </li>
            `;
        });
        
        body.innerHTML = `
            <div class="grammar-explanation">${item.explanation}</div>
            <ul class="example-list">
                ${examplesHTML}
            </ul>
        `;
        
        card.appendChild(header);
        card.appendChild(body);
        listContainer.appendChild(card);
    });
}

// 아코디언 토글 로직
function toggleAccordion(card) {
    // 현재 열려있는지 확인
    const isOpen = card.classList.contains('open');
    
    // 클릭한 카드 상태 반전
    if (isOpen) {
        card.classList.remove('open');
    } else {
        card.classList.add('open');
    }
}
