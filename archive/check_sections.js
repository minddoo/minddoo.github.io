const fs = require('fs');
const html = fs.readFileSync('old_math.html', 'utf8');
const match = html.match(/<article id="math" class="subject-content">([\s\S]*?)<\/article>/);
if (match) {
    const sections = match[1].match(/<\/section>/g);
    console.log('Number of closing sections:', sections ? sections.length : 0);
}
