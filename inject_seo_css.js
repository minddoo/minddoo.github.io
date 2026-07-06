const fs = require('fs');
let css = fs.readFileSync('style.css', 'utf8');

const seoCss = `
/* =========================================
   SEO Article Section (For AdSense)
========================================= */
.seo-article-container {
    max-width: 800px;
    margin: 60px auto 40px;
    padding: 40px;
    background-color: #fcfcfc;
    border-radius: 20px;
    border: 1px solid #eaeaea;
    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
    font-family: 'Noto Sans KR', sans-serif;
    color: #333;
    line-height: 1.8;
}

.seo-article-content h2 {
    font-size: 24px;
    font-weight: 900;
    color: var(--text-main);
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid var(--pastel-pink-shadow);
    text-align: center;
}

.seo-article-content h3 {
    font-size: 18px;
    font-weight: 700;
    color: #2c3e50;
    margin-top: 35px;
    margin-bottom: 15px;
    position: relative;
    padding-left: 12px;
}

.seo-article-content h3::before {
    content: '';
    position: absolute;
    left: 0;
    top: 5px;
    width: 4px;
    height: 18px;
    background-color: var(--pastel-purple);
    border-radius: 2px;
}

.seo-article-content p {
    font-size: 15px;
    color: #555;
    margin-bottom: 15px;
    word-break: keep-all;
}

.seo-article-content ul {
    margin-bottom: 20px;
    padding-left: 20px;
    list-style-type: none;
}

.seo-article-content ul li {
    font-size: 15px;
    color: #555;
    margin-bottom: 10px;
    position: relative;
}

.seo-article-content ul li::before {
    content: '✅';
    position: absolute;
    left: -22px;
    top: 1px;
    font-size: 13px;
}

@media (max-width: 600px) {
    .seo-article-container {
        margin: 40px 15px 30px;
        padding: 25px 20px;
    }
    .seo-article-content h2 {
        font-size: 20px;
    }
    .seo-article-content h3 {
        font-size: 17px;
    }
    .seo-article-content p, .seo-article-content ul li {
        font-size: 14px;
    }
}
`;

if (!css.includes('.seo-article-container')) {
    css += '\n' + seoCss;
    fs.writeFileSync('style.css', css, 'utf8');
    console.log('SEO CSS successfully added to style.css');
} else {
    console.log('SEO CSS already exists in style.css');
}
