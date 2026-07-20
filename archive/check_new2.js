const fs = require('fs');
const newFull = fs.readFileSync('newMath.html', 'utf8');
const match = newFull.match(/<h2[^>]*>.*?<\/h2>/g);
console.log(match);
