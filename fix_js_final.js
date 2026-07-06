const fs = require('fs');
let js = fs.readFileSync('social-4-1/script.js', 'utf8');

// The exact broken string we want to replace
const brokenSnippet = \html += \\\
                    <div class="board-item \">
                        <div class="board-item-header">
                            <div>
                                <span class="board-name">🧑‍🎓 \</span>
                                <span class="board-time">\</span>
                            </div>
                            <div>\</div>
                        </div>
                        <div class="custom-player" id="player_\">
                        <button class="play-btn" onclick="togglePlay('player_\', '\')">▶</button>
                        <div class="progress-bar-wrap">
                            <div class="progress-bar" id="progress_\"></div>
                        </div>
                        <span class="play-time" id="time_\">0:00</span>
                    </div
                    </div>
                \\\;\;

const fixedSnippet = \html += \\\
                    <div class="board-item \">
                        <div class="board-top-row">
                            <span class="board-name">🧑‍🎓 \</span>
                            <div class="check-wrap">\</div>
                        </div>
                        <div class="board-time">\</div>
                        <div class="custom-player" id="player_\">
                            <button class="play-btn" onclick="togglePlay('player_\', '\')">▶</button>
                            <div class="progress-bar-wrap">
                                <div class="progress-bar" id="progress_\"></div>
                            </div>
                            <span class="play-time" id="time_\">0:00</span>
                        </div>
                    </div>
                \\\;\;

if (js.includes(brokenSnippet)) {
    js = js.replace(brokenSnippet, fixedSnippet);
    fs.writeFileSync('social-4-1/script.js', js, 'utf8');
    console.log('Fixed script.js successfully by exact match!');
} else {
    console.log('Could not find the exact broken snippet. Trying regex targeting loadPublicAudioBoard...');
    // regex targeting loadPublicAudioBoard's html +=
    const startIdx = js.indexOf('function loadPublicAudioBoard');
    if (startIdx !== -1) {
        const substr = js.substring(startIdx);
        const htmlMatch = substr.match(/html \+= [\s\S]*?;/);
        if (htmlMatch) {
            const before = js.substring(0, startIdx + htmlMatch.index);
            const after = js.substring(startIdx + htmlMatch.index + htmlMatch[0].length);
            fs.writeFileSync('social-4-1/script.js', before + fixedSnippet + after, 'utf8');
            console.log('Fixed script.js using loadPublicAudioBoard regex match!');
        } else {
            console.log('Failed to find html += inside loadPublicAudioBoard.');
        }
    }
}
