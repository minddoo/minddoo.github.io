const fs = require('fs');
const path = require('path');

const dir = 'C:/Users/pc/Documents/minddoo.github.io/articles';

// 1. Delete all existing files in articles directory
if (fs.existsSync(dir)) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        fs.unlinkSync(path.join(dir, file));
    }
} else {
    fs.mkdirSync(dir);
}

// 2. Define 5 totally unique articles
const uniqueArticles = [
    {
        id: 1,
        title: "수면내시경 전 물 한 모금도 마시면 안 되는 진짜 이유 (혈압약 복용 예외 기준)",
        summary: "건강검진 전 가장 헷갈리는 금식 시간과 물 섭취 기준, 그리고 유일하게 허용되는 혈압약 복용 방법에 대해 의학적 근거를 바탕으로 상세히 알아봅니다.",
        content: `
            <p>건강검진 예약 문자를 받고 가장 먼저 걱정되는 것은 바로 '금식'입니다. 건강검진센터 안내 데스크에서 하루에도 수십 번씩 듣는 질문이 있습니다. "어젯밤 10시에 너무 목이 말라서 물 한 모금 마셨는데 내시경 못 하는 건가요?", "아침에 무심코 껌을 씹었는데 어떡하죠?" 오늘 이 칼럼에서는 그동안 애매모호했던 금식 기준에 대해 현장 실무와 의학적 관점에서 완벽하게 정리해 드립니다.</p>

            <h2>1. 물 한 모금도 안 되는 이유: 흡인성 폐렴의 공포</h2>
            <p>위내시경이나 대장내시경을 '수면(의학적 용어로 진정)' 상태로 진행할 때 가장 무서운 합병증은 바로 '흡인성 폐렴'입니다. 우리 몸은 평소에 음식물이 기도로 넘어가지 않도록 방어하는 반사 신경(사레들림)이 있습니다. 하지만 진정제가 투여되면 뇌의 중추신경계가 억제되면서 괄약근과 기침 반사 신경이 완전히 느슨해집니다.</p>
            <p>이때 위장에 아주 적은 양의 물이나 위액이라도 고여 있다면, 내시경 카메라가 들어가면서 자극을 줄 때 위 내용물이 역류하여 기도로 넘어갈 수 있습니다. 위산과 섞인 내용물이 폐로 들어가면 치명적인 감염성 폐렴이나 급성 호흡 곤란 증후군을 유발할 수 있습니다. 당일 아침 "물 한 모금쯤이야" 하는 안일한 생각이 생명을 위협할 수 있는 이유입니다.</p>

            <h3>1-1. 복부 초음파를 위해서도 금식은 절대적</h3>
            <p>내시경을 하지 않더라도 복부 초음파 검사가 있다면 물 한 모금 마시지 않아야 합니다. 물이나 음식이 식도를 타고 넘어가면 담낭(쓸개)은 즉시 소화액을 짜내기 위해 수축해버립니다. 쪼그라든 담낭은 초음파 화면에서 식별하기 매우 어려워져 담석이나 초기 용종을 놓칠 확률이 급격히 높아집니다. 또한 음식물과 함께 들어간 공기가 장내 가스를 유발하여 췌장이나 신장 등 뒤쪽에 위치한 장기의 시야를 하얗게 가려버립니다.</p>

            <h2>2. 유일한 예외: 생명과 직결된 '혈압약' 복용 가이드</h2>
            <p>금식이 철저하게 요구되는 상황에서도, 반드시 챙겨 먹어야 하는 예외적인 약물이 있습니다. 바로 '혈압약'과 '항경련제', '부정맥 약'입니다. 검진 당일 병원이라는 낯선 환경과 내시경에 대한 긴장감으로 인해 혈압이 160 이상으로 급상승하는 환자들이 매우 많습니다. 혈압이 조절되지 않으면 심뇌혈관 사고 위험 때문에 내시경 진행 자체가 현장에서 취소됩니다.</p>
            <ul>
                <li><b>안전한 복용 방법:</b> 검진 당일 이른 아침(오전 6시 이전), 종이컵 반 컵(약 50ml) 이하의 아주 최소한의 물로 혈압약만 꿀꺽 삼키셔야 합니다. 벌컥벌컥 마시는 것은 금물입니다.</li>
                <li><b>절대 금지되는 약물 (당뇨약):</b> 혈압약과 달리 당뇨약이나 인슐린 주사는 검사 당일 절대 투여 금지입니다. 8시간 이상 금식한 상태에서 혈당을 낮추는 약이 들어가면 검사 도중 심각한 저혈당 쇼크가 올 수 있습니다. 반드시 지참하고 오셨다가 모든 검사와 식사가 끝난 뒤에 복용하셔야 합니다.</li>
            </ul>

            <h2>3. 무심코 씹은 껌, 사탕, 담배는 어떨까?</h2>
            <p>종종 "삼키지 않고 입에만 머금고 있었으니 괜찮겠지"라며 껌을 씹거나 사탕을 빨면서 내원하시는 분들이 있습니다. 또는 긴장을 풀기 위해 담배를 태우고 오시기도 합니다. 하지만 입안에서 무언가를 씹거나 연기를 흡입하는 행위 자체만으로 우리 뇌는 "음식이 들어오고 있다! 소화를 준비하라!"라고 착각합니다.</p>
            <p>이 신호를 받은 위장은 다량의 강산성 위산을 콸콸 분비하게 됩니다. 위산이 가득 차 출렁거리는 위장 내부는 내시경 카메라로 정확한 관찰이 어렵고, 점막이 붉게 충혈되어 위염으로 오진될 수 있으며, 무엇보다 앞서 말씀드린 기도로의 역류 위험을 극대화합니다.</p>

            <h2>결론: 안전하고 정확한 검사를 위한 타협 없는 원칙</h2>
            <p>건강검진 전 금식 안내는 단순히 병원의 편의를 위한 귀찮은 규칙이 아닙니다. 환자 본인의 생명을 안전하게 보호하고, 비싼 돈을 들여 하는 검사에서 작은 질병의 씨앗 하나라도 정확하게 찾아내기 위한 가장 기본적인 준비 단계입니다. 전날 저녁 가벼운 식사 이후부터는 가급적 수분 섭취도 줄이시고, 당일 아침에는 완전한 금식 상태로 내원하시길 간곡히 당부드립니다.</p>
        `
    },
    {
        id: 2,
        title: "간 수치(AST, ALT)가 100을 넘었을 때 절대 피해야 할 3가지 행동",
        summary: "건강검진에서 간 수치 이상을 통보받았을 때 흔히 저지르는 치명적인 실수와 간 건강을 되돌리는 확실한 극복 방법에 대해 알아봅니다.",
        content: `
            <p>건강검진 결과지를 받아들고 가장 많이 놀라며 문의 전화를 주시는 항목이 바로 간 수치(AST, ALT, 감마지티피)입니다. 정상 범위인 40 IU/L 이하를 훌쩍 뛰어넘어 100, 200, 심지어 300이라는 붉은색 숫자가 찍혀 있으면 덜컥 암이라도 걸린 것은 아닐까 겁이 나기 마련입니다. '침묵의 장기'라 불리는 간은 신경세포가 없어 절반 이상이 돌이킬 수 없게 망가져도 아무런 통증이 없습니다. 수치로 나타나는 경고를 절대 무시해서는 안 되는 이유입니다.</p>

            <h2>1. 첫 번째 치명적 실수: "간에 좋다는 즙과 보조제 찾아 먹기"</h2>
            <p>간 수치가 높게 나왔다는 소식을 듣고 다급한 마음에 헛개나무즙, 칡즙, 다이어트 한약, 굼벵이 환, 검증되지 않은 복합 영양제 등을 무분별하게 구매해 드시는 분들이 현장에 정말 많습니다. 결론부터 말씀드리면 이는 '불난 집에 기름을 붓는 격'입니다.</p>
            <p>간은 우리 몸에 들어오는 모든 성분을 대사하고 해독하는 거대한 화학 공장입니다. 고농축된 즙이나 복합 성분의 보조제는 이미 기능이 떨어져 헉헉대고 있는 간에 엄청난 해독 과부하를 일으킵니다. 이를 의학적으로 '독성 간염(Toxic Hepatitis)'이라고 부르며, 건강해지려고 먹은 즙 때문에 황달이 오고 수치가 1,000을 돌파하여 응급실에 실려 가는 안타까운 사례가 매년 끊이지 않습니다.</p>

            <h2>2. 두 번째 치명적 실수: "주말 몰아치기 음주 (폭음)"</h2>
            <p>간 수치가 높은 분들을 면담해보면 "저는 평일에는 술 한 방울도 안 마십니다. 주말에 친구들 만날 때만 한 번 마시는 걸요?"라고 항변하시는 경우가 많습니다. 하지만 간의 회복 메커니즘을 고려할 때, 매일 맥주 한 캔을 마시는 것보다 주말에 소주 2~3병을 한 번에 들이붓는 '폭음'이 간세포 파괴에 훨씬 더 치명적입니다.</p>
            <p>특히 초음파상 '지방간' 소견이 함께 있는 상태에서의 폭음은 알코올성 간염을 거쳐 간경변증(간경화)으로 진행되는 급행열차를 타는 것과 같습니다. 간세포가 술을 분해하며 생긴 상처를 완전히 회복하려면 최소 2~3주의 절대적인 금주 기간이 필요합니다.</p>

            <h2>3. 세 번째 치명적 실수: "밥, 빵, 면, 과일의 무제한 섭취"</h2>
            <p>많은 분들이 간 수치가 높은 원인을 '술'과 '피로'에서만 찾으려 합니다. 하지만 최근 2030 젊은 세대에서 급증하는 간 수치 상승의 주범은 바로 '비알콜성 지방간'입니다. 술을 한 잔도 마시지 않는 사람도 간이 망가질 수 있다는 뜻입니다.</p>
            <p>밥, 빵, 면, 떡 같은 정제 탄수화물과 액상과당이 듬뿍 든 달콤한 음료, 그리고 탕후루나 과일을 과도하게 섭취하면, 우리 몸은 쓰고 남은 잉여 에너지를 중성지방 형태로 변환하여 간에 차곡차곡 쌓아둡니다. 간에 지방이 겹겹이 끼면 간세포가 염증을 일으키고 파괴되면서 혈액 속으로 AST, ALT 효소가 흘러나와 수치가 상승하게 됩니다.</p>

            <h2>어떻게 극복해야 할까? 가장 확실한 정공법</h2>
            <p>간 수치를 정상으로 돌리는 데 특별한 마법의 약은 없습니다. 가장 확실하고 안전한 방법은 '간에게 휴식을 주는 식단 조절'입니다.</p>
            <ol>
                <li><b>정석적인 체중 감량:</b> 현재 체중의 5~10%만 무리하지 않고 감량해도 간에 낀 지방이 눈에 띄게 줄어들고 수치가 기적처럼 안정화됩니다.</li>
                <li><b>탄수화물 커팅과 단백질 섭취:</b> 저녁 식사에서 탄수화물 비중을 대폭 줄이고 두부, 닭가슴살, 흰살생선 등 양질의 단백질을 섭취하여 파괴된 간세포의 재생 원료를 공급해야 합니다.</li>
                <li><b>충분한 수면과 휴식:</b> 밤 11시 이전에는 취침하여 간이 자체적인 해독 사이클을 온전히 돌릴 수 있도록 도와야 합니다.</li>
            </ol>
            <p>만약 식단과 금주를 2달 이상 실천했음에도 수치가 100 이상 지속되거나 우상복부 통증, 극심한 피로감이 있다면 반드시 소화기내과(간 전문의)를 방문하여 B형/C형 간염 바이러스 정밀 검사나 간 섬유화 검사를 받아보셔야 합니다.</p>
        `
    },
    {
        id: 3,
        title: "2030 직장인이 병원 상술에 속지 않고 꼭 추가해야 할 3대 검사 항목",
        summary: "국가 일반검진만으로는 부족한 2030 세대를 위해, 가성비와 의학적 필요성을 모두 잡은 필수 추가 검사 3가지를 현직 코디네이터가 추천합니다.",
        content: `
            <p>직장인이라면 매년 혹은 2년에 한 번씩 의무적으로 국가 일반건강검진을 받게 됩니다. 하지만 무료로 진행되는 이 검진은 국민의 전반적인 건강 수준을 끌어올리기 위한 '최소한의 기본 스크리닝(Screening)' 목적이 강합니다. 키, 몸무게, 혈압, 간단한 피검사, 흉부 X-ray 정도로 구성되어 있어 최근 20~30대에서 급증하는 서구화된 질병들을 초기 단계에서 잡아내기에는 분명한 한계가 있습니다.</p>
            <p>그렇다고 병원에서 권하는 50~100만 원짜리 비싼 프리미엄 종합 패키지를 무턱대고 결제할 필요는 없습니다. 오늘은 수만 명의 검진 데이터를 다뤄본 실무자의 관점에서, 2030 세대에게 돈이 전혀 아깝지 않은 '진짜 필수 추가 검사 항목 3가지'를 꼽아드립니다.</p>

            <h2>1. 수면 위내시경: 30대가 되었다면 더 이상 미루지 마세요</h2>
            <p>한국은 명실상부한 위암 발병률 세계 1위 국가입니다. 최근에는 자극적인 마라탕, 매운 떡볶이, 야식 문화와 잦은 배달 음식, 불규칙한 식습관, 직장 스트레스가 겹치면서 2030 세대의 위식도 역류질환과 만성 위축성 위염 발병이 폭발적으로 늘고 있습니다.</p>
            <p>국가 암검진에서는 만 40세가 넘어야 위내시경 비용을 지원해 줍니다. 하지만 30대가 되었다면 국가 지원을 기다리지 말고 2~3년에 한 번 정도는 자비나 회사 복지 포인트를 사용해서라도 반드시 위내시경을 받아야 합니다. 위장 점막의 궤양 상태를 직접 눈으로 확인하고, 위암의 강력한 원인균인 '헬리코박터 파일로리균' 감염 여부를 확인하여 조기에 제균 치료를 받는 것이 평생의 위 건강을 좌우합니다.</p>

            <h2>2. 상복부 초음파: 침묵의 장기들을 깨우는 마법의 거울</h2>
            <p>종종 혈액검사 상 간 수치(AST, ALT)가 정상이라고 해서 간이 100% 건강하다고 맹신하는 분들이 있습니다. 혈액검사는 간세포가 이미 파괴되어 효소가 흘러나와야만 수치가 오르기 때문에, 지방이 얼마나 두껍게 끼어 있는지(지방간), 담낭에 담석이나 용종이 숨어있지는 않은지, 신장에 물혹이 있는지는 초음파를 대봐야만 정확히 알 수 있습니다.</p>
            <p>서구화된 기름진 식습관으로 인해 유독 젊은 층에서 소화불량을 동반한 담석증 환자가 급증하고 있습니다. 명치 끝이 자주 답답하고 이유 없이 소화가 안 된다면 약국에서 소화제만 사 먹을 것이 아니라 상복부 초음파를 꼭 한 번 추가해 보시기 바랍니다.</p>

            <h2>3. 경추(목) 및 요추(허리) X-ray: 척추 수명을 늘리는 골든타임</h2>
            <p>하루 종일 듀얼 모니터를 노려보고, 출퇴근길과 퇴근 후 침대에서조차 스마트폰을 손에서 놓지 않는 2030 직장인들에게 목과 허리 건강은 그야말로 시한폭탄과 같습니다. 하지만 당장 심하게 아프지 않다는 이유로 척추 검사는 등한시하는 경우가 많습니다.</p>
            <p>비용이 만 원 안팎으로 매우 저렴한 경추/요추 X-ray 검사만 추가해도 뼈의 정렬 상태(일자목, 거북목 유무)와 척추뼈 사이의 디스크 간격이 좁아지는 퇴행성 변화를 초기에 확인할 수 있습니다. 시각적으로 자신의 휘어진 뼈 사진을 확인하는 것만큼 자세 교정과 운동을 결심하게 만드는 강력한 동기부여는 없습니다. 디스크가 터져서 수백만 원의 수술비와 엄청난 고통을 겪기 전에, 단돈 몇천 원의 X-ray로 예방하시기 바랍니다.</p>

            <h2>결론: 나만의 맞춤형 설계가 최고의 건강검진</h2>
            <p>가장 좋은 건강검진은 남들이 많이 하는 비싼 검사를 다 찍어보는 것이 아닙니다. 부모님의 병력(가족력), 나의 평소 식습관과 직업 환경, 그리고 최근 몇 달간 유독 불편했던 신체 증상을 기준으로 1~2가지 항목만 스마트하게 핀셋으로 집어 추가하는 것입니다. 이것이야말로 가성비와 건강을 동시에 챙기는 완벽한 건강검진 설계입니다.</p>
        `
    },
    {
        id: 4,
        title: "대장내시경 3일 전부터 절대 먹으면 안 되는 음식 완벽 가이드",
        summary: "비싼 돈과 시간을 들여 하는 대장내시경이 장 정결 불량으로 실패하지 않도록, 실무자가 콕 집어주는 3일 전 금지 음식과 허용 음식 목록입니다.",
        content: `
            <p>건강검진 항목 중 가장 두렵고 힘든 것을 꼽으라면 단연 '대장내시경'입니다. 밤새 화장실을 들락거리며 역겨운 장 정결제(하제)를 들이켜는 고통은 두 번 다시 겪고 싶지 않을 것입니다. 하지만 안타깝게도 검진센터 현장에서는 식단 조절을 제대로 하지 않아 장이 비워지지 않아(장 정결 불량), 검사를 중단하고 며칠 뒤 다시 약을 먹고 오셔야 하는 환자분들이 매일 발생합니다.</p>
            <p>이런 끔찍한 사태를 막기 위해, 대장내시경 검사 3일 전부터 반드시 지켜야 할 식단 조절 가이드를 명확하게 알려드립니다.</p>

            <h2>1. 왜 하필 3일 전부터 조심해야 할까?</h2>
            <p>우리가 섭취한 음식물이 위와 소장을 거쳐 대장으로 이동하고, 완전히 변으로 만들어져 배출되기까지는 사람에 따라 2~3일의 시간이 걸립니다. 특히 소화가 잘되지 않는 씨앗이나 질긴 섬유질은 대장 주름 구석구석에 끈질기게 들러붙어 하제(약)를 아무리 많이 마셔도 씻겨 내려가지 않습니다.</p>
            <p>이러한 찌꺼기들은 내시경 카메라의 시야를 가려 3mm 크기의 작은 선종(용종)을 놓치게 만드는 주범이 되며, 대장내시경의 정확도를 절반 이하로 떨어뜨립니다.</p>

            <h2>2. 절대 먹으면 안 되는 음식 (금지 리스트 🚨)</h2>
            <p>아래 음식들은 검사 3일 전부터는 입에도 대지 않는 것이 좋습니다.</p>
            <ul>
                <li><b>씨 있는 과일:</b> 수박, 참외, 키위, 딸기, 포도, 토마토 등 (작은 씨앗이 장 주름에 박히면 절대 빠지지 않습니다.)</li>
                <li><b>질긴 채소류:</b> 김치, 열무, 파, 버섯, 미나리, 콩나물 등 줄기가 억센 채소 (변비의 원인이 되며 소화가 안 된 채로 남아있습니다.)</li>
                <li><b>해조류:</b> 김, 미역, 다시마 (미끌거리며 장벽에 달라붙어 시야를 심하게 방해합니다. 특히 김가루 조심!)</li>
                <li><b>잡곡 및 견과류:</b> 현미밥, 흑미밥, 깨, 콩, 잣, 호두 (도정되지 않은 곡물은 껍질이 남아있습니다. 무조건 쌀밥만 드셔야 합니다.)</li>
                <li><b>고춧가루가 들어간 음식:</b> 고춧가루는 장벽에 붙으면 피나 용종으로 오인될 수 있어 진단을 심하게 방해합니다.</li>
            </ul>

            <h2>3. 안심하고 먹어도 되는 음식 (허용 리스트 🟢)</h2>
            <p>그렇다면 도대체 3일 동안 무엇을 먹고 버텨야 할까요? 핵심은 '부드럽고 소화가 잘 되어 찌꺼기를 남기지 않는 흰색 음식'입니다.</p>
            <ul>
                <li><b>탄수화물:</b> 흰쌀밥, 흰죽, 식빵, 카스테라, 우동 면발 (건더기 없는 국물)</li>
                <li><b>단백질:</b> 두부, 달걀(계란찜, 후라이, 삶은 계란 모두 가능), 껍질을 벗긴 닭가슴살, 흰살생선</li>
                <li><b>음료:</b> 물, 맑은 주스(오렌지 알갱이 없는 것), 이온 음료, 아메리카노(하루 1잔 이내)</li>
            </ul>

            <h2>4. 검사 전날의 화룡점정: 최후의 식사</h2>
            <p>검사 전날은 가장 중요한 골든타임입니다. 가급적 점심 식사는 <b>오후 2시 이전</b>에 흰죽이나 미음으로 가볍게 끝내야 합니다. 그 이후부터는 맹물과 이온 음료만 섭취하며 완전한 금식에 돌입해야 합니다. 저녁을 굶는 것이 힘들다고 저녁 6시에 카스테라를 드시면, 밤새 장을 비우는 약을 먹을 때 구토와 복통에 시달릴 확률이 매우 높아집니다.</p>
            <p>대장내시경은 준비 과정이 9할인 검사입니다. 힘들게 마음먹은 검사인 만큼, 철저한 식단 관리로 한 번에 깨끗하고 정확하게 검사를 끝내시길 바랍니다!</p>
        `
    },
    {
        id: 5,
        title: "공복 혈당 100~125(당뇨 전단계) 판정 시 3개월 골든타임 대처법",
        summary: "당뇨병으로 넘어가기 직전의 아슬아슬한 상태인 '공복혈당장애' 판정을 받았을 때, 약 없이 정상 수치로 되돌리기 위한 확실한 액션 플랜을 제시합니다.",
        content: `
            <p>건강검진을 받고 가장 찜찜한 기분이 드는 순간은 결과지에 '정상'도 아니고 '질환'도 아닌 <b>'주의'</b> 도장이 찍혀있을 때입니다. 그중에서도 가장 대표적이고 위험한 경고등이 바로 공복 혈당 수치 100~125 mg/dL 구간인 <b>'당뇨 전단계(공복혈당장애)'</b> 판정입니다.</p>
            <p>이 수치를 보고 "아직 126(당뇨 진단 기준)은 안 넘었으니까 괜찮겠지"라며 안심하고 야식과 술을 즐기는 분들이 계십니다. 하지만 내과 전문의들과 현장 실무자들은 이 시기를 당뇨병을 막을 수 있는 마지막 <b>'3개월의 골든타임'</b>이라고 부릅니다. 이 시기를 놓치면 평생 인슐린과 당뇨약의 굴레에서 벗어날 수 없습니다.</p>

            <h2>1. 당뇨 전단계가 의미하는 내 몸의 상태</h2>
            <p>우리가 음식을 먹으면 췌장에서는 '인슐린'이라는 호르몬을 뿜어내어 혈액 속의 포도당을 세포 안으로 밀어 넣어 에너지로 쓰게 만듭니다. 하지만 살이 찌고 내장 지방이 쌓이면, 세포들이 인슐린의 말을 듣지 않는 <b>'인슐린 저항성'</b>이 생깁니다.</p>
            <p>공복 상태인데도 혈당이 100을 넘는다는 것은, 췌장이 인슐린을 미친 듯이 쥐어짜 내어 간신히 혈당을 방어하고 있는 '과로 상태'라는 뜻입니다. 이 과로가 한계에 달해 췌장이 뻗어버리는 순간, 혈당은 126을 돌파하며 돌이킬 수 없는 당뇨병이 시작됩니다.</p>

            <h2>2. 골든타임 3개월 액션 플랜: 첫 번째, '단순당'과의 완전한 이별</h2>
            <p>가장 먼저 쓰레기통에 버려야 할 것은 액상과당과 정제 탄수화물입니다. 탄산음료, 믹스커피, 과일 주스, 빵, 면, 떡은 섭취하는 즉시 소화 과정을 생략하고 혈액 속으로 쏟아져 들어가 혈당 스파이크(급상승)를 일으킵니다.</p>
            <p>혈당이 급상승하면 췌장은 깜짝 놀라 인슐린을 과다 분비하고, 이는 다시 급격한 저혈당과 허기를 유발해 또 단것을 찾게 만드는 악순환을 만듭니다. 앞으로 3개월간은 음료수는 무조건 맹물이나 보리차로 바꾸고, 간식은 아몬드 한 줌이나 삶은 계란으로 대체하는 독한 결단이 필요합니다.</p>

            <h2>3. 두 번째 액션 플랜: 식후 15분, 허벅지 근육의 마법</h2>
            <p>혈액 속에 떠다니는 포도당을 가장 많이, 그리고 가장 빠르게 태워 없애는 소각장이 바로 우리 몸의 '근육', 그중에서도 '허벅지 근육'입니다. 특히 식사를 마치고 혈당이 가장 높게 치솟는 식후 30분~1시간 사이에 가만히 앉아있거나 누워있으면 포도당은 고스란히 지방으로 축적됩니다.</p>
            <p>밥을 먹고 수저를 내려놓은 뒤 15분만 가볍게 동네를 산책하거나, 집에서 스쿼트 30개만 해보세요. 허벅지 근육이 펌핑되면서 혈액 속의 당분을 쑥쑥 흡수하여 혈당 스파이크의 꼭대기를 극적으로 깎아내려 줍니다.</p>

            <h2>4. 세 번째 액션 플랜: 수면 부족과 스트레스 관리</h2>
            <p>수면이 부족하거나 극심한 스트레스를 받으면 우리 몸은 '코르티솔'이라는 스트레스 호르몬을 분비합니다. 이 호르몬은 위기 상황에 대처하기 위해 혈당을 인위적으로 높이는 작용을 합니다. 아무리 식단을 잘 지키고 운동을 해도 매일 야근을 하며 4~5시간밖에 자지 못한다면 공복 혈당은 절대 떨어지지 않습니다. 최소 7시간의 숙면은 당뇨 예방의 숨겨진 치트키입니다.</p>

            <h2>결론: 당화혈색소(HbA1c) 검사로 최종 확인</h2>
            <p>위의 3가지 액션 플랜을 3개월 동안 치열하게 실천했다면, 다시 동네 내과를 방문하여 피검사를 받아보세요. 이때는 공복 혈당뿐만 아니라, 지난 2~3개월간의 평균 혈당 성적표인 <b>'당화혈색소(HbA1c)'</b> 검사를 꼭 같이해달라고 요청해야 합니다. 당화혈색소가 5.6% 이하로 내려왔다면, 여러분은 당뇨병이라는 무서운 절벽 앞에서 극적으로 살아 돌아온 것입니다!</p>
        `
    }
];

