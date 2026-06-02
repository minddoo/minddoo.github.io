const dictionary = {
    en: {
        title: "Dietary Card",
        categories: {
            diet: "Diet/Religion",
            allergy: "Allergies",
            ingredients: "No Ingredients"
        },
        readThis: "Please read this message:",
        clickHint: "Click to show Korean translation"
    },
    ja: {
        title: "食事制限カード",
        categories: {
            diet: "宗教・食事制限",
            allergy: "アレルギー",
            ingredients: "苦手な食材"
        },
        readThis: "このメッセージを読んでください：",
        clickHint: "クリックして韓国語を表示"
    },
    zh: {
        title: "饮食要求卡",
        categories: {
            diet: "信仰/饮食",
            allergy: "过敏",
            ingredients: "忌口食材"
        },
        readThis: "请阅读此信息：",
        clickHint: "点击显示韩语"
    },
    th: {
        title: "บัตรแจ้งการรับประทานอาหาร",
        categories: {
            diet: "ความเชื่อ/การกิน",
            allergy: "อาการแพ้",
            ingredients: "ส่วนผสมที่ไม่กิน"
        },
        readThis: "โปรดอ่านข้อความนี้:",
        clickHint: "คลิกเพื่อแสดงภาษาเกาหลี"
    },
    ru: {
        title: "Диетическая карточка",
        categories: {
            diet: "Диета/Религия",
            allergy: "Аллергия",
            ingredients: "Без ингредиентов"
        },
        readThis: "Пожалуйста, прочитайте это:",
        clickHint: "Нажмите, чтобы показать корейский"
    },
    vi: {
        title: "Thẻ yêu cầu ăn uống",
        categories: {
            diet: "Tôn giáo/Chế độ ăn",
            allergy: "Dị ứng",
            ingredients: "Nguyên liệu không ăn"
        },
        readThis: "Vui lòng đọc tin nhắn này:",
        clickHint: "Nhấn để hiển thị tiếng Hàn"
    }
};

