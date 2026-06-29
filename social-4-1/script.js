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

function openRecordModal() {
    document.getElementById('recordModal').style.display = 'flex';
}

function closeRecordModal() {
    document.getElementById('recordModal').style.display = 'none';
    if(mediaRecorder && mediaRecorder.state !== 'inactive') {
        stopRecording();
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
            audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
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
        alert('마이크 접근 권한이 필요합니다. 브라우저 설정에서 마이크를 허용해주세요.');
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
        const timestamp = new Date().getTime();
        const fileName = `recordings/${studentName}_${timestamp}.webm`;
        const storageRef = storage.ref().child(fileName);
        
        // Storage 업로드
        await storageRef.put(audioBlob);
        const downloadURL = await storageRef.getDownloadURL();
        
        // Firestore에 기록
        await db.collection("homeworks").add({
            name: studentName,
            audioUrl: downloadURL,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
            timeStr: new Date().toLocaleString()
        });
        
        alert('✅ 숙제 제출이 완료되었습니다! 선생님께 전송되었습니다.');
        closeRecordModal();
        
    } catch(err) {
        console.error("Upload failed", err);
        alert('업로드에 실패했습니다: ' + err.message);
        document.getElementById('recordStatusMessage').innerText = '업로드 실패. 다시 시도해주세요.';
        document.getElementById('recordStatusMessage').style.color = '#E74C3C';
    } finally {
        document.getElementById('submitRecordBtn').disabled = false;
    }
}
