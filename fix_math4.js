const fs = require('fs');
const oldFull = fs.readFileSync('old_math.html', 'utf8');
const newFull = fs.readFileSync('newMath.html', 'utf8');
let currentHtml = fs.readFileSync('social-4-1/index.html', 'utf8');

const getMathInner = (html) => {
    const match = html.match(/<article id="math" class="subject-content">([\s\S]*?)<\/article>/);
    if (!match) return '';
    const articleInner = match[1];
    const headerMatch = articleInner.match(/<\/header>([\s\S]*)/);
    if (!headerMatch) return '';
    return headerMatch[1].trim();
};

const oldMathInner = getMathInner(oldFull);
const newMathInner = getMathInner(newFull);

const headerStr = '<article id="math" class="subject-content">\n    <header class="subject-header">\n        <h1 class="subject-title">수학: 핵심 개념과 공식 사전 (4-1 & 4-2)</h1>\n        <p class="subject-subtitle">개념플러스유형 완벽 반영! 꺾은선그래프부터 다각형까지 모든 개념을 확인하세요.</p>\n    </header>\n\n';

const dividerStr = '\n\n    <hr style="margin: 40px 0; border: 0; border-top: 2px dashed #BDC3C7;">\n\n';

const footerStr = '\n</article>';

const combinedMath = headerStr + newMathInner + dividerStr + oldMathInner + footerStr;

const regex = /<article id="math" class="subject-content">.*?<\/article>/s;
currentHtml = currentHtml.replace(regex, combinedMath);

fs.writeFileSync('social-4-1/index.html', currentHtml, 'utf8');
console.log('Math correctly merged using headers!');
