const dictionary = {
    en: {
        title: "Checkup Talk",
        categories: {
            reception: "At Reception",
            exam: "During Exam",
            symptoms: "Symptoms/Pain",
            general: "General"
        },
        readThis: "Please read this message:",
        clickHint: "Click to show Korean translation"
    },
    ja: {
        title: "健康診断トーク",
        categories: {
            reception: "受付で",
            exam: "検査中",
            symptoms: "症状・痛み",
            general: "その他"
        },
        readThis: "このメッセージを読んでください：",
        clickHint: "クリックして韓国語を表示"
    },
    zh: {
        title: "体检交流",
        categories: {
            reception: "在接待处",
            exam: "检查期间",
            symptoms: "症状/疼痛",
            general: "其他"
        },
        readThis: "请阅读此信息：",
        clickHint: "点击显示韩语"
    },
    th: {
        title: "สนทนาตรวจสุขภาพ",
        categories: {
            reception: "ที่แผนกต้อนรับ",
            exam: "ระหว่างตรวจ",
            symptoms: "อาการ/ความเจ็บปวด",
            general: "ทั่วไป"
        },
        readThis: "โปรดอ่านข้อความนี้:",
        clickHint: "คลิกเพื่อแสดงภาษาเกาหลี"
    },
    ru: {
        title: "Медицинский осмотр",
        categories: {
            reception: "В регистратуре",
            exam: "Во время осмотра",
            symptoms: "Симптомы/Боль",
            general: "Общие"
        },
        readThis: "Пожалуйста, прочитайте это:",
        clickHint: "Нажмите, чтобы показать корейский"
    },
    vi: {
        title: "Giao tiếp khám sức khỏe",
        categories: {
            reception: "Tại quầy tiếp tân",
            exam: "Trong lúc khám",
            symptoms: "Triệu chứng/Đau",
            general: "Chung"
        },
        readThis: "Vui lòng đọc tin nhắn này:",
        clickHint: "Nhấn để hiển thị tiếng Hàn"
    }
};

const phrases = [
    // Reception
    { id: 'r1', cat: 'reception', ko: "건강검진 예약하고 왔습니다.", en: "I have an appointment for a health checkup.", ja: "健康診断の予約をして来ました。", zh: "我预约了健康体检。", th: "ฉันจองคิวตรวจสุขภาพไว้ครับ/ค่ะ", ru: "Я записан(а) на медицинский осмотр.", vi: "Tôi đã đặt lịch khám sức khỏe." },
    { id: 'r2', cat: 'reception', ko: "전날 밤 9시부터 금식했습니다.", en: "I have been fasting since 9 PM last night.", ja: "昨夜9時から絶食しています。", zh: "我从昨晚9点开始禁食。", th: "ฉันงดน้ำและอาหารตั้งแต่ 3 ทุ่มเมื่อคืนครับ/ค่ะ", ru: "Я ничего не ел(а) с 9 вечера прошлого дня.", vi: "Tôi đã nhịn ăn từ 9 giờ tối qua." },
    { id: 'r3', cat: 'reception', ko: "아침에 물을 조금 마셨습니다.", en: "I drank a little water this morning.", ja: "朝、少し水を飲みました。", zh: "我早上喝了一点水。", th: "เมื่อเช้าฉันดื่มน้ำไปนิดหน่อยครับ/ค่ะ", ru: "Утром я выпил(а) немного воды.", vi: "Sáng nay tôi có uống một chút nước." },
    { id: 'r4', cat: 'reception', ko: "문진표 작성은 다 했습니다.", en: "I have completed the medical questionnaire.", ja: "問診票の記入は終わりました。", zh: "我已经填好了问卷。", th: "ฉันกรอกแบบสอบถามสุขภาพเรียบร้อยแล้วครับ/ค่ะ", ru: "Я заполнил(а) медицинскую анкету.", vi: "Tôi đã điền xong phiếu câu hỏi y tế." },
    { id: 'r5', cat: 'reception', ko: "탈의실은 어디인가요?", en: "Where is the changing room?", ja: "更衣室はどこですか？", zh: "更衣室在哪里？", th: "ห้องเปลี่ยนเสื้อผ้าอยู่ที่ไหนครับ/ค่ะ?", ru: "Где находится раздевалка?", vi: "Phòng thay đồ ở đâu vậy?" },
    
    // Exam
    { id: 'e1', cat: 'exam', ko: "어떻게 해야 하나요?", en: "What should I do?", ja: "どうすればいいですか？", zh: "我该怎么做？", th: "ฉันต้องทำอย่างไรครับ/ค่ะ?", ru: "Что мне нужно делать?", vi: "Tôi phải làm sao?" },
    { id: 'e2', cat: 'exam', ko: "숨을 참기 힘듭니다.", en: "It's hard to hold my breath.", ja: "息を止めるのが苦しいです。", zh: "很难憋气。", th: "ฉันกลั้นหายใจลำบากครับ/ค่ะ", ru: "Мне трудно задерживать дыхание.", vi: "Tôi khó nín thở." },
    { id: 'e3', cat: 'exam', ko: "혈관이 잘 안 보일 수 있습니다.", en: "My veins might be hard to find.", ja: "血管が見えにくいかもしれません。", zh: "我的血管可能很难找。", th: "เส้นเลือดของฉันอาจจะมองเห็นยากครับ/ค่ะ", ru: "У меня могут быть плохо видны вены.", vi: "Mạch máu của tôi có thể hơi khó tìm." },
    { id: 'e4', cat: 'exam', ko: "수면 내시경을 원합니다.", en: "I want an endoscopy with sedation.", ja: "鎮静剤を使った内視鏡検査をお願いします。", zh: "我需要无痛内窥镜检查。", th: "ฉันต้องการทำส่องกล้องแบบวางยาสลบครับ/ค่ะ", ru: "Я хочу пройти эндоскопию под седацией(во сне).", vi: "Tôi muốn nội soi gây mê." },
    { id: 'e5', cat: 'exam', ko: "검사가 끝났나요?", en: "Is the exam finished?", ja: "検査は終わりましたか？", zh: "检查结束了吗？", th: "การตรวจเสร็จแล้วหรือยังครับ/ค่ะ?", ru: "Осмотр закончен?", vi: "Khám xong chưa ạ?" },

    // Symptoms
    { id: 's1', cat: 'symptoms', ko: "여기가 너무 아파요.", en: "It hurts a lot here.", ja: "ここがとても痛いです。", zh: "这里太痛了。", th: "ตรงนี้เจ็บมากเลยครับ/ค่ะ", ru: "Здесь очень болит.", vi: "Chỗ này đau quá." },
    { id: 's2', cat: 'symptoms', ko: "조금 어지럽습니다.", en: "I feel a bit dizzy.", ja: "少しめまいがします。", zh: "我有点头晕。", th: "ฉันรู้สึกเวียนหัวนิดหน่อยครับ/ค่ะ", ru: "У меня немного кружится голова.", vi: "Tôi hơi chóng mặt." },
    { id: 's3', cat: 'symptoms', ko: "속이 메스껍습니다.", en: "I feel nauseous.", ja: "吐き気がします。", zh: "我感到恶心。", th: "ฉันรู้สึกคลื่นไส้ครับ/ค่ะ", ru: "Меня тошнит.", vi: "Tôi thấy buồn nôn." },
    { id: 's4', cat: 'symptoms', ko: "숨쉬기가 답답합니다.", en: "I feel stuffy/hard to breathe.", ja: "息苦しいです。", zh: "呼吸困难。", th: "ฉันรู้สึกหายใจอึดอัดครับ/ค่ะ", ru: "Мне тяжело дышать.", vi: "Tôi thấy khó thở." },
    
    // General
    { id: 'g1', cat: 'general', ko: "화장실은 어디인가요?", en: "Where is the restroom?", ja: "トイレはどこですか？", zh: "洗手间在哪里？", th: "ห้องน้ำอยู่ที่ไหนครับ/ค่ะ?", ru: "Где находится туалет?", vi: "Nhà vệ sinh ở đâu?" },
    { id: 'g2', cat: 'general', ko: "다시 한 번 말씀해 주세요.", en: "Could you please say that again?", ja: "もう一度言ってください。", zh: "请再说一遍。", th: "ช่วยพูดอีกครั้งได้ไหมครับ/ค่ะ?", ru: "Не могли бы вы повторить?", vi: "Xin vui lòng nói lại lần nữa." },
    { id: 'g3', cat: 'general', ko: "천천히 말씀해 주세요.", en: "Please speak slowly.", ja: "ゆっくり話してください。", zh: "请说慢一点。", th: "ช่วยพูดช้าๆ หน่อยได้ไหมครับ/ค่ะ?", ru: "Пожалуйста, говорите медленнее.", vi: "Xin vui lòng nói chậm lại." },
    { id: 'g4', cat: 'general', ko: "결과는 언제 나오나요?", en: "When will the results be ready?", ja: "結果はいつ出ますか？", zh: "什么时候出结果？", th: "ผลจะออกเมื่อไหร่ครับ/ค่ะ?", ru: "Когда будут готовы результаты?", vi: "Khi nào có kết quả vậy?" }
];

