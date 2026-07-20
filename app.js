// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkiMGzhxftqkYdH97wsobJk1HM9xjjkl8",
    authDomain: "record-93a70.firebaseapp.com",
    projectId: "record-93a70",
    storageBucket: "record-93a70.firebasestorage.app",
    messagingSenderId: "966647106797",
    appId: "1:966647106797:web:e08772613c724b193e10e4"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const boardRef = db.collection('finance_blind_board');

const commentInput = document.getElementById('commentInput');
const submitBtn = document.getElementById('submitBtn');
const commentList = document.getElementById('commentList');

// Random Anonymous Names
const adjectives = ["냉철한", "현명한", "예리한", "신중한", "통찰력 있는", "단호한", "지혜로운", "결단력 있는"];
const nouns = ["가치투자자", "배당족", "트레이더", "경제학자", "개미투자자", "건물주", "자산가", "분석가"];
function getRandomName() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adj} ${noun}`;
}

// Check localStorage for an existing ID, or create one
let myAnonName = localStorage.getItem('blind_name');
if (!myAnonName) {
    myAnonName = getRandomName();
    localStorage.setItem('blind_name', myAnonName);
}

// Function to escape HTML to prevent XSS
function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, 
        tag => ({
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            "'": '&#39;',
            '"': '&quot;'
        }[tag] || tag)
    );
}

// Formatting Date
function formatDate(timestamp) {
    if (!timestamp) return '';
    const d = timestamp.toDate();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${mm}.${dd} ${hh}:${min}`;
}

// Submit a new comment
if (submitBtn) {
    submitBtn.addEventListener('click', () => {
        const text = commentInput.value.trim();
        if (text.length === 0) {
            alert('의견을 입력해주세요.');
            return;
        }
        if (text.length > 1000) {
            alert('글자 수는 1000자를 초과할 수 없습니다.');
            return;
        }

        submitBtn.disabled = true;
        submitBtn.innerText = '등록 중...';

        boardRef.add({
            author: myAnonName,
            text: text,
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }).then(() => {
            commentInput.value = '';
            submitBtn.disabled = false;
            submitBtn.innerText = '의견 등록하기';
        }).catch(err => {
            console.error(err);
            alert('등록에 실패했습니다. 잠시 후 다시 시도해주세요.');
            submitBtn.disabled = false;
            submitBtn.innerText = '의견 등록하기';
        });
    });
}

// Listen for comments in real-time
if (commentList) {
    boardRef.orderBy('createdAt', 'desc').limit(50).onSnapshot(snapshot => {
        commentList.innerHTML = '';
        if (snapshot.empty) {
            commentList.innerHTML = '<p style="color:#888; font-size:14px;">아직 등록된 의견이 없습니다. 첫 번째 의견을 남겨보세요!</p>';
            return;
        }

        snapshot.forEach(doc => {
            const data = doc.data();
            const timeStr = data.createdAt ? formatDate(data.createdAt) : '방금 전';
            
            const div = document.createElement('div');
            div.className = 'comment-item';
            div.innerHTML = `
                <div class="comment-meta">
                    <span class="comment-author">${escapeHTML(data.author || '익명')}</span>
                    <span>${timeStr}</span>
                </div>
                <div class="comment-text">${escapeHTML(data.text || '')}</div>
            `;
            commentList.appendChild(div);
        });
    }, err => {
        console.error("Error fetching comments:", err);
        commentList.innerHTML = '<p style="color:red; font-size:14px;">데이터를 불러오는 중 오류가 발생했습니다.</p>';
    });
}
