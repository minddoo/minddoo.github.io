const fs = require('fs');

const oldMathFull = fs.readFileSync('old_math.html', 'utf8');
const newMathFull = fs.readFileSync('newMath.html', 'utf8');
const indexHtml = fs.readFileSync('social-4-1/index.html', 'utf8');

const extractSection = (html) => {
    const start = html.indexOf('<section class="theory-section">');
    if (start === -1) return '';
    const startInner = start + '<section class="theory-section">'.length;
    const end = html.lastIndexOf('</section>');
    return html.substring(startInner, end);
};

const oldInner = extractSection(oldMathFull);
const newInner = extractSection(newMathFull);

const headerStr = '<article id="math" class="subject-content">\n    <header class="subject-header">\n        <h1 class="subject-title">수학: 핵심 개념과 공식 사전 (4-1 & 4-2)</h1>\n        <p class="subject-subtitle">개념플러스유형 완벽 반영! 꺾은선그래프부터 다각형까지 모든 개념을 확인하세요.</p>\n    </header>\n    <section class="theory-section">\n';

const dividerStr = '\n\n        <hr style="margin: 40px 0; border: 0; border-top: 2px dashed #BDC3C7;">\n\n';

const footerStr = '\n    </section>\n</article>';

const combinedMath = headerStr + newInner + dividerStr + oldInner + footerStr;

const regex = /<article id="math" class="subject-content">.*?<\/article>/s;
const newIndexHtml = indexHtml.replace(regex, combinedMath);

fs.writeFileSync('social-4-1/index.html', newIndexHtml, 'utf8');
console.log('Successfully merged math sections');
