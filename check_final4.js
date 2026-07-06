const fs = require('fs');
const html = fs.readFileSync('social-4-1/index.html', 'utf8');
const match = html.match(/<article id="math" class="subject-content">.*?<\/article>/s);
if (match) {
    const h2s = match[0].match(/<h2[^>]*>.*?<\/h2>/g);
    console.log(h2s);
    
    // Check if newMathInner SVG is present under section 6
    const sec6Match = match[0].match(/<h2>6\. 꺾은선그래프<\/h2>([\s\S]*?)<\/section>/);
    if (sec6Match) {
        console.log('Section 6 contains SVG?', sec6Match[1].includes('<svg'));
        console.log('Section 6 contains theory-card?', sec6Match[1].includes('theory-card'));
    }
}
