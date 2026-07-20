const fs = require('fs');
const vocabDB = require('./data.js');

const langs = {
    en: { title: "영어", defaultOrigin: "라틴어/그리스어 등 다양한 어원을 가집니다.", defaultNuance: "영어권 국가에서 일상 및 비즈니스 환경에서 폭넓게 사용됩니다.", code: "en" },
    ja: { title: "일본어", defaultOrigin: "한자어 또는 고유어에서 유래했습니다.", defaultNuance: "상황에 따라 뉘앙스가 달라질 수 있으니 예문을 주의해서 보세요.", code: "ja" },
    zh: { title: "중국어", defaultOrigin: "한자 본래의 뜻에서 파생된 의미입니다.", defaultNuance: "중국어 특유의 어감을 살려 사용해보세요.", code: "zh" }
};

const getSafeFilename = (word) => {
    return word.replace(/[\s()\/]+/g, '-').replace(/-$/, '');
};

const template = (wordObj, langInfo) => `<!DOCTYPE html>
<html lang="${langInfo.code}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${langInfo.title} 단어 해설: ${wordObj.word} 뜻과 예문 완벽 정리</title>
    <meta name="description" content="필수 ${langInfo.title} 단어 ${wordObj.word}의 정확한 뜻, 어원, 원어민 뉘앙스, 그리고 실생활 예문을 상세히 알아보세요.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .post-container { max-width: 800px; margin: 40px auto; padding: 30px; background: var(--card-bg); border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .word-header { text-align: center; border-bottom: 3px dashed var(--pastel-pink); padding-bottom: 20px; margin-bottom: 30px; }
        .word-title { font-size: 48px; color: var(--pastel-pink-shadow); font-family: 'Noto Sans KR', sans-serif; margin: 0; font-weight: 900;}
        .word-pronounce { font-size: 20px; color: #888; margin-top: 5px; }
        .word-meaning-main { font-size: 28px; color: var(--text-main); margin-top: 10px; font-weight: 700; font-family: 'Noto Sans KR', sans-serif; }
        .section-title { font-size: 22px; color: var(--pastel-pink-shadow); margin-top: 30px; margin-bottom: 15px; display: flex; align-items: center; gap: 10px; font-weight: 700;}
        .section-content { font-size: 17px; line-height: 1.8; color: #555; background: var(--pastel-yellow); padding: 20px; border-radius: 15px; }
        .example-box { background: var(--pastel-yellow); padding: 20px; border-radius: 15px; margin-top: 15px; border-left: 5px solid var(--pastel-pink); }
        .example-en { font-size: 19px; font-weight: bold; color: var(--text-main); margin-bottom: 8px; }
        .example-ko { font-size: 16px; color: #666; }
        .synonym-tag { display: inline-block; background: var(--pastel-pink); color: #fff; padding: 5px 15px; border-radius: 20px; margin-right: 10px; font-size: 15px; margin-bottom: 10px;}
        .btn-back { display: inline-block; padding: 10px 20px; background: var(--pastel-pink); color: white; text-decoration: none; border-radius: 20px; font-weight: bold; margin-bottom: 20px; transition: 0.2s;}
        .btn-back:hover { background: var(--pastel-pink-shadow); }
    </style>
</head>
<body style="background-color: var(--bg-color);">
    <header style="text-align: center; padding: 20px; background: #fff; border-bottom: 1px solid #eee;">
        <div class="logo">🌟 7일 완성 단어 챌린지 블로그 🌟</div>
    </header>

    <main class="post-container">
        <a href="blog-index-${langInfo.code}.html" class="btn-back">⬅ ${langInfo.title} 블로그 목록으로 돌아가기</a>
        
        <div class="word-header">
            <h1 class="word-title">${wordObj.word}</h1>
            <div class="word-pronounce">${wordObj.pronunciation || ''}</div>
            <div class="word-meaning-main">뜻: ${wordObj.meaning}</div>
        </div>

        <h2 class="section-title">📚 어원과 역사 (Origin)</h2>
        <div class="section-content">${wordObj.origin || langInfo.defaultOrigin}</div>

        <h2 class="section-title">🗣 원어민의 뉘앙스 (Nuance)</h2>
        <div class="section-content">${wordObj.nuance || langInfo.defaultNuance}</div>

        <h2 class="section-title">💡 실생활 예문 (Example)</h2>
        <div class="example-box">
            <div class="example-en">"${wordObj.example || wordObj.word + '을(를) 활용한 예문입니다.'}"</div>
            <div class="example-ko">${wordObj.exampleMeaning || wordObj.meaning + '의 의미를 가집니다.'}</div>
        </div>

        <h2 class="section-title">🔄 관련 단어 (Related)</h2>
        <div style="margin-top: 10px;">
            ${(wordObj.synonyms || ['기초 어휘', '필수 단어']).map(s => '<span class="synonym-tag">' + s + '</span>').join('')}
        </div>

        <h2 class="section-title">📝 딥다이브 학습 가이드 (Deep Dive)</h2>
        <div class="section-content" style="background: #fdfdfd; border: 1px solid #eee;">
            <p style="margin-bottom: 10px;"><strong>왜 이 단어를 외워야 할까요?</strong></p>
            <p style="margin-bottom: 10px;">언어 학습에서 <strong>${wordObj.word}</strong>와 같은 핵심 어휘를 마스터하는 것은 유창성을 향상시키는 첫걸음입니다. 단순히 뜻을 암기하는 것을 넘어, 위에서 제시된 실생활 예문을 소리 내어 3번 이상 읽어보세요. 뇌는 문맥 속에서 단어를 만날 때 훨씬 더 오래 기억합니다.</p>
            <p style="margin-bottom: 10px;">특히 <strong>${langInfo.title}</strong>의 경우, 단어의 어조나 상황에 맞는 쓰임새가 매우 중요합니다. 대화 중이거나 작문을 할 때 이 단어를 어떻게 응용할 수 있을지 스스로 새로운 문장을 만들어 보는 연습을 강력히 추천합니다. 7일 완성 챌린지와 함께 매일 10단어씩 꾸준히 학습한다면, 한 달 뒤에는 놀라울 정도로 확장된 어휘력을 경험하실 수 있을 것입니다.</p>
            <p>오늘 학습한 단어를 나만의 단어장에 기록해 두고, 잠들기 전 다시 한 번 복습하는 것을 잊지 마세요!</p>
        </div>
    </main>

    <footer style="text-align: center; padding: 40px; color: #aaa;">
        <p>&copy; 2026 7-Day Vocab Challenge. All rights reserved.</p>\n        <div style="margin-top: 15px; font-size: 14px;">\n            <a href="about.html" style="color: #888; text-decoration: none; margin: 0 10px;">About Us</a> | \n            <a href="contact.html" style="color: #888; text-decoration: none; margin: 0 10px;">Contact Us</a> | \n            <a href="privacy.html" style="color: #888; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | \n            <a href="terms.html" style="color: #888; text-decoration: none; margin: 0 10px;">Terms of Service</a>\n        </div>
    </footer>
</body>
</html>`;

