const fs = require('fs');
const path = require('path');

const dirsToClean = [
    'calculator', 'calendar', 'checkit-global', 'checkup-talk', 'coffee-order', 
    'dietary-card', 'healing-sounds', 'health-test', 'hospital-matcher', 
    'korean-quiz', 'mbti', 'premium-checkup', 'wanna-calendar', 'work-timer'
];

function processDirectory(directory) {
    const files = fs.readdirSync(directory);
    for (const file of files) {
        const fullPath = path.join(directory, file);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            processDirectory(fullPath);
        } else if (fullPath.endsWith('.html')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let originalContent = content;

            // Remove script tag loading adsbygoogle.js
            content = content.replace(/<script\s+async\s+src="[^"]*adsbygoogle\.js[^"]*"\s*(crossorigin="anonymous")?><\/script>\s*/gi, '');
            
            // Remove <ins class="adsbygoogle" ...></ins> blocks
            content = content.replace(/<ins\s+class="adsbygoogle"[\s\S]*?<\/ins>\s*/gi, '');
            
            // Remove script tags pushing to adsbygoogle
            content = content.replace(/<script>\s*\(adsbygoogle\s*=\s*window\.adsbygoogle\s*\|\|\s*\[\]\)\.push\(\{.*?\}\);\s*<\/script>\s*/gi, '');

            if (content !== originalContent) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log('Removed AdSense code from:', fullPath);
            }
        }
    }
}

dirsToClean.forEach(dir => {
    const fullDirPath = path.join(__dirname, dir);
    if (fs.existsSync(fullDirPath)) {
        processDirectory(fullDirPath);
    } else {
        console.warn('Directory not found:', fullDirPath);
    }
});

console.log('AdSense code removal completed.');
