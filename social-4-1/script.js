function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('show');
}
// --- 탭 전환 로직 ---
function switchSubject(subject) {
    const menu = document.getElementById('mobileMenu');
    if (menu && menu.classList.contains('show')) {
        menu.classList.remove('show');
    }
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    const contents = document.querySelectorAll('.subject-content');
    contents.forEach(content => content.classList.remove('active'));

    const clickedBtn = Array.from(buttons).find(btn => btn.getAttribute('onclick').includes(subject));
    if (clickedBtn) {
        clickedBtn.classList.add('active');
    }

    const targetContent = document.getElementById(subject);
    if (targetContent) {
        targetContent.classList.add('active');
    }

    if (subject === 'quiz') {
        renderRandomQuiz();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// --- 질문 게시판 (Q&A) ---
let unsubscribeQna = null;

function openQnaModal() {
    document.getElementById('qnaModal').style.display = 'flex';
}
function closeQnaModal() {
    document.getElementById('qnaModal').style.display = 'none';
}
function openQnaBoardModal() {
    document.getElementById('qnaBoardModal').style.display = 'flex';
    loadQnaBoard();
}
function closeQnaBoardModal() {
    document.getElementById('qnaBoardModal').style.display = 'none';
    if(unsubscribeQna) {
        unsubscribeQna();
        unsubscribeQna = null;
    }
}

async function submitQna() {
    const qName = document.getElementById('qnaName').value.trim();
    const qText = document.getElementById('qnaText').value.trim();
    
    if(!qName || !qText) {
        alert("이름과 질문 내용을 모두 적어주세요!");
        return;
    }
    
    document.getElementById('qnaStatusMessage').innerText = '질문을 올리는 중입니다...';
    document.getElementById('submitQnaBtn').disabled = true;
    
    try {
        await db.collection("qna").add({
            name: qName,
            text: qText,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            timeStr: new Date().toLocaleString()
        });
        
        alert("✅ 질문이 성공적으로 등록되었습니다!");
        document.getElementById('qnaText').value = '';
        closeQnaModal();
    } catch (e) {
        console.error(e);
        alert("오류가 발생했습니다: " + e.message);
    } finally {
        document.getElementById('qnaStatusMessage').innerText = '';
        document.getElementById('submitQnaBtn').disabled = false;
    }
}

function loadQnaBoard() {
    const boardDiv = document.getElementById('qnaBoardContent');
    boardDiv.innerHTML = '<p style="text-align:center;">질문을 불러오는 중입니다...</p>';
    
    unsubscribeQna = db.collection("qna")
        .orderBy("createdAt", "desc")
        .limit(30)
        .onSnapshot((snapshot) => {
            if(snapshot.empty) {
                boardDiv.innerHTML = '<p style="text-align:center; color:#7F8C8D;">아직 질문이 없습니다.</p>';
                return;
            }
            let html = '';
            snapshot.forEach(doc => {
                const data = doc.data();
                html += `
                    <div class="qna-item">
                        <div class="qna-header">
                            <span class="qna-name">🙋 ${data.name}</span>
                            <span class="qna-time">${data.timeStr}</span>
                        </div>
                        <div class="qna-text">${data.text}</div>
                    </div>
                `;
            });
            boardDiv.innerHTML = html;
        });
}


// --- 녹음 숙제 기능 ---
let mediaRecorder;
let audioChunks = [];
let audioBlob = null;
let unsubscribeBoard = null;

function openRecordModal() {
    document.getElementById('recordModal').style.display = 'flex';
}
function closeRecordModal() {
    document.getElementById('recordModal').style.display = 'none';
    if(mediaRecorder && mediaRecorder.state !== 'inactive') stopRecording();
}
function openBoardModal() {
    document.getElementById('boardModal').style.display = 'flex';
    loadPublicAudioBoard();
}
function closeBoardModal() {
    document.getElementById('boardModal').style.display = 'none';
    if (unsubscribeBoard) {
        unsubscribeBoard();
        unsubscribeBoard = null;
    }
}

function loadPublicAudioBoard() {
    const boardDiv = document.getElementById('publicAudioBoard');
    boardDiv.innerHTML = '<p style="text-align: center; color: #7F8C8D; padding: 20px;">데이터를 불러오는 중입니다...</p>';
    
    unsubscribeBoard = db.collection("homeworks")
        .orderBy("createdAt", "desc")
        .limit(30)
        .onSnapshot((snapshot) => {
            if (snapshot.empty) {
                boardDiv.innerHTML = '<p style="text-align: center; color: #7F8C8D; padding: 20px;">아직 등록된 숙제가 없습니다. 첫 번째로 올려보세요!</p>';
                return;
            }
            
            let html = '';
            snapshot.forEach((doc) => {
                const data = doc.data();
                const docId = doc.id;
                const isChecked = data.isChecked || false;
                
                const checkBtnHtml = isChecked 
                    ? `<span class="checked-badge">💮 선생님 확인 완료</span>`
                    : `<button class="action-btn check-btn" onclick="markAsChecked('${docId}')">확인 도장 쾅!</button>`;

                html += `
                    <div class="board-item ${isChecked ? 'item-checked' : ''}">
                        <div class="board-item-header">
                            <div>
                                <span class="board-name">🧑‍🎓 ${data.name}</span>
                                <span class="board-time">${data.timeStr}</span>
                            </div>
                            <div>${checkBtnHtml}</div>
                        </div>
                        <audio controls src="${data.audioUrl}" preload="metadata"></audio>
                    </div>
                `;
            });
            boardDiv.innerHTML = html;
        }, (error) => {
            console.error("Error fetching board", error);
            boardDiv.innerHTML = '<p style="color: #E74C3C; text-align: center; padding: 20px;">데이터를 불러오지 못했습니다.</p>';
        });
}

window.markAsChecked = async function(docId) {
    try {
        await db.collection("homeworks").doc(docId).update({ isChecked: true });
    } catch(err) {
        console.error("Error updating check", err);
        alert('도장 찍기에 실패했습니다.');
    }
}

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true, video: false });
        
        let options = {};
        if (MediaRecorder.isTypeSupported('audio/webm;codecs=opus')) {
            options = { mimeType: 'audio/webm;codecs=opus' };
        } else if (MediaRecorder.isTypeSupported('audio/mp4')) {
            options = { mimeType: 'audio/mp4' };
        }
        
        mediaRecorder = new MediaRecorder(stream, options);
        audioChunks = [];

        mediaRecorder.ondataavailable = event => {
            if (event.data && event.data.size > 0) {
                audioChunks.push(event.data);
            }
        };

        mediaRecorder.onstop = () => {
            // iOS 사파리 버그 해결: onstop 내부에서 트랙을 종료해야 파일이 손상(오류)되지 않음
            if (mediaRecorder.stream) {
                mediaRecorder.stream.getTracks().forEach(track => track.stop());
            }

            const mimeType = mediaRecorder.mimeType || (audioChunks[0] ? audioChunks[0].type : 'audio/mp4');
            audioBlob = new Blob(audioChunks, { type: mimeType });
            
            const audioUrl = URL.createObjectURL(audioBlob);
            const audioPlayback = document.getElementById('audioPlayback');
            audioPlayback.src = audioUrl;
            document.getElementById('audioPlaybackContainer').style.display = 'block';
        };

        mediaRecorder.start();
        
        document.getElementById('startRecordBtn').style.display = 'none';
        document.getElementById('stopRecordBtn').style.display = 'inline-block';
        document.getElementById('recordStatusMessage').innerText = '녹음 중입니다... 말씀을 끝낸 후 중지 버튼을 누르세요.';
        document.getElementById('recordStatusMessage').style.color = '#E74C3C';
        document.getElementById('audioPlaybackContainer').style.display = 'none';
        
    } catch (err) {
        alert('마이크 접근 권한이 필요합니다. 브라우저(사파리/크롬) 설정에서 마이크를 허용해주세요.');
        console.error(err);
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
        mediaRecorder.stop();
        // 트랙 종료는 onstop 이벤트 안에서 처리하도록 이동함 (파일 손상 방지)
    }
    
    document.getElementById('startRecordBtn').style.display = 'inline-block';
    document.getElementById('startRecordBtn').innerText = '🔄 다시 녹음하기';
    document.getElementById('stopRecordBtn').style.display = 'none';
    document.getElementById('recordStatusMessage').innerText = '녹음이 완료되었습니다. 미리듣기 후 제출해주세요.';
    document.getElementById('recordStatusMessage').style.color = '#27AE60';
}

