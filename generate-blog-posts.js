const fs = require('fs');

const words = [
    {
        id: 1,
        word: "ubiquitous",
        meaning: "어디에나 있는, 편재하는",
        pronunciation: "[juːˈbɪkwɪtəs]",
        origin: "라틴어 'ubique' (어디에나)에서 유래되었습니다. 현대 사회에서 스마트폰이나 인터넷처럼 우리 주변 어디에나 존재하는 것을 묘사할 때 아주 자주 쓰이는 고급 어휘입니다.",
        example: "Smartphones have become ubiquitous in our daily lives.",
        exampleMeaning: "스마트폰은 우리의 일상생활에서 어디에나 존재하게 되었습니다.",
        synonyms: ["omnipresent (어디에나 있는)", "pervasive (만연한)", "universal (보편적인)"],
        nuance: "단순히 'common(흔한)'을 넘어, '동시에 여러 곳에 존재하는 듯한' 느낌을 줍니다. IT 기술이나 유행을 설명할 때 자주 등장합니다."
    },
    {
        id: 2,
        word: "ephemeral",
        meaning: "수명이 짧은, 단명하는, 덧없는",
        pronunciation: "[ɪˈfemərəl]",
        origin: "그리스어 'ephēmeros' (하루살이의)에서 유래되었습니다. 원래는 수명이 하루밖에 안 되는 곤충이나 식물을 가리키는 생물학 용어였으나, 지금은 덧없는 인기나 짧은 유행 등을 비유할 때 쓰입니다.",
        example: "Fame in the world of pop music is often ephemeral.",
        exampleMeaning: "팝 음악계에서 명성은 종종 덧없고 짧게 끝납니다.",
        synonyms: ["transitory (일시적인)", "fleeting (순식간의)", "short-lived (단명하는)"],
        nuance: "부정적인 뉘앙스라기보다는 '아름답지만 금방 사라지는' 벚꽃 같은 느낌이나, 틱톡 쇼츠처럼 찰나의 트렌드를 묘사할 때 어울립니다."
    },
    {
        id: 3,
        word: "pragmatic",
        meaning: "실용적인, 실리적인",
        pronunciation: "[præɡˈmætɪk]",
        origin: "그리스어 'pragma' (행위, 사실)에서 파생되었습니다. 이상주의나 이론에 치우치지 않고, 현실적인 결과와 쓸모를 중시하는 태도를 의미합니다.",
        example: "We need a pragmatic approach to solve this economic crisis.",
        exampleMeaning: "이 경제 위기를 해결하기 위해 우리는 실용적인 접근법이 필요합니다.",
        synonyms: ["practical (실용적인)", "realistic (현실적인)", "utilitarian (공리주의적인)"],
        nuance: "비즈니스 환경에서 '이론적으로는 완벽하지만 현실 불가능한' 계획을 기각하고, '당장 돈이 되거나 효과가 있는' 방법을 찾을 때 칭찬의 의미로 자주 쓰입니다."
    },
    {
        id: 4,
        word: "meticulous",
        meaning: "꼼꼼한, 세심한, 주의 깊은",
        pronunciation: "[məˈtɪkjələs]",
        origin: "라틴어 'meticulosus' (겁이 많은)에서 유래했습니다. 과거에는 '두려움 때문에 조심하는' 의미였지만, 현대에는 '실수를 하지 않기 위해 아주 섬세하고 꼼꼼하게 일하는' 긍정적 의미로 변했습니다.",
        example: "The architect was meticulous in designing the building's interior.",
        exampleMeaning: "그 건축가는 건물의 내부를 설계하는 데 있어 매우 꼼꼼했습니다.",
        synonyms: ["careful (주의 깊은)", "thorough (철저한)", "scrupulous (양심적인/세심한)"],
        nuance: "이력서나 추천서에서 아주 많이 쓰이는 단어입니다. '대충 넘어가지 않고 디테일을 완벽하게 챙기는 사람'을 묘사할 때 최고의 찬사입니다."
    },
    {
        id: 5,
        word: "obscure",
        meaning: "모호한, 잘 알려지지 않은",
        pronunciation: "[əbˈskjʊr]",
        origin: "라틴어 'obscurus' (어두운, 덮인)에서 왔습니다. 빛이 가려져서 잘 안 보이는 상태를 나타내며, 뜻이 이해하기 어렵거나 사람이 무명일 때 모두 쓰입니다.",
        example: "The origins of this ancient tradition remain obscure.",
        exampleMeaning: "이 고대 전통의 기원은 여전히 모호합니다(잘 알려져 있지 않습니다).",
        synonyms: ["unclear (불분명한)", "vague (모호한)", "unknown (알려지지 않은)"],
        nuance: "두 가지 뜻으로 자주 쓰입니다. 글이나 설명이 '이해하기 어려울 때'와 배우나 작가가 '아직 유명하지 않을 때(an obscure actor)'입니다."
    }
];

