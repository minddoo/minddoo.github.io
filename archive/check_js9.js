const fs = require('fs');
const js = fs.readFileSync('social-4-1/script.js', 'utf8');

const regex = /<div class="board-item /g;
const match = regex.exec(js);
if (match) {
    const start = match.index;
    const snippet = js.substring(start, start + 1000);
    console.log(snippet.substring(0, snippet.indexOf(';')));
}
