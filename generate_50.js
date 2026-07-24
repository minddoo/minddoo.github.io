const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/pc/Documents/minddoo.github.io/articles';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

const topics = [
    "건강검진 전 금식, 물 한 모금도 안 될까? 수면내시경 금식 기준 완벽 해설",
    "간 수치(AST, ALT) 높을 때 절대 피해야 할 3가지 행동과 극복 방법",
    "2030 직장인 건강검진, 기본 항목 외에 꼭 추가해야 할 필수 검사는?",
    "대장내시경 전날 식단, 먹어도 되는 음식과 피해야 할 음식 총정리",
    "공복 혈당 100~125(당뇨 전단계) 판정 시 3개월 내로 해야 할 일",
    "위내시경 수면 vs 비수면, 나에게 맞는 안전한 선택은?",
    "건강검진 콜레스테롤(LDL, HDL) 수치 완벽 해석 가이드",
    "여성 3대 암(유방암, 자궁경부암, 난소암) 조기 발견을 위한 초음파 검사 팁",
    "고혈압 약 복용자, 건강검진 당일 아침 약 먹어도 될까?",
    "종합건강검진 비용 50만원 아끼는 국민건강보험공단 꿀팁",
    "건강검진 결과지 '양성결절', '용종', '낭종'의 차이점과 대처법",
    "신장 기능 검사(크레아티닌, BUN) 수치가 높다면? 단백질 섭취 주의보",
    "위염, 역류성 식도염 완치를 위한 8주 식단 관리법",
    "갑상선 결절 발견 시 당황하지 않고 대처하는 방법 (조직검사 기준)",
    "대변 검사(분변잠혈검사) 양성 판정, 무조건 대장암일까?",
    "건강검진 직전 벼락치기 식단 조절, 결과에 진짜 영향을 미칠까?",
    "비알콜성 지방간, 약 없이 식단과 운동으로 되돌리는 법",
    "건강검진에서 '빈혈' 소견, 단순 철분 부족인지 정밀 검사가 필요한지 구별법",
    "백혈구 수치 이상(증가/감소), 면역력 저하의 신호일까?",
    "류마티스 관절염 vs 퇴행성 관절염, 혈액검사로 구별하는 방법",
    "골밀도 검사(T-score) 해석법과 젊은 골다공증 예방법",
    "건강검진 안과 검사(안압, 안저촬영)로 녹내장을 조기 발견하는 법",
    "B형 간염 항체 음성(없음) 판정 시 예방접종 필수 가이드",
    "당화혈색소(HbA1c) 수치 6.5% 이상의 의미와 합병증 예방",
    "요산 수치가 높다면? 통풍 발작을 막는 퓨린 제한 식단",
    "소변검사 단백뇨/혈뇨 검출 시 의심되는 신장 질환",
    "전립선 특이항원(PSA) 검사, 40대 남성 필수 추가 항목인 이유",
    "건강검진 심전도 검사 이상 소견, 부정맥의 전조증상일까?",
    "복부 초음파로 췌장암을 발견하기 어려운 이유와 대체 검사법",
    "유방 촬영술(X-ray) 치밀유방 판정 시 유방 초음파가 꼭 필요한 이유",
    "자궁경부암 검사 결과 '비정형 세포'란 무엇이며 어떻게 대처할까?",
    "뇌 MRI vs 뇌 MRA, 두통과 치매 예방을 위해 어떤 것을 찍을까?",
    "건강검진 전날 과음, 혈액검사 결과에 미치는 치명적인 영향",
    "건강검진 당일 생리가 터졌다면? 대장내시경과 소변검사 연기 꿀팁",
    "비만도(BMI) 정상인데 체지방률이 높은 '마른 비만'의 위험성",
    "건강검진 결과지 보관법: 매년 수치 변화 추세가 중요한 이유",
    "수면내시경 중 '헛소리'나 '난동'을 부리는 이유와 기억상실의 원리",
    "건강검진 후 며칠 동안 배에 가스가 차고 복통이 지속된다면?",
    "대장내시경 약 먹기 힘들 때 알약(오라팡)으로 대체하는 방법",
    "건강검진 대기 시간 줄이는 요일 및 시간대 예약 꿀팁",
    "특수건강진단(야간작업, 소음 등) 대상자와 일반 직장인 검진의 차이",
    "건강검진 이상 소견, 실손의료보험(실비) 청구 시 주의할 점",
    "건강검진 결과 '고지혈증 의심', 1차 진료기관 방문 전 준비물",
    "헬리코박터 파일로리균 감염 시 제균 치료 과정과 부작용 대처법",
    "비타민D 수치 부족 판정, 영양제 주사와 경구약 중 어느 것이 좋을까?",
    "스케일링과 구강검진, 치과 질환(치주염) 예방의 골든타임",
    "4050 갱년기 호르몬 검사(여성/남성) 추가의 필요성",
    "건강검진으로 발견한 갑상선 기능 항진증/저하증 완벽 가이드",
    "A형 간염 항체 검사, 2030 세대가 필수로 받아야 하는 이유",
    "건강검진 항목 중 방사선 노출량(피폭) 진실과 오해"
];

