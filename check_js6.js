const fs = require('fs');
const js = fs.readFileSync('social-4-1/script.js', 'utf8');

const startIndex = js.indexOf('function loadPublicAudioBoard()');
const snippet = js.substring(startIndex, startIndex + 3000);
console.log(snippet.match(/html \+= [^]*/s)[0]);
