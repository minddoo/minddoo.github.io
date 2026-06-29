function switchSubject(subject) {
    // 1. 모든 탭 버튼 비활성화
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    // 2. 모든 콘텐츠 영역 숨기기
    const contents = document.querySelectorAll('.subject-content');
    contents.forEach(content => content.classList.remove('active'));

    // 3. 선택된 탭 활성화
    const clickedBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(subject));
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }

    const targetContent = document.getElementById(subject);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    // 4. 화면을 최상단 부드럽게 스크롤
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