// 3. Generate the 5 unique HTML files
let magazineHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>체킷의 항목 체크 | 건강검진 매거진 (칼럼)</title>
    <meta name="description" content="애드센스 승인 최적화 프리미엄 5대 칼럼">
    <link rel="stylesheet" href="style.css">
    <style>
        .mag-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 25px; max-width: 1200px; margin: 0 auto; padding: 0 20px;}
        .mag-card { background: #fff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; transition: transform 0.2s, box-shadow 0.2s; cursor: pointer; text-decoration: none; display: flex; flex-direction: column; height: 100%;}
        .mag-card:hover { transform: translateY(-5px); box-shadow: 0 15px 30px rgba(0, 180, 162, 0.15); border-color: var(--primary); }
        .mag-content { padding: 30px; flex-grow: 1; }
        .mag-content h3 { margin-top: 0; color: #0f766e; font-size: 20px; line-height: 1.5; margin-bottom: 15px;}
        .mag-content p { color: #64748b; font-size: 15px; line-height: 1.6; display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
        .mag-footer { padding: 15px 30px; background: #f8fafc; border-top: 1px solid #f1f5f9; font-size: 13px; color: #94a3b8; font-weight: 500;}
        .featured-badge { display: inline-block; background: #e0f2fe; color: #0369a1; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: bold; margin-bottom: 15px; }
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
        <div class="page-header" style="text-align:center; padding: 50px 20px; background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%); border-radius:16px; margin-bottom: 40px;">
            <h1 style="color:#166534; font-size:36px; margin-bottom:15px;">📰 건강검진 프리미엄 매거진</h1>
            <p class="subtitle" style="color:#334155; font-size:18px;">건강검진센터 현직 실무 코디네이터가 짚어주는 구글에서도 찾기 힘든 진짜 이야기</p>
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

uniqueArticles.forEach((article) => {
    // Write individual HTML
    const articleHtml = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title} | 체킷 매거진</title>
    <meta name="description" content="${article.summary}">
    <link rel="stylesheet" href="../style.css">
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

    // Add to magazine grid
    magazineHtml += `
            <a href="articles/article-${article.id}.html" class="mag-card">
                <div class="mag-content">
                    <span class="featured-badge">실무자 Pick 추천 칼럼</span>
                    <h3>${article.title}</h3>
                    <p>${article.summary}</p>
                </div>
                <div class="mag-footer">
                    👁️ 체킷 건강연구소 · 2026.07.24
                </div>
            </a>`;
            
    // Add to sitemap
    sitemapUrls += `  <url><loc>https://minddoo.github.io/articles/article-${article.id}.html</loc><changefreq>monthly</changefreq><priority>0.8</priority></url>\n`;
});

magazineHtml += `
        </div>
    </main>

    <footer style="text-align:center; padding:30px; background:#f4f7f6; color:#888; font-size:13px; line-height: 1.6; margin-top:60px;">
        <p>&copy; 2026 체킷의 항목 체크. All rights reserved.</p>
    </footer>
    <script src="app.js"></script>
</body>
</html>`;
fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/magazine.html', magazineHtml, 'utf8');

sitemapUrls += `</urlset>`;
fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/sitemap.xml', sitemapUrls, 'utf8');

console.log('Successfully replaced 50 templated articles with 5 high-quality handcrafted articles.');
