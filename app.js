// Firebase Configuration
const firebaseConfig = {
    apiKey: "AIzaSyBkiMGzhxftqkYdH97wsobJk1HM9xjjkl8",
    authDomain: "record-93a70.firebaseapp.com",
    projectId: "record-93a70",
    storageBucket: "record-93a70.firebasestorage.app",
    messagingSenderId: "966647106797",
    appId: "1:966647106797:web:e08772613c724b193e10e4"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.firestore();
const boardRef = db.collection('finance_blind_board');

const commentInput = document.getElementById('commentInput');
const submitBtn = document.getElementById('submitBtn');
const commentList = document.getElementById('commentList');

const adjectives = ["냉철한", "현명한", "예리한", "신중한", "통찰력 있는", "단호한", "지혜로운", "결단력 있는"];
const nouns = ["가치투자자", "배당족", "트레이더", "경제학자", "개미투자자", "건물주", "자산가", "분석가"];
function getRandomName() {
    const adj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const noun = nouns[Math.floor(Math.random() * nouns.length)];
    return `${adj} ${noun}`;
}

let myAnonName = localStorage.getItem('blind_name');
if (!myAnonName) {
    myAnonName = getRandomName();
    localStorage.setItem('blind_name', myAnonName);
}

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

function formatDate(timestamp) {
    if (!timestamp) return '';
    const d = timestamp.toDate();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    const hh = String(d.getHours()).padStart(2, '0');
    const min = String(d.getMinutes()).padStart(2, '0');
    return `${mm}.${dd} ${hh}:${min}`;
}

async function addComment(text, parentId = null) {
    if (text.length === 0) {
        alert('의견을 입력해주세요.');
        return false;
    }
    if (text.length > 1000) {
        alert('글자 수는 1000자를 초과할 수 없습니다.');
        return false;
    }
    try {
        await boardRef.add({
            author: myAnonName,
            text: text,
            parentId: parentId, // null if top-level
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        });
        return true;
    } catch (err) {
        console.error(err);
        alert('등록에 실패했습니다.');
        return false;
    }
}

if (submitBtn) {
    submitBtn.addEventListener('click', async () => {
        submitBtn.disabled = true;
        submitBtn.innerText = '등록 중...';
        const success = await addComment(commentInput.value.trim());
        if (success) {
            commentInput.value = '';
        }
        submitBtn.disabled = false;
        submitBtn.innerText = '의견 등록하기';
    });
}

// Global function to toggle reply box
window.toggleReplyBox = function(commentId) {
    const box = document.getElementById(`reply-box-${commentId}`);
    if (box) {
        box.classList.toggle('active');
    }
};

// Global function to submit reply
window.submitReply = async function(commentId) {
    const input = document.getElementById(`reply-input-${commentId}`);
    const btn = document.getElementById(`reply-btn-${commentId}`);
    if (!input || !btn) return;

    btn.disabled = true;
    btn.innerText = '등록 중...';
    
    const success = await addComment(input.value.trim(), commentId);
    if (success) {
        input.value = '';
        window.toggleReplyBox(commentId);
    }
    
    btn.disabled = false;
    btn.innerText = '답글 달기';
};

// Listen and build tree
if (commentList) {
    boardRef.orderBy('createdAt', 'desc').limit(200).onSnapshot(snapshot => {
        if (snapshot.empty) {
            commentList.innerHTML = '<p style="color:#888; font-size:14px;">아직 등록된 의견이 없습니다. 첫 번째 의견을 남겨보세요!</p>';
            return;
        }

        const comments = [];
        snapshot.forEach(doc => {
            comments.push({ id: doc.id, ...doc.data() });
        });

        // Build Tree
        const commentMap = {};
        const roots = [];
        
        // Reverse to show oldest first in replies, but keep roots ordered by createdAt desc
        comments.reverse().forEach(c => {
            c.children = [];
            commentMap[c.id] = c;
        });

        comments.forEach(c => {
            if (c.parentId && commentMap[c.parentId]) {
                commentMap[c.parentId].children.push(c);
            } else {
                roots.unshift(c); // prepend so newest roots are at top
            }
        });

        // Render Tree
        const renderComment = (c, isReply = false) => {
            const timeStr = c.createdAt ? formatDate(c.createdAt) : '방금 전';
            let html = `
                <div class="comment-item" style="${isReply ? 'margin-top: 10px; border-left: 3px solid var(--border); border-radius: 0 8px 8px 0;' : ''}">
                    <div class="comment-meta">
                        <span class="comment-author">${escapeHTML(c.author || '익명')}</span>
                        <span>${timeStr}</span>
                    </div>
                    <div class="comment-text">${escapeHTML(c.text || '')}</div>
                    
                    <button class="reply-btn" onclick="toggleReplyBox('${c.id}')">
                        💬 답글 달기
                    </button>
                    
                    <div id="reply-box-${c.id}" class="reply-box">
                        <textarea id="reply-input-${c.id}" class="comment-input" style="height: 70px;" placeholder="답글을 남겨주세요."></textarea>
                        <button id="reply-btn-${c.id}" class="submit-btn" onclick="submitReply('${c.id}')">답글 달기</button>
                    </div>
            `;
            
            if (c.children.length > 0) {
                html += `<div class="nested-comments">`;
                c.children.forEach(child => {
                    html += renderComment(child, true);
                });
                html += `</div>`;
            }
            
            html += `</div>`;
            return html;
        };

        commentList.innerHTML = '';
        roots.forEach(root => {
            const div = document.createElement('div');
            div.innerHTML = renderComment(root, false);
            commentList.appendChild(div.firstElementChild);
        });

    }, err => {
        console.error("Error fetching comments:", err);
        commentList.innerHTML = '<p style="color:red; font-size:14px;">데이터를 불러오는 중 오류가 발생했습니다.</p>';
    });
}
