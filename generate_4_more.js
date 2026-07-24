const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/pc/Documents/minddoo.github.io/articles';

const newArticles = [
    {
        id: 6,
        title: "이유 없는 극심한 피로감, 갑상선 기능 저하증 수치(TSH) 완벽 해석",
        summary: "충분히 자도 피곤하고 이유 없이 살이 찐다면? 건강검진 결과지에서 TSH 수치를 반드시 확인해야 하는 이유와 갑상선 질환의 초기 증상을 파악해 봅니다.",
        content: `
            <p>직장인 10명 중 9명은 피로를 달고 삽니다. 하지만 주말 내내 잠을 잤는데도 월요일 아침 몸이 물먹은 솜처럼 무겁고, 식사량을 줄였는데도 체중이 계속 늘어난다면 이는 단순한 '과로'가 아닐 수 있습니다. 특히 30~50대 여성이라면 건강검진 결과지에서 반드시 매의 눈으로 확인해야 할 항목이 있습니다. 바로 목에 있는 나비 모양의 내분비 기관, <b>갑상선 기능 검사(TSH, Free T4)</b>입니다.</p>

            <h2>1. 우리 몸의 보일러, 갑상선 호르몬</h2>
            <p>갑상선은 우리 몸의 대사 속도를 조절하는 '보일러'와 같은 역할을 합니다. 갑상선 호르몬(T4, T3)이 정상적으로 분비되면 심장도 알맞게 뛰고, 장 운동도 활발해지며, 섭취한 영양소가 에너지로 잘 타오릅니다.</p>
            <p>그런데 이 보일러가 고장 나서 호르몬이 제대로 나오지 않는 상태를 <b>'갑상선 기능 저하증'</b>이라고 합니다. 보일러가 꺼졌으니 몸은 으슬으슬 춥고(추위를 심하게 탐), 장 운동이 느려져 변비가 생기며, 에너지를 태우지 못해 물만 먹어도 살이 찌는 듯한 극심한 대사 저하를 겪게 됩니다. 가장 치명적인 증상은 아무리 쉬어도 풀리지 않는 '만성 피로'입니다.</p>

            <h2>2. 헷갈리는 수치: TSH가 높으면 왜 저하증일까?</h2>
            <p>건강검진 결과지를 볼 때 가장 헷갈리는 부분이 바로 수치의 해석입니다. 보통 '저하증'이라고 하면 수치가 낮아야 할 것 같지만, 결과지에는 <b>갑상선 자극 호르몬(TSH)</b>이 정상치(보통 0.4~4.0)를 훌쩍 뛰어넘어 높게 표시되어 있습니다. 왜 그럴까요?</p>
            <p>TSH는 뇌하수체에서 분비되어 갑상선에게 "일 좀 해라!"라고 채찍질을 하는 호르몬입니다. 갑상선이 고장 나서 호르몬(T4)을 만들어내지 못하면, 뇌는 비상사태로 인식하고 갑상선을 더 강하게 자극하기 위해 TSH 분비량을 기하급수적으로 늘립니다. 즉, <b>TSH 수치가 높다는 것은 갑상선이 현재 제 기능을 못해 뇌가 엄청나게 잔소리를 퍼붓고 있는 상태(기능 저하증)</b>를 의미합니다.</p>

            <h2>3. 약만 먹으면 씻은 듯이 낫는 마법</h2>
            <p>갑상선 기능 저하증 판정을 받으면 평생 약을 먹어야 한다는 두려움에 빠지기 쉽습니다. 하지만 내분비내과 전문의들은 입을 모아 말합니다. "질병 중에서 가장 치료하기 쉽고 가성비가 좋은 병이 갑상선 기능 저하증입니다."</p>
            <p>우리 몸이 만들어내지 못하는 호르몬을 외부에서 알약 하나로 보충해주기만 하면 됩니다. '씬지로이드'와 같은 갑상선 호르몬제는 부작용이 거의 없고 가격도 매우 저렴합니다. 매일 아침 공복에 알약 하나만 삼키면, 언제 그랬냐는 듯 며칠 만에 붓기가 싹 빠지고 활력이 돌아오는 놀라운 경험을 할 수 있습니다.</p>

            <h2>결론: 무작정 영양제만 찾지 말고 호르몬을 의심하라</h2>
            <p>피곤하다고 고가의 비타민 주사를 맞거나 홍삼을 박스째로 사서 드시는 분들이 많습니다. 하지만 갑상선 호르몬의 문제라면 백날 영양제를 먹어도 밑빠진 독에 물 붓기입니다. 국가 일반검진에는 기본적으로 갑상선 피검사가 포함되어 있지 않은 경우가 많으므로, 여성분들이라면 검진 시 1~2만 원을 추가하여 <b>'갑상선 기능 검사(혈액)'</b>를 꼭 넣어보시길 강력히 권장합니다.</p>
        `
    },
    {
        id: 7,
        title: "병원만 가면 혈압이 160? '백의 고혈압' 원인과 확실한 대처법",
        summary: "집에서는 정상인데 검진센터 혈압계 앞만 서면 심장이 뛰고 수치가 폭발하는 '백의 고혈압'의 진단 기준과 재검사를 피하는 실전 꿀팁을 공개합니다.",
        content: `
            <p>건강검진센터에서 1차로 혈압을 재고 나면 가장 많이 들려오는 소리가 있습니다. "어머? 저 원래 고혈압 없는데 기계가 고장 난 거 아니에요? 한 번만 다시 잴게요!" 평소 집이나 동네 의원에서는 120/80으로 지극히 정상이던 혈압이, 규모가 큰 검진센터에 와서 자동 혈압계에 팔을 집어넣기만 하면 150, 160을 훌쩍 넘겨버리는 현상. 바로 <b>'백의 고혈압(White Coat Hypertension)'</b>입니다.</p>

            <h2>1. 의사(흰 가운)만 보면 긴장하는 우리 몸</h2>
            <p>백의 고혈압이라는 이름은 의사나 간호사가 입은 흰 가운(White coat)을 보는 순간 무의식적인 긴장감과 불안감에 휩싸여 혈압이 일시적으로 급격히 상승하는 현상에서 유래되었습니다. 병원이라는 낯선 환경, '혹시 나쁜 결과가 나오면 어쩌지?' 하는 걱정, 수면내시경을 앞둔 긴장감 등이 교감신경을 흥분시켜 혈관을 꽉 수축하게 만듭니다.</p>
            <p>문제는 검진 당일 혈압이 160/100 mmHg 이상으로 측정되면, 수면내시경 중 뇌출혈이나 심근경색 등 치명적인 심뇌혈관 사고가 발생할 위험이 있어 <b>내시경 진행 자체가 현장에서 거절(취소)</b>된다는 것입니다. 환자 입장에서는 휴가를 내고 쫄쫄 굶고 왔는데 검사를 못 받게 되니 억울할 수밖에 없습니다.</p>

            <h2>2. 백의 고혈압의 감별: 24시간 활동 혈압 측정</h2>
            <p>자신이 진짜 고혈압 환자인지, 아니면 일시적인 백의 고혈압인지 감별하는 것은 향후 약물 치료 여부를 결정짓는 매우 중요한 문제입니다. 백의 고혈압 환자에게 무턱대고 혈압약을 처방하면, 일상생활 중에 심각한 저혈압 쇼크가 올 수 있기 때문입니다.</p>
            <p>이를 감별하는 가장 정확한 방법은 <b>'24시간 활동 혈압 측정'</b>입니다. 조그만 혈압계를 몸에 부착하고 귀가하여 하루 24시간 동안 30분 간격으로 혈압을 기록하는 것입니다. 이 결과를 통해 병원 밖 일상생활이나 수면 중에는 혈압이 정상 범위로 떨어지는지가 확인되면 최종적으로 백의 고혈압 판정을 받게 됩니다.</p>

            <h2>3. 내시경 취소를 막는 검진 당일 실전 꿀팁</h2>
            <p>내가 백의 고혈압 기질이 있다는 것을 알고 있다면, 검진 당일 내시경을 무사히 받기 위해 다음 3가지 행동 강령을 반드시 지켜야 합니다.</p>
            <ol>
                <li><b>검진센터 도착 후 최소 15분 대기:</b> 늦을까 봐 헐레벌떡 뛰어와서 숨도 안 고르고 바로 혈압계에 팔을 넣으면 무조건 160이 넘습니다. 접수를 마치면 의자에 푹 기대어 눈을 감고 15분 이상 깊은 심호흡(복식호흡)을 하며 안정을 취한 뒤에 혈압을 재야 합니다.</li>
                <li><b>등을 기대고 다리는 풀기:</b> 등을 의자 등받이에 편안하게 기대고, 다리를 꼬지 않은 상태에서 심장과 같은 높이로 팔을 올려야 가장 정확한 수치가 나옵니다. 다리를 꼬면 복부 압력이 올라가 혈압이 최대 10mmHg까지 상승합니다.</li>
                <li><b>전문의 소견서 미리 챙기기:</b> 매년 검진 때마다 혈압 때문에 내시경이 취소될 뻔한 경험이 있다면, 평소 다니는 동네 내과에서 "이 환자는 백의 고혈압이며 일상 혈압은 정상(120/80)이므로 내시경을 진행해도 무방함"이라는 내용의 <b>소견서</b>를 한 장 떼어 검진센터에 제출하십시오. 의사의 공식적인 보증 수표가 있으면 당일 160이 나오더라도 안전하게 내시경을 진행해 줍니다.</li>
            </ol>
        `
    },
    {
        id: 8,
        title: "여성검진의 핵심, 자궁경부암 검사 전 48시간 절대 피해야 할 3가지",
        summary: "검사 결과의 정확도를 떨어뜨리는 치명적인 실수들! 자궁경부암 검사(세포진 검사)를 받기 전 여성이 반드시 지켜야 할 주의사항을 정리했습니다.",
        content: `
            <p>만 20세 이상 여성이라면 국가건강검진을 통해 2년에 한 번씩 자궁경부암 무료 검진 엽서를 받게 됩니다. 자궁경부암은 여성 암 중에서도 발병률이 높지만, 백신(가다실)과 정기적인 스크리닝(검사)을 통해 유일하게 '예방'과 '조기 완치'가 가능한 착한(?) 암이기도 합니다.</p>
            <p>하지만 병원에 가기 전 아무런 준비 없이 무턱대고 방문했다가, 세포 채취가 제대로 되지 않아 몇 달 뒤 "판독 불가로 인한 재검사" 통보를 받고 다시 산부인과 의자에 누워야 하는 불상사가 매우 빈번하게 발생합니다. 한 번에 정확한 결과를 얻기 위해 검사 전 48시간 동안 반드시 피해야 할 3가지를 알려드립니다.</p>

            <h2>1. 질 세정제(청결제) 사용 절대 금지</h2>
            <p>산부인과 진료 의자(굴욕 의자)에 눕는 것이 민망하고 냄새가 날까 봐 걱정되는 마음에, 검사 당일 아침이나 전날 밤에 여성 청결제를 사용하여 질 내부까지 깊숙이 세척(비데 사용 포함)하고 오시는 분들이 꽤 많습니다. 이는 검사를 망치는 가장 큰 주범입니다.</p>
            <p>자궁경부암 검사는 작은 브러시를 이용해 자궁경부 표면과 질 내부에 자연스럽게 떨어져 있는 상피 세포들을 긁어모아 현미경으로 들여다보는 원리입니다. 그런데 세정제로 질 내부를 뽀득뽀득하게 씻어내 버리면, 정작 현미경으로 관찰해야 할 비정상 세포들이 물에 씻겨 다 날아가 버립니다. 결과지에 '세포 불충분'이 뜨는 첫 번째 이유가 바로 과도한 세척입니다. <b>검사 전 2~3일 동안은 흐르는 물로 겉 부분(외음부)만 가볍게 씻어내야 합니다.</b></p>

            <h2>2. 부부 관계(성관계) 금지</h2>
            <p>검사 전 최소 48~72시간 동안은 부부 관계를 피해야 합니다. 정액이 질 내부에 남아있을 경우 현미경 시야를 심하게 가려 자궁경부 세포를 정확히 판독하는 것을 불가능하게 만듭니다.</p>
            <p>또한 관계 중 발생할 수 있는 자궁경부의 미세한 마찰 상처 나 염증 반응이 세포 모양을 일시적으로 변형시켜, 암이 아닌데도 비정상 세포(이형성증)가 있는 것처럼 오진을 유발할 수 있습니다.</p>

            <h2>3. 생리 기간과 질정(약) 투여 피하기</h2>
            <p>자궁경부암 검사의 최적기는 <b>생리가 완전히 끝난 후 3~5일 뒤</b>입니다. 생리혈이 조금이라도 남아있거나 출혈이 있는 상태에서 검사를 하면, 적혈구가 자궁경부 세포를 다 가려버리기 때문에 100% 판독 불가(재검사) 판정이 나옵니다. 만약 검진 예약일과 생리 예정일이 겹쳤다면 주저하지 말고 예약을 1주일 뒤로 미루셔야 합니다.</p>
            <p>또한, 질염 치료를 위해 질에 삽입하는 약(질정)이나 크림, 젤 등을 사용하고 있다면 이 역시 검사 전 2~3일간은 중단해야 합니다. 약물 성분이 세포를 코팅해 버려 채취를 방해하기 때문입니다.</p>

            <h2>결론: 인유두종바이러스(HPV) 검사 추가의 중요성</h2>
            <p>국가에서 무료로 해주는 '자궁경부 세포진 검사(Pap smear)'는 비용이 안 든다는 장점이 있지만, 브러시로 긁어내는 방식이라 정확도가 70~80% 수준으로 다소 낮습니다. (암세포가 빗겨나가면 정상으로 나옴)</p>
            <p>따라서 자비를 조금 부담하더라도, 자궁경부암의 99% 원인인 <b>'인유두종바이러스(HPV) 정밀 검사'</b>를 함께 병행하는 것이 좋습니다. 세포 검사와 HPV 검사를 동시에 진행하면 자궁경부암 조기 진단 정확도가 95% 이상으로 수직 상승하므로, 2년에 한 번 하는 검진 때 꼭 챙겨보시길 바랍니다.</p>
        `
    },
    {
        id: 9,
        title: "나쁜 콜레스테롤(LDL) 130 이상 판정, 당장 버려야 할 최악의 습관",
        summary: "혈관을 막는 주범, 고지혈증(이상지질혈증). 고기를 안 먹는데도 LDL 콜레스테롤이 높게 나오는 이유와 이를 낮추기 위한 식습관 교정법을 알려드립니다.",
        content: `
            <p>건강검진 결과지를 받아든 4050 세대의 가장 큰 골칫거리는 단연 '콜레스테롤'입니다. 특히 혈관 벽에 끈적하게 들러붙어 혈전(피떡)을 만들고 심근경색을 유발하는 <b>나쁜 콜레스테롤, 즉 'LDL 콜레스테롤' 수치가 130 mg/dL 이상</b>으로 나와 고지혈증 주의 판정을 받는 분들이 수두룩합니다.</p>
            <p>이 결과를 보고 억울해하시는 분들의 단골 멘트가 있습니다. "선생님, 저는 고기 비계나 삼겹살은 입에도 안 대고 풀만 먹는데 왜 콜레스테롤이 높은가요?" 콜레스테롤에 대한 엄청난 오해가 숨어있는 이 질문의 해답과, 당장 버려야 할 치명적인 식습관을 파헤쳐 봅니다.</p>

            <h2>1. 음식이 미치는 영향은 고작 20%, 주범은 '간'</h2>
            <p>가장 먼저 알아야 할 팩트는 혈액 속 콜레스테롤의 80%는 내가 먹은 음식에서 오는 것이 아니라 <b>내 몸의 '간'에서 스스로 합성해 낸다</b>는 사실입니다. 음식을 통해 혈관으로 들어오는 콜레스테롤은 20%에 불과합니다.</p>
            <p>따라서 맹목적으로 고기와 계란 노른자를 끊고 채식만 한다고 해서 콜레스테롤 수치가 기적처럼 뚝 떨어지지 않습니다. 오히려 단백질이 부족해지면 우리 몸은 비상사태로 인식하고 간에서 더 많은 콜레스테롤을 뿜어내는 기현상이 벌어지기도 합니다. 갱년기 여성의 경우, 여성호르몬(에스트로겐)이 감소하면서 콜레스테롤 분해 능력이 떨어져 채식주의자인데도 고지혈증 약을 먹어야 하는 경우가 매우 흔합니다.</p>

            <h2>2. 삼겹살보다 더 끔찍한 최악의 적: '포화지방'과 '트랜스지방'</h2>
            <p>콜레스테롤 수치를 폭발시키는 진짜 범인은 고기 살코기가 아니라, 눈에 보이지 않게 가공식품 속에 숨어있는 <b>포화지방과 트랜스지방</b>입니다. 이 나쁜 지방들은 간을 강력하게 자극하여 LDL 콜레스테롤 생산 공장을 24시간 풀가동시킵니다.</p>
            <ul>
                <li><b>믹스커피와 제과점 빵:</b> 믹스커피에 들어있는 프림(야자유)과 케이크, 페스츄리 빵을 만들 때 듬뿍 들어가는 버터, 마가린, 쇼트닝은 혈관을 망가뜨리는 트랜스지방의 덩어리입니다. 밥 대신 빵과 믹스커피로 끼니를 때우는 습관은 고지혈증으로 가는 직행열차입니다.</li>
                <li><b>액상과당의 역습:</b> 탕후루, 흑당 버블티, 탄산음료에 들어있는 액상과당은 간에 들어오는 즉시 중성지방으로 변환되며, 이 중성지방은 나쁜 콜레스테롤(LDL)의 크기를 작고 단단하게 뭉치게 만들어 혈관 벽에 더 잘 파고들게 만듭니다.</li>
            </ul>

            <h2>3. 빵을 끊지 못하겠다면 '이것'을 같이 먹어라</h2>
            <p>고지혈증 판정을 받았다고 세상의 모든 맛있는 음식을 끊을 수는 없습니다. 피할 수 없다면 방어막을 쳐야 합니다. 우리 장 속에서 콜레스테롤을 스펀지처럼 흡수하여 대변으로 배출해 주는 마법의 성분이 바로 <b>'수용성 식이섬유'</b>입니다.</p>
            <p>귀리(오트밀), 미역, 다시마, 사과, 강낭콩 등에 풍부하게 들어있는 수용성 식이섬유는 물과 만나면 끈적끈적한 젤 형태로 변합니다. 이 젤이 장을 통과하면서 음식물 속의 나쁜 지방과 콜레스테롤을 꽉 끌어안고 몸 밖으로 배출됩니다. 식사 전이나 식사 중에 샐러드나 해조류를 먼저 충분히 섭취하면, 이후에 들어오는 나쁜 지방이 혈관으로 흡수되는 비율을 획기적으로 낮출 수 있습니다.</p>

            <h2>결론: 식이요법 3개월 실패 시 약물 치료 수용하기</h2>
            <p>밀가루와 단당류를 끊고 유산소 운동을 3개월 이상 했음에도 LDL 콜레스테롤이 160 이상을 맴돈다면, 이는 유전적이거나 노화로 인한 체질적 요인이 큽니다. 이때는 "약을 한 번 먹으면 평생 먹어야 한다"는 잘못된 두려움을 버리고 순환기내과 전문의가 처방하는 <b>스타틴(Statin) 계열의 약물</b>을 복용해야 합니다.</p>
            <p>매일 알약 하나를 먹는 불편함이, 뇌졸중으로 쓰러져 반신불수가 되는 비극보다 수만 배 이득이라는 사실을 꼭 기억하시기 바랍니다.</p>
        `
    }
];

