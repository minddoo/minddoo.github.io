const fs = require('fs');
const html = fs.readFileSync('test_structure.html', 'utf8');

const opens = (html.match(/<div\b/gi) || []).length;
const closes = (html.match(/<\/div>/gi) || []).length;
console.log('Test file Opens: ' + opens + ' Closes: ' + closes);
