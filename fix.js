const fs = require('fs');
const indexHtml = fs.readFileSync('social-4-1/index.html', 'utf8');
const newMathContent = fs.readFileSync('newMath.html', 'utf8');

const regex = /<article id="math" class="subject-content">.*?<\/article>/s;
const newHtml = indexHtml.replace(regex, newMathContent);

fs.writeFileSync('social-4-1/index.html', newHtml, 'utf8');
console.log('Replaced correctly!');
