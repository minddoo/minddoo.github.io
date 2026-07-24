const fs = require('fs');
let html = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/nhis-guide.html', 'utf8');

const targetStr = '<section class="guide-section" style="text-align: center;">\n            <h2>📞 국민건강보험공단 다이렉트 문의</h2>';

const newContent = `
        <section class="guide-section">
            <h2>💡 종합검진 + 공단검진 동시 진행 꿀팁</h2>
            <p style="color:#64748b; margin-bottom:20px;">회사나 개인적으로 비용을 들여 '종합 건강검진'을 예약할 때, 올해 나의 '무료 국가건강검진(공단검진)' 항목을 묶어서 받으면 비용과 시간을 획기적으로 아낄 수 있습니다.</p>
            
            <div class="info-card">
                <h4 style="color:#0369a1;">1. 비용 차감 또는 항목 업그레이드</h4>
                <p>종합검진을 예약한 병원이 공단검진 지정기관이라면 당일 동시 진행이 가능합니다. 혈액검사, 흉부 X선 등 공단에서 <b>무료로 지원하는 항목의 비용만큼 종합검진 패키지 가격에서 할인</b>을 받거나, 그 금액만큼 <b>다른 프리미엄 검사(초음파 등)로 대체</b>할 수 있습니다.</p>
            </div>
            
            <div class="info-card">
                <h4 style="color:#0369a1;">2. 체력 및 시간 소모 최소화</h4>
                <p>따로따로 두 번 병원에 갈 필요 없이, 전날 금식도 한 번, 피도 한 번만 뽑으면 두 검사가 모두 완료됩니다. 바쁜 직장인들의 소중한 연차와 체력을 아끼는 최고의 방법입니다.</p>
            </div>
            
            <div class="info-card">
                <h4 style="color:#0369a1;">3. 결과 통보는 따로 2개가 나옵니다</h4>
                <p>공단검진 결과는 국가 규격의 우편/모바일로 오고, 종합검진 결과는 해당 병원의 자체 양식(초음파 사진 등이 포함된 두꺼운 책자)으로 따로 제공됩니다. 두 결과지의 상세 수치들을 본 사이트의 <b>'결과지 수치 시뮬레이터'</b>에 입력해 보시면 훨씬 입체적으로 건강을 분석할 수 있습니다.</p>
            </div>
            
            <div class="danger-card" style="padding:20px; margin-top:15px; border-radius:8px;">
                <h4 style="margin-top:0; color:#b91c1c;">🗣️ 병원 예약 시 마법의 멘트!</h4>
                <p style="margin-bottom:0;">"저 이번에 공단검진(또는 국가 암검진) 대상자인데, <b>종합검진이랑 병행해서 중복되는 항목 수수료를 조율(할인/대체)</b>하고 싶습니다." 라고 사전에 꼭 말씀하세요!</p>
            </div>
        </section>

        <section class="guide-section" style="text-align: center;">
            <h2>📞 국민건강보험공단 다이렉트 문의</h2>`;

if (html.includes(targetStr)) {
    html = html.replace(targetStr, newContent);
    fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/nhis-guide.html', html, 'utf8');
    console.log('Successfully injected "종합검진 동시 진행 꿀팁" section into nhis-guide.html');
} else {
    console.log('Could not find the target injection point.');
}
