const fs = require('fs');
let html = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/nhis-guide.html', 'utf8');

// 1. Fix the 조회하기 button visibility (change var(--primary) to #00b4a2)
html = html.replace(/background:\s*var\(--primary\);/g, 'background: #00b4a2;');
html = html.replace(/background:\s*var\(--accent\);/g, 'background: #008f81;');

// 2. Add copy button functionality
const oldCallBtnHtml = `<a href="tel:1577-1000" class="call-btn">📞 공단 고객센터 (1577-1000) 통화하기</a>`;
const newCallBtnHtml = `
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
                <a href="tel:1577-1000" class="call-btn" style="flex:1; min-width:200px;">📞 공단 통화하기</a>
                <button onclick="copyNHISNumber()" class="call-btn" style="flex:1; min-width:200px; background:#475569; border:none; cursor:pointer;">📋 번호 복사하기</button>
            </div>
`;
html = html.replace(oldCallBtnHtml, newCallBtnHtml);

// Add the JS function for copying
const copyJs = `
        function copyNHISNumber() {
            navigator.clipboard.writeText("1577-1000").then(() => {
                alert("국민건강보험공단 번호(1577-1000)가 클립보드에 복사되었습니다!\\n다이얼 패드에 붙여넣기 하세요.");
            }).catch(err => {
                alert("복사에 실패했습니다. 직접 1577-1000 을 입력해주세요.");
            });
        }
`;
html = html.replace('</script>', copyJs + '\n    </script>');

fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/nhis-guide.html', html, 'utf8');
console.log('Fixed button visibility and added copy functionality in nhis-guide.html.');
