const fs = require('fs');

let html = fs.readFileSync('C:/Users/pc/Documents/minddoo.github.io/simulator.html', 'utf8');

const newHtml = `        <div class="sim-container">
            <h3>4. 비만도 (BMI)</h3>
            <p style="font-size:14px; color:#666;">키와 몸무게를 입력하여 체질량지수(BMI)를 확인하세요.</p>
            <div class="sim-row">
                <input type="number" id="heightInput" class="sim-input" placeholder="키 (cm)">
                <input type="number" id="weightInput" class="sim-input" placeholder="몸무게 (kg)">
                <button class="sim-btn" onclick="checkBMI()">결과 확인</button>
            </div>
            <div id="bmiResult" class="sim-result"></div>
        </div>

        <div class="sim-container">
            <h3>5. 복부비만 (허리둘레)</h3>
            <p style="font-size:14px; color:#666;">허리둘레(cm)와 성별을 선택하세요. (남 90cm 이상, 여 85cm 이상 시 복부비만)</p>
            <div class="sim-row">
                <select id="genderSelect" class="sim-input" style="width:120px;">
                    <option value="M">남성</option>
                    <option value="F">여성</option>
                </select>
                <input type="number" id="waistInput" class="sim-input" placeholder="허리둘레 (cm)">
                <button class="sim-btn" onclick="checkWaist()">결과 확인</button>
            </div>
            <div id="waistResult" class="sim-result"></div>
        </div>`;

// Insert the new containers right before the Community Board
html = html.replace('<!-- Community Board -->', newHtml + '\n\n        <!-- Community Board -->');

const newJs = `        function checkBMI() {
            const h = parseFloat(document.getElementById('heightInput').value);
            const w = parseFloat(document.getElementById('weightInput').value);
            const res = document.getElementById('bmiResult');
            if (isNaN(h) || isNaN(w) || h <= 0) return;
            const bmi = w / ((h/100) * (h/100));
            res.className = 'sim-result';
            if (bmi < 18.5) {
                res.innerHTML = '🔵 [저체중] BMI ' + bmi.toFixed(1) + '로 저체중입니다. 근육량과 영양 섭취를 늘려야 합니다.';
                res.style.color = '#3b82f6';
                res.style.background = '#eff6ff';
                res.style.borderLeft = '4px solid #3b82f6';
            } else if (bmi < 23) {
                res.innerHTML = '🟢 [정상] BMI ' + bmi.toFixed(1) + '로 정상 체중입니다.';
                res.classList.add('green');
            } else if (bmi < 25) {
                res.innerHTML = '🟡 [비만 전단계] BMI ' + bmi.toFixed(1) + '로 과체중(비만 전단계)입니다. 식단 조절을 시작하세요.';
                res.classList.add('yellow');
            } else if (bmi < 30) {
                res.innerHTML = '🔴 [1단계 비만] BMI ' + bmi.toFixed(1) + '로 비만입니다. 체중 감량이 필요합니다.';
                res.classList.add('red');
            } else {
                res.innerHTML = '🔴 [2단계 고도비만] BMI ' + bmi.toFixed(1) + '로 고도비만입니다. 대사증후군 위험이 매우 높으니 전문의 상담을 권장합니다.';
                res.classList.add('red');
            }
        }

        function checkWaist() {
            const gender = document.getElementById('genderSelect').value;
            const waist = parseFloat(document.getElementById('waistInput').value);
            const res = document.getElementById('waistResult');
            if (isNaN(waist)) return;
            res.className = 'sim-result';
            
            let isObese = false;
            let limit = 0;
            if (gender === 'M') {
                limit = 90;
                isObese = waist >= 90;
            } else {
                limit = 85;
                isObese = waist >= 85;
            }

            if (!isObese) {
                res.innerHTML = '🟢 [정상] 허리둘레 기준(' + limit + 'cm 미만)을 충족하여 복부비만이 아닙니다.';
                res.classList.add('green');
            } else {
                res.innerHTML = '🔴 [복부비만] 기준치(' + limit + 'cm)를 초과한 내장지방형 복부비만입니다. 심혈관 질환 위험이 커지므로 유산소 운동이 필수적입니다.';
                res.classList.add('red');
            }
        }
    </script>`;

// Insert the new JS functions at the end of the script block
html = html.replace('    </script>', newJs);

fs.writeFileSync('C:/Users/pc/Documents/minddoo.github.io/simulator.html', html, 'utf8');
console.log('Successfully injected BMI and Waist calculators.');
