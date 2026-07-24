const fs = require('fs');

let html = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/checkup-tips.html', 'utf8');

// Replace the title
const oldTitle = '💡 건강검진 실무자 강력 추천 18가지 꿀팁';
const newTitle = '💡 CHECKIT이 알려주는 건강검진 받기 전 꿀팁';

if (html.includes(oldTitle)) {
    html = html.replace(oldTitle, newTitle);
    fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/checkup-tips.html', html, 'utf8');
    console.log('Title updated successfully.');
} else {
    console.log('Title not found.');
}
