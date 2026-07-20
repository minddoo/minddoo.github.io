const fs = require('fs');
const html = fs.readFileSync('social-4-1/index.html', 'utf8');
const matches = html.match(/<article id="math" class="subject-content">/g);
console.log('Math article count:', matches ? matches.length : 0);
