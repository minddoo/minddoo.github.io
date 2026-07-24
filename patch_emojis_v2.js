const fs = require('fs');

let dictJs = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/health-dict.js', 'utf8');

const newLogic = `
            const getIcon = (str) => {
                if (/키|신장\\s*\\(/.test(str)) return "📏";
                if (/체중|체질량|BMI|인바디/.test(str)) return "⚖️";
                if (/허리/.test(str)) return "👖";
                if (/시력|안저|안압/.test(str)) return "👓";
                if (/청력/.test(str)) return "🎧";
                if (/혈압/.test(str)) return "💓";
                if (/맥박/.test(str)) return "⏱️";
                if (/문진|상담/.test(str)) return "👨‍⚕️";
                if (/초음파/.test(str)) return "📻";
                if (/내시경/.test(str)) return "🔍";
                if (/X선|X-ray|촬영|맘모/.test(str)) return "🩻";
                if (/MRI|MRA/.test(str)) return "🖥️";
                if (/심전도|폐기능/.test(str)) return "📈";
                if (/혈당|당화혈색소|요당/.test(str)) return "🍬";
                if (/콜레스테롤|중성지방|지단백/.test(str)) return "🧈";
                if (/혈액형/.test(str)) return "🅰️";
                if (/백혈구|적혈구|혈소판|혈색소|빈혈|혈액|MCV|MCH/.test(str)) return "🩸";
                if (/철분|페리틴|TIBC/.test(str)) return "🧲";
                if (/비타민/.test(str)) return "☀️";
                if (/AST|ALT|지티|빌리루빈|알칼리|단백|알부민|간염/.test(str)) return "🧪";
                if (/요소|크레아티닌|여과율/.test(str)) return "💧";
                if (/아밀라아제|리파아제/.test(str)) return "🍰";
                if (/나트륨|칼륨|염소|전해질/.test(str)) return "🧂";
                if (/칼슘|인|골밀도/.test(str)) return "🦴";
                if (/요단백|요잠혈|요산도|요빌|요케톤|요침사|요산/.test(str)) return "🚽";
                if (/대변|분변/.test(str)) return "💩";
                if (/갑상선|티록신|T3|T4|TSH/.test(str)) return "🦋";
                if (/여성|에스트로겐|자궁|난소/.test(str)) return "🚺";
                if (/남성|테스토스테론|전립선/.test(str)) return "🚹";
                if (/암|종양|항원|마커|AFP|CEA|PSA|CA\\s*\\d|SCC|EBV|칼시토닌|바스프/.test(str)) return "🧬";
                if (/균|헬리코박터/.test(str)) return "🦠";
                return "🩺";
            };
            const emoji = getIcon(item.item);
`;

const oldLogicRegex = /const emojiMatch = item\.part\.match\(\/.*?\/[^;]*\);\s*const emoji = emojiMatch \? emojiMatch\[0\] : "🩺";/s;

if (oldLogicRegex.test(dictJs)) {
    dictJs = dictJs.replace(oldLogicRegex, newLogic);
    fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/health-dict.js', dictJs, 'utf8');
    console.log('Successfully updated health-dict.js with dynamic item-specific emojis.');
} else {
    console.log('Regex did not match. Printing snippet around "const emojiMatch":');
    const idx = dictJs.indexOf('const emojiMatch');
    if (idx !== -1) {
        console.log(dictJs.substring(idx - 50, idx + 200));
    }
}
