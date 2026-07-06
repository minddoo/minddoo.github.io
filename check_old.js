const fs = require('fs');
const html = fs.readFileSync('old_math.html', 'utf8');
const mathRegex = /<article id="math" class="subject-content">.*?<\/article>/s;
const match = html.match(mathRegex);
if(match) {
    const lines = match[0].split('\n').slice(0, 30);
    console.log(lines.join('\n'));
}
