const fs = require('fs');
const path = require('path');

function injectSeoToHtml(filePath, baseUrl, filename) {
    let html = fs.readFileSync(filePath, 'utf8');

    // Remove existing canonical or OG tags if we ran this multiple times by accident
    html = html.replace(/<link rel="canonical".*?>\n/g, '');
    html = html.replace(/<link rel="icon".*?>\n/g, '');
    html = html.replace(/<meta property="og:.*?>\n/g, '');

    const canonicalUrl = `${baseUrl}/${filename}`;
    const pageTitleMatch = html.match(/<title>(.*?)<\/title>/);
    const pageTitle = pageTitleMatch ? pageTitleMatch[1] : '체킷의 항목 체크';

    const descMatch = html.match(/<meta name="description" content="(.*?)">/);
    const pageDesc = descMatch ? descMatch[1] : '건강검진 결과지 해석, 수치 시뮬레이터, 국가건강검진 가이드 등 현직 실무자가 직접 알려주는 꿀팁 포털입니다.';

    const seoTags = `
    <!-- SEO Optimization Tags -->
    <link rel="canonical" href="${canonicalUrl}">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🩺</text></svg>">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${pageTitle}">
    <meta property="og:description" content="${pageDesc}">
    <meta property="og:image" content="https://minddoo.github.io/globe.png">
    <meta property="og:site_name" content="체킷의 항목 체크">
    <!-- End SEO Optimization Tags -->
`;

    // Inject before the closing </head> tag
    html = html.replace('</head>', seoTags + '</head>');
    
    fs.writeFileSync(filePath, html, 'utf8');
}

const rootDir = 'C:/Users/pc/Documents/minddoo.github.io';
const baseUrl = 'https://minddoo.github.io';

// 1. Root HTML files
const files = fs.readdirSync(rootDir);
files.forEach(file => {
    if (file.endsWith('.html')) {
        injectSeoToHtml(path.join(rootDir, file), baseUrl, file);
    }
});

// 2. Articles HTML files
const articlesDir = path.join(rootDir, 'articles');
if (fs.existsSync(articlesDir)) {
    const articleFiles = fs.readdirSync(articlesDir);
    articleFiles.forEach(file => {
        if (file.endsWith('.html')) {
            injectSeoToHtml(path.join(articlesDir, file), baseUrl, `articles/${file}`);
        }
    });
}

console.log('Successfully injected Canonical, Favicon, and OG Tags to all HTML files.');
