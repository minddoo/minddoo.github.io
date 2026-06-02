const dictionary = {
    en: {
        title: "Doctor Matcher",
        categories: {
            head: "Head/Neck",
            ent: "Eye/Ear/Nose",
            stomach: "Stomach/Chest",
            skin: "Skin/Hair",
            bone: "Bone/Muscle"
        },
        readThis: "Show this to Taxi/Reception:",
        clickHint: "Click to find Doctor"
    },
    ja: {
        title: "病院マッチング",
        categories: {
            head: "頭・首",
            ent: "目・耳・鼻",
            stomach: "胃・胸",
            skin: "皮膚・髪",
            bone: "骨・筋肉"
        },
        readThis: "タクシーや受付で見せてください：",
        clickHint: "クリックして診療科を確認"
    },
    zh: {
        title: "医院科室匹配",
        categories: {
            head: "头部/颈部",
            ent: "眼/耳/鼻",
            stomach: "胃/胸部",
            skin: "皮肤/头发",
            bone: "骨骼/肌肉"
        },
        readThis: "请向出租车或前台出示此信息：",
        clickHint: "点击查看科室"
    },
    th: {
        title: "ค้นหาแผนกโรงพยาบาล",
        categories: {
            head: "หัว/คอ",
            ent: "ตา/หู/จมูก",
            stomach: "กระเพาะ/หน้าอก",
            skin: "ผิวหนัง/ผม",
            bone: "กระดูก/กล้ามเนื้อ"
        },
        readThis: "แสดงข้อความนี้ให้แท็กซี่/เคาน์เตอร์:",
        clickHint: "คลิกเพื่อดูแผนก"
    },
    ru: {
        title: "Поиск врача",
        categories: {
            head: "Голова/Шея",
            ent: "Глаза/Уши/Нос",
            stomach: "Желудок/Грудь",
            skin: "Кожа/Волосы",
            bone: "Кости/Мышцы"
        },
        readThis: "Покажите это таксисту или на ресепшене:",
        clickHint: "Нажмите, чтобы узнать отделение"
    },
    vi: {
        title: "Tìm khoa khám bệnh",
        categories: {
            head: "Đầu/Cổ",
            ent: "Mắt/Tai/Mũi",
            stomach: "Dạ dày/Ngực",
            skin: "Da/Tóc",
            bone: "Xương/Cơ bắp"
        },
        readThis: "Đưa cho tài xế taxi hoặc quầy lễ tân xem:",
        clickHint: "Nhấn để xem khoa"
    }
};

