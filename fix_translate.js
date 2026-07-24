const fs = require('fs');
const path = require('path');

const newScript = `
    <!-- Google Translate -->
    <div id="google_translate_element"></div>
    <script type="text/javascript">
        function googleTranslateElementInit() {
            new google.translate.TranslateElement({pageLanguage: 'ko', autoDisplay: false}, 'google_translate_element');
        }
        function changeLanguage(lang) {
            if (lang === 'ko') {
                document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
                document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
                window.location.reload();
            } else {
                document.cookie = "googtrans=/ko/" + lang + "; path=/;";
                document.cookie = "googtrans=/ko/" + lang + "; path=/; domain=" + window.location.hostname;
                var combo = document.querySelector('.goog-te-combo');
                if (combo) {
                    combo.value = lang;
                    combo.dispatchEvent(new Event('change'));
                } else {
                    window.location.reload();
                }
            }
        }
    </script>
    <script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>`;

function fixTranslationScript(filePath) {
    let html = fs.readFileSync(filePath, 'utf8');
    
    // Find the old script block and replace it
    const regex = /<!-- Google Translate -->[\s\S]*?<\/body>/;
    if (regex.test(html)) {
        html = html.replace(regex, newScript);
        fs.writeFileSync(filePath, html, 'utf8');
    }
}

const rootDir = 'C:/Users/pc/Documents/minddoo.github.io';
const files = fs.readdirSync(rootDir);
files.forEach(file => {
    if (file.endsWith('.html')) {
        fixTranslationScript(path.join(rootDir, file));
    }
});

const articlesDir = path.join(rootDir, 'articles');
if (fs.existsSync(articlesDir)) {
    const articleFiles = fs.readdirSync(articlesDir);
    articleFiles.forEach(file => {
        if (file.endsWith('.html')) {
            fixTranslationScript(path.join(articlesDir, file));
        }
    });
}

console.log('Successfully fixed translation script in all HTML files.');
