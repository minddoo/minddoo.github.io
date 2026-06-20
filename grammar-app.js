document.addEventListener('DOMContentLoaded', () => {
    // 초기 로딩 시 중등 문법 렌더링
    renderGrammarList('middle');
});

// 탭 전환 기능
function switchTab(level) {
    // 탭 버튼 스타일 변경
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    
    // 클릭한 버튼 활성화
    const clickedBtn = document.querySelector(`.tab-btn[onclick="switchTab('${level}')"]`);
    if(clickedBtn) clickedBtn.classList.add('active');
    
    // 해당 레벨의 데이터 렌더링
    renderGrammarList(level);
}

// 문법 리스트 렌더링
function renderGrammarList(level) {
    const listContainer = document.getElementById('grammar-list');
    listContainer.innerHTML = ''; // 초기화
    
    const data = grammarDB[level];
    
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
                    <div class="ex-en">${ex.en}</div>
                    <div class="ex-ko">${ex.ko}</div>
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
    
    // 1. 모든 카드 닫기 (하나씩만 열리게 하고 싶다면)
    // const allCards = document.querySelectorAll('.grammar-card');
    // allCards.forEach(c => c.classList.remove('open'));
    
    // 2. 클릭한 카드 상태 반전
    if (isOpen) {
        card.classList.remove('open');
    } else {
        card.classList.add('open');
    }
}
