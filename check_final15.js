const fs = require('fs');
let js = fs.readFileSync('social-4-1/script.js', 'utf8');
const start = js.indexOf('function loadQnaBoard');
console.log(js.substring(start, start + 2000));