const phrases = [
    // Diet
    { id: 'd1', cat: 'diet', 
      ko: "저는 채식주의자(비건)입니다. 고기, 닭, 해산물, 우유, 계란, 젓갈, 고기 육수가 전혀 안 들어간 메뉴가 있나요?", 
      en: "I am a Vegan. Is there a menu strictly without meat, chicken, seafood, milk, eggs, fish sauce, or meat broth?", 
      ja: "私はヴィーガンです。肉、鶏、魚介、牛乳、卵、塩辛、肉のダシが一切入っていないメニューはありますか？", 
      zh: "我是纯素食者。有没有完全不含肉类、鸡肉、海鲜、牛奶、鸡蛋、鱼露和肉汤的菜？", 
      th: "ฉันเป็นวีแกน มีเมนูที่ไม่มีเนื้อสัตว์ ไก่ อาหารทะเล นม ไข่ น้ำปลา หรือน้ำซุปเนื้อสัตว์เลยไหมครับ/ค่ะ?", 
      ru: "Я веган. Есть ли блюдо строго без мяса, курицы, морепродуктов, молока, яиц, рыбного соуса или мясного бульона?", 
      vi: "Tôi ăn chay thuần (Vegan). Có món nào hoàn toàn không có thịt, gà, hải sản, sữa, trứng, nước mắm hay nước dùng từ thịt không?" 
    },
    { id: 'd2', cat: 'diet', 
      ko: "돼지고기를 먹지 못합니다. 이 메뉴에 햄, 베이컨, 소시지, 라드(돼지기름)가 조금이라도 들어가나요?", 
      en: "I cannot eat pork. Does this menu contain any ham, bacon, sausage, or lard at all?", 
      ja: "豚肉が食べられません。このメニューにはハム、ベーコン、ソーセージ、ラード(豚脂)が少しでも入っていますか？", 
      zh: "我不能吃猪肉。这道菜里有一点火腿、培根、香肠或猪油吗？", 
      th: "ฉันไม่ทานหมู เมนูนี้มีแฮม เบคอน ไส้กรอก หรือมันหมูผสมอยู่แม้แต่น้อยไหมครับ/ค่ะ?", 
      ru: "Я не ем свинину. Содержит ли это блюдо хотя бы немного ветчины, бекона, сосисок или свиного жира?", 
      vi: "Tôi không ăn được thịt lợn. Món này có chứa chút giăm bông, thịt xông khói, xúc xích hay mỡ lợn nào không?" 
    },
    { id: 'd3', cat: 'diet', 
      ko: "할랄(Halal) 고기만 먹습니다. 돼지고기나 알코올이 안 들어간 해산물/야채 메뉴가 있나요?", 
      en: "I only eat Halal meat. Do you have a seafood/vegetable menu without pork or alcohol?", 
      ja: "ハラール肉しか食べられません。豚肉やアルコールを使用していない魚介・野菜メニューはありますか？", 
      zh: "我只吃清真肉类。有没有不含猪肉或酒精的海鲜/蔬菜菜单？", 
      th: "ฉันทานแต่เนื้อฮาลาล มีเมนูอาหารทะเลหรือผักที่ไม่มีหมูหรือแอลกอฮอล์ไหมครับ/ค่ะ?", 
      ru: "Я ем только халяльное мясо. Есть ли меню из морепродуктов/овощей без свинины и алкоголя?", 
      vi: "Tôi chỉ ăn thịt Halal. Có thực đơn hải sản/rau nào không có thịt lợn hoặc cồn không?" 
    },

    // Allergy
    { id: 'a1', cat: 'allergy', 
      ko: "땅콩/견과류 알레르기가 아주 심합니다. 이 음식에 견과류나 땅콩기름이 들어가나요? 닿기만 해도 위험합니다.", 
      en: "I have a severe allergy to peanuts/tree nuts. Does this food contain nuts or peanut oil? Even cross-contamination is dangerous.", 
      ja: "ピーナッツ・ナッツ類に重度のアレルギーがあります。この料理にナッツやピーナッツオイルは入っていますか？触れるだけでも危険です。", 
      zh: "我对花生/坚果有严重的过敏反应。这种食物含有坚果或花生油吗？甚至交叉污染也是危险的。", 
      th: "ฉันแพ้ถั่วลิสง/ถั่วอย่างรุนแรง อาหารนี้มีถั่วหรือน้ำมันถั่วลิสงไหมครับ/ค่ะ? แค่สัมผัสก็อันตราย", 
      ru: "У меня сильная аллергия на арахис/орехи. Содержит ли эта еда орехи или арахисовое масло? Опасно даже соприкосновение.", 
      vi: "Tôi bị dị ứng nặng với đậu phộng/các loại hạt. Thức ăn này có chứa hạt hoặc dầu đậu phộng không? Chỉ chạm vào thôi cũng nguy hiểm." 
    },
    { id: 'a2', cat: 'allergy', 
      ko: "해산물(새우, 게, 조개류) 알레르기가 있습니다. 멸치 육수나 새우젓, 굴소스도 빼주세요.", 
      en: "I am allergic to seafood (shrimp, crab, shellfish). Please remove anchovy broth, shrimp paste, and oyster sauce.", 
      ja: "魚介類（エビ、カニ、貝類）アレルギーです。イワシのダシやエビの塩辛、オイスターソースも抜いてください。", 
      zh: "我对海鲜（虾、蟹、贝类）过敏。请去掉凤尾鱼汤、虾酱和蚝油。", 
      th: "ฉันแพ้อาหารทะเล (กุ้ง ปู หอย) กรุณาไม่ใส่น้ำซุปปลากะตัก กะปิ และซอสหอยนางรม", 
      ru: "У меня аллергия на морепродукты (креветки, крабы, моллюски). Пожалуйста, уберите анчоусный бульон, креветочную пасту и устричный соус.", 
      vi: "Tôi bị dị ứng với hải sản (tôm, cua, động vật có vỏ). Vui lòng không dùng nước dùng cá cơm, mắm tôm và dầu hào." 
    },
    { id: 'a3', cat: 'allergy', 
      ko: "우유나 유제품(치즈, 버터, 크림) 알레르기가 있습니다. 소스나 빵에 버터가 들어가나요?", 
      en: "I am allergic to dairy (milk, cheese, butter, cream). Is there butter in the sauce or bread?", 
      ja: "牛乳や乳製品（チーズ、バター、クリーム）のアレルギーです。ソースやパンにバターは入っていますか？", 
      zh: "我对乳制品（牛奶、奶酪、黄油、奶油）过敏。酱汁或面包里有黄油吗？", 
      th: "ฉันแพ้นมและผลิตภัณฑ์จากนม (ชีส เนย ครีม) ในซอสหรือขนมปังมีเนยไหมครับ/ค่ะ?", 
      ru: "У меня аллергия на молочные продукты (молоко, сыр, сливочное масло, сливки). Есть ли сливочное масло в соусе или хлебе?", 
      vi: "Tôi bị dị ứng với sữa/sản phẩm từ sữa (phô mai, bơ, kem). Trong nước sốt hoặc bánh mì có bơ không?" 
    },

    // Ingredients
    { id: 'i1', cat: 'ingredients', 
      ko: "오이를 못 먹습니다. 김밥이나 반찬에서 오이는 전부 빼주세요.", 
      en: "I cannot eat cucumbers. Please remove all cucumbers from the gimbap and side dishes.", 
      ja: "キュウリが食べられません。キンパやおかずからキュウリをすべて抜いてください。", 
      zh: "我不能吃黄瓜。请把紫菜包饭和小菜里的黄瓜都去掉。", 
      th: "ฉันทานแตงกวาไม่ได้ กรุณาไม่ใส่แตงกวาในคิมบับและเครื่องเคียงทั้งหมดครับ/ค่ะ", 
      ru: "Я не ем огурцы. Пожалуйста, уберите огурцы из кимпаба и гарниров.", 
      vi: "Tôi không ăn được dưa chuột. Vui lòng bỏ hết dưa chuột ra khỏi kimbap và các món ăn kèm." 
    },
    { id: 'i2', cat: 'ingredients', 
      ko: "고수(향채)를 못 먹습니다. 음식에 고수는 절대 넣지 말아 주세요.", 
      en: "I cannot eat cilantro (coriander). Please do not put any cilantro in the food.", 
      ja: "パクチー（香菜）が食べられません。料理にパクチーは絶対に入れないでください。", 
      zh: "我不能吃香菜。请绝对不要在菜里放香菜。", 
      th: "ฉันทานผักชีไม่ได้ กรุณาอย่าใส่ผักชีในอาหารเด็ดขาดครับ/ค่ะ", 
      ru: "Я не ем кинзу (кориандр). Пожалуйста, не кладите кинзу в еду.", 
      vi: "Tôi không ăn được rau mùi (ngò rí). Xin tuyệt đối đừng cho rau mùi vào thức ăn." 
    },
    { id: 'i3', cat: 'ingredients', 
      ko: "매운 음식을 전혀 못 먹습니다. 고춧가루, 청양고추, 고추장을 아예 빼서 하얗게 만들어 주실 수 있나요?", 
      en: "I cannot eat spicy food at all. Can you make it completely non-spicy (white) by removing all chili powder, spicy peppers, and gochujang?", 
      ja: "辛い食べ物が全く食べられません。粉唐辛子、青唐辛子、コチュジャンを完全に入れずに、白く作ってもらえますか？", 
      zh: "我一点辣也吃不了。能把辣椒粉、青阳辣椒和辣椒酱完全去掉，做成不辣的（白色的）吗？", 
      th: "ฉันทานเผ็ดไม่ได้เลย ช่วยทำแบบไม่เผ็ดเลย (สีขาว) โดยไม่ใส่พริกป่น พริกชี้ฟ้า และโคชูจังได้ไหมครับ/ค่ะ?", 
      ru: "Я совсем не ем острую еду. Не могли бы вы сделать её совершенно не острой (белой), убрав весь перец чили, острый перец и кочуджан?", 
      vi: "Tôi không ăn cay được chút nào. Bạn có thể làm nó hoàn toàn không cay (màu trắng) bằng cách bỏ hết ớt bột, ớt xanh và tương ớt được không?" 
    }
];

let currentLang = 'en';
let currentCategory = 'diet';

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
    const cats = ['diet', 'allergy', 'ingredients'];
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
