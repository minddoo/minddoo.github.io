const fs = require('fs');
const js = fs.readFileSync('social-4-1/script.js', 'utf8');

const startIndex = js.indexOf('function loadPublicAudioBoard()');
const snippet = js.substring(startIndex, startIndex + 2000);

const opens = (snippet.match(/<div\b/gi) || []).length;
const closes = (snippet.match(/<\/div>/gi) || []).length;

console.log('AudioBoard Opens: ' + opens + ', Closes: ' + closes);
console.log(snippet);
