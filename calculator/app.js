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