async function submitRecording() {
    const studentName = document.getElementById('studentName').value.trim();
    if (!studentName) {
        alert('이름을 입력해주세요!');
        return;
    }
    if (!audioBlob) {
        alert('녹음된 파일이 없습니다!');
        return;
    }
    
    document.getElementById('recordStatusMessage').innerText = '숙제를 제출하고 있습니다... 잠시만 기다려주세요.';
    document.getElementById('recordStatusMessage').style.color = '#3498DB';
    document.getElementById('submitRecordBtn').disabled = true;
    
    try {
        const reader = new FileReader();
        reader.readAsDataURL(audioBlob);
        reader.onloadend = async () => {
            const base64data = reader.result;
            
            try {
                await db.collection("homeworks").add({
                    name: studentName,
                    audioUrl: base64data,
                    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
                    timeStr: new Date().toLocaleString(),
                    isChecked: false
                });
                
                alert('✅ 숙제 제출이 완료되었습니다! 닫기 버튼을 누르고 게시판에서 확인하세요.');
                closeRecordModal();
                openBoardModal();
            } catch(err) {
                console.error("Firestore Upload failed", err);
                alert('업로드에 실패했습니다: ' + err.message);
                document.getElementById('recordStatusMessage').innerText = '업로드 실패. 다시 시도해주세요.';
                document.getElementById('recordStatusMessage').style.color = '#E74C3C';
            } finally {
                document.getElementById('submitRecordBtn').disabled = false;
            }
        };
    } catch(err) {
        console.error("Conversion failed", err);
        document.getElementById('submitRecordBtn').disabled = false;
    }
}
// --- 다이내믹 랜덤 퀴즈 ---
const quizBank = [
    {
        question: "(사회) 지역 간 교류를 하면 좋은 점이 아닌 것은 무엇일까요?",
        options: ["물건을 사고팔아 경제적 이익을 얻는다.", "우리 지역을 찾는 사람이 많아져 지역이 발전한다.", "우리 지역에 없는 시설을 이용할 수 있어서 생활이 편리해진다.", "사람들과 물건이 오가는 과정에서 인구가 줄어든다."],
        answer: 3,
        explanation: "교류를 통해 인구가 줄어드는 것은 아닙니다. 오히려 사람들이 많이 찾아와서 지역이 발전하고 살기 좋아집니다."
    },
    {
        question: "(사회) 생활에 필요한 물건을 만들거나 서비스를 제공하는 활동을 무엇이라고 부를까요?",
        options: ["생산 활동", "소비 활동", "선택 활동", "환경 활동"],
        answer: 0,
        explanation: "물건이나 서비스를 직접 '만드는' 활동을 생산 활동이라고 부릅니다."
    },
    {
        question: "(사회) 방위표, 기호와 범례, 축척, 등고선은 무엇의 기본 요소인가요?",
        options: ["나침반", "지도", "국가유산", "달력"],
        answer: 1,
        explanation: "이 네 가지는 지도를 구성하는 가장 기본적인 요소들입니다."
    },
    {
        question: "(사회) 형태가 없는 음악, 춤, 연극, 기술 등은 어떤 국가유산에 해당할까요?",
        options: ["문화유산", "자연유산", "무형유산", "복합유산"],
        answer: 2,
        explanation: "형태가 없는(무형) 유산을 무형유산이라고 부릅니다."
    },
    {
        question: "(수학) 모든 삼각형의 세 각의 크기의 합은 무조건 몇 도일까요?",
        options: ["180도", "270도", "360도", "400도"],
        answer: 0,
        explanation: "크기나 모양에 상관없이 모든 삼각형 내각의 합은 180도입니다!"
    },
    {
        question: "(수학) 네 변의 길이가 모두 같고, 네 각이 모두 직각인 완벽한 사각형의 이름은 무엇일까요?",
        options: ["사다리꼴", "평행사변형", "정사각형", "마름모"],
        answer: 2,
        explanation: "변의 길이와 각의 크기가 모두 같은 가장 완벽한 사각형은 정사각형입니다."
    },
    {
        question: "(수학) 두 변의 길이가 같은 삼각형을 무엇이라고 부르나요?",
        options: ["정삼각형", "이등변삼각형", "직각삼각형", "예각삼각형"],
        answer: 1,
        explanation: "두 변의 길이가 같은 삼각형은 '이등변삼각형'입니다."
    },
    {
        question: "(수학) 분모는 그대로 두고 분자끼리 더하는 분수는 어떤 분수의 덧셈인가요?",
        options: ["소수의 덧셈", "대분수의 덧셈", "분모가 같은 진분수의 덧셈", "자연수의 덧셈"],
        answer: 2,
        explanation: "분모가 같은 진분수의 덧셈은 분모는 놔두고 분자만 더합니다."
    },
    {
        question: "(수학) 소수의 덧셈과 뺄셈을 할 때 가장 중요하게 맞춰서 세로로 써야 하는 것은 무엇인가요?",
        options: ["맨 끝자리 숫자", "소수점 위치", "가장 큰 숫자", "0의 개수"],
        answer: 1,
        explanation: "소수의 덧셈과 뺄셈은 무조건 소수점의 위치를 위아래로 맞추는 것이 가장 중요합니다!"
    },
    {
        question: "(수학) 시간이나 날짜 등 연속적으로 변하는 양의 변화를 알아볼 때 가장 좋은 그래프는?",
        options: ["막대그래프", "그림그래프", "원그래프", "꺾은선그래프"],
        answer: 3,
        explanation: "연속적으로 변하는 양의 변화 흐름을 한눈에 볼 수 있는 것은 꺾은선그래프입니다."
    }
];

