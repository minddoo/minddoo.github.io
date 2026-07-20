const fs = require('fs');
const html = fs.readFileSync('social-4-1/index.html', 'utf8');
const match = html.match(/<article id="math" class="subject-content">([\s\S]*?)<\/article>/s);
if (match) {
    const article = match[1];
    const length = article.length;
    console.log('Math article length:', length);
    console.log('Contains social studies?', article.includes('경제활동과'));
    console.log('Contains 4-1?', article.includes('꺾은선그래프란?'));
    console.log('Contains 4-2?', article.includes('분수의 덧셈과 뺄셈'));
}
