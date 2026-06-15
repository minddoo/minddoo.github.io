const fs = require('fs');

const stories = {
    en: {
        code: "en",
        langName: "영어",
        title: "The Boy Who Cried Wolf (양치기 소년)",
        content: `
            <p>Once upon a time, there was a young shepherd boy who tended his sheep at the foot of a mountain near a dark forest.</p>
            <p>옛날 옛적에, 어두운 숲 근처 산기슭에서 양을 치는 어린 양치기 소년이 있었습니다.</p>
            
            <p>It was rather lonely for him all day, so he thought upon a plan by which he could get a little company and some excitement.</p>
            <p>그는 하루 종일 혼자 있는 것이 외로웠기 때문에, 사람들과 어울리고 재미있는 일을 만들 계획을 생각했습니다.</p>
            
            <p>He rushed down towards the village calling out "Wolf, Wolf!"</p>
            <p>그는 마을을 향해 "늑대다, 늑대다!"라고 외치며 달려갔습니다.</p>
            
            <p>The villagers came out to meet him, and some of them stopped with him for a considerable time.</p>
            <p>마을 사람들은 그를 도우러 나왔고, 그들 중 몇몇은 오랫동안 그와 함께 있어 주었습니다.</p>
            
            <p>This pleased the boy so much that a few days afterwards he tried the same trick, and again the villagers came to his help.</p>
            <p>이것이 너무나 마음에 들었던 소년은 며칠 후 똑같은 장난을 쳤고, 마을 사람들은 다시 그를 도우러 왔습니다.</p>
            
            <p>But shortly after this a Wolf actually did come out from the forest, and began to worry the sheep.</p>
            <p>하지만 얼마 지나지 않아 늑대가 실제로 숲에서 나타나 양 떼를 덮치기 시작했습니다.</p>
            
            <p>The boy of course cried out "Wolf, Wolf!" still louder than before.</p>
            <p>소년은 당연히 전보다 더 큰 소리로 "늑대다, 늑대다!"라고 외쳤습니다.</p>
            
            <p>But this time the villagers, who had been fooled twice before, thought the boy was again deceiving them, and nobody stirred to come to his help.</p>
            <p>그러나 이전에 두 번이나 속았던 마을 사람들은 소년이 또 거짓말을 한다고 생각했고, 아무도 그를 도우러 오지 않았습니다.</p>
            
            <p>So the Wolf made a good meal off the boy's flock.</p>
            <p>결국 늑대는 소년의 양 떼를 배불리 잡아먹었습니다.</p>
            
            <p><strong>Lesson:</strong> A liar will not be believed, even when he speaks the truth.</p>
            <p><strong>교훈:</strong> 거짓말쟁이는 진실을 말할 때조차도 믿음을 얻지 못합니다.</p>
        `
    },
    ja: {
        code: "ja",
        langName: "일본어",
        title: "桃太郎 (모모타로)",
        content: `
            <p>むかしむかし、あるところにおじいさんとおばあさんがいました。</p>
            <p>옛날 옛적에, 어느 마을에 할아버지와 할머니가 살고 있었습니다.</p>
            
            <p>おじいさんは山へしばかりに、おばあさんは川へせんたくに行きました。</p>
            <p>할아버지는 산으로 땔감을 구하러, 할머니는 강으로 빨래를 하러 가셨습니다.</p>
            
            <p>おばあさんが川でせんたくをしていると、ドンブラコ、ドンブラコと、大きな桃が流れてきました。</p>
            <p>할머니가 강에서 빨래를 하고 있을 때, 둥실둥실 큰 복숭아가 떠내려왔습니다.</p>
            
            <p>「おや、これは良いおみやげになるわ」とおばあさんは桃をひろって家に帰りました。</p>
            <p>"어머, 이건 좋은 선물이 되겠네"라며 할머니는 복숭아를 주워서 집으로 돌아왔습니다.</p>
            
            <p>おじいさんとおばあさんが桃を食べようとすると、桃がぱかっと割れて、中から元気な男の子が飛び出してきました。</p>
            <p>할아버지와 할머니가 복숭아를 먹으려고 하자, 복숭아가 쩍 갈라지며 안에서 건강한 남자아이가 튀어나왔습니다.</p>
            
            <p>「これはきっと、神さまがくださったにちがいない」と二人は大喜びです。</p>
            <p>"이건 틀림없이 신께서 주신 아이일 거야"라며 두 분은 크게 기뻐했습니다.</p>
            
            <p>桃から生まれたので、名前を「桃太郎」と名付けました。</p>
            <p>복숭아에서 태어났기 때문에, 이름을 '모모타로'라고 지었습니다.</p>
        `
    },
    zh: {
        code: "zh",
        langName: "중국어",
        title: "龟兔赛跑 (거북이와 토끼의 경주)",
        content: `
            <p>有一天，兔子嘲笑乌龟的脚短、走得慢。</p>
            <p>어느 날, 토끼는 거북이의 다리가 짧고 걷는 속도가 느리다고 조롱했습니다.</p>
            
            <p>乌龟笑着说：“虽然你跑得很快，但我会在比赛中赢你的。”</p>
            <p>거북이는 웃으며 말했습니다. "네가 달리는 속도는 빠르지만, 경주에서는 내가 널 이길 거야."</p>
            
            <p>兔子觉得这简直是不可能的事，于是就答应了。</p>
            <p>토끼는 그것이 불가능한 일이라고 생각했고, 경주를 수락했습니다.</p>
            
            <p>比赛开始后，兔子飞快地跑了出去，把乌龟远远地甩在后面。</p>
            <p>경주가 시작되자, 토끼는 재빨리 뛰어나가 거북이를 멀찌감치 뒤로 따돌렸습니다.</p>
            
            <p>兔子看到乌龟还在很远的地方，心想：“我先睡一觉，等他快到了我再跑也不迟。”</p>
            <p>토끼는 거북이가 아직 한참 뒤에 있는 것을 보고 생각했습니다. "한숨 자고 나서, 쟤가 가까이 오면 다시 뛰어도 늦지 않겠지."</p>
            
            <p>于是兔子就在树下睡着了。</p>
            <p>그래서 토끼는 나무 아래에서 잠이 들고 말았습니다.</p>
            
            <p>而乌龟一直坚持不懈地慢慢爬着，最终超过了熟睡的兔子，到达了终点。</p>
            <p>반면 거북이는 포기하지 않고 천천히 기어갔고, 마침내 잠든 토끼를 지나쳐 결승점에 도달했습니다.</p>
            
            <p>当兔子醒来时，发现乌龟已经赢得了比赛。</p>
            <p>토끼가 잠에서 깼을 때, 거북이는 이미 경주에서 이긴 후였습니다.</p>
            
            <p><strong>Lesson:</strong> 稳扎稳打无往而不胜。</p>
            <p><strong>교훈:</strong> 꾸준하고 성실한 자가 결국 승리합니다.</p>
        `
    }
};

