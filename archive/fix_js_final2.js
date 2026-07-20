const fs = require('fs');
let js = fs.readFileSync('social-4-1/script.js', 'utf8');
const newSnippet = fs.readFileSync('new_snippet.txt', 'utf8');

const startIdx = js.indexOf('function loadPublicAudioBoard');
if (startIdx !== -1) {
    const substr = js.substring(startIdx);
    const htmlMatch = substr.match(/html \+= `[\s\S]*?`;/);
    if (htmlMatch) {
        const before = js.substring(0, startIdx + htmlMatch.index);
        const after = js.substring(startIdx + htmlMatch.index + htmlMatch[0].length);
        fs.writeFileSync('social-4-1/script.js', before + newSnippet + after, 'utf8');
        console.log('Fixed script.js cleanly!');
    }
}
