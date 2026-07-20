const fs = require('fs');
const html = fs.readFileSync('temp_utf8.html', 'utf8');

const lines = html.split('\n');
let count = 0;
for (let i = 274; i < 737; i++) {
    const line = lines[i];
    const opens = (line.match(/<div\b/gi) || []).length;
    const closes = (line.match(/<\/div>/gi) || []).length;
    count += opens - closes;
    if (opens !== closes) {
        console.log("Line " + (i+1) + " [Depth " + count + "]: " + line.trim());
    }
}