const createStoryHTML = (storyObj) => `<!DOCTYPE html>
<html lang="${storyObj.code}">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${storyObj.langName} 읽기 연습: ${storyObj.title}</title>
    <meta name="description" content="${storyObj.langName} 동화 읽기 연습을 통해 독해력을 향상시키세요.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
    <style>
        .story-container { max-width: 800px; margin: 40px auto; padding: 40px; background: var(--card-bg); border-radius: 20px; box-shadow: 0 5px 15px rgba(0,0,0,0.05); }
        .story-header { text-align: center; border-bottom: 3px dashed var(--pastel-pink); padding-bottom: 20px; margin-bottom: 30px; }
        .story-title { font-size: 40px; color: var(--pastel-pink-shadow); font-family: 'Noto Sans KR', sans-serif; font-weight: 900; margin: 0; }
        .story-subtitle { font-size: 20px; color: #888; margin-top: 10px; font-weight: 500; }
        .story-content { font-size: 18px; line-height: 2.0; color: var(--text-main); font-family: 'Noto Sans KR', sans-serif; }
        .story-content p { margin-bottom: 15px; }
        .story-content p:nth-child(even) { color: #777; font-size: 16px; margin-bottom: 30px; background: var(--pastel-yellow); padding: 10px 15px; border-radius: 10px; }
        .btn-back { display: inline-block; padding: 10px 20px; background: var(--pastel-pink); color: white; text-decoration: none; border-radius: 20px; font-weight: bold; margin-bottom: 20px; transition: 0.2s;}
        .btn-back:hover { background: var(--pastel-pink-shadow); }
    </style>
</head>
<body style="background-color: var(--bg-color);">
    <header style="text-align: center; padding: 20px; background: #fff; border-bottom: 1px solid #eee;">
        <div class="logo" style="font-family: 'Noto Sans KR', sans-serif; font-weight: 900; color: var(--pastel-pink-shadow);">🌟 7일 완성 어학당 🌟</div>
    </header>

    <main class="story-container">
        <a href="index.html" class="btn-back">⬅ 메인으로 돌아가기</a>
        
        <div class="story-header">
            <h1 class="story-title">${storyObj.title}</h1>
            <div class="story-subtitle">오늘의 ${storyObj.langName} 읽기 연습 (Bilingual Reading)</div>
        </div>

        <div class="story-content">
            ${storyObj.content}
        </div>
    </main>

    <footer style="text-align: center; padding: 40px; color: #aaa;">
        <p>&copy; 2026 7-Day Vocab Challenge. All rights reserved.</p>
    </footer>
</body>
</html>`;

Object.keys(stories).forEach(langCode => {
    fs.writeFileSync('story-' + langCode + '.html', createStoryHTML(stories[langCode]));
    console.log('Generated story-' + langCode + '.html');
});