const indexTemplate = (langCode, langInfo, words) => `<!DOCTYPE html>
<html lang="${langCode}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${langInfo.title} 어학 블로그 - 필수 외국어 단어 상세 해설</title>
    <meta name="description" content="${langInfo.title} 외국어 단어의 어원부터 뉘앙스, 예문까지 완벽하게 파헤치는 프리미엄 어학 블로그입니다.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .blog-list { max-width: 800px; margin: 40px auto; padding: 0 20px; }
        .post-card { background: var(--card-bg); padding: 25px; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); margin-bottom: 25px; border-left: 6px solid var(--pastel-pink); text-decoration: none; display: block; color: inherit; transition: transform 0.2s; border: 1px solid #ffeff0; }
        .post-card:hover { transform: translateY(-5px); border-color: var(--pastel-pink); }
        .post-title { font-size: 28px; color: var(--text-main); font-family: 'Noto Sans KR', sans-serif; font-weight: 700; margin-bottom: 10px; }
        .post-desc { font-size: 16px; color: #777; font-family: 'Noto Sans KR', sans-serif; }
        .read-more { display: inline-block; margin-top: 15px; color: var(--pastel-pink-shadow); font-weight: bold; }
        .lang-nav { text-align: center; margin-bottom: 30px; }
        .lang-nav a { display: inline-block; padding: 8px 15px; margin: 0 5px; background: #eee; color: #333; text-decoration: none; border-radius: 20px; font-family: 'Noto Sans KR', sans-serif; font-weight: 500;}
        .lang-nav a.active { background: var(--pastel-pink); color: white; }
    </style>
</head>
<body style="background-color: var(--bg-color);">
    <header style="text-align: center; padding: 30px 20px; background: #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.02); border-bottom: 1px solid #f9f9f9;">
        <h1 style="color: var(--pastel-pink-shadow); font-family: 'Noto Sans KR', sans-serif; font-weight: 900;">📖 ${langInfo.title} 프리미엄 블로그</h1>
        <p style="color: #666; font-family: 'Noto Sans KR', sans-serif; margin-top: 10px;">단순 암기를 넘어, 단어의 진짜 이야기를 들려드립니다.</p>
        <a href="index.html" style="display: inline-block; margin-top:15px; padding: 10px 20px; background: var(--pastel-pink); color: white; border-radius: 20px; text-decoration: none; font-weight:bold;">🏠 메인 앱으로 돌아가기</a>
    </header>

    <main class="blog-list">
        <div class="lang-nav">
            <a href="blog-index-en.html" class="${langCode === 'en' ? 'active' : ''}">🇺🇸 영어</a>
            <a href="blog-index-ja.html" class="${langCode === 'ja' ? 'active' : ''}">🇯🇵 일본어</a>
            <a href="blog-index-zh.html" class="${langCode === 'zh' ? 'active' : ''}">🇨🇳 중국어</a>
        </div>
        
        <h2 style="font-family: 'Noto Sans KR', sans-serif; font-weight: 700; color: #333; margin-bottom: 20px;">${langInfo.title} 최신 단어 해설</h2>
        ${words.map(w => {
            let safeName = getSafeFilename(w.word);
            return '<a href="post-' + langCode + '-' + safeName + '.html" class="post-card"><div class="post-title">' + w.word + ' - ' + w.meaning + '</div><div class="post-desc">' + (w.origin || langInfo.defaultOrigin).substring(0, 60) + '...</div><div class="read-more">자세히 읽기 ➔</div></a>';
        }).join('')}
    </main>

    <footer style="text-align: center; padding: 40px; color: #aaa;">
        <p>&copy; 2026 7-Day Vocab Challenge. All rights reserved.</p>\n        <div style="margin-top: 15px; font-size: 14px;">\n            <a href="about.html" style="color: #888; text-decoration: none; margin: 0 10px;">About Us</a> | \n            <a href="contact.html" style="color: #888; text-decoration: none; margin: 0 10px;">Contact Us</a> | \n            <a href="privacy.html" style="color: #888; text-decoration: none; margin: 0 10px;">Privacy Policy</a> | \n            <a href="terms.html" style="color: #888; text-decoration: none; margin: 0 10px;">Terms of Service</a>\n        </div>
    </footer>
</body>
</html>`;

Object.keys(langs).forEach(langCode => {
    const langWords = vocabDB[langCode];
    if (!langWords) return;

    langWords.forEach(wordObj => {
        const safeName = getSafeFilename(wordObj.word);
        fs.writeFileSync('post-' + langCode + '-' + safeName + '.html', template(wordObj, langs[langCode]));
    });

    fs.writeFileSync('blog-index-' + langCode + '.html', indexTemplate(langCode, langs[langCode], langWords));
    console.log('Generated blog-index-' + langCode + '.html and ' + langWords.length + ' posts.');
});
