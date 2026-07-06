const fs = require('fs');
const html = fs.readFileSync('social-4-1/index.html', 'utf8');

const regex = /<article id="math" class="subject-content">.*?<\/article>/s;
const match = html.match(regex);
if (match) {
    const lines = match[0].split('\n');
    console.log('Math lines:', lines.length);
    // Find all '<h2>' inside math
    const h2s = match[0].match(/<h2[^>]*>.*?<\/h2>/g);
    console.log(h2s);
}
