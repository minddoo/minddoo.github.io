const fs = require('fs');

const files = ['real-estate.html', 'stocks.html', 'finance.html'];
const firebaseScripts = `
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/8.10.1/firebase-firestore.js"></script>
</head>
`;

files.forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    if (!html.includes('firebase-app.js')) {
        html = html.replace('</head>', firebaseScripts);
        fs.writeFileSync(file, html, 'utf8');
        console.log(`Added Firebase scripts to ${file}`);
    }
});
