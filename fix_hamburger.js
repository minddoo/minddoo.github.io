const fs = require('fs');

// 1. Remove hamburger logic from dictionary.js
let dictJs = fs.readFileSync('dictionary.js', 'utf8');
const hamburgerRegex = /\/\/ Global Hamburger Menu Logic[\s\S]*?\}\);\s*/;
if (hamburgerRegex.test(dictJs)) {
    dictJs = dictJs.replace(hamburgerRegex, '');
    fs.writeFileSync('dictionary.js', dictJs, 'utf8');
    console.log('Removed hamburger logic from dictionary.js');
}

// 2. Add hamburger logic to app.js
let appJs = fs.readFileSync('app.js', 'utf8');
const hamburgerLogic = `
// Global Hamburger Menu Logic
document.addEventListener("DOMContentLoaded", () => {
    const hamburgerBtn = document.getElementById("hamburgerBtn");
    const drawerOverlay = document.getElementById("drawerOverlay");
    const drawerMenu = document.getElementById("drawerMenu");
    const drawerClose = document.getElementById("drawerClose");

    if (hamburgerBtn && drawerOverlay && drawerMenu && drawerClose) {
        hamburgerBtn.addEventListener("click", () => {
            drawerOverlay.classList.add("active");
            drawerMenu.classList.add("active");
        });

        const closeDrawer = () => {
            drawerOverlay.classList.remove("active");
            drawerMenu.classList.remove("active");
        };

        drawerClose.addEventListener("click", closeDrawer);
        drawerOverlay.addEventListener("click", closeDrawer);
    }
});
`;
if (!appJs.includes('Global Hamburger Menu Logic')) {
    appJs = hamburgerLogic + '\n' + appJs;
    fs.writeFileSync('app.js', appJs, 'utf8');
    console.log('Added hamburger logic to app.js');
}

// 3. Make sure app.js is loaded in the dictionary pages so they get the hamburger menu too
const dictFiles = ['real-estate.html', 'stocks.html', 'finance.html'];
dictFiles.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    if (!html.includes('<script src="app.js"></script>')) {
        html = html.replace('<script src="dictionary.js"></script>', '<script src="app.js"></script>\n    <script src="dictionary.js"></script>');
        fs.writeFileSync(file, html, 'utf8');
        console.log(`Added app.js to ${file}`);
    }
});

