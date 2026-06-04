// 탭 전환 로직
const tabBtns = document.querySelectorAll('.tab-btn');
const calcSections = document.querySelectorAll('.calc-section');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        calcSections.forEach(s => s.classList.remove('active'));
        
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// 포맷팅 함수
function formatNum(num) {
    return Math.floor(num).toLocaleString('ko-KR');
}

// 숫자 카운트 애니메이션
function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        
        // 이즈아웃(Ease-Out) 효과
        const easeOut = 1 - Math.pow(1 - progress, 3);
        const current = Math.floor(easeOut * (end - start) + start);
        
        obj.innerHTML = current.toLocaleString('ko-KR');
        if (progress < 1) {
            window.requestAnimationFrame(step);
        } else {
            // 소수점이 있는 경우 (BMI 등)를 위해 end 값 그대로 세팅 방지 (단순 정수용)
            // 소수점 처리는 별도 로직이 필요하므로 여기선 정수만 처리
            obj.innerHTML = end.toLocaleString('ko-KR');
        }
    };
    window.requestAnimationFrame(step);
}

// 애니메이션 실행 헬퍼
function runAnimations() {
    setTimeout(() => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            if(!isNaN(target) && target > 0) {
                animateValue(counter, 0, target, 1000); // 1초 동안 애니메이션
            } else if (counter.getAttribute('data-text')) {
                // 숫자가 아닌 텍스트는 그대로 출력
                counter.innerHTML = counter.getAttribute('data-text');
            }
        });
    }, 50); // DOM 렌더링 직후 실행
}