let currentQuiz = [];

function renderRandomQuiz() {
    // 배열을 섞어서 5개만 추출
    const shuffled = [...quizBank].sort(() => 0.5 - Math.random());
    currentQuiz = shuffled.slice(0, 5);
    
    const container = document.getElementById('dynamicQuizContainer');
    let html = '';
    
    currentQuiz.forEach((q, index) => {
        html += `
            <div class="quiz-question">
                <h3>${index + 1}. ${q.question}</h3>
                <div class="quiz-options">
        `;
        q.options.forEach((opt, optIndex) => {
            html += `
                    <label><input type="radio" name="q${index}" value="${optIndex}"> ${opt}</label>
            `;
        });
        html += `
                </div>
                <div class="quiz-answer" id="ans${index}"><strong>정답: ${q.answer + 1}번.</strong> ${q.explanation}</div>
            </div>
        `;
    });
    
    container.innerHTML = html;
    document.getElementById('quizResult').style.display = 'none';
}

function submitQuiz() {
    let score = 0;
    let allAnswered = true;
    const pointPerQuestion = 100 / currentQuiz.length;
    
    currentQuiz.forEach((q, index) => {
        const checked = document.querySelector(`input[name="q${index}"]:checked`);
        if (!checked) {
            allAnswered = false;
        } else if (parseInt(checked.value) === q.answer) {
            score += pointPerQuestion;
        }
        
        // 해설 보이기
        document.getElementById(`ans${index}`).style.display = 'block';
    });
    
    if (!allAnswered) {
        alert("풀지 않은 문제가 있습니다! 그래도 채점을 진행합니다.");
    }
    
    const resultDiv = document.getElementById('quizResult');
    resultDiv.style.display = 'block';
    
    if (score === 100) {
        resultDiv.innerHTML = `<h3>💯 100점 만점! 완벽합니다! 🎉</h3><p>배운 내용을 아주 잘 이해하고 있군요!</p>`;
        resultDiv.className = 'quiz-result perfect';
    } else if (score >= 60) {
        resultDiv.innerHTML = `<h3>👍 ${score}점! 참 잘했어요!</h3><p>틀린 문제는 해설을 보고 다시 복습해볼까요?</p>`;
        resultDiv.className = 'quiz-result good';
    } else {
        resultDiv.innerHTML = `<h3>💪 ${score}점! 조금 더 힘내세요!</h3><p>사회/수학 이론을 한 번 더 읽어보고 다시 도전해보세요!</p>`;
        resultDiv.className = 'quiz-result tryagain';
    }
    
    window.scrollTo({ top: resultDiv.offsetTop - 50, behavior: 'smooth' });
}







