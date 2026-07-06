const fs = require('fs');
let js = fs.readFileSync('social-4-1/script.js', 'utf8');
const qnaIdx = js.indexOf('function loadQnaBoard');
console.log(js.substring(qnaIdx, qnaIdx + 500));
