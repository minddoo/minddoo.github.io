const fs = require('fs');

const svgHtml = fs.readFileSync('svg_index.html', 'utf8');
const indexHtml = fs.readFileSync('social-4-1/index.html', 'utf8');

const mathRegex = /<article id="math" class="subject-content">.*?<\/article>/s;
const mathMatch = svgHtml.match(mathRegex);

if (!mathMatch) {
    console.error("Could not find math section in svg_index.html");
    process.exit(1);
}

const newMathSection = mathMatch[0];
console.log("Found math section, length: " + newMathSection.length);

// Also we need to fix the missing </div> tags in the newMathSection.
// As calculated earlier, the depth at the end is 2 instead of 0.
// Let's add them before the closing </article>
let fixedMathSection = newMathSection.replace(/<\/article>$/, '</div></div>\n        </article>');

const newIndexHtml = indexHtml.replace(mathRegex, fixedMathSection);

fs.writeFileSync('social-4-1/index.html', newIndexHtml, 'utf8');
console.log("Successfully updated social-4-1/index.html");
