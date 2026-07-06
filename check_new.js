const fs = require('fs');
const newFull = fs.readFileSync('newMath.html', 'utf8');
console.log(newFull.substring(0, 300));
