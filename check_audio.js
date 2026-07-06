const fs = require('fs');
let js = fs.readFileSync('social-4-1/script.js', 'utf8');
const audioIdx = js.indexOf('function loadPublicAudioBoard');
console.log(js.substring(audioIdx, audioIdx + 1300));
