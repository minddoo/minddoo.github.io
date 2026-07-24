const fs = require('fs');

// 1. Update about.html (Author Profile)
let aboutHtml = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/about.html', 'utf8');
const oldAboutSectionRegex = /<h2 style="color:var\(--accent\);">🔍 체킷의 항목 체크 소개<\/h2>[\s\S]*?<\/section>/;
const newAboutSection = `<h2 style="color:var(--accent);">🔍 체킷(CHECKIT) 소개 및 저자 프로필</h2>
            <div style="background:#f8fafc; padding:20px; border-radius:12px; border-left:4px solid var(--primary); margin-bottom:20px;">
                <h3 style="color:#0f766e; margin-top:0; display:flex; align-items:center; gap:8px;">👩‍⚕️ 왜 체킷을 만들었을까요? (저자 소개)</h3>
                <p style="line-height:1.8; color:#334155;">안녕하세요! 저는 건강검진센터 현장에서 수많은 내국인과 외국인 고객들의 소통을 도맡았던 <b>실무 코디네이터(Coordinator) 출신</b>입니다.</p>
                <p style="line-height:1.8; color:#334155;">매일 병원 현장에서 환자분들의 예약을 돕고, 복잡한 검사 항목에 대한 막연한 불안감을 마주하며 깨달은 점이 있습니다. 많은 분들이 건강검진을 두려운 '숙제'나 '결과에 대한 공포'로 여긴다는 것입니다.</p>
                <p style="line-height:1.8; color:#334155;">하지만 건강검진은 결코 두려운 것이 아닙니다. <b>내 몸을 지키고 사랑하는 가장 첫 번째이자 확실한 예방 단계</b>입니다.</p>
                <p style="line-height:1.8; color:#334155;">현업에서 쌓은 꼼꼼한 실무 노하우를 바탕으로, 내국인과 외국인 모두가 검사 전후로 어떻게 행동해야 할지 명쾌하고 따뜻하게 알려드리고자 이 사이트를 열었습니다. 체킷(CHECKIT)은 여러분의 건강한 내일을 위한 가장 든든하고 전문적인 가이드가 되겠습니다.</p>
            </div>
        </section>`;
if (oldAboutSectionRegex.test(aboutHtml)) {
    aboutHtml = aboutHtml.replace(oldAboutSectionRegex, newAboutSection);
    fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/about.html', aboutHtml, 'utf8');
    console.log('Updated about.html with Author Profile');
}

