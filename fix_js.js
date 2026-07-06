const fs = require('fs');
const js = fs.readFileSync('social-4-1/script.js', 'utf8');

const regex = /html \+= [\s\S]*?;/;

const newHtmlStr = "html += \\n" +
"                    <div class=\"board-item \\">\\n" +
"                        <div class=\"board-top-row\">\\n" +
"                            <span class=\"board-name\">🧑‍🎓 \</span>\\n" +
"                            <div class=\"check-wrap\">\</div>\\n" +
"                        </div>\\n" +
"                        <div class=\"board-time\">\</div>\\n" +
"                        <div class=\"custom-player\" id=\"player_\\">\\n" +
"                            <button class=\"play-btn\" onclick=\"togglePlay('player_\', '\')\">▶</button>\\n" +
"                            <div class=\"progress-bar-wrap\">\\n" +
"                                <div class=\"progress-bar\" id=\"progress_\\"></div>\\n" +
"                            </div>\\n" +
"                            <span class=\"play-time\" id=\"time_\\">0:00</span>\\n" +
"                        </div>\\n" +
"                    </div>\\n" +
"                ;";

const newJs = js.replace(regex, newHtmlStr);
fs.writeFileSync('social-4-1/script.js', newJs, 'utf8');
console.log('Fixed script.js!');
