const fs = require('fs');
const html = fs.readFileSync('test_3f.html', 'utf8');

const mathRegex = /<article id="math" class="subject-content">.*?<\/article>/s;
const mathMatch = html.match(mathRegex);

if (mathMatch) {
    const h2s = mathMatch[0].match(/<h2[^>]*>.*?<\/h2>/g);
    console.log(h2s);
}