// 2. Create magazine.html
const magazineHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>체킷의 항목 체크 | 건강검진 매거진 (칼럼)</title>
    <meta name="description" content="건강검진 전 금식 기준, 간 수치 대처법, 연령별 필수 추가 항목 등 건강검진 현직 실무자가 직접 작성한 심층 칼럼입니다.">
    <link rel="stylesheet" href="style.css">
    <style>
        .article-card {
            background: #fff;
            padding: 40px;
            border-radius: 12px;
            margin-bottom: 40px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.02);
            border: 1px solid var(--border);
        }
        .article-card h1 { color: #0f766e; font-size: 26px; border-bottom: 2px solid var(--primary); padding-bottom:15px; }
        .article-card h2 { color: #334155; font-size: 20px; margin-top: 30px; }
        .article-card h3 { color: #0f766e; font-size: 17px; margin-top: 20px; }
        .article-card p { color: #475569; line-height: 1.8; font-size: 16px; margin-bottom: 15px; }
        .article-card ul, .article-card ol { color: #475569; line-height: 1.8; font-size: 16px; margin-bottom: 15px; padding-left: 20px; }
        .article-card .author-tag { display:inline-block; background:#f1f5f9; padding:5px 15px; border-radius:20px; font-size:13px; color:#64748b; margin-bottom:20px; }
    </style>
</head>
<body>
    <header>
        <div class="nav-container">
            <a href="index.html" class="logo">체킷의 항목 체크</a>
            <button id="hamburgerBtn" class="hamburger-btn">☰</button>
        </div>
    </header>
    
    <div id="drawerOverlay" class="drawer-overlay"></div>
    <div id="drawerMenu" class="drawer-menu">
        <button id="drawerClose" class="drawer-close">✕</button>
        <div class="drawer-nav">
            <h3>체킷의 항목 체크</h3>
            <a href="index.html">🔍 전체 검사 항목 백과</a>
            <a href="simulator.html">📊 결과지 수치 시뮬레이터</a>
            <a href="nhis-guide.html">🇰🇷 국가건강검진(공단) 가이드</a>
            <a href="sanjae-guide.html">👷 특수검진 및 산재 가이드</a>
            <a href="diet-recipe.html">🍽️ 건강검진 식단 & 자취생 레시피</a>
            <a href="checkup-tips.html">💡 건강검진 받기 전 필수 팁</a>
            <a href="magazine.html" class="active">📰 건강검진 매거진 (칼럼)</a>
            <a href="about.html">ℹ️ 사이트 소개 및 약관</a>
        </div>
    </div>

    <main>
        <div class="page-header" style="text-align:center; padding: 40px 20px; background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); border-radius:16px;">
            <h1 style="color:#166534; font-size:32px;">📰 건강검진 심층 칼럼 매거진</h1>
            <p class="subtitle" style="color:#334155;">현직 실무자가 직접 들려주는, 구글에서도 찾기 힘든 건강검진의 진짜 이야기</p>
        </div>

        <!-- Article 1 -->
        <article class="article-card">
            <h1>건강검진 전 금식, 물 한 모금도 안 될까? 수면내시경 금식 기준 완벽 해설</h1>
            <div class="author-tag">✍️ 작성자: 체킷 건강연구소 | 🗓️ 최종 수정일: 2026.07.24</div>
            
            <p>건강검진 예약 문자를 받고 가장 먼저 걱정되는 것은 바로 '금식'입니다. "어젯밤 10시에 물 한 모금 마셨는데 내시경 못 하는 건가요?", "아침에 무심코 껌을 씹었는데 어떡하죠?" 건강검진센터 현장에서 하루에도 수십 번씩 듣는 질문입니다. 오늘 이 칼럼에서는 애매모호했던 금식 기준에 대해 의학적이고 실무적인 관점에서 완벽하게 정리해 드립니다.</p>

            <h2>1. 물 한 모금도 안 되는 이유: 수면내시경의 안전성</h2>
            <p>위내시경이나 대장내시경을 '수면(진정)' 상태로 진행할 때 가장 무서운 합병증은 바로 '흡인성 폐렴'입니다. 진정제 투여 시 우리 몸의 괄약근과 반사 신경이 느슨해지면서, 위장에 남아있던 물이나 위액이 역류하여 기도로 넘어갈 수 있습니다. 아주 적은 양의 물이라도 폐로 들어가면 치명적인 감염이나 호흡 곤란을 유발할 수 있기 때문에 당일 아침에는 절대 물을 마시면 안 됩니다.</p>

            <h3>1-1. 복부 초음파를 위해서도 금식은 필수</h3>
            <p>물이나 음식이 들어가면 담낭(쓸개)이 소화액을 짜내기 위해 수축해버립니다. 쪼그라든 담낭은 초음파 화면에서 잘 보이지 않아 담석이나 용종을 놓칠 확률이 높아집니다. 또한 음식물이 넘어가면서 발생하는 장내 가스가 췌장 등 주변 장기의 시야를 가리기 때문에 정확한 진단이 불가능해집니다.</p>

            <h2>2. 예외가 적용되는 '혈압약' 복용 가이드</h2>
            <p>금식이 철저하게 요구되지만, 생명과 직결된 약물은 예외입니다. 바로 '혈압약'과 '항경련제'입니다. 검진 당일 긴장감으로 인해 혈압이 급상승하면 내시경 진행 자체가 불가능해질 수 있습니다.</p>
            <ul>
                <li><b>복용 방법:</b> 검진 당일 이른 아침(오전 6시경), 종이컵 반 컵 이하의 아주 최소한의 물과 함께 꿀꺽 삼키셔야 합니다.</li>
                <li><b>금지되는 약물:</b> 당뇨약과 인슐린 주사는 절대 투여 금지입니다. 금식 상태에서 당뇨약을 먹으면 심각한 저혈당 쇼크가 올 수 있습니다.</li>
            </ul>

            <h2>3. 껌, 사탕, 담배는 어떨까?</h2>
            <p>많은 분들이 "삼키지 않았으니 괜찮겠지"라며 껌을 씹거나 담배를 피우고 오십니다. 하지만 입안에서 무언가를 씹거나 연기를 흡입하면 뇌는 "음식이 들어온다!"라고 착각하여 다량의 위산을 분비하게 됩니다. 위산이 가득 차면 내시경 시 관찰이 어렵고 흡인 위험도 커지므로 절대 삼가야 합니다.</p>

            <h2>결론: 안전하고 정확한 검사를 위한 타협 없는 원칙</h2>
            <p>건강검진 전 금식은 단순히 '의사가 시켜서' 하는 귀찮은 규칙이 아닙니다. 환자 본인의 생명을 보호하고 질병을 정확하게 찾아내기 위한 가장 기본적인 준비 단계입니다. 전날 저녁 8시 이후부터는 가급적 물도 줄이시고, 당일 아침에는 완전한 금식 상태로 내원하시길 당부드립니다.</p>
        </article>

        <!-- Article 2 -->
        <article class="article-card">
            <h1>간 수치(AST, ALT) 높을 때 절대 피해야 할 3가지 행동과 극복 방법</h1>
            <div class="author-tag">✍️ 작성자: 체킷 건강연구소 | 🗓️ 최종 수정일: 2026.07.24</div>
            
            <p>건강검진 결과지를 받아들고 가장 많이 놀라는 항목 중 하나가 바로 간 수치(AST, ALT)입니다. 정상 범위(보통 40 이하)를 훌쩍 뛰어넘어 100, 200이라는 숫자가 찍혀 있으면 덜컥 겁이 나기 마련입니다. '침묵의 장기'라 불리는 간은 절반 이상 망가져도 증상이 없기 때문에 수치로 나타나는 경고를 절대 무시해서는 안 됩니다.</p>

            <h2>1. 첫 번째 금기: 검증되지 않은 건강보조식품과 즙 섭취</h2>
            <p>간 수치가 높게 나왔다고 해서 다급한 마음에 헛개나무즙, 칡즙, 다이어트 보조제, 한약 등을 무분별하게 드시는 분들이 있습니다. 이는 불난 집에 기름을 붓는 격입니다. 간은 우리 몸에 들어오는 모든 성분을 해독하는 화학 공장입니다. 고농축된 즙이나 복합 성분의 보조제는 이미 지쳐있는 간에 엄청난 해독 과부하(독성 간염)를 일으켜 수치를 급격히 악화시킵니다.</p>

            <h2>2. 두 번째 금기: 주말 몰아치기 음주 (폭음)</h2>
            <p>"평일에는 안 마시니까 주말에 한 번 찐하게 마시는 건 괜찮지 않나요?" 절대 그렇지 않습니다. 간은 매일 조금씩 마시는 것보다 한 번에 들이붓는 폭음에 훨씬 더 취약합니다. 특히 지방간 소견이 함께 있는 상태에서의 폭음은 알코올성 간염을 거쳐 간경화로 진행되는 급행열차를 타는 것과 같습니다. 최소 2~3주의 절대적인 금주 기간이 필요합니다.</p>

            <h2>3. 세 번째 금기: 과도한 탄수화물과 과일 섭취</h2>
            <p>간 수치가 높은 원인이 항상 술에만 있는 것은 아닙니다. 비알콜성 지방간이 원인인 경우가 매우 많습니다. 밥, 빵, 면, 떡 같은 정제 탄수화물과 과당이 풍부한 과일(주스 포함)을 과도하게 섭취하면, 우리 몸은 쓰고 남은 에너지를 중성지방 형태로 간에 차곡차곡 쌓아둡니다. 간에 지방이 끼면 간세포가 파괴되면서 AST, ALT 수치가 상승합니다.</p>

            <h3>어떻게 극복해야 할까?</h3>
            <p>간 수치를 정상으로 돌리는 가장 확실한 방법은 '휴식과 정석 다이어트'입니다.</p>
            <ol>
                <li><b>체중 감량:</b> 현재 체중의 5~10%만 감량해도 간에 낀 지방이 눈에 띄게 줄어들고 수치가 안정화됩니다.</li>
                <li><b>단백질 위주 식사:</b> 탄수화물을 줄이고 두부, 닭가슴살, 흰살 생선 등 양질의 단백질을 섭취하여 간세포의 재생을 도와야 합니다.</li>
                <li><b>충분한 수면:</b> 간도 쉬어야 회복할 수 있습니다. 밤 11시 이전에는 취침하여 간의 해독 사이클을 돕는 것이 중요합니다.</li>
            </ol>
            <p>만약 수치가 100 이상이 지속되거나 피로감이 극심하다면 반드시 소화기내과(간 전문의)를 방문하여 B형/C형 간염 바이러스 검사나 정밀 초음파를 받아보셔야 합니다.</p>
        </article>

        <!-- Article 3 -->
        <article class="article-card">
            <h1>2030 직장인 건강검진, 기본 항목 외에 꼭 추가해야 할 필수 검사는?</h1>
            <div class="author-tag">✍️ 작성자: 체킷 건강연구소 | 🗓️ 최종 수정일: 2026.07.24</div>
            
            <p>국가건강검진은 국민의 전반적인 건강 수준을 끌어올리기 위한 '최소한의 기본 스크리닝'입니다. 따라서 20~30대 젊은 직장인들의 경우 기본 혈액검사와 흉부 X-ray만으로는 최근 급증하는 서구화된 질병들을 초기에 잡아내기 어렵습니다. 오늘은 병원 현무자로서 2030 세대에게 돈이 아깝지 않은 '진짜 필수 추가 검사 항목'을 추천해 드립니다.</p>

            <h2>1. 위내시경 (수면) - 30대부터는 필수!</h2>
            <p>한국은 위암 발병률 세계 1위 국가입니다. 자극적인 맵고 짠 배달 음식과 불규칙한 식습관, 직장 스트레스로 인해 2030 세대의 위식도 역류질환과 만성 위염 발병이 폭발적으로 늘고 있습니다. 국가 암검진에서는 40세부터 위내시경을 지원하지만, 30대가 되었다면 2년에 한 번 정도는 자비나 회사 지원을 통해서라도 반드시 위내시경을 받아 위 점막 상태와 헬리코박터균 감염 여부를 확인해야 합니다.</p>

            <h2>2. 복부 초음파 (상복부) - 간과 담낭의 상태 체크</h2>
            <p>혈액검사 상 간 수치가 정상이라고 해서 간이 100% 건강한 것은 아닙니다. 초음파를 대봐야 지방간이 얼마나 진행되었는지, 담낭에 담석이나 용종이 숨어있지는 않은지 정확히 볼 수 있습니다. 서구화된 식습관으로 젊은 층의 담석증 환자가 급증하고 있으므로, 배가 자주 아프고 소화가 안 된다면 복부 초음파는 꼭 추가하시기 바랍니다.</p>

            <h2>3. 경추/요추 X-ray - 거북목과 디스크 경고</h2>
            <p>하루 종일 모니터를 보고 퇴근 후에는 스마트폰을 놓지 않는 2030 직장인들에게 목과 허리 건강은 시한폭탄과 같습니다. 뼈의 정렬 상태(일자목, 거북목)와 디스크 간격을 확인하는 간단한 X-ray 검사만으로도 향후 발생할 수 있는 심각한 목/허리 디스크를 예방하고 자세를 교정하는 강력한 동기부여가 될 수 있습니다.</p>

            <h2>4. 여성 필수 추가 항목 (자궁초음파, 갑상선초음파)</h2>
            <p>여성의 경우 국가검진에서 자궁경부암(세포검사)을 지원하지만, 이것만으로는 자궁근종, 자궁내막증, 난소 낭종(물혹)을 잡아낼 수 없습니다. 생리통이 심하거나 주기가 불규칙하다면 자궁(골반) 초음파가 필수입니다. 또한 20~30대 여성 암 발병 1위를 다투는 갑상선암 조기 발견을 위해 갑상선 초음파도 가급적 추가하는 것을 권장합니다.</p>

            <h2>결론: 내 몸에 맞는 맞춤형 설계가 핵심</h2>
            <p>병원에서 권하는 수십만 원짜리 패키지를 무조건 결제할 필요는 없습니다. 가족력이 있는 질환, 나의 평소 식습관, 최근 불편했던 증상을 기준으로 1~2가지 항목만 스마트하게 추가한다면 가성비와 건강을 동시에 챙기는 완벽한 건강검진이 될 것입니다.</p>
        </article>

    </main>

    <footer style="text-align:center; padding:30px; background:#f4f7f6; color:#888; font-size:13px; line-height: 1.6;">
        <div style="margin-bottom: 15px; display:flex; justify-content:center; gap:20px; flex-wrap:wrap;">
            <a href="about.html#about" style="color:#00b4a2; text-decoration:none; font-weight:bold;">블로그 소개</a>
            <a href="about.html#contact" style="color:#00b4a2; text-decoration:none; font-weight:bold;">문의하기</a>
            <a href="about.html#privacy" style="color:#00b4a2; text-decoration:none; font-weight:bold;">개인정보처리방침</a>
            <a href="about.html#disclaimer" style="color:#00b4a2; text-decoration:none; font-weight:bold;">면책 조항</a>
        </div>
        <p>&copy; 2026 체킷의 항목 체크. All rights reserved.</p>
    </footer>

    <script src="app.js"></script>
</body>
</html>`;
fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/magazine.html', magazineHtml, 'utf8');

// 3. Update all navigations to include magazine.html
const files = ['index.html', 'simulator.html', 'about.html', 'nhis-guide.html', 'sanjae-guide.html', 'diet-recipe.html', 'checkup-tips.html'];
const newNavStr = `            <a href="index.html">🔍 전체 검사 항목 백과</a>
            <a href="simulator.html">📊 결과지 수치 시뮬레이터</a>
            <a href="nhis-guide.html">🇰🇷 국가건강검진(공단) 가이드</a>
            <a href="sanjae-guide.html">👷 특수검진 및 산재 가이드</a>
            <a href="diet-recipe.html">🍽️ 건강검진 식단 & 자취생 레시피</a>
            <a href="checkup-tips.html">💡 건강검진 받기 전 필수 팁</a>
            <a href="magazine.html">📰 건강검진 매거진 (칼럼)</a>
            <a href="about.html">ℹ️ 사이트 소개 및 약관</a>`;

files.forEach(file => {
    let html = fs.readFileSync(`C:/Users/pc/Documents/minddoo.github.io/${file}`, 'utf8');
    
    const navRegex = /<a href="index\.html".*?<\/a>\s*<a href="simulator\.html".*?<\/a>\s*<a href="nhis-guide\.html".*?<\/a>\s*<a href="sanjae-guide\.html".*?<\/a>\s*<a href="diet-recipe\.html".*?<\/a>\s*<a href="checkup-tips\.html".*?<\/a>\s*(<a href="magazine\.html".*?<\/a>\s*)?<a href="about\.html".*?<\/a>/;
    html = html.replace(navRegex, newNavStr);
    
    fs.writeFileSync(`C:/Users/pc/Documents/minddoo.github.io/${file}`, html, 'utf8');
});
console.log('Created magazine.html and updated navigation.');

// 4. Create sitemap.xml
const siteUrl = 'https://minddoo.github.io';
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${siteUrl}/index.html</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>${siteUrl}/simulator.html</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>${siteUrl}/nhis-guide.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>${siteUrl}/sanjae-guide.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>${siteUrl}/diet-recipe.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>${siteUrl}/checkup-tips.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>${siteUrl}/magazine.html</loc><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>${siteUrl}/about.html</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>
</urlset>`;
fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/sitemap.xml', sitemapXml, 'utf8');
console.log('Created sitemap.xml');

// 5. Create robots.txt
const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${siteUrl}/sitemap.xml`;
fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/robots.txt', robotsTxt, 'utf8');
console.log('Created robots.txt');

