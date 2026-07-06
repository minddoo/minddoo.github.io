const fs = require('fs');

// old_math.html is actually the full index.html from 3f6530e
const oldFull = fs.readFileSync('old_math.html', 'utf8');
const newFull = fs.readFileSync('newMath.html', 'utf8');
let currentHtml = fs.readFileSync('social-4-1/index.html', 'utf8');

const getMathInner = (html) => {
    const match = html.match(/<article id="math" class="subject-content">([\s\S]*?)<\/article>/);
    if (!match) return '';
    const articleInner = match[1];
    const sectionMatch = articleInner.match(/<section class="theory-section">([\s\S]*?)<\/section>/);
    if (!sectionMatch) return '';
    return sectionMatch[1];
};

const oldMathInner = getMathInner(oldFull);
// But wait, the 4-1 Line Graph section I generated was in newMath.html
const newMathInner = getMathInner(newFull) || newFull; // newMath.html might just be the snippet. Wait, let me check what newMath.html is.
