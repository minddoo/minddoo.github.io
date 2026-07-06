const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Rewrite the SEO article
const newSeoContent = `
        <!-- SEO Article for AdSense Approval -->
        <article class="seo-article-container">
            <div class="seo-article-content">
                <h2>2027학년도 수능 영어 절대평가 1등급 달성: 필수 영단어 70개 7일 완전 정복 학습법</h2>
                <p>수능 영어 영역에서 1등급을 가르는 가장 결정적인 요소는 무엇일까요? 바로 압도적인 '어휘력(Vocabulary)'입니다. 수많은 수험생들이 EBS 연계 교재와 기출문제를 분석하지만, 정작 기본이 되는 핵심 영단어를 완벽하게 숙지하지 못해 오답의 늪에 빠지곤 합니다. 본 "7일 완성 수능/초중고 필수 영단어 앱"은 에빙하우스의 망각 곡선(Ebbinghaus Forgetting Curve) 이론을 과학적으로 적용하여, 수능 및 모의평가에서 가장 빈출되는 핵심 영단어 70개를 단 7일 만에 장기 기억으로 전환하는 혁신적인 학습 솔루션을 제공합니다.</p>
                
                <h3>1. 에빙하우스 망각 곡선과 누적 복습의 힘</h3>
                <p>독일의 심리학자 헤르만 에빙하우스의 연구에 따르면, 새로운 단어를 암기한 후 단 1시간만 지나도 절반 이상이 망각되며, 하루가 지나면 배운 내용의 70% 이상을 잊어버리게 됩니다. 수능이라는 방대한 시험 범위 앞에서 이러한 휘발성 암기는 매우 치명적입니다. 이를 극복하는 유일하고도 가장 확실한 전략은 주기적인 '누적 복습'입니다.</p>
                <p>본 학습 프로그램은 매일 10개의 새로운 빈출 단어를 학습함과 동시에, 전날 암기했던 단어들을 퀴즈 형태로 자연스럽게 반복하도록 설계되어 있습니다. Day 1부터 Day 7까지의 체계적인 커리큘럼을 따라가다 보면, 단어는 단기 기억(Short-term Memory) 저장소에서 장기 기억(Long-term Memory) 저장소로 영구적으로 안착하게 됩니다.</p>

                <h3>2. 왜 하필 '70개'의 필수 영단어인가요?</h3>
                <p>평가원 모의고사 및 역대 수능 기출문제를 빅데이터 기반으로 분석해 보면, 정답의 단서가 되는 결정적 어휘들은 정해져 있습니다. 본 사이트는 교육과정 평가원 지정 필수 영단어 데이터베이스를 바탕으로, 독해의 뼈대를 이루고 문맥 추론에 필수적인 핵심 영단어 70개를 엄선했습니다.</p>
                <ul>
                    <li><strong>핵심 동사 및 다의어:</strong> 지문의 흐름을 결정짓고, 수험생을 함정에 빠뜨리는 필수 어휘</li>
                    <li><strong>수능 빈출 명사 및 형용사:</strong> 추상적이고 학술적인 지문(철학, 경제, 과학 등)에서 반복 등장하는 단어</li>
                    <li><strong>기출문제 연계:</strong> 실제 수능 및 내신 시험과 직접적으로 연결되어 실전 감각과 자신감을 극대화하는 단어</li>
                </ul>

                <h3>3. 수능 1등급을 위한 3단계 마스터 가이드</h3>
                <p>본 웹 애플리케이션의 과학적 시스템을 200% 활용하여 영어 실력을 극대화하려면 다음의 3단계 가이드를 반드시 따라주세요.</p>
                <p><strong>첫째, 원어민 발음 듣고 섀도잉(Shadowing) 하기:</strong> 영어 단어를 눈으로만 보는 것은 매우 비효율적입니다. 수능 듣기 평가(Listening)까지 동시에 대비하기 위해, 각 단어 카드에 내장된 오디오 버튼을 눌러 정확한 원어민 발음을 듣고 3번 이상 소리 내어 따라 읽으세요. 시각과 청각을 동시에 자극할 때 암기 효율이 급상승합니다.</p>
                <p><strong>둘째, 데일리 퀴즈(Daily Quiz)로 메타인지 강화:</strong> 매일의 학습이 끝나면 제공되는 객관식 퀴즈를 통해 자신이 무엇을 알고 무엇을 모르는지(메타인지)를 정확히 점검하세요. 오답으로 체크된 단어는 반드시 별도의 오답 노트에 정리하여 다음 날 학습 전 5분 동안 훑어보는 것이 1등급으로 가는 지름길입니다.</p>
                <p><strong>셋째, 7일 차 파이널 모의평가(Final Test) 도전:</strong> 7일간의 학습 대장정이 끝난 후에는 70개의 단어가 무작위로 출제되는 파이널 테스트에 응시하세요. 이 테스트에서 90점 이상을 달성한다면, 해당 어휘들은 이미 수험생 여러분의 완벽한 무기가 된 것입니다. 정답률 100%를 향해 반복 도전하세요!</p>

                <h3>4. 자기주도학습 및 멘토링 가이드</h3>
                <p>스마트폰, 태블릿, PC 등 모든 기기에서 즉시 접속 가능한 이 웹앱은 장소와 시간에 구애받지 않습니다. 통학하는 버스 안에서, 쉬는 시간 10분 동안, 잠들기 직전 자투리 시간을 활용하는 마이크로 러닝(Micro-learning)이 가장 효과적입니다. 매일 정해진 분량을 완수하는 성취감을 맛보세요. 오늘 당장 Day 1 학습을 시작하고, 다가오는 수능과 모의평가에서 놀라운 영어 성적 향상을 직접 경험하시길 바랍니다!</p>
            </div>
        </article>
`;

html = html.replace(/<article class="seo-article-container">[\s\S]*?<\/article>/, newSeoContent);

// 2. Add rel="nofollow" to links
html = html.replace(/<a id="grammar-link" href="grammar\.html" class="btn-cute btn-pink"([^>]*)>/g, '<a id="grammar-link" href="grammar.html" class="btn-cute btn-pink" rel="nofollow"$1>');
html = html.replace(/<a href="social-4-1\/index\.html" class="btn-cute btn-green"([^>]*)>/g, '<a href="social-4-1/index.html" class="btn-cute btn-green" rel="nofollow"$1>');
html = html.replace(/<a id="btn-reading-practice" href="story-en\.html"([^>]*)>/g, '<a id="btn-reading-practice" href="story-en.html" rel="nofollow"$1>');
// Add nofollow to blog-index-en.html as well just in case to force bot to stay on index.html
html = html.replace(/<a id="blog-link" href="blog-index-en\.html" class="btn-cute btn-purple"([^>]*)>/g, '<a id="blog-link" href="blog-index-en.html" class="btn-cute btn-purple" rel="nofollow"$1>');

fs.writeFileSync('index.html', html, 'utf8');
console.log('Successfully updated index.html with CSAT SEO and nofollow links.');
