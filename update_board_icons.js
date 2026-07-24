const fs = require('fs');

// 1. Update app.js: change collection and localStorage key
let appJs = fs.readFileSync('app.js', 'utf8');
appJs = appJs.replace(/const boardRef = db\.collection\('finance_blind_board'\);/, "const boardRef = db.collection('health_blind_board');");
appJs = appJs.replace(/localStorage\.getItem\('blind_name'\)/g, "localStorage.getItem('health_blind_name')");
appJs = appJs.replace(/localStorage\.setItem\('blind_name'/g, "localStorage.setItem('health_blind_name'");
fs.writeFileSync('app.js', appJs, 'utf8');
console.log('Updated app.js for new health board and localstorage key.');

// 2. Update health-dict.js to add emojis to parts for richer UI
let dictJs = fs.readFileSync('health-dict.js', 'utf8');
// We will replace the parts with emoji versions
const emojiMap = {
    "간 (Liver)": "🩸 간 (Liver)",
    "신장 (Kidney)": "💧 신장 (Kidney)",
    "심혈관/대사 (Cardio/Metabolic)": "❤️ 심혈관/대사",
    "소화기 (Digestive)": "🍏 소화기 (위/대장)",
    "혈액 질환 (Hematology)": "💉 혈액 질환",
    "갑상선 (Thyroid)": "🦋 갑상선",
    "심장/폐 (Heart/Lung)": "🫁 심장/폐",
    "종양표지자 (Tumor Marker)": "🧬 종양표지자(암)",
    "뼈/근육 (Bone/Muscle)": "🦴 뼈/관절",
    "여성 의학 (Women)": "👩‍⚕️ 여성 의학",
    "비뇨기 (Urology)": "🚽 비뇨기",
    "안과/이비인후과 (Eye/ENT)": "👁️ 안과/이비인후과"
};

for (const [oldPart, newPart] of Object.entries(emojiMap)) {
    const regex = new RegExp(`part: "${oldPart}"`, 'g');
    dictJs = dictJs.replace(regex, `part: "${newPart}"`);
}
// Also update the UI rendering in health-dict.js to make it look less empty
// Let's add a large icon for the card
dictJs = dictJs.replace(/<span class="part">\\$\{item\.part\}<\/span><h3>\\$\{item\.item\}<\/h3>/g, 
    `<div style="font-size:30px; margin-bottom:10px;">🩺</div><span class="part">\${item.part}</span><h3>\${item.item}</h3>`);

fs.writeFileSync('health-dict.js', dictJs, 'utf8');
console.log('Updated health-dict.js with emojis and icons.');
