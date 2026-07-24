const fs = require('fs');
let css = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/style.css', 'utf8');

// Replace mascot-img CSS to add float animation and mix-blend-mode
const oldMascotCss = /\.mascot-img\s*\{.*?\}/s;
const newMascotCss = `
@keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-15px); }
    100% { transform: translateY(0px); }
}

.mascot-img {
    width: 200px;
    height: auto;
    display: block;
    margin: 0 auto 20px auto;
    animation: float 3s ease-in-out infinite;
    mix-blend-mode: multiply; /* Removes white square background */
    filter: drop-shadow(0px 10px 15px rgba(0,0,0,0.1));
}
`;

if (oldMascotCss.test(css)) {
    css = css.replace(oldMascotCss, newMascotCss);
} else {
    css += '\n' + newMascotCss;
}

fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/style.css', css, 'utf8');
console.log('Updated mascot CSS for floating 3D effect.');
