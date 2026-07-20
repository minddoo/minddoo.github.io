const fs = require('fs');

const files = ['index.html', 'beginner.html', 'intermediate.html', 'advanced.html'];

const navReplacement = `
            <button id="hamburgerBtn" class="hamburger-btn">☰</button>
        </div>
    </header>

    <!-- Drawer Menu Overlay -->
    <div id="drawerOverlay" class="drawer-overlay"></div>
    <div id="drawerMenu" class="drawer-menu">
        <button id="drawerClose" class="drawer-close">✕</button>
        <div class="drawer-nav">
            <h3>자본주의 생존 가이드</h3>
            <a href="beginner.html">초급 (자본주의 기초)</a>
            <a href="intermediate.html">중급 (절세/투자의 정석)</a>
            <a href="advanced.html">고급 (거시경제/자산배분)</a>
            
            <h3>스마트 용어 사전 (백과)</h3>
            <a href="real-estate.html">🏠 부동산 백과사전</a>
            <a href="stocks.html">📈 주식 백과사전</a>
            <a href="finance.html">💰 재테크/세무 백과사전</a>
        </div>
    </div>
`;

files.forEach(file => {
    if (fs.existsSync(file)) {
        let html = fs.readFileSync(file, 'utf8');
        // Remove old nav-links and mobile-nav, replace with hamburger
        const regex = /<nav class="nav-links">[\s\S]*?<\/nav>\s*<\/div>\s*<nav class="mobile-nav">[\s\S]*?<\/nav>\s*<\/header>/;
        
        if (regex.test(html)) {
            html = html.replace(regex, navReplacement);
            fs.writeFileSync(file, html, 'utf8');
            console.log(`Updated ${file} with hamburger menu.`);
        } else {
            console.log(`Could not find old nav structure in ${file}.`);
        }
    }
});