const phrases = [
    // Head/Neck -> 신경과 (Neurology) or 신경외과 (Neurosurgery) but 내과 is common for general headache. Let's use 신경과 for severe, 내과 for general. Let's stick to easy ones.
    { id: 'h1', cat: 'head', 
      dept: "신경과", phrase: "신경과로 가주세요.", 
      en: "Severe Headache / Migraine / Dizziness", 
      ja: "ひどい頭痛・偏頭痛・めまい", 
      zh: "严重头痛 / 偏头痛 / 眩晕", 
      th: "ปวดหัวรุนแรง / ไมเกรน / เวียนหัว", 
      ru: "Сильная головная боль / Мигрень / Головокружение", 
      vi: "Đau đầu dữ dội / Đau nửa đầu / Chóng mặt" 
    },
    { id: 'h2', cat: 'head', 
      dept: "내과", phrase: "내과로 가주세요.", 
      en: "Fever / General Cold / Chills", 
      ja: "熱・風邪・悪寒", 
      zh: "发烧 / 普通感冒 / 畏寒", 
      th: "ไข้ / หวัดทั่วไป / หนาวสั่น", 
      ru: "Жар / Простуда / Озноб", 
      vi: "Sốt / Cảm lạnh / Ớn lạnh" 
    },

    // Eye/Ear/Nose -> 안과(Ophthalmology), 이비인후과(ENT)
    { id: 'e1', cat: 'ent', 
      dept: "안과", phrase: "안과로 가주세요.", 
      en: "Eye pain / Red eye / Blurry vision", 
      ja: "目の痛み・充血・視界がぼやける", 
      zh: "眼痛 / 红眼 / 视力模糊", 
      th: "ปวดตา / ตาแดง / ตาพร่ามัว", 
      ru: "Боль в глазах / Покраснение глаз / Нечеткое зрение", 
      vi: "Đau mắt / Đỏ mắt / Mờ mắt" 
    },
    { id: 'e2', cat: 'ent', 
      dept: "이비인후과", phrase: "이비인후과로 가주세요.", 
      en: "Sore throat / Runny nose / Earache", 
      ja: "喉の痛み・鼻水・耳の痛み", 
      zh: "喉咙痛 / 流鼻涕 / 耳痛", 
      th: "เจ็บคอ / น้ำมูกไหล / ปวดหู", 
      ru: "Боль в горле / Насморк / Боль в ухе", 
      vi: "Đau họng / Chảy nước mũi / Đau tai" 
    },

    // Stomach/Chest -> 내과 (Internal Medicine)
    { id: 's1', cat: 'stomach', 
      dept: "내과", phrase: "내과로 가주세요.", 
      en: "Stomachache / Indigestion / Diarrhea", 
      ja: "腹痛・消化不良・下痢", 
      zh: "胃痛 / 消化不良 / 腹泻", 
      th: "ปวดท้อง / อาหารไม่ย่อย / ท้องเสีย", 
      ru: "Боль в животе / Несварение / Диарея", 
      vi: "Đau bụng / Khó tiêu / Tiêu chảy" 
    },
    { id: 's2', cat: 'stomach', 
      dept: "내과", phrase: "내과로 가주세요.", 
      en: "Chest pain / Heartburn / Cough", 
      ja: "胸の痛み・胸焼け・咳", 
      zh: "胸痛 / 胃灼热 / 咳嗽", 
      th: "เจ็บหน้าอก / แสบร้อนกลางอก / ไอ", 
      ru: "Боль в груди / Изжога / Кашель", 
      vi: "Đau ngực / Ợ nóng / Ho" 
    },

    // Skin/Hair -> 피부과 (Dermatology)
    { id: 'sk1', cat: 'skin', 
      dept: "피부과", phrase: "피부과로 가주세요.", 
      en: "Skin rash / Itching / Hives", 
      ja: "発疹・かゆみ・じんましん", 
      zh: "皮疹 / 瘙痒 / 荨麻疹", 
      th: "ผื่น / คัน / ลมพิษ", 
      ru: "Сыпь / Зуд / Крапивница", 
      vi: "Phát ban / Ngứa / Nổi mề đay" 
    },
    { id: 'sk2', cat: 'skin', 
      dept: "피부과", phrase: "피부과로 가주세요.", 
      en: "Acne / Burn / Hair loss", 
      ja: "ニキビ・火傷・抜け毛", 
      zh: "痤疮 / 烧伤 / 脱发", 
      th: "สิว / แผลไฟไหม้ / ผมร่วง", 
      ru: "Акне / Ожог / Выпадение волос", 
      vi: "Mụn trứng cá / Bỏng / Rụng tóc" 
    },

    // Bone/Muscle -> 정형외과 (Orthopedics)
    { id: 'b1', cat: 'bone', 
      dept: "정형외과", phrase: "정형외과로 가주세요.", 
      en: "Sprained ankle / Joint pain", 
      ja: "足首の捻挫・関節痛", 
      zh: "脚踝扭伤 / 关节痛", 
      th: "ข้อเท้าพลิก / ปวดข้อ", 
      ru: "Растяжение лодыжки / Боль в суставах", 
      vi: "Bong gân mắt cá chân / Đau khớp" 
    },
    { id: 'b2', cat: 'bone', 
      dept: "정형외과", phrase: "정형외과로 가주세요.", 
      en: "Back pain / Neck pain / Muscle cramp", 
      ja: "腰痛・首の痛み・筋肉の痙攣", 
      zh: "背痛 / 颈痛 / 肌肉痉挛", 
      th: "ปวดหลัง / ปวดคอ / ตะคริว", 
      ru: "Боль в спине / Боль в шее / Мышечная судорога", 
      vi: "Đau lưng / Đau cổ / Chuột rút" 
    }
];

let currentLang = 'en';
let currentCategory = 'head';

const ui = {
    tabs: document.getElementById('category-tabs'),
    list: document.getElementById('phrase-list'),
    modal: document.getElementById('korean-modal'),
    modalLabel: document.getElementById('modal-label'),
    deptText: document.getElementById('dept-text'),
    koreanPhrase: document.getElementById('korean-phrase'),
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
    const cats = ['head', 'ent', 'stomach', 'skin', 'bone'];
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
        
        card.onclick = () => openModal(p.dept, p.phrase, p[currentLang]);
        ui.list.appendChild(card);
    });
}

window.openModal = function(dept, phrase, original) {
    ui.deptText.textContent = dept;
    ui.koreanPhrase.textContent = phrase;
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