// Write new articles
newArticles.forEach((article) => {
    const canonicalUrl = `https://minddoo.github.io/articles/article-${article.id}.html`;
    const articleHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title} | 체킷 매거진</title>
    <meta name="description" content="${article.summary}">
    <link rel="stylesheet" href="../style.css">
    
    <!-- SEO Optimization Tags -->
    <link rel="canonical" href="${canonicalUrl}">
    <link rel="icon" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🩺</text></svg>">
    <meta property="og:type" content="article">
    <meta property="og:url" content="${canonicalUrl}">
    <meta property="og:title" content="${article.title}">
    <meta property="og:description" content="${article.summary}">
    <meta property="og:image" content="https://minddoo.github.io/globe.png">
    <meta property="og:site_name" content="체킷의 항목 체크">
    
    <style>
        body { background: #f8fafc; }
        .article-container { max-width: 800px; margin: 40px auto; }
        .article-card { background: #fff; padding: 50px; border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.03); border: 1px solid #e2e8f0; }
        .article-card h1 { color: #0f766e; font-size: 32px; line-height: 1.4; margin-bottom: 20px;}
        .article-card h2 { color: #1e293b; font-size: 22px; margin-top: 40px; border-left: 4px solid #00b4a2; padding-left: 12px; }
        .article-card h3 { color: #334155; font-size: 18px; margin-top: 25px; }
        .article-card p, .article-card li { color: #334155; line-height: 1.8; font-size: 17px; margin-bottom: 18px; }
        .author-tag { display:flex; align-items:center; gap:15px; padding-bottom: 25px; border-bottom: 1px solid #e2e8f0; margin-bottom: 30px; }
        .author-avatar { width: 48px; height: 48px; background: #e0f2fe; border-radius: 50%; display:flex; align-items:center; justify-content:center; font-size: 24px;}
        .author-info span { display: block; color: #64748b; font-size: 14px; }
        .author-info strong { color: #0f766e; font-size: 16px; }
        .back-btn { display:inline-flex; align-items:center; margin-bottom:20px; color:#64748b; text-decoration:none; font-weight:bold; transition: color 0.2s;}
        .back-btn:hover { color: #00b4a2; }
    </style>
</head>
<body>
    <header>
        <div class="nav-container">
            <a href="../index.html" class="logo">체킷의 항목 체크</a>
        </div>
    </header>

    <main class="article-container">
        <a href="../magazine.html" class="back-btn">← 매거진 리스트로 돌아가기</a>
        <article class="article-card">
            <h1>${article.title}</h1>
            
            <div class="author-tag">
                <div class="author-avatar">👩‍⚕️</div>
                <div class="author-info">
                    <strong>작성자: 체킷 건강연구소 실무진</strong>
                    <span>발행일: 2026.07.24 · 읽는 시간: 약 4분</span>
                </div>
            </div>
            
            <div class="article-body">
                ${article.content}
            </div>
        </article>
    </main>
    <footer style="text-align:center; padding:30px; background:#f4f7f6; color:#888; font-size:13px; margin-top:40px;">
        <p>&copy; 2026 체킷의 항목 체크. All rights reserved.</p>
    </footer>
</body>
</html>`;
    fs.writeFileSync(path.join(dir, `article-${article.id}.html`), articleHtml, 'utf8');
});

// Update magazine.html to include new articles
let magazineHtml = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/magazine.html', 'utf8');
let newGridItems = '';
newArticles.forEach(a => {
    newGridItems += `
            <a href="articles/article-${a.id}.html" class="mag-card">
                <div class="mag-content">
                    <span class="featured-badge" style="background:#fefce8; color:#a16207;">심층 의학 칼럼</span>
                    <h3>${a.title}</h3>
                    <p>${a.summary}</p>
                </div>
                <div class="mag-footer">
                    👁️ 체킷 건강연구소 · 2026.07.24
                </div>
            </a>`;
});
// Insert right before the closing </div> of .mag-grid
magazineHtml = magazineHtml.replace('        </div>\n    </main>', newGridItems + '\n        </div>\n    </main>');
fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/magazine.html', magazineHtml, 'utf8');

// Update sitemap.xml
let sitemap = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/sitemap.xml', 'utf8');
let newUrls = '';
newArticles.forEach(a => {
    newUrls += `  <url><loc>https://minddoo.github.io/articles/article-${a.id}.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>\n`;
});
sitemap = sitemap.replace('</urlset>', newUrls + '</urlset>');
fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/sitemap.xml', sitemap, 'utf8');

console.log('Successfully generated 4 additional articles, updated magazine.html and sitemap.xml.');
