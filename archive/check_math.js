const fs = require('fs');
const html = fs.readFileSync('old_math.html', 'utf8');

const regex = /<article id="math" class="subject-content">.*?<\/article>/s;
const match = html.match(regex);
if (match) {
    console.log(match[0].substring(0, 1000));
}
