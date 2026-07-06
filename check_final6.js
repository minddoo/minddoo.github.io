const fs = require('fs');
const html = fs.readFileSync('social-4-1/index.html', 'utf8');

const regex = /<article id="math"[^>]*>/g;
let match;
while ((match = regex.exec(html)) !== null) {
    console.log(`Found at index ${match.index}: ${match[0]}`);
}
