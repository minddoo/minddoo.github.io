// --- 탭 전환 로직 ---
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
    if(mediaRecorder && mediaRecorder.state !== 'inactive') {
        stopRecording();
    }
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
                        <audio controls src="${data.audioUrl}"></audio>
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
        await db.collection("homeworks").doc(docId).update({
            isChecked: true
        });
    } catch(err) {
        console.error("Error updating check", err);
        alert('도장 찍기에 실패했습니다.');
    }
}

async function startRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        mediaRecorder = new MediaRecorder(stream);
        audioChunks = [];

        mediaRecorder.ondataavailable = event => {
            audioChunks.push(event.data);
        };

        mediaRecorder.onstop = () => {
            // 모바일(iOS 등) 호환성을 위해 브라우저가 지정한 mimeType을 그대로 사용
            const mimeType = mediaRecorder.mimeType || 'audio/mp4'; 
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
        mediaRecorder.stream.getTracks().forEach(track => track.stop()); // Stop all tracks
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
    
    document.getElementById('recordStatusMessage').innerText = '업로드 중입니다... 잠시만 기다려주세요.';
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

// --- 퀴즈 채점 기능 ---
function submitQuiz() {
    let score = 0;
    
    // 문제 1 정답 확인 (사회 3단원: 인구가 줄어든다 = 4번)
    if(document.querySelector('input[name="q1"]:checked')?.value === "4") score += 25;
    // 문제 2 정답 확인 (사회 4단원: 빵집에서 빵 만들기 = 1번)
    if(document.querySelector('input[name="q2"]:checked')?.value === "1") score += 25;
    // 문제 3 정답 확인 (수학 3단원: 180도 = 1번)
    if(document.querySelector('input[name="q3"]:checked')?.value === "1") score += 25;
    // 문제 4 정답 확인 (수학 4단원: 정사각형 = 3번)
    if(document.querySelector('input[name="q4"]:checked')?.value === "3") score += 25;
    
    const resultDiv = document.getElementById('quizResult');
    resultDiv.style.display = 'block';
    
    if (score === 100) {
        resultDiv.innerHTML = `<h3>💯 100점 만점! 완벽합니다! 🎉</h3><p>배운 내용을 아주 잘 이해하고 있군요!</p>`;
        resultDiv.className = 'quiz-result perfect';
    } else if (score >= 50) {
        resultDiv.innerHTML = `<h3>👍 ${score}점! 참 잘했어요!</h3><p>틀린 문제는 이론 탭에서 다시 복습해볼까요?</p>`;
        resultDiv.className = 'quiz-result good';
    } else {
        resultDiv.innerHTML = `<h3>💪 ${score}점! 조금 더 힘내세요!</h3><p>사회/수학 이론을 한 번 더 읽어보고 다시 도전해보세요!</p>`;
        resultDiv.className = 'quiz-result tryagain';
    }
    
    // 정답 해설 보이기
    const answers = document.querySelectorAll('.quiz-answer');
    answers.forEach(ans => ans.style.display = 'block');
}
