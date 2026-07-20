const fs = require('fs');
const html = fs.readFileSync('old_math.html', 'utf8');
const mathRegex = /<article id="math" class="subject-content">([\s\S]*?)<\/article>/s;
const mathMatch = html.match(mathRegex);
if (mathMatch) {
    const article = mathMatch[1];
    const section6Regex = /<h2>6\. 꺾은선그래프<\/h2>([\s\S]*?)(?=<\/section>)/;
    const match6 = article.match(section6Regex);
    console.log(match6 ? match6[1].substring(0, 500) : 'not found');
}
