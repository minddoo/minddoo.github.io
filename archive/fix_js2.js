const fs = require('fs');
const js = fs.readFileSync('social-4-1/script.js', 'utf8');
const newSnippet = fs.readFileSync('new_js_snippet.txt', 'utf8');

const regex = /html \+= `[\s\S]*?`;/;
const newJs = js.replace(regex, newSnippet);

fs.writeFileSync('social-4-1/script.js', newJs, 'utf8');
console.log('Fixed script.js cleanly!');
