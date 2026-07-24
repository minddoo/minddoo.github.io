const fs = require('fs');

// Update style.css for richer UI
let css = fs.readFileSync('style.css', 'utf8');

const enrichCss = `
/* UI Enrichment */
body {
    background-color: var(--bg-color);
    background-image: radial-gradient(#cbd5e1 1px, transparent 1px);
    background-size: 20px 20px;
}

.page-header {
    background: linear-gradient(135deg, #e0f2f1 0%, #ffffff 100%);
    border-radius: 16px;
    padding: 60px 20px !important;
    margin-bottom: 40px;
    box-shadow: 0 10px 30px rgba(0,180,162,0.05);
    border: 1px solid rgba(0,180,162,0.2);
}

.page-header h1 {
    font-size: 38px !important;
    text-shadow: 1px 1px 0px rgba(255,255,255,1);
    margin-bottom: 15px;
}

.page-header .subtitle {
    font-size: 18px;
    color: #475569;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
}

.checkup-card {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 25px;
    background: linear-gradient(to bottom right, #ffffff, #f8fafc);
}

.blind-board {
    background: #ffffff;
    border-radius: 16px;
    padding: 30px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.03);
    border: 1px solid var(--border);
}

.sim-container {
    background: linear-gradient(to bottom right, #ffffff, #f8fafc);
    border-left: 5px solid var(--accent);
}
`;

if (!css.includes('radial-gradient')) {
    css += '\n' + enrichCss;
    fs.writeFileSync('style.css', css, 'utf8');
    console.log('Updated style.css with enriched UI (background pattern, gradients).');
}

// Update index.html and simulator.html header layout slightly for the new CSS
const files = ['index.html', 'simulator.html'];
files.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    if (file === 'index.html') {
        html = html.replace('어려운 의학 용어와 알쏭달쏭한 검사 결과, 클릭 한 번으로 확인하세요.', '어려운 의학 용어와 알쏭달쏭한 검사 결과, 클릭 한 번으로 확인하세요.<br><br>💡 궁금한 항목을 검색하거나 하단의 카드를 클릭하면 상세한 해석을 볼 수 있습니다.');
    }
    fs.writeFileSync(file, html, 'utf8');
});
console.log('Updated HTML files for better spacing.');
