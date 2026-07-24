const fs = require('fs');
const path = require('path');

// 1. Update style.css
let css = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/style.css', 'utf8');
if (!css.includes('.lang-selector')) {
    css += `
/* Google Translate Customization */
.lang-selector {
    display: flex;
    gap: 8px;
    margin-right: 15px;
}
.lang-selector button {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    transition: transform 0.2s;
    padding: 0;
}
.lang-selector button:hover {
    transform: scale(1.2);
}
/* Hide default Google Translate elements */
body { top: 0 !important; }
.goog-te-banner-frame.skiptranslate { display: none !important; }
#google_translate_element { display: none !important; }
.goog-tooltip { display: none !important; }
.goog-tooltip:hover { display: none !important; }
.goog-text-highlight { background-color: transparent !important; border: none !important; box-shadow: none !important; }
`;
    fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/style.css', css, 'utf8');
}

// 2. HTML injections
const headerReplacement = `        <div class="header-right" style="display: flex; align-items: center;">
            <div class="lang-selector">
                <button onclick="changeLanguage('ko')" title="Korean">🇰🇷</button>
                <button onclick="changeLanguage('en')" title="English">🇺🇸</button>
                <button onclick="changeLanguage('ja')" title="Japanese">🇯🇵</button>
                <button onclick="changeLanguage('zh-CN')" title="Chinese">🇨🇳</button>
                <button onclick="changeLanguage('vi')" title="Vietnamese">🇻🇳</button>
            </div>
            <button id="hamburgerBtn" class="hamburger-btn">☰</button>
        </div>`;

const googleScript = `
    <!-- Google Translate -->
    <div id="google_translate_element"></div>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'ko', autoDisplay: false}, 'google_translate_element');
        }
        function changeLanguage(lang) {
            document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
            if (lang !== 'ko') {
                document.cookie = "googtrans=/ko/" + lang + "; path=/;";
                document.cookie = "googtrans=/ko/" + lang + "; path=/; domain=" + window.location.hostname;
            }
            window.location.reload();
        }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>`;

function injectLanguage(filePath) {
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Check if already injected
    if (html.includes('changeLanguage(')) return;

    // Inject into header (replace just the hamburger button)
    html = html.replace('<button id="hamburgerBtn" class="hamburger-btn">☰</button>', headerReplacement);
    // There might be a '?' character instead of '☰' due to encoding bugs in earlier scripts, handle both
    html = html.replace('<button id="hamburgerBtn" class="hamburger-btn">?</button>', headerReplacement);

    // Inject before closing body tag
    html = html.replace('</body>', googleScript);
    
    fs.writeFileSync(filePath, html, 'utf8');
}

const rootDir = 'C:/Users/pc/Documents/minddoo.github.io';
const files = fs.readdirSync(rootDir);
files.forEach(file => {
    if (file.endsWith('.html')) {
        injectLanguage(path.join(rootDir, file));
    }
});

const articlesDir = path.join(rootDir, 'articles');
if (fs.existsSync(articlesDir)) {
    const articleFiles = fs.readdirSync(articlesDir);
    articleFiles.forEach(file => {
        if (file.endsWith('.html')) {
            injectLanguage(path.join(articlesDir, file));
        }
    });
}

console.log('Successfully injected language switcher into all HTML files.');
