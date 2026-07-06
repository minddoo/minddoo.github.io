const fs = require('fs');
const newFull = fs.readFileSync('newMath.html', 'utf8');
const match = newFull.match(/<section class="theory-section">([\s\S]*?)<\/section>/);
console.log(match ? match[1].substring(0, 500) : 'none');
