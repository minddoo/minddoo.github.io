const fs = require('fs');
const html = fs.readFileSync('social-4-1/index.html', 'utf8');
const match = html.match(/<article id="math" class="subject-content">.*?<\/article>/s);
if (match) {
    const h2s = match[0].match(/<h2[^>]*>.*?<\/h2>/g);
    console.log(h2s);
}
