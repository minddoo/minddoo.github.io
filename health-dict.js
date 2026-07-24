// 건강검진 데이터 내장 DB
const healthData = [
    {
        "part": "간 (Liver)",
        "item": "AST (SGOT)",
        "method": "혈액 검사",
        "result": "정상: 0~40 IU/L. 간세포 손상 시 수치가 상승합니다. 급성 간염, 지방간 등에서 높게 나타납니다."
    },
    {
        "part": "간 (Liver)",
        "item": "ALT (SGPT)",
        "method": "혈액 검사",
        "result": "정상: 0~40 IU/L. AST와 함께 간 기능을 평가하며, 간에 더 특이적으로 존재하는 효소입니다."
    },
    {
        "part": "간 (Liver)",
        "item": "r-GTP (감마지티피)",
        "method": "혈액 검사",
        "result": "정상: 남성 11~63, 여성 8~35. 알코올 섭취나 비만, 담도계 질환에 민감하게 반응하여 상승합니다."
    },
    {
        "part": "간 (Liver)",
        "item": "총빌리루빈 (Total Bilirubin)",
        "method": "혈액 검사",
        "result": "정상: 0.2~1.2 mg/dL. 황달의 지표이며, 간 기능 저하나 담도 폐쇄 시 수치가 올라갑니다."
    },
    {
        "part": "간 (Liver)",
        "item": "복부 초음파 (간)",
        "method": "초음파 검사 (탐촉자 사용)",
        "result": "지방간, 간경변, 간낭종(물혹), 간혈관종, 간암 등의 구조적 이상을 직접 화면으로 확인합니다."
    },
    {
        "part": "신장 (Kidney)",
        "item": "BUN (혈중요소질소)",
        "method": "혈액 검사",
        "result": "정상: 8~20 mg/dL. 단백질 분해 산물로, 신장 기능이 떨어지면 배출되지 못해 혈중 농도가 상승합니다."
    },
    {
        "part": "신장 (Kidney)",
        "item": "크레아티닌 (Creatinine)",
        "method": "혈액 검사",
        "result": "정상: 0.5~1.2 mg/dL. 근육 대사 산물로 신장 기능 평가에 가장 중요한 지표 중 하나입니다. 높을수록 신장 기능 저하를 의미합니다."
    },
    {
        "part": "신장 (Kidney)",
        "item": "eGFR (신사구체여과율)",
        "method": "혈액 검사 수치 바탕 계산",
        "result": "정상: 90 이상. 신장이 1분 동안 깨끗하게 걸러주는 혈액의 양을 의미합니다. 낮을수록 만성콩팥병을 의심합니다."
    },
    {
        "part": "신장 (Kidney)",
        "item": "요단백 (Proteinuria)",
        "method": "소변 검사",
        "result": "정상: 음성(-). 소변으로 단백질이 빠져나가는 상태로, 양성(+) 시 사구체 신염 등 신장 이상을 의심합니다."
    },
    {
        "part": "신장 (Kidney)",
        "item": "요잠혈 (Hematuria)",
        "method": "소변 검사",
        "result": "정상: 음성(-). 소변에 피(적혈구)가 섞여 나오는 것으로, 요로 결석이나 방광염, 신장 질환 시 나타납니다."
    },
    {
        "part": "심혈관/대사 (Cardio/Metabolic)",
        "item": "공복혈당 (Fasting Glucose)",
        "method": "8시간 금식 후 혈액 검사",
        "result": "정상: 100 미만. 100~125는 당뇨 전단계(공복혈당장애), 126 이상이면 당뇨병을 의심합니다."
    },
    {
        "part": "심혈관/대사 (Cardio/Metabolic)",
        "item": "당화혈색소 (HbA1c)",
        "method": "혈액 검사",
        "result": "정상: 5.6% 이하. 최근 2~3개월간의 평균 혈당 상태를 보여줍니다. 6.5% 이상 시 당뇨병으로 진단합니다."
    },
    {
        "part": "심혈관/대사 (Cardio/Metabolic)",
        "item": "총콜레스테롤",
        "method": "혈액 검사",
        "result": "정상: 200 미만. 혈액 내 콜레스테롤 총량으로, 높을 경우 동맥경화 등 심혈관계 질환 위험이 커집니다."
    },
    {
        "part": "심혈관/대사 (Cardio/Metabolic)",
        "item": "LDL 콜레스테롤",
        "method": "혈액 검사",
        "result": "정상: 130 미만. 이른바 '나쁜 콜레스테롤'로 혈관 벽에 쌓여 동맥경화를 일으킵니다."
    },
    {
        "part": "심혈관/대사 (Cardio/Metabolic)",
        "item": "HDL 콜레스테롤",
        "method": "혈액 검사",
        "result": "정상: 60 이상. '좋은 콜레스테롤'로 혈관 벽의 찌꺼기를 청소하는 역할을 하므로 높을수록 좋습니다."
    },
    {
        "part": "심혈관/대사 (Cardio/Metabolic)",
        "item": "중성지방 (Triglyceride)",
        "method": "혈액 검사",
        "result": "정상: 150 미만. 탄수화물/음주 과다 섭취 시 상승하며, 비만 및 심혈관 질환의 주요 원인입니다."
    },
    {
        "part": "심혈관/대사 (Cardio/Metabolic)",
        "item": "혈압 (Blood Pressure)",
        "method": "혈압계 측정",
        "result": "정상: 120/80 미만. 수축기 140 이상 또는 이완기 90 이상 시 고혈압으로 분류합니다."
    },
    {
        "part": "소화기 (Digestive)",
        "item": "위내시경 (Gastroscopy)",
        "method": "구강을 통한 내시경 삽입",
        "result": "식도, 위, 십이지장 점막을 확인합니다. 위염, 역류성 식도염, 위궤양, 용종, 위암 등을 직접 진단하고 조직 검사를 합니다."
    },
    {
        "part": "소화기 (Digestive)",
        "item": "대장내시경 (Colonoscopy)",
        "method": "항문을 통한 내시경 삽입",
        "result": "대장 전체와 소장 말단부를 관찰합니다. 대장용종, 궤양성 대장염, 대장암 등을 발견하고 즉시 용종 절제술을 시행할 수 있습니다."
    },
    {
        "part": "소화기 (Digestive)",
        "item": "위투시검사 (UGI)",
        "method": "바륨 조영제 복용 후 X-ray 촬영",
        "result": "내시경이 부담스러운 경우 시행하며, 위 점막의 굴곡과 형태를 간접적으로 확인합니다."
    },
    {
        "part": "소화기 (Digestive)",
        "item": "분변잠혈검사",
        "method": "대변 샘플 검사",
        "result": "대변에 섞인 미세한 피를 확인하여 대장암이나 소화기 출혈 여부를 선별하는 검사입니다."
    },
    {
        "part": "소화기 (Digestive)",
        "item": "복부 초음파 (췌장, 담낭)",
        "method": "초음파 검사",
        "result": "담낭 결석, 담낭 용종, 췌장 낭종 등을 관찰합니다. 단, 췌장은 가스에 가려 잘 안 보일 수 있습니다."
    },
    {
        "part": "혈액 질환 (Hematology)",
        "item": "백혈구 (WBC)",
        "method": "혈액 검사 (일반혈액검사)",
        "result": "정상: 4,000~10,000. 세균 감염이나 염증 반응 시 증가하며, 골수 기능 저하 시 감소합니다."
    },
    {
        "part": "혈액 질환 (Hematology)",
        "item": "적혈구 (RBC)",
        "method": "혈액 검사",
        "result": "정상: 남 400만~550만, 여 350만~450만. 감소 시 빈혈을 의심하며 산소 운반 능력이 떨어집니다."
    },
    {
        "part": "혈액 질환 (Hematology)",
        "item": "혈색소 (Hemoglobin)",
        "method": "혈액 검사",
        "result": "정상: 남 13~16.5, 여 12~15.5. 빈혈 진단의 가장 기준이 되는 수치입니다."
    },
    {
        "part": "혈액 질환 (Hematology)",
        "item": "혈소판 (Platelet)",
        "method": "혈액 검사",
        "result": "정상: 15만~40만. 출혈 시 지혈 작용을 담당하며, 수치가 낮으면 멍이 잘 들고 지혈이 안 됩니다."
    },
    {
        "part": "혈액 질환 (Hematology)",
        "item": "MCV (평균적혈구용적)",
        "method": "혈액 검사",
        "result": "정상: 80~100 fL. 적혈구의 크기를 나타내며, 철결핍성 빈혈에서는 작게(소구성), 비타민B12 결핍 시 크게(대구성) 나타납니다."
    },
    {
        "part": "갑상선 (Thyroid)",
        "item": "TSH (갑상선자극호르몬)",
        "method": "혈액 검사",
        "result": "정상: 0.5~5.0. 뇌하수체에서 분비되며, 수치가 높으면 갑상선 기능 저하증, 낮으면 기능 항진증을 의심합니다."
    },
    {
        "part": "갑상선 (Thyroid)",
        "item": "Free T4 (유리 티록신)",
        "method": "혈액 검사",
        "result": "정상: 0.8~1.8. 실제 갑상선에서 분비되는 호르몬 수치입니다."
    },
    {
        "part": "갑상선 (Thyroid)",
        "item": "갑상선 초음파",
        "method": "초음파 검사 (목 부위)",
        "result": "갑상선 결절(혹)의 모양과 크기를 확인합니다. 모양이 안 좋으면 세침흡인검사(조직검사)를 권유합니다."
    },
    {
        "part": "심장/폐 (Heart/Lung)",
        "item": "흉부 X-ray",
        "method": "방사선 단순 촬영",
        "result": "폐결핵, 폐렴, 흉수, 심장 비대 등을 가장 기본적으로 확인하는 검사입니다."
    },
    {
        "part": "심장/폐 (Heart/Lung)",
        "item": "심전도 (EKG)",
        "method": "가슴과 팔다리에 전극 부착",
        "result": "심장의 전기적 신호를 기록하여 부정맥, 협심증, 심근경색의 징후를 파악합니다."
    },
    {
        "part": "심장/폐 (Heart/Lung)",
        "item": "저선량 흉부 CT",
        "method": "방사선 단층 촬영",
        "result": "X-ray로 놓치기 쉬운 미세한 폐결절이나 초기 폐암을 발견하는 가장 효과적인 검사입니다."
    },
    {
        "part": "심장/폐 (Heart/Lung)",
        "item": "관상동맥 석회화 CT",
        "method": "CT 촬영 (조영제 없음)",
        "result": "심장 혈관(관상동맥)에 칼슘(석회)이 얼마나 쌓였는지 수치화하여 동맥경화 위험도를 평가합니다."
    },
    {
        "part": "심장/폐 (Heart/Lung)",
        "item": "폐기능 검사 (PFT)",
        "method": "기계에 숨을 강하게 내쉼",
        "result": "폐활량과 기관지 막힘 정도를 평가하여 천식이나 만성폐쇄성폐질환(COPD)을 진단합니다."
    },
    {
        "part": "종양표지자 (Tumor Marker)",
        "item": "AFP (알파태아단백)",
        "method": "혈액 검사",
        "result": "간암 선별에 쓰이는 수치로, 간염이나 간경화가 있을 때도 상승할 수 있습니다."
    },
    {
        "part": "종양표지자 (Tumor Marker)",
        "item": "CEA (암태아성항원)",
        "method": "혈액 검사",
        "result": "주로 대장암, 위암 등 소화기계 암에서 상승하나, 흡연자에게서도 높게 나올 수 있습니다."
    },
    {
        "part": "종양표지자 (Tumor Marker)",
        "item": "PSA (전립선특이항원)",
        "method": "혈액 검사",
        "result": "남성 전립선암의 주요 지표이며, 전립선 비대증이나 염증 시에도 올라갈 수 있습니다."
    },
    {
        "part": "종양표지자 (Tumor Marker)",
        "item": "CA 125",
        "method": "혈액 검사",
        "result": "여성의 난소암 선별에 보조적으로 쓰이며, 생리 중이나 자궁근종 시에도 상승할 수 있습니다."
    },
    {
        "part": "종양표지자 (Tumor Marker)",
        "item": "CA 19-9",
        "method": "혈액 검사",
        "result": "췌장암 및 담도암의 보조 진단 지표입니다."
    },
    {
        "part": "뼈/근육 (Bone/Muscle)",
        "item": "골밀도 검사 (BMD)",
        "method": "이중 에너지 방사선 흡수법(DEXA)",
        "result": "T-score가 -1.0 이상이면 정상, -1.0 ~ -2.5는 골감소증, -2.5 이하는 골다공증으로 진단합니다."
    },
    {
        "part": "뼈/근육 (Bone/Muscle)",
        "item": "요산 (Uric Acid)",
        "method": "혈액 검사",
        "result": "정상: 3~7 mg/dL. 퓨린의 대사 산물로 수치가 높으면 관절에 쌓여 '통풍'을 유발할 수 있습니다."
    },
    {
        "part": "뼈/근육 (Bone/Muscle)",
        "item": "류마티스 인자 (RF)",
        "method": "혈액 검사",
        "result": "류마티스 관절염 진단에 보조적으로 사용되는 자가항체 검사입니다."
    },
    {
        "part": "여성 의학 (Women)",
        "item": "자궁경부암 검사 (Pap smear)",
        "method": "세포 브러시로 자궁경부 채취",
        "result": "정상(반응성 세포변화 포함), 비정형 세포, 자궁경부상피내노무 등으로 결과를 내며 암 전단계를 발견합니다."
    },
    {
        "part": "여성 의학 (Women)",
        "item": "유방 촬영술 (Mammography)",
        "method": "유방을 압박하여 X-ray 촬영",
        "result": "미세석회화(초기 유방암 징후)를 발견하는 데 탁월하며, 치밀 유방 시 초음파 병행이 권장됩니다."
    },
    {
        "part": "여성 의학 (Women)",
        "item": "유방 초음파",
        "method": "초음파 검사",
        "result": "유방 결절(혹), 낭종 등을 정확히 확인하며 20~30대 여성이나 치밀 유방 여성에게 효과적입니다."
    },
    {
        "part": "여성 의학 (Women)",
        "item": "골반 초음파",
        "method": "복부 또는 질 초음파",
        "result": "자궁(근종, 선근증) 및 난소(낭종, 종양)의 구조적 이상을 확인합니다."
    },
    {
        "part": "비뇨기 (Urology)",
        "item": "전립선 초음파",
        "method": "항문을 통한 초음파 검사",
        "result": "남성의 전립선 비대증 정도와 전립선 결절, 염증 등을 정확히 파악합니다."
    },
    {
        "part": "비뇨기 (Urology)",
        "item": "요침사 검사",
        "method": "소변을 원심분리하여 현미경 관찰",
        "result": "소변 속에 섞인 적혈구, 백혈구, 세균, 결정 등을 눈으로 확인하여 신장/요로계 질환을 감별합니다."
    },
    {
        "part": "안과/이비인후과 (Eye/ENT)",
        "item": "안압 검사",
        "method": "공기를 눈에 뿜어 압력 측정",
        "result": "정상: 10~21 mmHg. 수치가 높으면 녹내장 발생 위험이 커집니다."
    },
    {
        "part": "안과/이비인후과 (Eye/ENT)",
        "item": "안저 검사",
        "method": "망막 카메라 촬영",
        "result": "동공을 통해 눈 안쪽 망막과 시신경을 관찰하여 녹내장, 황반변성, 당뇨망막병증을 확인합니다."
    },
    {
        "part": "안과/이비인후과 (Eye/ENT)",
        "item": "청력 검사",
        "method": "헤드폰 착용 후 주파수별 음 듣기",
        "result": "고음역이나 저음역의 난청 여부를 확인하며, 소음성 난청이나 노인성 난청을 진단합니다."
    }
];

