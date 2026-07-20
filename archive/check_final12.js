const fs = require('fs');
let js = fs.readFileSync('social-4-1/script.js', 'utf8');

const audioIdx = js.indexOf('function loadPublicAudioBoard');
const audioSubstr = js.substring(audioIdx, audioIdx + 1300);

const qnaIdx = js.indexOf('function loadQnaBoard');
const qnaSubstr = js.substring(qnaIdx, qnaIdx + 500);

console.log('Audio board contains board-top-row?', audioSubstr.includes('board-top-row'));
console.log('Audio board contains play-btn?', audioSubstr.includes('play-btn'));
console.log('Audio board missing </div ?>', audioSubstr.includes('</div\n'));

console.log('QnA board contains qna-header?', qnaSubstr.includes('qna-header'));
console.log('QnA board contains board-top-row?', qnaSubstr.includes('board-top-row'));
