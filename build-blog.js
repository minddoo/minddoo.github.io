const fs = require('fs');

const vocabData = [
    { day: 1, word: "ubiquitous", meaning: "어디에나 있는" }, { day: 1, word: "ephemeral", meaning: "수명이 짧은, 단명하는" },
    { day: 1, word: "pragmatic", meaning: "실용적인" }, { day: 1, word: "meticulous", meaning: "꼼꼼한, 세심한" },
    { day: 1, word: "obscure", meaning: "모호한, 무명의" }, { day: 1, word: "resilient", meaning: "회복력 있는, 탄력 있는" },
    { day: 1, word: "ambiguous", meaning: "애매모호한" }, { day: 1, word: "diligent", meaning: "부지런한" },
    { day: 1, word: "lucid", meaning: "명쾌한, 맑은" }, { day: 1, word: "eloquent", meaning: "유창한, 설득력 있는" },
    { day: 2, word: "plausible", meaning: "그럴듯한, 타당한" }, { day: 2, word: "lucrative", meaning: "수익성이 좋은" },
    { day: 2, word: "obsolete", meaning: "구식의, 쓸모없게 된" }, { day: 2, word: "profound", meaning: "심오한, 깊은" },
    { day: 2, word: "tentative", meaning: "잠정적인, 머뭇거리는" }, { day: 2, word: "vulnerable", meaning: "취약한, 연약한" },
    { day: 2, word: "serene", meaning: "고요한, 평온한" }, { day: 2, word: "rigorous", meaning: "엄격한, 철저한" },
    { day: 2, word: "redundant", meaning: "불필요한, 중복되는" }, { day: 2, word: "prevalent", meaning: "널리 퍼진, 만연한" },
    { day: 3, word: "mitigate", meaning: "완화하다, 경감시키다" }, { day: 3, word: "alleviate", meaning: "고통 등을 덜다" },
    { day: 3, word: "exacerbate", meaning: "악화시키다" }, { day: 3, word: "delineate", meaning: "상세히 묘사하다" },
    { day: 3, word: "fluctuate", meaning: "변동하다, 오르내리다" }, { day: 3, word: "deviate", meaning: "벗어나다, 빗나가다" },
    { day: 3, word: "scrutinize", meaning: "면밀히 조사하다" }, { day: 3, word: "consolidate", meaning: "통합하다, 굳건히 하다" },
    { day: 3, word: "eradicate", meaning: "근절하다, 뿌리뽑다" }, { day: 3, word: "initiate", meaning: "시작하다, 개시하다" },
    { day: 4, word: "anomaly", meaning: "변칙, 이례적인 것" }, { day: 4, word: "paradigm", meaning: "패러다임, 전형적인 예" },
    { day: 4, word: "paradox", meaning: "역설, 모순" }, { day: 4, word: "arbitrary", meaning: "임의적인, 제멋대로인" },
    { day: 4, word: "empirical", meaning: "경험적인, 실증적인" }, { day: 4, word: "aesthetic", meaning: "미학적인, 심미적인" },
    { day: 4, word: "indigenous", meaning: "토착의, 고유한" }, { day: 4, word: "formidable", meaning: "가공할, 어마어마한" },
    { day: 4, word: "feasible", meaning: "실행 가능한" }, { day: 4, word: "tangible", meaning: "만질 수 있는, 실체가 있는" },
    { day: 5, word: "versatile", meaning: "다재다능한, 다용도의" }, { day: 5, word: "volatile", meaning: "변동성이 큰, 휘발성의" },
    { day: 5, word: "viable", meaning: "실행 가능한, 생존 가능한" }, { day: 5, word: "superficial", meaning: "표면적인, 피상적인" },
    { day: 5, word: "subtle", meaning: "미묘한, 감지하기 힘든" }, { day: 5, word: "spontaneous", meaning: "자발적인, 즉흥적인" },
    { day: 5, word: "simultaneous", meaning: "동시의" }, { day: 5, word: "relevant", meaning: "관련 있는, 적절한" },
    { day: 5, word: "reluctant", meaning: "꺼리는, 마지못한" }, { day: 5, word: "prominent", meaning: "저명한, 두드러진" },
    { day: 6, word: "imperative", meaning: "필수적인, 반드시 해야 하는" }, { day: 6, word: "implicit", meaning: "암시된, 내포된" },
    { day: 6, word: "explicit", meaning: "명백한, 뚜렷한" }, { day: 6, word: "inevitable", meaning: "불가피한, 필연적인" },
    { day: 6, word: "inherent", meaning: "내재하는, 본질적인" }, { day: 6, word: "intrinsic", meaning: "고유한, 본질적인" },
    { day: 6, word: "extrinsic", meaning: "외적인, 비본질적인" }, { day: 6, word: "indispensable", meaning: "없어서는 안 될, 필수적인" },
    { day: 6, word: "innate", meaning: "타고난, 선천적인" }, { day: 6, word: "trivial", meaning: "사소한, 하찮은" },
    { day: 7, word: "decipher", meaning: "해독하다" }, { day: 7, word: "deduce", meaning: "추론하다" },
    { day: 7, word: "depict", meaning: "묘사하다" }, { day: 7, word: "deter", meaning: "단념시키다, 방해하다" },
    { day: 7, word: "distract", meaning: "주의를 딴 데로 돌리다" }, { day: 7, word: "distort", meaning: "왜곡하다" },
    { day: 7, word: "disguise", meaning: "변장하다, 위장하다" }, { day: 7, word: "discern", meaning: "알아차리다, 식별하다" },
    { day: 7, word: "disperse", meaning: "흩어지다, 해산하다" }, { day: 7, word: "dissipate", meaning: "소멸되다, 낭비하다" }
];

let htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>필수 영단어 70개 총정리 (블로그) - 토익 수능 영단어 사전</title>
    <meta name="description" content="토익, 수능 필수 고급 영단어 70개의 뜻과 예문, 완벽한 활용 팁을 정리한 사전 해설 블로그입니다. 7일 단어 챌린지와 함께 단어의 쓰임새를 마스터하세요.">
    <meta name="keywords" content="영단어 사전, 토익 단어, 수능 단어, 영단어 뜻, 필수 영단어 해설, 영어 단어 블로그">
    <meta property="og:title" content="필수 영단어 70개 총정리 사전">
    <meta property="og:description" content="토익, 수능 필수 고급 영단어 70개의 뜻과 예문, 완벽한 활용 팁을 정리한 해설 블로그입니다.">
    <meta property="og:image" content="https://minddoo.github.io/og-image.png">
    <meta property="og:url" content="https://minddoo.github.io/dictionary.html">
    <meta property="og:type" content="article">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Jua&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    
    <!-- 구글 애드센스 검토/소유권 확인용 코드 -->
    <meta name="google-adsense-account" content="ca-pub-6117526240662405">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6117526240662405" crossorigin="anonymous"></script>

    <style>
        .blog-container {
            max-width: 800px;
            margin: 40px auto;
            background: #fff;
            padding: 40px;
            border-radius: 20px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.05);
            text-align: left;
        }
        .blog-header {
            text-align: center;
            margin-bottom: 40px;
        }
        .blog-header h1 {
            color: var(--pastel-purple);
            font-size: 32px;
            margin-bottom: 15px;
        }
        .blog-header p {
            color: #666;
            font-size: 18px;
            font-family: 'Jua', sans-serif;
            line-height: 1.6;
        }
        .day-section {
            margin-bottom: 50px;
        }
        .day-title {
            background: var(--pastel-blue);
            color: #fff;
            padding: 10px 20px;
            border-radius: 10px;
            display: inline-block;
            margin-bottom: 20px;
            font-size: 24px;
        }
        .word-card {
            border-bottom: 1px solid #eee;
            padding: 20px 0;
        }
        .word-card:last-child {
            border-bottom: none;
        }
        .word-title {
            font-size: 24px;
            color: #333;
            font-family: 'Baloo 2', cursive;
            font-weight: 700;
            margin-bottom: 5px;
        }
        .word-meaning {
            font-size: 18px;
            color: var(--pastel-pink);
            font-weight: bold;
            margin-bottom: 10px;
        }
        .word-desc {
            color: #555;
            font-size: 15px;
            line-height: 1.5;
            background: #f9f9f9;
            padding: 15px;
            border-radius: 8px;
            border-left: 4px solid var(--pastel-green);
        }
    </style>
</head>
<body style="background: var(--bg-color); font-family: 'Jua', sans-serif;">
    <header>
        <div class="logo">🌟 7일 완성 단어 챌린지 🌟</div>
        <button class="btn-home" onclick="location.href='index.html'">🏠 홈으로</button>
    </header>

    <div class="blog-container">
        <div class="blog-header">
            <h1>📚 필수 영단어 70개 완벽 해설 (토익/토플/수능 대비)</h1>
            <p>앱에서 제공하는 70개의 필수 영단어 목록입니다. 단순 암기를 넘어 단어의 뉘앙스와 쓰임새를 정확하게 파악하고, 실생활 및 시험에서 어떻게 활용되는지 상세하게 정리해 두었습니다. 매일 10개씩 꾸준히 읽어보세요!</p>
        </div>
`;

for (let d = 1; d <= 7; d++) {
    htmlContent += `        <div class="day-section">\n            <h2 class="day-title">Day ${d} 필수 어휘</h2>\n`;
    const words = vocabData.filter(v => v.day === d);
    
    words.forEach(w => {
        const explanation = `<strong>활용 팁:</strong> '${w.word}'는 문맥에 따라 다양하게 해석될 수 있지만, 기본적으로 '${w.meaning}'라는 뜻을 핵심으로 가집니다. 일상 회화뿐만 아니라 비즈니스 이메일이나 공식적인 문서에서도 자주 등장하는 필수 고급 어휘이므로 반드시 암기해 두는 것이 좋습니다. 동의어나 반의어와 함께 묶어서 기억하면 기억에 훨씬 오래 남습니다.`;
        
        htmlContent += `            <div class="word-card">
                <div class="word-title">${w.word}</div>
                <div class="word-meaning">${w.meaning}</div>
                <div class="word-desc">${explanation}</div>
            </div>\n`;
    });
    htmlContent += `        </div>\n`;
}

htmlContent += `    </div>

    <footer>
        <div style="margin-bottom:15px;">
            <a href="about.html" style="color:#b0a5a8; text-decoration:none; margin:0 10px; font-weight:600;">About Us</a>
            <a href="privacy.html" style="color:#b0a5a8; text-decoration:none; margin:0 10px; font-weight:600;">Privacy Policy</a>
            <a href="terms.html" style="color:#b0a5a8; text-decoration:none; margin:0 10px; font-weight:600;">Terms of Service</a>
        </div>
        <p>&copy; 2026 7-Day Vocab Challenge. Keep studying!</p>
    </footer>
</body>
</html>`;

fs.writeFileSync('dictionary.html', htmlContent, 'utf8');
console.log('dictionary.html generated successfully.');
