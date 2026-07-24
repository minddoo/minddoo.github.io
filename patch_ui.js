const fs = require('fs');

// 1. Update style.css
let css = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/style.css', 'utf8');

// Remove hover pop-out effect
css = css.replace(/transform:\s*translateY\(-3px\);/g, '');

// Make page header highly colorful
css = css.replace(/background:\s*linear-gradient\(135deg, #e0f2f1 0%, #ffffff 100%\);/g, 'background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%);');

// Add classes for card image blocks
const newCss = `
.card-img {
    width: 100%;
    height: 120px;
    border-radius: 8px;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
}
.mascot-img {
    width: 150px;
    height: auto;
    display: block;
    margin: 0 auto 20px auto;
}
`;
if (!css.includes('.card-img')) {
    css += '\n' + newCss;
}

fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/style.css', css, 'utf8');


// 2. Update health-dict.js to add colorful image blocks
let dictJs = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/health-dict.js', 'utf8');

// Replace the hardcoded string with a dynamic gradient and emoji image block
// We need to parse the innerHTML construction
// The old line was: 
// card.innerHTML = \`<div style="font-size:30px; margin-bottom:10px;">🩺</div><span class="part">\${item.part}</span><h3>\${item.item}</h3><p style="font-size:14px; color:var(--text-light); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">\${item.result}</p>\`;

const oldInnerHtmlStr = /card\.innerHTML = `.*?`;/s;

const newInnerHtmlStr = `
            // Generate a deterministic gradient color based on the part name
            const charCode = item.part.charCodeAt(0) + item.part.charCodeAt(item.part.length - 1);
            const hue1 = (charCode * 37) % 360;
            const hue2 = (charCode * 59) % 360;
            const emojiMatch = item.part.match(/^[\\uD800-\\uDBFF\\uDC00-\\uDFFF\\u200D\\uFE0F]+/);
            const emoji = emojiMatch ? emojiMatch[0] : "🩺";
            
            card.innerHTML = \`
                <div class="card-img" style="background: linear-gradient(45deg, hsl(\${hue1}, 80%, 80%), hsl(\${hue2}, 80%, 80%));">
                    \${emoji}
                </div>
                <span class="part">\${item.part}</span>
                <h3>\${item.item}</h3>
                <p style="font-size:14px; color:var(--text-light); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.5;">\${item.result}</p>
            \`;`;

dictJs = dictJs.replace(oldInnerHtmlStr, "card.innerHTML = \"\";" + newInnerHtmlStr);

fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/health-dict.js', dictJs, 'utf8');

// 3. Update index.html to show the globe mascot
let indexHtml = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/index.html', 'utf8');
if (!indexHtml.includes('globe.png')) {
    indexHtml = indexHtml.replace('<h1 style="color:var(--accent); font-size:32px;">', '<img src="globe.png" class="mascot-img" alt="Mascot">\n            <h1 style="color:var(--accent); font-size:32px;">');
    fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/index.html', indexHtml, 'utf8');
}
