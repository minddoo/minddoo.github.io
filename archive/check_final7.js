const fs = require('fs');
const html = fs.readFileSync('social-4-1/index.html', 'utf8');

const snip1 = html.substring(12504 - 100, 12504 + 100);
const snip2 = html.substring(38064 - 100, 38064 + 100);
console.log('--- Snip 1 ---');
console.log(snip1);
console.log('--- Snip 2 ---');
console.log(snip2);
