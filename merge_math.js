const fs = require('fs');

const oldMathFull = fs.readFileSync('old_math.html', 'utf8');
const newMathFull = fs.readFileSync('newMath.html', 'utf8');
const indexHtml = fs.readFileSync('social-4-1/index.html', 'utf8');

// oldMathFull has <article id="math"> ... </article>
// I want to extract the inner HTML of <section class="theory-section"> from BOTH,
// and combine them inside a single <article id="math">

const extractSection = (html) => {
    const start = html.indexOf('<section class="theory-section">');
    if (start === -1) return '';
    const startInner = start + '<section class="theory-section">'.length;
    const end = html.lastIndexOf('</section>');
    return html.substring(startInner, end);
};

const oldInner = extractSection(oldMathFull);
const newInner = extractSection(newMathFull);

const combinedMath = \
<article id="math" class="subject-content">
    <header class="subject-header">
        <h1 class="subject-title">수학: 핵심 개념과 공식 사전 (4-1 & 4-2)</h1>
        <p class="subject-subtitle">개념플러스유형 완벽 반영! 꺾은선그래프부터 다각형까지 모든 개념을 확인하세요.</p>
    </header>
    <section class="theory-section">
        <!-- 4-1 꺾은선 그래프 부분 -->
        \
        
        <hr style="margin: 40px 0; border: 0; border-top: 2px dashed #BDC3C7;">
        
        <!-- 4-2 나머지 부분 -->
        \
    </section>
</article>
\;

const regex = /<article id="math" class="subject-content">.*?<\/article>/s;
const newIndexHtml = indexHtml.replace(regex, combinedMath);

fs.writeFileSync('social-4-1/index.html', newIndexHtml, 'utf8');
console.log('Successfully merged math sections');
