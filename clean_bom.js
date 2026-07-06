const fs = require('fs');
let js = fs.readFileSync('social-4-1/script.js', 'utf8');

// Replace zero-width no-break space (U+FEFF) with empty string
js = js.replace(/\uFEFF/g, '');

fs.writeFileSync('social-4-1/script.js', js, 'utf8');
console.log('Cleaned up BOM from script.js!');
