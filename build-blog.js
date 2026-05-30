const fs = require('fs');
const vocabDB = require('./data.js');

const langs = [
    { code: 'en', title: '영어', subtitle: '토익 수능 영어 단어장' },
    { code: 'ja', title: '일본어', subtitle: 'JLPT 필수 단어장' },
    { code: 'zh', title: '중국어', subtitle: 'HSK 필수 단어장' }
];

langs.forEach(langInfo => {
    let contentHtml = '';
    const vocabData = vocabDB[langInfo.code];

    vocabData.forEach((item, index) => {
        contentHtml += `
            <div class="word-card">
                <div class="word-number">단어 #${index + 1} (Day ${item.day})</div>
                <div class="word-title">${item.word}</div>
                <div class="word-meaning">${item.meaning}</div>
                <div class="word-tip">💡 <strong>활용 팁:</strong> ${item.word} 단어는 실제 원어민들이 자주 사용하는 필수 단어입니다. 오늘 꼭 외워두세요!</div>
            </div>
        `;
    });

    const htmlTemplate = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>필수 ${langInfo.title} 단어 총정리 (블로그) - ${langInfo.subtitle}</title>
    <meta name="description" content="필수 고급 ${langInfo.title} 단어의 뜻과 예문, 완벽한 활용 팁을 정리한 사전 해설 블로그입니다. 7일 챌린지와 함께 단어의 쓰임새를 마스터하세요.">
    <meta name="keywords" content="${langInfo.title} 단어 사전, 영단어 뜻, 필수 해설, 영어 단어 블로그">
    <meta property="og:title" content="필수 ${langInfo.title} 단어 총정리 사전">
    <meta property="og:description" content="필수 ${langInfo.title} 단어의 뜻과 예문, 완벽한 활용 팁을 정리한 해설 블로그입니다.">
    <meta property="og:image" content="https://minddoo.github.io/og-image.png">
    <meta property="og:url" content="https://minddoo.github.io/dictionary-${langInfo.code}.html">
    <meta property="og:type" content="article">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Jua&display=swap" rel="stylesheet">
    
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6117526240662405"
     crossorigin="anonymous"></script>
    <meta name="google-adsense-account" content="ca-pub-6117526240662405">

    <style>
        body { font-family: 'Jua', 'Baloo 2', sans-serif; background-color: #fffcf9; color: #5c4b51; line-height: 1.6; padding: 20px; max-width: 800px; margin: 0 auto; }
        header { text-align: center; margin-bottom: 40px; padding: 20px; background: #fff; border-radius: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.05); }
        h1 { color: #ff8b94; }
        .tabs { display: flex; justify-content: center; gap: 10px; margin-bottom: 30px; }
        .tab-link { padding: 10px 20px; background: #fff; border: 2px solid #ddd; border-radius: 20px; text-decoration: none; color: #888; font-weight: bold; }
        .tab-link.active { background: #bbded6; border-color: #9cc2ba; color: #fff; }
        .word-card { background: #ffffff; border-radius: 15px; padding: 25px; margin-bottom: 25px; border-left: 6px solid #bbded6; box-shadow: 0 5px 15px rgba(0,0,0,0.03); }
        .word-number { font-size: 14px; color: #888; margin-bottom: 5px; }
        .word-title { font-size: 32px; color: #9cc2ba; font-family: 'Baloo 2', cursive; font-weight: 700; margin-bottom: 10px; }
        .word-meaning { font-size: 22px; color: #5c4b51; margin-bottom: 15px; font-weight: bold; }
        .word-tip { background: #fae3d9; padding: 15px; border-radius: 10px; font-size: 16px; color: #5c4b51; }
        .ad-box { width: 100%; height: 250px; background: #f4f1ee; border: 2px dashed #ddd; margin: 30px 0; display: flex; align-items: center; justify-content: center; color: #aaa; }
        .back-btn { display: inline-block; padding: 12px 25px; background: #ffb6b9; color: white; text-decoration: none; border-radius: 20px; font-size: 18px; text-align: center; margin-top: 20px; box-shadow: 0 4px 0 #e69ca0; }
        .back-btn:active { transform: translateY(4px); box-shadow: 0 0 0 transparent; }
    </style>
</head>
<body>
    <header>
        <h1>📚 필수 ${langInfo.title} 단어 총정리 해설</h1>
        <p>7일 챌린지에 등장하는 모든 필수 ${langInfo.title} 단어의 상세 해설집입니다.<br>검색을 통해 들어오셨다면, 아래 버튼을 눌러 게임처럼 단어를 외워보세요!</p>
        <a href="index.html" class="back-btn">🎮 무료 단어 퀴즈 앱 시작하기</a>
    </header>

    <div class="tabs">
        <a href="dictionary-en.html" class="tab-link ${langInfo.code === 'en' ? 'active' : ''}">🇺🇸 영어</a>
        <a href="dictionary-ja.html" class="tab-link ${langInfo.code === 'ja' ? 'active' : ''}">🇯🇵 일본어</a>
        <a href="dictionary-zh.html" class="tab-link ${langInfo.code === 'zh' ? 'active' : ''}">🇨🇳 중국어</a>
    </div>

    <!-- 상단 광고 -->
    <div class="ad-box">AdSense Banner (Top)</div>

    <main>
        ${contentHtml}
    </main>

    <!-- 하단 광고 -->
    <div class="ad-box">AdSense Banner (Bottom)</div>

    <footer style="text-align: center; margin-top: 50px; color: #aaa;">
        <a href="index.html" class="back-btn">🏠 챌린지 홈으로 돌아가기</a>
        <p style="margin-top: 20px;">&copy; 2026 7-Day Vocab Challenge Blog</p>
    </footer>
</body>
</html>`;

    fs.writeFileSync(`dictionary-${langInfo.code}.html`, htmlTemplate);
    console.log(`dictionary-${langInfo.code}.html generated successfully.`);
});
