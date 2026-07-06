const fs = require('fs');
const html = fs.readFileSync('temp_utf8.html', 'utf8');

const lines = html.split('\n');
let count = 0;
for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const opens = (line.match(/<div\b/gi) || []).length;
    const closes = (line.match(/<\/div>/gi) || []).length;
    count += opens - closes;
    if (line.includes('</article>')) {
        console.log("Article end at line " + (i+1) + ": depth " + count);
    }
}
console.log("Total depth: " + count);
