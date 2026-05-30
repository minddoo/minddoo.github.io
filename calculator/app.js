// 탭 전환 로직
const tabBtns = document.querySelectorAll('.tab-btn');
const calcSections = document.querySelectorAll('.calc-section');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // 모든 탭 초기화
        tabBtns.forEach(b => b.classList.remove('active'));
        calcSections.forEach(s => s.classList.remove('active'));
        
        // 클릭된 탭 활성화
        btn.classList.add('active');
        const targetId = btn.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// 포맷팅 함수 (세자리 콤마)
function formatNum(num) {
    return Math.floor(num).toLocaleString('ko-KR');
}

// 1. 연봉 실수령액 계산기
function calculateSalary() {
    const isYear = document.getElementById('sal-year').checked;
    const inputVal = parseInt(document.getElementById('salary-input').value) || 0;
    const taxFree = parseInt(document.getElementById('tax-free-input').value) || 0;
    
    if(inputVal <= 0) {
        alert('올바른 금액을 입력해주세요.');
        return;
    }

    const monthlySalary = isYear ? inputVal / 12 : inputVal;
    const taxable = Math.max(0, monthlySalary - taxFree);

    // 2024년 4대보험 대략적인 요율
    const nps = taxable * 0.045; // 국민연금 (4.5%, 상한액 있음)
    const nhi = taxable * 0.03545; // 건강보험 (3.545%)
    const ltci = nhi * 0.1295; // 장기요양보험 (건보료의 12.95%)
    const ei = taxable * 0.009; // 고용보험 (0.9%)
    
    // 소득세 (간이세액표 약식 산출 - 실무에서는 누진 구간 적용 필요, 여기서는 예시용 5% 적용)
    let incomeTax = taxable * 0.05; 
    if(taxable < 1060000) incomeTax = 0;
    const localTax = incomeTax * 0.1;

    const totalDeduct = nps + nhi + ltci + ei + incomeTax + localTax;
    const netPay = monthlySalary - totalDeduct;

    const resBox = document.getElementById('salary-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `
        <div class="result-row"><span>예상 월급 (세전)</span> <span class="value">${formatNum(monthlySalary)} 원</span></div>
        <div class="result-row deduction"><span>국민연금 (4.5%)</span> <span class="value">- ${formatNum(nps)} 원</span></div>
        <div class="result-row deduction"><span>건강보험 (3.545%)</span> <span class="value">- ${formatNum(nhi)} 원</span></div>
        <div class="result-row deduction"><span>장기요양 (12.95%)</span> <span class="value">- ${formatNum(ltci)} 원</span></div>
        <div class="result-row deduction"><span>고용보험 (0.9%)</span> <span class="value">- ${formatNum(ei)} 원</span></div>
        <div class="result-row deduction"><span>소득세/지방소득세</span> <span class="value">- ${formatNum(incomeTax + localTax)} 원</span></div>
        <div class="result-row total"><span>월 실수령액</span> <span class="value">${formatNum(netPay)} 원</span></div>
    `;
}

// 2. 시급/주휴수당 계산기
function calculateWage() {
    const wage = parseInt(document.getElementById('wage-input').value) || 0;
    const hours = parseFloat(document.getElementById('hours-input').value) || 0;
    const days = parseFloat(document.getElementById('days-input').value) || 0;
    const incJuhyu = document.getElementById('juhyu-check').checked;

    if(wage <= 0 || hours <= 0 || days <= 0) {
        alert('모든 항목을 입력해주세요.');
        return;
    }

    const weeklyHours = hours * days;
    const weeklyPay = weeklyHours * wage;
    let juhyuPay = 0;

    if(incJuhyu && weeklyHours >= 15) {
        // 주휴수당 = (1주 총 근로시간 / 40시간) x 8시간 x 시급 (최대 40시간 기준)
        const calcHours = Math.min(weeklyHours, 40);
        juhyuPay = (calcHours / 40) * 8 * wage;
    }

    const totalWeekly = weeklyPay + juhyuPay;
    const expectedMonthly = totalWeekly * 4.345; // 평균 1달 주 갯수

    const resBox = document.getElementById('wage-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `
        <div class="result-row"><span>1주 기본급</span> <span class="value">${formatNum(weeklyPay)} 원</span></div>
        <div class="result-row"><span>주휴수당</span> <span class="value">+ ${formatNum(juhyuPay)} 원</span></div>
        <div class="result-row total"><span>예상 월급 (약)</span> <span class="value">${formatNum(expectedMonthly)} 원</span></div>
    `;
}

// 3. 퍼센트/할인율 계산기
function calculateDiscount() {
    const price = parseInt(document.getElementById('price-input').value) || 0;
    const percent = parseFloat(document.getElementById('percent-input').value) || 0;

    if(price <= 0 || percent <= 0) {
        alert('금액과 할인율을 입력해주세요.');
        return;
    }

    const discountAmount = price * (percent / 100);
    const finalPrice = price - discountAmount;

    const resBox = document.getElementById('discount-result');
    resBox.style.display = 'block';
    resBox.innerHTML = `
        <div class="result-row"><span>원래 가격</span> <span class="value">${formatNum(price)} 원</span></div>
        <div class="result-row deduction"><span>할인 금액</span> <span class="value">- ${formatNum(discountAmount)} 원</span></div>
        <div class="result-row total"><span>최종 결제 금액</span> <span class="value">${formatNum(finalPrice)} 원</span></div>
    `;
}

// 4. 비만도(BMI) 계산기
function calculateBMI() {
    const heightCm = parseFloat(document.getElementById('height-input').value) || 0;
    const weight = parseFloat(document.getElementById('weight-input').value) || 0;

    if(heightCm <= 0 || weight <= 0) {
        alert('신장과 체중을 입력해주세요.');
        return;
    }

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
}

// 5. 디데이 계산기
function calculateDday() {
    const dateStr = document.getElementById('dday-input').value;
    const title = document.getElementById('dday-title').value || '목표일';

    if(!dateStr) {
        alert('날짜를 선택해주세요.');
        return;
    }

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
            <span>${resultText}</span>
        </div>
    `;
}
