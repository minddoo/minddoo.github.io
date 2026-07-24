const fs = require('fs');

// 1. Fix recipe-badge color in diet-recipe.html
let dietHtml = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/diet-recipe.html', 'utf8');
dietHtml = dietHtml.replace(/background:\s*var\(--primary\);/g, 'background: #00b4a2;');
fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/diet-recipe.html', dietHtml, 'utf8');
console.log('Fixed recipe-badge color in diet-recipe.html');

// 2. Fix copy button fallback in nhis-guide.html
let nhisHtml = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/nhis-guide.html', 'utf8');

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
                
                // iOS requires these for selection to work
                textArea.contentEditable = true;
                textArea.readOnly = false;

                document.body.appendChild(textArea);
                
                if (navigator.userAgent.match(/ipad|iphone/i)) {
                    var range = document.createRange();
                    range.selectNodeContents(textArea);
                    var selection = window.getSelection();
                    selection.removeAllRanges();
                    selection.addRange(range);
                    textArea.setSelectionRange(0, 999999);
                } else {
                    textArea.select();
                }

                try {
                    var successful = document.execCommand('copy');
                    if (successful) {
                        alert("국민건강보험공단 번호(1577-1000)가 복사되었습니다!\\n다이얼 패드에 붙여넣기 하세요.");
                    } else {
                        prompt("자동 복사 권한이 없습니다. 아래 번호를 길게 눌러 직접 복사해주세요.", textToCopy);
                    }
                } catch (err) {
                    prompt("자동 복사 권한이 없습니다. 아래 번호를 길게 눌러 직접 복사해주세요.", textToCopy);
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

if (oldJsRegex.test(nhisHtml)) {
    nhisHtml = nhisHtml.replace(oldJsRegex, newJs);
    fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/nhis-guide.html', nhisHtml, 'utf8');
    console.log('Fixed copy fallback logic for iOS in nhis-guide.html');
} else {
    console.log('Could not find the copy function in nhis-guide.html');
}

