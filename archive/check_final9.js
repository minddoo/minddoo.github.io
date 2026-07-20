const fs = require('fs');
const html = fs.readFileSync('social-4-1/index.html', 'utf8');

const regex = /<article id="math"[^>]*>([\s\S]*?)<\/article>/g;
let match;
let i = 1;
while ((match = regex.exec(html)) !== null) {
    console.log(`--- Article ${i} (length: ${match[1].length}) ---`);
    console.log(match[1].substring(0, 200));
    i++;
}
