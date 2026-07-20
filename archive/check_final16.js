const fs = require('fs');
const html = fs.readFileSync('social-4-1/index.html', 'utf8');
const mathRegex = /<article id="math" class="subject-content">([\s\S]*?)<\/article>/s;
const mathMatch = html.match(mathRegex);

if (mathMatch) {
    const section6Regex = /<h2>6\. 꺾은선그래프<\/h2>([\s\S]*?)(?=<\/section>)/;
    const match6 = mathMatch[1].match(section6Regex);
    if (match6) {
        console.log('Section 6 length:', match6[1].length);
        console.log('Contains theory-card:', match6[1].includes('theory-card'));
        console.log('Contains SVG:', match6[1].includes('<svg'));
        console.log('First 200 chars:', match6[1].substring(0, 200));
    } else {
        console.log('Section 6 not found in math article!');
    }
}
