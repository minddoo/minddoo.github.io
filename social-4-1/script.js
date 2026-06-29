// 모달창 열기
function openModal(id) {
    const modal = document.getElementById(id);
    modal.style.display = "block";
    
    // 모달을 열 때 모든 카드를 원래 상태(앞면)로 리셋
    const flashcards = modal.querySelectorAll('.flashcard');
    flashcards.forEach(card => {
        card.classList.remove('flipped');
    });
}

// 모달창 닫기
function closeModal(id) {
    document.getElementById(id).style.display = "none";
}

// 모달 바깥 영역 클릭 시 모달 닫기
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = "none";
    }
}
