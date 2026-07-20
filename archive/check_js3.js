const htmlStr = \
                    <div class="board-item \">
                        <div class="board-top-row">
                            <span class="board-name">????? \</span>
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
\;
const opens = (htmlStr.match(/<div\b/gi) || []).length;
const closes = (htmlStr.match(/<\/div>/gi) || []).length;
console.log('Opens: ' + opens + ', Closes: ' + closes);