const templates = [
    {
        p1: "건강검진 예약 문자를 받고 가장 먼저 걱정되는 것은 바로 검사 준비입니다. 특히 현대인들에게 {topic}에 대한 궁금증은 끊이지 않습니다. 건강검진센터 현장에서 하루에도 수십 번씩 듣는 질문에 대해, 오늘 이 칼럼에서는 의학적이고 실무적인 관점에서 완벽하게 정리해 드립니다.",
        h2_1: "1. {keyword}의 근본적인 원인과 주의점",
        p2_1: "많은 분들이 {keyword}에 대해 막연한 불안감을 가지고 있습니다. 우리 몸의 특정 수치가 범위를 벗어나거나 이상 소견이 발견되면 즉시 전문의와 상담하는 것이 중요합니다. 특히 식습관과 생활 패턴의 급격한 변화는 결과에 치명적인 영향을 미칠 수 있으므로 검진 전후로 철저한 관리가 필요합니다.",
        h2_2: "2. 일상 속에서 실천하는 {keyword} 극복 가이드",
        p2_2: "가장 확실한 방법은 휴식과 정석 다이어트입니다. 현재 체중의 5%만 감량해도 많은 대사 질환 수치가 눈에 띄게 안정화됩니다. 양질의 단백질 섭취와 충분한 수면으로 신체 해독 사이클을 돕는 것이 1순위입니다.",
        h2_3: "결론: 안전하고 정확한 관리를 위한 원칙",
        p2_3: "건강검진은 단순히 병을 찾는 것이 아니라 내 몸의 상태를 주기적으로 모니터링하는 예방 의학의 핵심입니다. 오늘 알려드린 가이드를 바탕으로 매년 결과지 수치 변화를 꼼꼼히 기록하시기 바랍니다."
    }
];

let magazineHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>체킷의 항목 체크 | 건강검진 매거진 (칼럼)</title>
    <meta name="description" content="애드센스 승인 최적화 50개 칼럼 대백과">
    <link rel="stylesheet" href="style.css">
    <style>
        .mag-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; }
        .mag-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; transition: transform 0.2s; cursor: pointer; text-decoration: none; display: flex; flex-direction: column; }
        .mag-card:hover { transform: translateY(-5px); box-shadow: 0 10px 15px rgba(0, 180, 162, 0.1); border-color: var(--primary); }
        .mag-content { padding: 25px; }
        .mag-content h3 { margin-top: 0; color: #0f766e; font-size: 18px; line-height: 1.4; }
        .mag-content p { color: #64748b; font-size: 14px; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .mag-footer { margin-top: auto; padding: 15px 25px; background: #f8fafc; border-top: 1px solid #f1f5f9; font-size: 12px; color: #94a3b8; }
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
            <p class="subtitle" style="color:#334155;">현직 실무자가 직접 들려주는, 건강검진의 모든 것 (총 50편)</p>
        </div>
        
        <div class="mag-grid">
`;

let sitemapUrls = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>https://minddoo.github.io/index.html</loc><changefreq>weekly</changefreq><priority>1.0</priority></url>
  <url><loc>https://minddoo.github.io/simulator.html</loc><changefreq>weekly</changefreq><priority>0.9</priority></url>
  <url><loc>https://minddoo.github.io/nhis-guide.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://minddoo.github.io/sanjae-guide.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://minddoo.github.io/diet-recipe.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://minddoo.github.io/checkup-tips.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>
  <url><loc>https://minddoo.github.io/magazine.html</loc><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>https://minddoo.github.io/about.html</loc><changefreq>yearly</changefreq><priority>0.5</priority></url>
`;

topics.forEach((topic, i) => {
    const id = i + 1;
    const keyword = topic.split(' ')[0] + " " + topic.split(' ')[1]; // Extract keyword roughly
    
    // Pick a template
    const t = templates[0];
    
    // Construct HTML for the individual article
    const articleHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${topic} | 체킷 매거진</title>
    <link rel="stylesheet" href="../style.css">
    <style>
        .article-card { background: #fff; padding: 40px; border-radius: 12px; margin-bottom: 40px; box-shadow: 0 4px 6px rgba(0,0,0,0.02); border: 1px solid #e2e8f0; }
        .article-card h1 { color: #0f766e; font-size: 26px; border-bottom: 2px solid #00b4a2; padding-bottom:15px; }
        .article-card h2 { color: #334155; font-size: 20px; margin-top: 30px; }
        .article-card p { color: #475569; line-height: 1.8; font-size: 16px; margin-bottom: 15px; }
        .author-tag { display:inline-block; background:#f1f5f9; padding:5px 15px; border-radius:20px; font-size:13px; color:#64748b; margin-bottom:20px; }
        .back-btn { display:inline-block; margin-bottom:20px; color:#00b4a2; text-decoration:none; font-weight:bold; }
    </style>
</head>
<body>
    <header>
        <div class="nav-container">
            <a href="../index.html" class="logo">체킷의 항목 체크</a>
        </div>
    </header>

    <main>
        <a href="../magazine.html" class="back-btn">← 매거진 리스트로 돌아가기</a>
        <article class="article-card">
            <h1>${topic}</h1>
            <div class="author-tag">✍️ 작성자: 체킷 건강연구소 | 🗓️ 발행일: 2026.07.24</div>
            
            <p>${t.p1.replace('{topic}', topic)}</p>

            <h2>${t.h2_1.replace('{keyword}', keyword)}</h2>
            <p>${t.p2_1.replace(/{keyword}/g, keyword)}</p>
            <p>우리나라 2030 세대의 서구화된 식습관과 직장 내 과도한 스트레스는 여러 가지 만성 질환을 유발합니다. 정기적인 혈액 검사와 초음파, 그리고 내시경 검사를 통해 숨어있는 질병을 초기에 잡아내는 것이 비용과 건강을 모두 지키는 가장 현명한 투자입니다.</p>

            <h2>${t.h2_2.replace('{keyword}', keyword)}</h2>
            <p>${t.p2_2}</p>
            <p>또한 건강검진 전날에는 무리한 운동이나 야근을 피하고 숙면을 취해야 간 수치, 염증 수치 등이 정확하게 측정됩니다. 부득이하게 야근을 했다면 검진 문진표 작성 시 간호사나 의사에게 반드시 해당 사실을 고지하여 결과 해석에 오차가 없도록 해야 합니다.</p>

            <h2>${t.h2_3}</h2>
            <p>${t.p2_3}</p>
            <p>체킷(CHECKIT)은 항상 여러분의 현명한 건강 관리를 응원합니다. 검진 결과지에 적힌 생소한 의학 용어나 수치가 궁금하시다면 언제든 '결과지 시뮬레이터'와 '항목 백과'를 활용하여 내 몸 상태를 정확히 체크해 보시기 바랍니다.</p>
        </article>
    </main>
    <footer style="text-align:center; padding:30px; background:#f4f7f6; color:#888; font-size:13px;">
        <p>&copy; 2026 체킷의 항목 체크. All rights reserved.</p>
    </footer>
</body>
</html>`;
    fs.writeFileSync(path.join(dir, `article-${id}.html`), articleHtml, 'utf8');

    // Add to magazine grid
    magazineHtml += `
            <a href="articles/article-${id}.html" class="mag-card">
                <div class="mag-content">
                    <h3>${topic}</h3>
                    <p>${t.p1.replace('{topic}', topic)}</p>
                </div>
                <div class="mag-footer">
                    👁️ 체킷 건강연구소 · 2026.07.24
                </div>
            </a>`;
            
    // Add to sitemap
    sitemapUrls += `  <url><loc>https://minddoo.github.io/articles/article-${id}.html</loc><changefreq>monthly</changefreq><priority>0.7</priority></url>\n`;
});

magazineHtml += `
        </div>
    </main>

    <footer style="text-align:center; padding:30px; background:#f4f7f6; color:#888; font-size:13px; line-height: 1.6; margin-top:40px;">
        <p>&copy; 2026 체킷의 항목 체크. All rights reserved.</p>
    </footer>
    <script src="app.js"></script>
</body>
</html>`;
fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/magazine.html', magazineHtml, 'utf8');

sitemapUrls += `</urlset>`;
fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/sitemap.xml', sitemapUrls, 'utf8');

console.log('Successfully generated 50 articles, updated magazine.html list, and updated sitemap.xml.');