// 1. 연봉 실수령액 계산기
function calculateSalary() {
    const isYear = document.getElementById('sal-year').checked;
    const inputVal = parseInt(document.getElementById('salary-input').value) || 0;
    const taxFree = parseInt(document.getElementById('tax-free-input').value) || 0;
    
    if(inputVal <= 0) return alert('올바른 금액을 입력해주세요.');

    const monthlySalary = isYear ? inputVal / 12 : inputVal;
    const taxable = Math.max(0, monthlySalary - taxFree);

    const nps = taxable * 0.045;
    const nhi = taxable * 0.03545;
    const ltci = nhi * 0.1295;
    const ei = taxable * 0.009;
    
    let incomeTax = taxable * 0.05; 
    if(taxable < 1060000) incomeTax = 0;
    const localTax = incomeTax * 0.1;

    const totalDeduct = nps + nhi + ltci + ei + incomeTax + localTax;
    const netPay = monthlySalary - totalDeduct;

    const resBox = document.getElementById('salary-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `
        <div class="result-row"><span>예상 월급 (세전)</span> <span class="value"><span class="counter" data-target="${monthlySalary}">0</span> 원</span></div>
        <div class="result-row deduction"><span>국민연금</span> <span class="value">- <span class="counter" data-target="${nps}">0</span> 원</span></div>
        <div class="result-row deduction"><span>건강보험</span> <span class="value">- <span class="counter" data-target="${nhi}">0</span> 원</span></div>
        <div class="result-row deduction"><span>장기요양</span> <span class="value">- <span class="counter" data-target="${ltci}">0</span> 원</span></div>
        <div class="result-row deduction"><span>고용보험</span> <span class="value">- <span class="counter" data-target="${ei}">0</span> 원</span></div>
        <div class="result-row deduction"><span>소득세/지방소득세</span> <span class="value">- <span class="counter" data-target="${incomeTax + localTax}">0</span> 원</span></div>
        <div class="result-row total"><span>월 실수령액</span> <span class="value" style="color:var(--primary);"><span class="counter" data-target="${netPay}">0</span> 원</span></div>
    `;
    runAnimations();
}

// 2. 시급/주휴수당 계산기
function calculateWage() {
    const wage = parseInt(document.getElementById('wage-input').value) || 0;
    const hours = parseFloat(document.getElementById('hours-input').value) || 0;
    const days = parseFloat(document.getElementById('days-input').value) || 0;
    const incJuhyu = document.getElementById('juhyu-check').checked;

    if(wage <= 0 || hours <= 0 || days <= 0) return alert('모든 항목을 입력해주세요.');

    const weeklyHours = hours * days;
    const weeklyPay = weeklyHours * wage;
    let juhyuPay = 0;

    if(incJuhyu && weeklyHours >= 15) {
        const calcHours = Math.min(weeklyHours, 40);
        juhyuPay = (calcHours / 40) * 8 * wage;
    }

    const expectedMonthly = (weeklyPay + juhyuPay) * 4.345;

    const resBox = document.getElementById('wage-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `
        <div class="result-row"><span>1주 기본급</span> <span class="value"><span class="counter" data-target="${weeklyPay}">0</span> 원</span></div>
        <div class="result-row"><span>주휴수당</span> <span class="value">+ <span class="counter" data-target="${juhyuPay}">0</span> 원</span></div>
        <div class="result-row total"><span>예상 월급 (약)</span> <span class="value" style="color:var(--primary);"><span class="counter" data-target="${expectedMonthly}">0</span> 원</span></div>
    `;
    runAnimations();
}

// 3. 퍼센트/할인율 계산기
function calculateDiscount() {
    const price = parseInt(document.getElementById('price-input').value) || 0;
    const percent = parseFloat(document.getElementById('percent-input').value) || 0;

    if(price <= 0 || percent <= 0) return alert('금액과 할인율을 입력해주세요.');

    const discountAmount = price * (percent / 100);
    const finalPrice = price - discountAmount;

    const resBox = document.getElementById('discount-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `
        <div class="result-row"><span>원래 가격</span> <span class="value"><span class="counter" data-target="${price}">0</span> 원</span></div>
        <div class="result-row deduction"><span>할인 금액</span> <span class="value">- <span class="counter" data-target="${discountAmount}">0</span> 원</span></div>
        <div class="result-row total"><span>최종 결제 금액</span> <span class="value" style="color:var(--primary);"><span class="counter" data-target="${finalPrice}">0</span> 원</span></div>
    `;
    runAnimations();
}

// 4. 비만도(BMI) 계산기
function calculateBMI() {
    const heightCm = parseFloat(document.getElementById('height-input').value) || 0;
    const weight = parseFloat(document.getElementById('weight-input').value) || 0;

    if(heightCm <= 0 || weight <= 0) return alert('신장과 체중을 입력해주세요.');

    const heightM = heightCm / 100;
    const bmi = weight / (heightM * heightM);
    
    let status = '';
    let color = '';
    if(bmi < 18.5) { status = '저체중'; color = '#3498db'; }
    else if(bmi < 23) { status = '정상'; color = '#2ecc71'; }
    else if(bmi < 25) { status = '과체중'; color = '#f1c40f'; }
    else if(bmi < 30) { status = '비만'; color = '#e67e22'; }
    else { status = '고도비만'; color = '#e74c3c'; }

    const resBox = document.getElementById('bmi-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `
        <div class="result-row"><span>나의 BMI 지수</span> <span class="value">${bmi.toFixed(2)}</span></div>
        <div class="result-row total"><span>결과</span> <span class="value" style="color: ${color}">${status}</span></div>
    `;
    // BMI는 소수점이 중요하므로 애니메이션 생략
}

// 5. 디데이 계산기
function calculateDday() {
    const dateStr = document.getElementById('dday-input').value;
    const title = document.getElementById('dday-title').value || '목표일';

    if(!dateStr) return alert('날짜를 선택해주세요.');

    const targetDate = new Date(dateStr);
    targetDate.setHours(0,0,0,0);
    const today = new Date();
    today.setHours(0,0,0,0);

    const diffTime = targetDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    let resultText = '';
    if(diffDays > 0) resultText = `D - ${diffDays}`;
    else if(diffDays === 0) resultText = `D - Day (오늘)`;
    else resultText = `D + ${Math.abs(diffDays)}`;

    const resBox = document.getElementById('dday-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `
        <div class="result-row"><span>${title}</span></div>
        <div class="result-row total" style="justify-content: center; font-size: 2rem;">
            <span style="color:var(--primary);">${resultText}</span>
        </div>
    `;
}

// 6. 반려동물 나이 환산기
function calculatePetAge() {
    const type = document.querySelector('input[name="pet-type"]:checked').value;
    const years = parseInt(document.getElementById('pet-years').value) || 0;
    const months = parseInt(document.getElementById('pet-months').value) || 0;
    
    if(years === 0 && months === 0) return alert('나이를 입력해주세요.');
    
    let totalYears = years + (months / 12);
    let humanAge = 0;
    
    if (totalYears <= 1) {
        humanAge = totalYears * 15;
    } else if (totalYears <= 2) {
        humanAge = 15 + ((totalYears - 1) * 9);
    } else {
        let base = 24;
        let multi = 4; // cat and small dog
        if (type === 'dog-medium') multi = 5;
        if (type === 'dog-large') multi = 7;
        
        humanAge = base + ((totalYears - 2) * multi);
    }
    
    const resBox = document.getElementById('pet-age-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `
        <div class="result-row"><span>사람 나이 환산</span></div>
        <div class="result-row total" style="justify-content: center; font-size: 2rem;">
            <span style="color:var(--primary);">${Math.round(humanAge)} 살</span>
        </div>
    `;
}

// 7. 만 나이 & 띠 계산기
function calculateRealAge() {
    const birthStr = document.getElementById('birth-date-input').value;
    if(!birthStr) return alert('생년월일을 입력해주세요.');
    
    const birthDate = new Date(birthStr);
    const today = new Date();
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    const zodiacs = ["원숭이", "닭", "개", "돼지", "쥐", "소", "호랑이", "토끼", "용", "뱀", "말", "양"];
    const zodiac = zodiacs[birthDate.getFullYear() % 12];
    
    const month = birthDate.getMonth() + 1;
    const day = birthDate.getDate();
    let sign = "";
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) sign = "물병자리";
    else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) sign = "물고기자리";
    else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) sign = "양자리";
    else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) sign = "황소자리";
    else if ((month == 5 && day >= 21) || (month == 6 && day <= 21)) sign = "쌍둥이자리";
    else if ((month == 6 && day >= 22) || (month == 7 && day <= 22)) sign = "게자리";
    else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) sign = "사자자리";
    else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) sign = "처녀자리";
    else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) sign = "천칭자리";
    else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) sign = "전갈자리";
    else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) sign = "사수자리";
    else sign = "염소자리";
    
    const resBox = document.getElementById('real-age-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `
        <div class="result-row"><span>법적 만 나이</span> <span class="value" style="font-size:1.5rem; color:var(--primary);">${age} 세</span></div>
        <div class="result-row"><span>12지신 (띠)</span> <span class="value">${zodiac}띠</span></div>
        <div class="result-row"><span>별자리</span> <span class="value">${sign}</span></div>
    `;
}

// 8. 글자 수 세기
function countText() {
    const text = document.getElementById('text-input').value;
    const withSpace = text.length;
    const noSpace = text.replace(/\s/g, '').length;
    const words = text.trim().split(/\s+/).filter(w => w.length > 0).length;
    
    document.getElementById('char-with-space').innerText = withSpace.toLocaleString('ko-KR') + ' 자';
    document.getElementById('char-no-space').innerText = noSpace.toLocaleString('ko-KR') + ' 자';
    document.getElementById('word-count').innerText = words.toLocaleString('ko-KR') + ' 개';
}

// 9. 더치페이 정산기
function calculateDutch() {
    const total = parseInt(document.getElementById('total-amount-input').value) || 0;
    const people = parseInt(document.getElementById('people-count-input').value) || 0;
    
    if(total <= 0 || people <= 0) return alert('올바른 금액과 인원을 입력해주세요.');
    
    const perPerson = Math.ceil(total / people);
    
    const resBox = document.getElementById('dutch-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `
        <div class="result-row"><span>1인당 결제 금액</span></div>
        <div class="result-row total" style="justify-content: center; font-size: 2rem;">
            <span class="counter" style="color:var(--primary);" data-target="${perPerson}">0</span> <span style="color:var(--primary); font-size:1.2rem; margin-left:5px;">원</span>
        </div>
    `;
    runAnimations();
}

// 10. 퍼센트 마법사
function calcPercent1() {
    const a = parseFloat(document.getElementById('pct1-a').value) || 0;
    const b = parseFloat(document.getElementById('pct1-b').value) || 0;
    if(a === 0 || b === 0) return;
    const res = a * (b / 100);
    document.getElementById('pct1-result').innerText = `결과: ${res.toLocaleString('ko-KR')}`;
}

function calcPercent2() {
    const a = parseFloat(document.getElementById('pct2-a').value) || 0;
    const b = parseFloat(document.getElementById('pct2-b').value) || 0;
    if(a === 0) return;
    const diff = b - a;
    const pct = (diff / a) * 100;
    let text = pct > 0 ? `${pct.toFixed(2)}% 증가 (+)` : `${Math.abs(pct).toFixed(2)}% 감소 (-)`;
    if(pct === 0) text = `변동 없음`;
    document.getElementById('pct2-result').innerText = `결과: ${text}`;
}

// 11. 부동산 평수 변환
function convertPyung(source) {
    const m2Input = document.getElementById('pyung-m2');
    const pyInput = document.getElementById('pyung-py');
    
    if (source === 'm2') {
        const m2 = parseFloat(m2Input.value);
        if (!isNaN(m2)) {
            pyInput.value = (m2 / 3.305785).toFixed(2);
        } else {
            pyInput.value = '';
        }
    } else {
        const py = parseFloat(pyInput.value);
        if (!isNaN(py)) {
            m2Input.value = (py * 3.305785).toFixed(2);
        } else {
            m2Input.value = '';
        }
    }
}

// 12. 무게 & 한 근 변환
function convertWeight(source) {
    const gIn = document.getElementById('weight-g');
    const kgIn = document.getElementById('weight-kg');
    const lbIn = document.getElementById('weight-lb');
    const meatIn = document.getElementById('weight-meat');
    const vegIn = document.getElementById('weight-veg');
    
    let g = 0;
    let val = 0;
    
    if (source === 'g') val = parseFloat(gIn.value);
    else if (source === 'kg') val = parseFloat(kgIn.value);
    else if (source === 'lb') val = parseFloat(lbIn.value);
    else if (source === 'meat') val = parseFloat(meatIn.value);
    else if (source === 'veg') val = parseFloat(vegIn.value);
    
    if (isNaN(val)) {
        gIn.value = ''; kgIn.value = ''; lbIn.value = ''; meatIn.value = ''; vegIn.value = '';
        return;
    }
    
    // convert everything to grams first
    if (source === 'g') g = val;
    else if (source === 'kg') g = val * 1000;
    else if (source === 'lb') g = val * 453.592;
    else if (source === 'meat') g = val * 600;
    else if (source === 'veg') g = val * 400;
    
    // update all fields except the source
    if (source !== 'g') gIn.value = g.toFixed(2).replace(/\.00$/, '');
    if (source !== 'kg') kgIn.value = (g / 1000).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
    if (source !== 'lb') lbIn.value = (g / 453.592).toFixed(4).replace(/0+$/, '').replace(/\.$/, '');
    if (source !== 'meat') meatIn.value = (g / 600).toFixed(2).replace(/\.00$/, '');
    if (source !== 'veg') vegIn.value = (g / 400).toFixed(2).replace(/\.00$/, '');
}

// 13. 온도 및 길이 변환
function convertTemp(source) {
    const cIn = document.getElementById('temp-c');
    const fIn = document.getElementById('temp-f');
    if (source === 'c') {
        const c = parseFloat(cIn.value);
        if (!isNaN(c)) fIn.value = ((c * 9/5) + 32).toFixed(2).replace(/\.00$/, '');
        else fIn.value = '';
    } else {
        const f = parseFloat(fIn.value);
        if (!isNaN(f)) cIn.value = ((f - 32) * 5/9).toFixed(2).replace(/\.00$/, '');
        else cIn.value = '';
    }
}

function convertLength(source) {
    const cmIn = document.getElementById('len-cm');
    const inIn = document.getElementById('len-in');
    const mIn = document.getElementById('len-m');
    const ftIn = document.getElementById('len-ft');
    
    if (source === 'cm' || source === 'in') {
        if (source === 'cm') {
            const cm = parseFloat(cmIn.value);
            if(!isNaN(cm)) inIn.value = (cm / 2.54).toFixed(2).replace(/\.00$/, '');
            else inIn.value = '';
        } else {
            const inch = parseFloat(inIn.value);
            if(!isNaN(inch)) cmIn.value = (inch * 2.54).toFixed(2).replace(/\.00$/, '');
            else cmIn.value = '';
        }
    } else if (source === 'm' || source === 'ft') {
        if (source === 'm') {
            const m = parseFloat(mIn.value);
            if(!isNaN(m)) ftIn.value = (m * 3.28084).toFixed(2).replace(/\.00$/, '');
            else ftIn.value = '';
        } else {
            const ft = parseFloat(ftIn.value);
            if(!isNaN(ft)) mIn.value = (ft / 3.28084).toFixed(2).replace(/\.00$/, '');
            else mIn.value = '';
        }
    }
}
