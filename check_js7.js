const fs = require('fs');
const js = fs.readFileSync('social-4-1/script.js', 'utf8');

const regex = /<div class="board-item /g;
console.log(js.match(regex).length);
