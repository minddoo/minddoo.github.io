const fs = require('fs');
let html = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/nhis-guide.html', 'utf8');

// The bug is that copyNHISNumber is inside <script src="app.js">
const brokenScriptRegex = /<script src="app\.js">([\s\S]*?)<\/script>/;

const match = html.match(brokenScriptRegex);
if (match && match[1].trim().length > 0) {
    const jsContent = match[1];
    
    // Replace the broken script tag with a clean one
    html = html.replace(brokenScriptRegex, '<script src="app.js"></script>\n    <script>' + jsContent + '</script>');
    
    fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/nhis-guide.html', html, 'utf8');
    console.log('Fixed script tag issue in nhis-guide.html');
} else {
    console.log('Could not find the broken script tag.');
}
