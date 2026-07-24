const fs = require('fs');
let appJs = fs.readFileSync('app.js', 'utf8');

const newNames = `const adjectives = ["걱정많은", "불안한", "건강챙기는", "피곤한", "아픈", "건강한", "운동하는", "식단하는"];
const nouns = ["직장인", "주부", "취준생", "대학생", "프리랜서", "아빠", "엄마", "환자"];`;

const oldNamesRegex = /const adjectives = \[.*?\];\s*const nouns = \[.*?\];/s;
appJs = appJs.replace(oldNamesRegex, newNames);

fs.writeFileSync('app.js', appJs, 'utf8');
console.log('Updated app.js names for health theme.');
