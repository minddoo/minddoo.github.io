const fs = require('fs');
let html = fs.readFileSync('social-4-1/index.html', 'utf8');

// 1. First, strip out ALL math articles (even with BOM)
// We will match optionally the BOM \uFEFF
const mathRegex = /\uFEFF?<article id="math"[^>]*>[\s\S]*?<\/article>/g;
html = html.replace(mathRegex, '');

// 2. Now html has NO math articles. We find where to inject it.
// We inject it right after the science article.
const scienceEndRegex = /<\/article>\s*<!-- 수학 탭 콘텐츠 -->/;
const match = html.match(scienceEndRegex);

if (match) {
    const oldFull = fs.readFileSync('old_math.html', 'utf8');
    const newFull = fs.readFileSync('newMath.html', 'utf8');
    
    // Get new math inner SVG content
    const newMathMatch = newFull.match(/<section class="theory-section">([\s\S]*?)<\/section>/);
    const newMathInner = newMathMatch ? newMathMatch[1].trim() : '';

    // Get old full math content
    const oldMathMatch = oldFull.match(/<article id="math" class="subject-content">([\s\S]*?)<\/article>/s);
    let oldMathArticle = oldMathMatch ? oldMathMatch[0] : '';

    // Replace section 6 content
    const regexSec6 = /(<section class="theory-section">\s*<h2>6\. 꺾은선그래프<\/h2>)[\s\S]*?(<\/section>)/;
    oldMathArticle = oldMathArticle.replace(regexSec6, `$1\n${newMathInner}\n$2`);

    // Update headers
    oldMathArticle = oldMathArticle.replace(
        '<h1 class="subject-title">수학: 핵심 개념과 공식 사전 (4-2)</h1>',
        '<h1 class="subject-title">수학: 핵심 개념과 공식 사전 (4-1 & 4-2)</h1>'
    );
    oldMathArticle = oldMathArticle.replace(
        '<p class="subject-subtitle">개념플러스유형 완벽 반영! 분수, 소수, 삼각형, 사각형, 다각형의 모든 공식을 확인하세요.</p>',
        '<p class="subject-subtitle">개념플러스유형 완벽 반영! 4-1 꺾은선그래프부터 4-2 다각형까지 모든 개념을 확인하세요.</p>'
    );

    // Inject
    html = html.replace(scienceEndRegex, `</article>\n\n        <!-- 수학 탭 콘텐츠 -->\n        ${oldMathArticle}`);
    fs.writeFileSync('social-4-1/index.html', html, 'utf8');
    console.log('Cleaned up duplicate math articles and injected the perfect one!');
} else {
    console.log('Could not find injection point!');
}
