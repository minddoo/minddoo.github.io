function switchTab(tabId) {
    // 1. 모든 탭 버튼에서 active 클래스 제거
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    // 2. 모든 탭 콘텐츠에서 active 클래스 제거
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.classList.remove('active');
    });

    // 3. 선택한 탭 버튼과 콘텐츠에 active 클래스 추가
    const activeBtn = Array.from(tabButtons).find(btn => btn.getAttribute('onclick').includes(tabId));
    if (activeBtn) {
        activeBtn.classList.add('active');
    }

    const activeContent = document.getElementById(tabId);
    if (activeContent) {
        activeContent.classList.add('active');
    }

    // 4. 화면을 상단으로 스크롤하여 학습 시작이 편하도록 지원 (모바일 배려)
    window.scrollTo({
        top: document.querySelector('.tab-navigation').offsetTop - 20,
        behavior: 'smooth'
    });
}
