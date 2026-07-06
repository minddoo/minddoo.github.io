const html = \
<div class="board-item">
    <div class="board-top-row">
        <span class="board-name">🧑‍🎓 홍길동</span>
        <div class="check-wrap"><button class="action-btn check-btn" onclick="markAsChecked('abc')">확인 도장 쾅!</button></div>
    </div>
    <div class="board-time">2026. 6. 29. 오후 7:24:11</div>
    <div class="custom-player" id="player_abc">
        <button class="play-btn" onclick="togglePlay('player_abc', 'url')">▶</button>
        <div class="progress-bar-wrap">
            <div class="progress-bar" id="progress_abc"></div>
        </div>
        <span class="play-time" id="time_abc">0:00</span>
    </div>
</div>
\;

let depth = 0;
const regex = /<(\/?)(div|span|button)[^>]*>/gi;
let match;
while ((match = regex.exec(html)) !== null) {
    const isClosing = match[1] === '/';
    const tag = match[2].toLowerCase();
    
    if (!isClosing) {
        // self closing check not needed for div/span/button
        depth++;
        console.log('+ ' + tag + ' (depth: ' + depth + ')');
    } else {
        depth--;
        console.log('- ' + tag + ' (depth: ' + depth + ')');
    }
}
console.log('Final depth:', depth);
