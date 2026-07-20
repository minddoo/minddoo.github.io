const fs = require('fs');
const filePath = 'social-4-1/index.html';
let html = fs.readFileSync(filePath, 'utf8');

if (!html.includes('<meta name="robots" content="noindex, nofollow">')) {
    html = html.replace('</title>', '</title>\n    <meta name="robots" content="noindex, nofollow">');
    fs.writeFileSync(filePath, html, 'utf8');
    console.log('Added noindex meta tag to social-4-1/index.html');
} else {
    console.log('noindex meta tag already exists in social-4-1/index.html');
}