// 모달 표시 함수
window.showHealthModal = function(title, method, desc, part) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalMethod').innerText = "검사 방법: " + method;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalPart').innerText = "검사 부위: " + part;
    document.getElementById('healthModal').classList.add('active');
};

window.closeHealthModal = function() {
    document.getElementById('healthModal').classList.remove('active');
};

function initHealthDictionary() {
    const searchInput = document.getElementById("dictSearch");
    const resultsContainer = document.getElementById("dictResults");
    if (!resultsContainer) return;

    const renderResults = (items) => {
        resultsContainer.innerHTML = "";
        if (items.length === 0) {
            resultsContainer.innerHTML = "<p style='color:var(--text-light); text-align:center;'>검색 결과가 없습니다.</p>";
            return;
        }
        items.forEach(item => {
            const card = document.createElement("div");
            card.className = "checkup-card";
            card.onclick = () => showHealthModal(item.item, item.method, item.result, item.part);
            card.innerHTML = `<span class="part">${item.part}</span><h3>${item.item}</h3><p style="font-size:14px; color:var(--text-light); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${item.result}</p>`;
            resultsContainer.appendChild(card);
        });
    };

    // 초기 렌더링
    renderResults(healthData);

    // 실시간 검색
    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().replace(/\s/g, '');
            if (!query) {
                renderResults(healthData);
                return;
            }
            const filtered = healthData.filter(item => 
                item.item.toLowerCase().replace(/\s/g, '').includes(query) || 
                item.part.toLowerCase().replace(/\s/g, '').includes(query) ||
                item.result.toLowerCase().replace(/\s/g, '').includes(query)
            );
            renderResults(filtered);
        });
    }
}