const template = (wordObj) => `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>단어 상세 해설: ${wordObj.word} 뜻, 예문, 어원 완벽 정리</title>
    <meta name="description" content="필수 영단어 ${wordObj.word}의 정확한 뜻, 어원, 원어민 뉘앙스, 그리고 실생활 예문을 상세히 알아보세요.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Jua&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .post-container { max-width: 800px; margin: 40px auto; padding: 30px; background: #fff; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .word-header { text-align: center; border-bottom: 3px dashed #bbded6; padding-bottom: 20px; margin-bottom: 30px; }
        .word-title { font-size: 48px; color: #ff8b94; font-family: 'Baloo 2', cursive; margin: 0; }
        .word-pronounce { font-size: 20px; color: #888; margin-top: 5px; }
        .word-meaning-main { font-size: 28px; color: #5c4b51; margin-top: 10px; font-weight: bold; font-family: 'Jua', sans-serif; }
        .section-title { font-size: 22px; color: #9cc2ba; margin-top: 30px; margin-bottom: 15px; display: flex; align-items: center; gap: 10px; }
        .section-content { font-size: 17px; line-height: 1.8; color: #444; background: #f9fdfc; padding: 20px; border-radius: 15px; }
        .example-box { background: #fae3d9; padding: 20px; border-radius: 15px; margin-top: 15px; }
        .example-en { font-size: 19px; font-weight: bold; color: #5c4b51; margin-bottom: 8px; }
        .example-ko { font-size: 16px; color: #666; }
        .synonym-tag { display: inline-block; background: #bbded6; color: #fff; padding: 5px 15px; border-radius: 20px; margin-right: 10px; font-size: 15px; }
        .btn-back { display: inline-block; padding: 10px 20px; background: #ff8b94; color: white; text-decoration: none; border-radius: 20px; font-weight: bold; margin-bottom: 20px; }
    </style>
</head>
<body style="background-color: #fffcf9;">
    <header style="text-align: center; padding: 20px; background: #fff;">
        <div class="logo">🌟 7일 완성 단어 챌린지 블로그 🌟</div>
    </header>

    <main class="post-container">
        <a href="blog-index.html" class="btn-back">⬅ 블로그 목록으로 돌아가기</a>
        
        <div class="word-header">
            <h1 class="word-title">${wordObj.word}</h1>
            <div class="word-pronounce">${wordObj.pronunciation}</div>
            <div class="word-meaning-main">뜻: ${wordObj.meaning}</div>
        </div>

        <h2 class="section-title">📚 어원과 역사 (Origin)</h2>
        <div class="section-content">${wordObj.origin}</div>

        <h2 class="section-title">🗣 원어민의 뉘앙스 (Nuance)</h2>
        <div class="section-content">${wordObj.nuance}</div>

        <h2 class="section-title">💡 실생활 예문 (Example)</h2>
        <div class="example-box">
            <div class="example-en">"${wordObj.example}"</div>
            <div class="example-ko">${wordObj.exampleMeaning}</div>
        </div>

        <h2 class="section-title">🔄 동의어 (Synonyms)</h2>
        <div style="margin-top: 10px;">
            ${wordObj.synonyms.map(s => '<span class="synonym-tag">' + s + '</span>').join('')}
        </div>
    </main>

    <footer style="text-align: center; padding: 40px; color: #aaa;">
        <p>&copy; 2026 7-Day Vocab Challenge. All rights reserved.</p>
    </footer>
</body>
</html>`;

words.forEach(wordObj => {
    fs.writeFileSync('post-' + wordObj.word + '.html', template(wordObj));
    console.log('Generated post-' + wordObj.word + '.html');
});

// Generate blog index
const indexTemplate = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>어학 블로그 - 필수 외국어 단어 상세 해설</title>
    <meta name="description" content="외국어 단어의 어원부터 뉘앙스, 예문까지 완벽하게 파헤치는 프리미엄 어학 블로그입니다.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@500;700;800&family=Jua&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .blog-list { max-width: 800px; margin: 40px auto; padding: 0 20px; }
        .post-card { background: #fff; padding: 25px; border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); margin-bottom: 25px; border-left: 6px solid #ff8b94; text-decoration: none; display: block; color: inherit; transition: transform 0.2s; }
        .post-card:hover { transform: translateY(-5px); }
        .post-title { font-size: 28px; color: #5c4b51; font-family: 'Baloo 2', cursive; margin-bottom: 10px; }
        .post-desc { font-size: 16px; color: #666; font-family: 'Jua', sans-serif; }
        .read-more { display: inline-block; margin-top: 15px; color: #9cc2ba; font-weight: bold; }
    </style>
</head>
<body style="background-color: #fffcf9;">
    <header style="text-align: center; padding: 30px 20px; background: #fff; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
        <h1 style="color: #ff8b94; font-family: 'Jua', sans-serif;">📖 어학 프리미엄 블로그</h1>
        <p style="color: #666; font-family: 'Jua', sans-serif;">단순 암기를 넘어, 단어의 진짜 이야기를 들려드립니다.</p>
        <a href="index.html" style="display: inline-block; margin-top:10px; padding: 8px 15px; background: #bbded6; color: white; border-radius: 20px; text-decoration: none;">🏠 메인 앱으로 돌아가기</a>
    </header>

    <main class="blog-list">
        <h2 style="font-family: 'Jua', sans-serif; color: #333; margin-bottom: 20px;">최신 단어 해설</h2>
        ${words.map(w => '<a href="post-' + w.word + '.html" class="post-card"><div class="post-title">' + w.word + ' - ' + w.meaning + '</div><div class="post-desc">' + w.origin.substring(0, 60) + '...</div><div class="read-more">자세히 읽기 ➔</div></a>').join('')}
    </main>

    <footer style="text-align: center; padding: 40px; color: #aaa;">
        <p>&copy; 2026 7-Day Vocab Challenge. All rights reserved.</p>
    </footer>
</body>
</html>`;

fs.writeFileSync('blog-index.html', indexTemplate);
console.log('Generated blog-index.html');
