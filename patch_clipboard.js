const fs = require('fs');
let html = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/nhis-guide.html', 'utf8');

// 1. Remove the call button and make the copy button the primary action
const oldButtonHtml = /<div style="display:flex; gap:10px; flex-wrap:wrap;">\s*<a href="tel:1577-1000" class="call-btn".*?<\/a>\s*<button onclick="copyNHISNumber\(\)" class="call-btn".*?<\/button>\s*<\/div>/s;

const newButtonHtml = `
            <button onclick="copyNHISNumber()" class="call-btn" style="width:100%; background:#00b4a2; border:none; cursor:pointer;">📋 공단 고객센터 (1577-1000) 번호 복사하기</button>
`;

if (oldButtonHtml.test(html)) {
    html = html.replace(oldButtonHtml, newButtonHtml);
} else {
    console.log("Could not find the button HTML to replace.");
}

// 2. Replace the old copyNHISNumber function with a robust fallback version
const oldJsRegex = /function copyNHISNumber\(\) \{[\s\S]*?\}\n/s;

const newJs = `
        function copyNHISNumber() {
            var textToCopy = "1577-1000";
            
            function fallbackCopyTextToClipboard(text) {
                var textArea = document.createElement("textarea");
                textArea.value = text;
                textArea.style.top = "0";
                textArea.style.left = "0";
                textArea.style.position = "fixed";

                document.body.appendChild(textArea);
                textArea.focus();
                textArea.select();

                try {
                    var successful = document.execCommand('copy');
                    if (successful) {
                        alert("국민건강보험공단 번호(1577-1000)가 복사되었습니다!\\n다이얼 패드에 붙여넣기 하세요.");
                    } else {
                        alert("복사 권한이 없습니다. 직접 1577-1000 을 입력해주세요.");
                    }
                } catch (err) {
                    alert("이 브라우저에서는 복사를 지원하지 않습니다.");
                }

                document.body.removeChild(textArea);
            }

            if (!navigator.clipboard) {
                fallbackCopyTextToClipboard(textToCopy);
                return;
            }
            
            navigator.clipboard.writeText(textToCopy).then(function() {
                alert("국민건강보험공단 번호(1577-1000)가 복사되었습니다!\\n다이얼 패드에 붙여넣기 하세요.");
            }).catch(function(err) {
                fallbackCopyTextToClipboard(textToCopy);
            });
        }
`;

if (oldJsRegex.test(html)) {
    html = html.replace(oldJsRegex, newJs);
} else {
    console.log("Could not find the old copyNHISNumber function to replace.");
}

fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/nhis-guide.html', html, 'utf8');
console.log('Fixed button HTML and updated clipboard JS logic.');
