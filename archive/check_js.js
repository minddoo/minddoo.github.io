const fs = require('fs');
const js = fs.readFileSync('social-4-1/script.js', 'utf8');
const regex = /<button class="action-btn check-btn".*?>.*?</g;
const match = regex.exec(js);
if (match) {
    const snippet = js.substring(match.index, match.index + 100);
    console.log(JSON.stringify(snippet));
}
