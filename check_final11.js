const fs = require('fs');
const html = fs.readFileSync('social-4-1/index.html', 'utf8');
const matches = html.match(/<article id="math"[^>]*>/g);
console.log('Final Math article count:', matches ? matches.length : 0);
