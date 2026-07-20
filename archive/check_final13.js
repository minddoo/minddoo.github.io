const fs = require('fs');
let js = fs.readFileSync('social-4-1/script.js', 'utf8');
console.log('Script length:', js.length);
console.log(js.substring(0, 1000));
