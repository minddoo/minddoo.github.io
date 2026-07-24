const fs = require('fs');

const htmlContent = `<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>체킷의 항목 체크 | 특수검진 및 산재 가이드</title>
    <link rel="stylesheet" href="style.css">
    <style>
        .guide-section {
            background: #fff;
            padding: 30px;
            border-radius: 12px;
            margin-bottom: 30px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.02);
            border: 1px solid var(--border);
        }
        .guide-section h2 {
            color: var(--accent);
            border-bottom: 2px solid var(--line);
            padding-bottom: 10px;
            margin-top: 0;
            display: flex;
            align-items: center;
            gap: 10px;
        }
        .form-select {
            width: 100%;
            padding: 15px;
            border: 1px solid #cbd5e1;
            border-radius: 8px;
            font-size: 16px;
            margin-bottom: 15px;
            background: #f8fafc;
        }
        .result-box {
            display: none;
            background: #f0fdf4;
            border-left: 4px solid #22c55e;
            padding: 20px;
            border-radius: 8px;
            margin-top: 20px;
            animation: fadeIn 0.3s ease-in;
        }
        .result-box h4 {
            color: #166534;
            margin-top: 0;
            font-size: 18px;
        }
        .result-box p, .result-box li {
            line-height: 1.6;
            color: #1f2937;
        }
        .danger-box {
            background: #fff1f2;
            border-left: 4px solid #e11d48;
        }
        .danger-box h4 { color: #be123c; }
        .process-steps {
            background: #f8fafc;
            padding: 20px;
            border-radius: 8px;
            margin-top: 15px;
        }
        .process-steps ol {
            padding-left: 20px;
            margin: 0;
        }
        .process-steps li {
            margin-bottom: 10px;
            font-weight: bold;
            color: #334155;
        }
        .process-steps span {
            font-weight: normal;
            color: #64748b;
            display: block;
            font-size: 14px;
            margin-top: 4px;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-5px); }
            to { opacity: 1; transform: translateY(0); }
        }
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
            <a href="sanjae-guide.html" class="active">👷 특수검진 및 산재 가이드</a>
            <a href="about.html">ℹ️ 사이트 소개 및 약관</a>
        </div>
    </div>

    <main>
        <div class="page-header" style="text-align:center; padding: 40px 20px; background: linear-gradient(135deg, #fef08a 0%, #fed7aa 100%); border-radius:16px;">
            <h1 style="color:#b45309; font-size:32px;">👷 특수건강진단 & 산재 예측 가이드</h1>
            <p class="subtitle" style="color:#78350f;">현장 및 교대 근로자를 위한 직업병 위험도 분석과 산재 신청 조건 팩트체크</p>
        </div>

        <section class="guide-section">
            <h2>🏭 나의 특수건강진단 & 직업병 위험도 예측</h2>
            <p style="color:#64748b; margin-bottom:20px;">현재 종사하시는 업종이나 주로 노출되는 유해인자를 선택해 보세요.</p>
            <select id="hazardSelect" class="form-select" onchange="checkHazard()">
                <option value="">-- 노출 유해인자 / 직종 선택 --</option>
                <option value="noise">🔊 소음 노출 (제조업, 건설업, 기계조작 등)</option>
                <option value="dust">💨 분진/광물 노출 (용접, 채석, 건설 현장 등)</option>
                <option value="chemical">🧪 화학물질/유기용제 노출 (도장, 세척, 인쇄 등)</option>
                <option value="night">🌙 야간작업 및 교대근무 (보안, 간호, 운수, 24시 서비스 등)</option>
            </select>
            <div id="hazardResult" class="result-box"></div>
        </section>

        <section class="guide-section">
            <h2>⚖️ 건강검진 이상 소견 ➔ 산재 연계 시뮬레이터</h2>
            <p style="color:#64748b; margin-bottom:20px;">건강검진에서 이상 소견을 받으셨나요? 질환을 선택하여 산재(요양급여) 인정 기준을 확인해 보세요.</p>
            <select id="sanjaeSelect" class="form-select" onchange="checkSanjae()">
                <option value="">-- 진단받은 이상 소견 선택 --</option>
                <option value="hearing">소음성 난청 (청력 저하)</option>
                <option value="muscle">근골격계 질환 (허리디스크, 회전근개파열, 수근관증후군 등)</option>
                <option value="cardio">뇌심혈관 질환 (고혈압 심화, 뇌졸중, 심근경색 등 - 과로사 관련)</option>
                <option value="lung">호흡기/폐 질환 (진폐증, 만성폐쇄성폐질환 등)</option>
            </select>
            <div id="sanjaeResult" class="result-box danger-box"></div>
        </section>

        <section class="guide-section">
            <h2>📝 산재(요양급여) 신청 3단계 퀵 가이드</h2>
            <div class="process-steps">
                <ol>
                    <li>의학적 소견(진단서) 확보
                        <span>직업환경의학 전문의나 주치의로부터 질병과 업무의 연관성을 증명할 수 있는 '산재 소견서'를 발급받습니다.</span>
                    </li>
                    <li>업무상 재해 입증 자료 수집
                        <span>근무기록지, 교대근무표, 유해인자 노출 내역, 이전 건강검진 결과지 등 업무로 인해 병이 생겼다는 증거를 모읍니다.</span>
                    </li>
                    <li>근로복지공단 요양급여 신청서 접수
                        <span>사업장 관할 근로복지공단에 '요양급여 신청서'와 함께 자료를 제출합니다. (회사의 동의나 직인이 없어도 본인이 직접 신청 가능합니다!)</span>
                    </li>
                </ol>
            </div>
            <p style="margin-top: 20px; font-size:14px; color:#64748b; text-align:center;">※ 산재 신청은 개인이 직접 하기 까다로울 수 있으므로, 뇌심혈관 질환 등 중증의 경우 공인노무사 등 전문가의 조력을 받는 것을 권장합니다.</p>
        </section>

    </main>

    <footer style="text-align:center; padding:30px; background:#f4f7f6; color:#888; font-size:13px; line-height: 1.6;">
        <div style="margin-bottom: 15px; display:flex; justify-content:center; gap:20px; flex-wrap:wrap;">
            <a href="about.html#about" style="color:#00b4a2; text-decoration:none; font-weight:bold;">블로그 소개</a>
            <a href="about.html#contact" style="color:#00b4a2; text-decoration:none; font-weight:bold;">문의하기</a>
            <a href="about.html#privacy" style="color:#00b4a2; text-decoration:none; font-weight:bold;">개인정보처리방침</a>
            <a href="about.html#disclaimer" style="color:#00b4a2; text-decoration:none; font-weight:bold;">면책 조항</a>
        </div>
        <p>&copy; 2026 체킷의 항목 체크. All rights reserved.</p>
        <p style="color:#e63946; font-weight:bold; margin-top:10px;">[의학적 면책 조항] 본 사이트에서 제공하는 정보는 의학적/법률적 참고용일 뿐이며, 전문의의 진료나 노무사의 상담을 대신할 수 없습니다.</p>
    </footer>

    <script src="app.js"></script>
    <script>
        function checkHazard() {
            const val = document.getElementById('hazardSelect').value;
            const res = document.getElementById('hazardResult');
            if(!val) {
                res.style.display = 'none';
                return;
            }
            res.style.display = 'block';
            
            if(val === 'noise') {
                res.innerHTML = "<h4>🔊 직업성 난청 고위험군</h4><p>85dB 이상의 소음에 노출되는 작업장 근로자는 정기적으로 <b>특수건강진단(순음청력검사)</b>을 받아야 합니다. 귀마개 등 개인보호구 착용이 법적 의무이며, 검진에서 'D1(직업병 유소견)' 판정을 받을 경우 즉시 작업환경 개선 및 산재 상담이 필요합니다.</p>";
            } else if(val === 'dust') {
                res.innerHTML = "<h4>💨 진폐증 및 호흡기 질환 고위험군</h4><p>분진(돌가루, 쇳가루 등)에 노출되는 경우 폐에 가루가 쌓이는 진폐증의 위험이 있습니다. 특수검진 시 <b>흉부 방사선 촬영과 폐기능 검사</b>를 철저히 확인해야 하며, 1급 방진마스크 착용이 필수입니다.</p>";
            } else if(val === 'chemical') {
                res.innerHTML = "<h4>🧪 간 손상 및 혈액 질환 고위험군</h4><p>유기용제나 중금속 취급 근로자는 피부나 호흡기를 통한 화학물질 흡수로 인해 간 기능 저하나 백혈병(조혈기계 장애) 위험이 있습니다. 건강검진 시 <b>간수치(AST, ALT, r-GTP)와 백혈구/혈소판 수치</b>를 유심히 관찰하세요.</p>";
            } else if(val === 'night') {
                res.innerHTML = "<h4>🌙 야간/교대근무 건강장해 (특수검진 대상)</h4><p>야간작업은 2급 발암물질로 지정될 만큼 신체 리듬을 파괴합니다. <b>수면장애(불면증), 위장관 질환, 그리고 대사증후군(혈압, 혈당 상승) 및 뇌심혈관 질환 위험</b>이 급증하므로, 반드시 야간작업 특수건강진단을 통해 혈압, 공복혈당 수치를 관리하고 충분한 낮 수면 환경을 조성해야 합니다.</p>";
            }
        }

        function checkSanjae() {
            const val = document.getElementById('sanjaeSelect').value;
            const res = document.getElementById('sanjaeResult');
            if(!val) {
                res.style.display = 'none';
                return;
            }
            res.style.display = 'block';
            
            if(val === 'hearing') {
                res.innerHTML = "<h4>⚠️ 소음성 난청 산재 인정 필수 조건</h4><ul><li>85dB 이상의 소음이 발생하는 사업장에서 <b>3년 이상 종사</b>하였을 것</li><li>순음청력검사 결과 한 귀의 청력 손실이 <b>40dB 이상</b>일 것</li><li>노인성 난청이나 중이염 등 다른 원인에 의한 난청이 아닐 것</li></ul><p>※ 퇴직 후(혹은 이직 후) 몇 년이 지났더라도 과거 3년 이상 소음 사업장에 근무한 이력을 증빙하면 산재 보상을 받을 수 있습니다!</p>";
            } else if(val === 'muscle') {
                res.innerHTML = "<h4>⚠️ 근골격계 질환 산재 인정 필수 조건</h4><ul><li>반복 동작이 많거나 무리한 힘(중량물 취급)을 가하는 업무</li><li>부적절한 자세를 장시간 유지하는 업무</li><li>진단명과 수행한 업무 사이에 <b>의학적인 인과관계(신체 부담 작업 증명)</b>가 확립될 것</li></ul><p>※ 단순한 퇴행성(나이에 의한) 질환으로 진단받았더라도, <b>업무로 인해 자연경과보다 빠르게 악화(악화성 요인)</b>되었다면 산재로 인정받을 수 있습니다.</p>";
            } else if(val === 'cardio') {
                res.innerHTML = "<h4>⚠️ 뇌심혈관 질환(과로사) 산재 인정 필수 조건</h4><ul><li><b>급성 과로:</b> 발병 전 24시간 이내에 돌발적이고 예기치 못한 사건(극심한 스트레스, 육체적 과로)이 있었을 것</li><li><b>단기 과로:</b> 발병 전 1주일 이내 업무량이 일상 업무보다 <b>30% 이상 증가</b>하였을 것</li><li><b>만성 과로:</b> 발병 전 12주간 업무시간이 평균 <b>주 60시간(4주간 64시간) 이상</b>이거나, 교대근무/야간작무 등 가중 요인이 있을 것</li></ul><p>※ 평소 고혈압, 당뇨 등 기저질환이 있었더라도 <b>과로로 인해 질병이 급격히 유발/악화</b>되었다면 산재 인정이 가능합니다.</p>";
            } else if(val === 'lung') {
                res.innerHTML = "<h4>⚠️ 호흡기 질환(진폐, 만성폐쇄성폐질환) 산재 요건</h4><ul><li>장기간 분진(광물, 석탄, 용접흄 등)에 노출된 객관적인 이력 증빙</li><li>진폐증의 경우 흉부 X-ray상 진폐증 특유의 음영(병변)이 관찰되고 폐기능 장해가 동반될 것</li></ul><p>※ 잠복기가 매우 길어 퇴사 후 10~20년 뒤에 발병하는 경우가 많으므로, 과거 근무 기록과 국민연금 내역서 확보가 핵심입니다.</p>";
            }
        }
    </script>
</body>
</html>
`;
fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/sanjae-guide.html', htmlContent, 'utf8');

const files = ['index.html', 'simulator.html', 'about.html', 'nhis-guide.html'];
const newNavStr = `            <a href="index.html">🔍 전체 검사 항목 백과</a>
            <a href="simulator.html">📊 결과지 수치 시뮬레이터</a>
            <a href="nhis-guide.html">🇰🇷 국가건강검진(공단) 가이드</a>
            <a href="sanjae-guide.html">👷 특수검진 및 산재 가이드</a>
            <a href="about.html">ℹ️ 사이트 소개 및 약관</a>`;

files.forEach(file => {
    let html = fs.readFileSync(`C:/Users/pc/Documents/minddoo.github.io/${file}`, 'utf8');
    
    // Replace drawer nav exactly
    const navRegex = /<a href="index\.html".*?<\/a>\s*<a href="simulator\.html".*?<\/a>\s*<a href="nhis-guide\.html".*?<\/a>\s*(<a href="sanjae-guide\.html".*?<\/a>\s*)?<a href="about\.html".*?<\/a>/;
    html = html.replace(navRegex, newNavStr);
    
    fs.writeFileSync(`C:/Users/pc/Documents/minddoo.github.io/${file}`, html, 'utf8');
});
console.log('Created sanjae-guide.html and updated navigation.');