let currentLang = 'en';
let currentCategory = 'reception';

const ui = {
    tabs: document.getElementById('category-tabs'),
    list: document.getElementById('phrase-list'),
    modal: document.getElementById('korean-modal'),
    modalLabel: document.getElementById('modal-label'),
    koreanText: document.getElementById('korean-text'),
    originalText: document.getElementById('original-text')
};

function init() {
    renderApp();
}

window.changeLanguage = function(lang, event) {
    currentLang = lang;
    
    // update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    renderApp();
}

window.setCategory = function(cat) {
    currentCategory = cat;
    renderApp();
}

function renderApp() {
    const dict = dictionary[currentLang];
    
    // Update Header
    document.querySelector('header p').textContent = dict.title;
    ui.modalLabel.textContent = dict.readThis;

    // Render Tabs
    ui.tabs.innerHTML = '';
    const cats = ['reception', 'exam', 'symptoms', 'general'];
    cats.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `cat-btn ${currentCategory === cat ? 'active' : ''}`;
        btn.textContent = dict.categories[cat];
        btn.onclick = () => setCategory(cat);
        ui.tabs.appendChild(btn);
    });

    // Render Phrases
    ui.list.innerHTML = '';
    const filtered = phrases.filter(p => p.cat === currentCategory);
    
    filtered.forEach(p => {
        const card = document.createElement('div');
        card.className = 'phrase-card';
        
        card.innerHTML = `
            <div class="phrase-text">${p[currentLang]}</div>
            <div class="phrase-hint">${dict.clickHint} ↗</div>
        `;
        
        card.onclick = () => openModal(p.ko, p[currentLang]);
        ui.list.appendChild(card);
    });
}

window.openModal = function(korean, original) {
    ui.koreanText.textContent = korean;
    ui.originalText.textContent = original;
    ui.modal.classList.add('active');
}

window.closeModal = function() {
    ui.modal.classList.remove('active');
}

// Close modal when clicking outside
ui.modal.addEventListener('click', (e) => {
    if(e.target === ui.modal) window.closeModal();
});

init();
