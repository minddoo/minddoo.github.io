const fs = require('fs');

const oldFull = fs.readFileSync('old_math.html', 'utf8');
const newFull = fs.readFileSync('newMath.html', 'utf8');
let currentHtml = fs.readFileSync('social-4-1/index.html', 'utf8');

// 1. Get the newly generated 4-1 SVG content
const newMathMatch = newFull.match(/<section class="theory-section">([\s\S]*?)<\/section>/);
const newMathInner = newMathMatch ? newMathMatch[1].trim() : '';

// 2. Get the full old 4-2 math article (which contains sections 1 to 6)
const oldMathMatch = oldFull.match(/<article id="math" class="subject-content">([\s\S]*?)<\/article>/s);
let oldMathArticle = oldMathMatch ? oldMathMatch[0] : '';

// 3. Replace the contents of the 6th section inside oldMathArticle
const regexSec6 = /(<section class="theory-section">\s*<h2>6\. 꺾은선그래프<\/h2>)[\s\S]*?(<\/section>)/;
oldMathArticle = oldMathArticle.replace(regexSec6, `$1\n${newMathInner}\n$2`);

// 4. Update the header title to reflect it's both 4-1 and 4-2
oldMathArticle = oldMathArticle.replace(
    '<h1 class="subject-title">수학: 핵심 개념과 공식 사전 (4-2)</h1>',
    '<h1 class="subject-title">수학: 핵심 개념과 공식 사전 (4-2 & 4-1)</h1>'
);
oldMathArticle = oldMathArticle.replace(
    '<p class="subject-subtitle">개념플러스유형 완벽 반영! 분수, 소수, 삼각형, 사각형, 다각형의 모든 공식을 확인하세요.</p>',
    '<p class="subject-subtitle">개념플러스유형 완벽 반영! 분수부터 다각형, 그리고 4-1 꺾은선그래프까지 모든 개념을 확인하세요.</p>'
);

// 5. Replace the current math article in index.html with the fixed oldMathArticle
const currentMathRegex = /<article id="math" class="subject-content">.*?<\/article>/s;
currentHtml = currentHtml.replace(currentMathRegex, oldMathArticle);

fs.writeFileSync('social-4-1/index.html', currentHtml, 'utf8');
console.log('Math correctly nested in Section 6!');
