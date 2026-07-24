// 건강검진 데이터 내장 DB (100+ 항목)
const healthData = [
    {
        "part": "🧍 기본 검사",
        "item": "키 (신장)",
        "method": "신장계 측정",
        "result": "전반적인 발달 상태 및 체질량지수(BMI) 계산의 기본 지표가 됩니다."
    },
    {
        "part": "🧍 기본 검사",
        "item": "체중",
        "method": "체중계 측정",
        "result": "비만도 평가 및 갑작스러운 체중 변화(질환 의심)를 확인하는 기본 지표입니다."
    },
    {
        "part": "🧍 기본 검사",
        "item": "체질량지수 (BMI)",
        "method": "키와 체중으로 계산",
        "result": "정상: 18.5~22.9. 25 이상은 비만으로 분류되며 대사증후군의 위험을 평가합니다."
    },
    {
        "part": "🧍 기본 검사",
        "item": "허리둘레 (복부둘레)",
        "method": "줄자 측정",
        "result": "정상: 남성 90cm, 여성 85cm 미만. 복부 비만과 내장 지방의 지표로 심혈관 질환 위험과 직결됩니다."
    },
    {
        "part": "👁️ 안과/이비인후과",
        "item": "시력 검사",
        "method": "시력표 읽기",
        "result": "근시, 원시, 난시 및 시력 저하 여부를 평가하여 안경 처방이나 안과 정밀 검사 필요성을 확인합니다."
    },
    {
        "part": "👁️ 안과/이비인후과",
        "item": "청력 검사 (기도청력)",
        "method": "헤드폰 주파수 검사",
        "result": "1,000Hz 등에서 소리를 듣는지 확인하여 소음성 난청이나 노인성 난청을 선별합니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "혈압 측정",
        "method": "혈압계 측정",
        "result": "정상: 120/80 미만. 수축기 140 또는 이완기 90 이상 시 고혈압으로 분류하여 약물 치료를 고려합니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "맥박수 측정",
        "method": "요골동맥 촉지 또는 기계 측정",
        "result": "정상: 분당 60~100회. 빈맥(빠름)이나 서맥(느림), 부정맥 등을 확인하는 기본 지표입니다."
    },
    {
        "part": "🧍 기본 검사",
        "item": "체성분 분석 (인바디)",
        "method": "생체 전기저항 분석법",
        "result": "근육량, 체지방량, 체수분 등을 분석하여 비만도 및 영양 상태를 정밀하게 평가합니다."
    },
    {
        "part": "🧍 기본 검사",
        "item": "문진 및 의사 상담",
        "method": "병력 청취 및 진찰",
        "result": "가족력, 과거 병력, 생활 습관(흡연, 음주)을 파악하여 맞춤형 검사 및 진단을 내립니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "공복 혈당 (FBS)",
        "method": "8시간 금식 후 혈액 검사",
        "result": "정상: 100 미만. 126 이상 시 당뇨병을 의심합니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "당화혈색소 (HbA1c)",
        "method": "혈액 검사",
        "result": "정상: 5.6% 이하. 지난 2~3개월간의 평균 혈당 조절 상태를 보여줍니다. 6.5% 이상 시 당뇨 진단."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "총콜레스테롤 (TC)",
        "method": "혈액 검사",
        "result": "정상: 200 미만. 혈중 지질 상태를 평가하며 심혈관 질환 위험도를 예측합니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "중성지방 (TG)",
        "method": "혈액 검사",
        "result": "정상: 150 미만. 탄수화물 과잉, 음주 시 상승하며 동맥경화의 원인이 됩니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "고밀도(HDL) 콜레스테롤",
        "method": "혈액 검사",
        "result": "정상: 60 이상. '좋은 콜레스테롤'로 혈관 찌꺼기를 청소하여 심혈관 질환을 예방합니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "저밀도(LDL) 콜레스테롤",
        "method": "혈액 검사",
        "result": "정상: 130 미만. '나쁜 콜레스테롤'로 동맥 벽에 쌓여 심근경색, 뇌졸중을 유발할 수 있습니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "아포지단백 A1",
        "method": "혈액 검사",
        "result": "HDL을 구성하는 단백질로, 수치가 높을수록 심혈관계 보호 효과가 좋습니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "아포지단백 B",
        "method": "혈액 검사",
        "result": "LDL을 구성하는 단백질로, 수치가 높을수록 동맥경화 위험이 큽니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "리포단백(a)",
        "method": "혈액 검사",
        "result": "유전적 요인이 강한 지단백으로, 높을 경우 조기 심혈관 질환 위험이 크게 증가합니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "호모시스테인",
        "method": "혈액 검사",
        "result": "아미노산 대사 산물로, 높을 경우 혈관 내피세포를 손상시켜 심뇌혈관 질환 위험을 높입니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "고감도 C-반응성 단백 (hs-CRP)",
        "method": "혈액 검사",
        "result": "체내 미세한 염증 반응을 측정하여 미래의 심장마비/뇌졸중 위험을 예측합니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "백혈구 수 (WBC)",
        "method": "혈액 검사",
        "result": "정상: 4,000~10,000. 세균 감염, 염증, 백혈병 시 증가하며, 면역력 저하 시 감소합니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "적혈구 수 (RBC)",
        "method": "혈액 검사",
        "result": "산소를 운반하는 세포로, 부족 시 빈혈, 과다 시 적혈구증가증을 의미합니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "혈색소 (헤모글로빈, Hb)",
        "method": "혈액 검사",
        "result": "정상: 남 13~16.5, 여 12~15.5. 빈혈 진단의 가장 기본적이고 중요한 지표입니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "헤마토크릿 (Hct)",
        "method": "혈액 검사",
        "result": "전체 혈액 중 적혈구가 차지하는 용적 비율로 빈혈 및 탈수 상태를 평가합니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "혈소판 수 (Platelet)",
        "method": "혈액 검사",
        "result": "정상: 15만~40만. 지혈과 혈액 응고를 담당하며, 부족 시 출혈(멍) 위험이 커집니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "평균 혈구 용적 (MCV)",
        "method": "혈액 검사",
        "result": "적혈구 1개의 평균 크기를 의미하며, 빈혈의 원인(철결핍성 vs 비타민B12결핍) 감별에 쓰입니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "평균 혈구 혈색소량 (MCH)",
        "method": "혈액 검사",
        "result": "적혈구 1개당 들어있는 헤모글로빈의 양을 의미합니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "백혈구 감별 백분율",
        "method": "혈액 검사",
        "result": "호중구, 림프구, 단핵구 등의 비율을 보아 감염의 원인(세균 vs 바이러스)을 유추합니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "적혈구 침강 속도 (ESR)",
        "method": "혈액 검사",
        "result": "체내의 비특이적인 염증 상태나 감염, 종양 유무를 스크리닝하는 보조 지표입니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "혈액형 검사 (ABO/Rh)",
        "method": "혈액 검사",
        "result": "수혈이나 수술 대비를 위해 정확한 ABO 및 Rh 혈액형을 판별합니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "철분 검사 (Iron)",
        "method": "혈액 검사",
        "result": "혈액 내 떠다니는 철분의 양으로, 철결핍성 빈혈 진단에 쓰입니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "총 철분 결합능 (TIBC)",
        "method": "혈액 검사",
        "result": "철분을 운반하는 단백질의 결합 능력으로, 철분이 부족할 때 오히려 수치가 증가합니다."
    },
    {
        "part": "💉 혈액 질환",
        "item": "페리틴 (저장철)",
        "method": "혈액 검사",
        "result": "몸속에 저장된 철분의 양을 나타내며, 철결핍성 빈혈을 가장 민감하게 진단하는 지표입니다."
    },
    {
        "part": "🦴 뼈/관절",
        "item": "비타민 D 농도",
        "method": "혈액 검사",
        "result": "정상: 30 이상. 뼈 건강과 면역력에 필수적이며 한국인 대부분이 부족(결핍) 상태입니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "AST (SGOT)",
        "method": "혈액 검사",
        "result": "간세포 및 심장, 근육 등에 존재하는 효소로 간 손상 시 혈중으로 흘러나와 수치가 상승합니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "ALT (SGPT)",
        "method": "혈액 검사",
        "result": "주로 간에 특이적으로 존재하는 효소로 급성 간염, 지방간 등 간 손상을 파악하는 핵심 지표입니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "감마 지티 (r-GTP)",
        "method": "혈액 검사",
        "result": "알코올 섭취나 비만, 담도 질환에 민감하게 반응하여 간 독성을 경고합니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "총 빌리루빈 (Total Bilirubin)",
        "method": "혈액 검사",
        "result": "적혈구가 파괴되면서 생기는 황색 색소로, 황달의 척도이며 간기능 저하나 담도 폐쇄 시 증가합니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "직접 빌리루빈 (Direct Bilirubin)",
        "method": "혈액 검사",
        "result": "간에서 처리된 빌리루빈으로, 주로 담도 폐쇄성 질환(담석, 담도암)을 감별할 때 쓰입니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "알칼리 포스파타제 (ALP)",
        "method": "혈액 검사",
        "result": "간, 담도, 뼈에 분포하며 담도 폐쇄나 뼈 질환 시 상승합니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "총 단백 (Total Protein)",
        "method": "혈액 검사",
        "result": "혈액 내 단백질 총량으로 간 기능 저하, 영양 결핍, 신장 질환 시 감소합니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "알부민 (Albumin)",
        "method": "혈액 검사",
        "result": "간에서 합성되는 주요 단백질로, 간경변 등으로 간 기능이 떨어지면 수치가 감소합니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "B형 간염 표면 항원 (HBsAg)",
        "method": "혈액 검사",
        "result": "양성(+)이면 현재 B형 간염 바이러스에 감염되어 있음을 의미합니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "B형 간염 표면 항체 (HBsAb)",
        "method": "혈액 검사",
        "result": "양성(+)이면 예방접종이나 과거 감염으로 면역력이 형성되었음을 의미합니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "C형 간염 항체 (Anti-HCV)",
        "method": "혈액 검사",
        "result": "양성(+)이면 C형 간염 바이러스에 감염된 적이 있거나 감염 중임을 의미합니다."
    },
    {
        "part": "🩸 간 (Liver)",
        "item": "간 질환 관련 기타 효소",
        "method": "혈액 검사",
        "result": "LDH 등 비특이적 효소로 세포 손상이나 괴사 정도를 파악합니다."
    },
    {
        "part": "💧 신장 (Kidney)",
        "item": "혈중 요소 질소 (BUN)",
        "method": "혈액 검사",
        "result": "정상: 8~20. 단백질 대사 산물로 신장 기능 저하, 탈수, 고단백 식사 시 상승합니다."
    },
    {
        "part": "💧 신장 (Kidney)",
        "item": "크레아티닌 (Creatinine)",
        "method": "혈액 검사",
        "result": "정상: 0.5~1.2. 근육 대사 산물로 신장 기능 평가에 가장 신뢰받는 지표입니다. 높으면 신장 이상 의심."
    },
    {
        "part": "💧 신장 (Kidney)",
        "item": "사구체 여과율 (eGFR)",
        "method": "계산 수치",
        "result": "정상: 90 이상. 신장이 1분에 걸러내는 혈액량으로, 만성콩팥병 단계를 구분하는 핵심 수치입니다."
    },
    {
        "part": "💧 신장 (Kidney)",
        "item": "요산 (Uric Acid)",
        "method": "혈액 검사",
        "result": "퓨린 대사 산물로 수치가 높으면 관절에 쌓여 통풍을 유발하거나 신장 결석의 원인이 됩니다."
    },
    {
        "part": "🍏 소화기 (위/대장)",
        "item": "아밀라아제 (Amylase, 췌장)",
        "method": "혈액 검사",
        "result": "췌장이나 침샘에서 분비되는 소화효소로, 급성 췌장염 시 급격히 상승합니다."
    },
    {
        "part": "🍏 소화기 (위/대장)",
        "item": "리파아제 (Lipase, 췌장)",
        "method": "혈액 검사",
        "result": "지방 소화효소로, 아밀라아제보다 췌장염 진단에 더 특이적(정확)입니다."
    },
    {
        "part": "💧 신장 (Kidney)",
        "item": "나트륨 (Na)",
        "method": "전해질 검사",
        "result": "체내 수분 조절과 삼투압을 유지하는 핵심 전해질입니다."
    },
    {
        "part": "💧 신장 (Kidney)",
        "item": "칼륨 (K)",
        "method": "전해질 검사",
        "result": "근육 수축과 심장 박동에 중요한 역할을 하며, 신장 기능 저하 시 배출되지 못해 위험해집니다."
    },
    {
        "part": "💧 신장 (Kidney)",
        "item": "염소 (Cl)",
        "method": "전해질 검사",
        "result": "나트륨과 함께 체내 산-염기 균형 및 수분 조절을 돕습니다."
    },
    {
        "part": "🦴 뼈/관절",
        "item": "칼슘 (Ca)",
        "method": "혈액 검사",
        "result": "뼈 형성, 근육 수축, 신경 전달에 필수적이며 부갑상선 호르몬과 비타민D에 의해 조절됩니다."
    },
    {
        "part": "🦴 뼈/관절",
        "item": "인 (P)",
        "method": "혈액 검사",
        "result": "칼슘과 결합하여 뼈와 치아를 구성하며, 신장 질환 시 배출 안 되어 수치가 올라갑니다."
    },
    {
        "part": "🚽 비뇨기",
        "item": "요단백 (Protein)",
        "method": "소변 검사",
        "result": "정상: 음성(-). 소변으로 단백질이 새는 상태로, 사구체 신염 등 신장 손상을 시사합니다."
    },
    {
        "part": "🚽 비뇨기",
        "item": "요당 (Glucose)",
        "method": "소변 검사",
        "result": "정상: 음성(-). 혈당이 너무 높아 신장의 재흡수 한계를 넘으면 소변으로 포도당이 배출됩니다."
    },
    {
        "part": "🚽 비뇨기",
        "item": "요잠혈 (Blood)",
        "method": "소변 검사",
        "result": "정상: 음성(-). 소변에 미세한 적혈구가 섞인 상태로, 요로결석, 방광염, 신장 질환을 의심합니다."
    },
    {
        "part": "🚽 비뇨기",
        "item": "요산도 (pH)",
        "method": "소변 검사",
        "result": "정상: 4.6~8.0. 소변의 산성/알칼리성 여부를 보며 요로결석의 위험을 간접 평가합니다."
    },
    {
        "part": "🚽 비뇨기",
        "item": "요빌리노겐",
        "method": "소변 검사",
        "result": "간 및 담도 질환이나 적혈구 파괴성 질환 시 수치가 상승할 수 있습니다."
    },
    {
        "part": "🚽 비뇨기",
        "item": "요케톤체",
        "method": "소변 검사",
        "result": "탄수화물 대신 지방이 분해될 때 발생하며, 조절 안 되는 당뇨나 극심한 다이어트 시 나타납니다."
    },
    {
        "part": "🚽 비뇨기",
        "item": "요중 빌리루빈",
        "method": "소변 검사",
        "result": "황달이나 간/담도 폐쇄 질환 시 양성(+)으로 나타납니다."
    },
    {
        "part": "🚽 비뇨기",
        "item": "요침사 현미경 검사",
        "method": "현미경 관찰",
        "result": "소변을 원심분리하여 찌꺼기를 관찰, 세균, 적혈구, 백혈구, 결정체 등을 직접 확인합니다."
    },
    {
        "part": "🍏 소화기 (위/대장)",
        "item": "분변잠혈검사 (대변 잠혈)",
        "method": "대변 샘플 분석",
        "result": "대변에 섞인 미세한 출혈(피)을 확인하여 대장암, 궤양, 치질 여부를 선별하는 검사입니다."
    },
    {
        "part": "🦋 갑상선",
        "item": "갑상선 자극 호르몬 (TSH)",
        "method": "혈액 검사",
        "result": "뇌하수체에서 분비되며, 갑상선 기능이 떨어지면 수치가 상승(자극 증가)합니다."
    },
    {
        "part": "🦋 갑상선",
        "item": "유리 티록신 (Free T4)",
        "method": "혈액 검사",
        "result": "실제 혈중에서 활성화된 갑상선 호르몬으로 갑상선 기능 항진/저하를 직접 반영합니다."
    },
    {
        "part": "🦋 갑상선",
        "item": "삼요오드제티론닌 (T3)",
        "method": "혈액 검사",
        "result": "T4와 함께 갑상선 기능을 평가하며, 항진증 진단에 유용합니다."
    },
    {
        "part": "🦋 갑상선",
        "item": "갑상선 글로불린 항체",
        "method": "혈액 검사",
        "result": "하시모토 갑상선염 등 자가면역 갑상선 질환을 진단하는 데 사용됩니다."
    },
    {
        "part": "🦋 갑상선",
        "item": "갑상선 과산화효소 항체",
        "method": "혈액 검사",
        "result": "갑상선 조직을 공격하는 항체로, 만성 자가면역성 갑상선염 진단의 핵심 마커입니다."
    },
    {
        "part": "👩‍⚕️ 여성 의학",
        "item": "여성 호르몬 (에스트로겐 등)",
        "method": "혈액 검사",
        "result": "에스트라디올(E2) 등을 측정하여 폐경 여부, 난소 기능, 불임 원인을 파악합니다."
    },
    {
        "part": "🚽 비뇨기",
        "item": "남성 호르몬 (테스토스테론)",
        "method": "혈액 검사",
        "result": "성기능, 근육량 유지와 관련되며 노화나 고환 기능 저하 시 수치가 감소합니다."
    },
    {
        "part": "🧬 종양표지자(암)",
        "item": "알파페토프로테인 (AFP)",
        "method": "혈액 검사",
        "result": "간암 선별 검사. 간염이나 간경화에서도 수치가 올라갈 수 있어 초음파와 병행합니다."
    },
    {
        "part": "🧬 종양표지자(암)",
        "item": "암태아성 항원 (CEA)",
        "method": "혈액 검사",
        "result": "주로 대장암, 위암 등 소화기암 진단과 재발 모니터링에 쓰이나 잦은 흡연 시에도 상승합니다."
    },
    {
        "part": "🧬 종양표지자(암)",
        "item": "전립선 특이항원 (PSA)",
        "method": "혈액 검사",
        "result": "전립선암 진단의 핵심 마커. 전립선 비대증이나 염증이 있을 때도 수치가 증가합니다."
    },
    {
        "part": "🧬 종양표지자(암)",
        "item": "CA 19-9",
        "method": "혈액 검사",
        "result": "췌장암 및 담도암의 진단과 경과 관찰에 보조적으로 사용됩니다."
    },
    {
        "part": "🧬 종양표지자(암)",
        "item": "CA 125",
        "method": "혈액 검사",
        "result": "난소암 선별 마커. 생리 기간이나 자궁내막증, 자궁근종이 있을 때도 위양성으로 오를 수 있습니다."
    },
    {
        "part": "🧬 종양표지자(암)",
        "item": "CA 15-3",
        "method": "혈액 검사",
        "result": "유방암의 재발과 전이를 모니터링하는 데 주로 사용됩니다."
    },
    {
        "part": "🧬 종양표지자(암)",
        "item": "SCC (편평세포암 항원)",
        "method": "혈액 검사",
        "result": "자궁경부암, 폐암, 식도암 등 편평상피세포 기원의 암 진단에 도움을 줍니다."
    },
    {
        "part": "🧬 종양표지자(암)",
        "item": "EBV 항체 (비인두암 선별)",
        "method": "혈액 검사",
        "result": "엡스타인-바 바이러스 항체를 통해 비인두암 위험도를 예측합니다."
    },
    {
        "part": "🧬 종양표지자(암)",
        "item": "칼시토닌",
        "method": "혈액 검사",
        "result": "갑상선 수질암의 진단 및 치료 후 추적 관찰에 사용되는 표지자입니다."
    },
    {
        "part": "🧬 종양표지자(암)",
        "item": "바스프 (B2-Microglobulin)",
        "method": "혈액 검사",
        "result": "다발성 골수종, 림프종 등 혈액암의 예후를 평가하고 신장 기능을 확인합니다."
    },
    {
        "part": "🍏 소화기 (위/대장)",
        "item": "헬리코박터 파일로리 항체/균",
        "method": "혈액/요소호기 검사",
        "result": "위염, 위궤양, 위암의 주요 원인균인 헬리코박터균 감염 여부를 파악합니다."
    },
    {
        "part": "🧬 종양표지자(암)",
        "item": "기타 정밀 종양마커",
        "method": "혈액 검사",
        "result": "특정 유전자 돌연변이나 특수 항원을 검출하여 맞춤형 암 관리에 활용합니다."
    },
    {
        "part": "🫁 심장/폐",
        "item": "흉부 X선 촬영 (폐/심장)",
        "method": "방사선 단순 촬영",
        "result": "가장 기본적인 흉부 검사로 폐결핵, 폐렴, 심장 비대, 흉수 등을 스크리닝합니다."
    },
    {
        "part": "🫁 심장/폐",
        "item": "심전도 검사 (ECG)",
        "method": "가슴/팔다리 전극 부착",
        "result": "심장의 전기 신호를 기록해 부정맥, 심근경색, 협심증의 징후를 빠르고 저렴하게 파악합니다."
    },
    {
        "part": "🍏 소화기 (위/대장)",
        "item": "위내시경 검사",
        "method": "구강 통해 내시경 삽입",
        "result": "식도, 위, 십이지장 점막을 직접 보며 위염, 궤양, 위암을 진단하고 필요시 조직검사를 합니다."
    },
    {
        "part": "🍏 소화기 (위/대장)",
        "item": "위장조영제 검사 (UGI)",
        "method": "바륨 조영제 복용 후 X-ray",
        "result": "내시경 대신 위장 점막의 굴곡을 간접적으로 관찰하나 위암 초기 발견율은 다소 떨어집니다."
    },
    {
        "part": "🍏 소화기 (위/대장)",
        "item": "대장내시경 검사",
        "method": "항문 통해 내시경 삽입",
        "result": "대장암 예방의 확실한 방법. 대장 전체를 관찰하며 용종 발견 시 즉시 제거할 수 있습니다."
    },
    {
        "part": "🍏 소화기 (위/대장)",
        "item": "복부 초음파 (간/담낭/췌장/신장)",
        "method": "젤 바르고 초음파 탐촉자 검사",
        "result": "상복부 고형 장기의 지방간, 결석, 낭종, 악성 종양 유무를 방사선 피폭 없이 안전하게 확인합니다."
    },
    {
        "part": "🦋 갑상선",
        "item": "갑상선 초음파 검사",
        "method": "목 부위 초음파",
        "result": "갑상선 결절(혹)의 유무, 크기, 악성 가능성(모양)을 가장 정밀하게 판단합니다."
    },
    {
        "part": "❤️ 심혈관/대사",
        "item": "경동맥 초음파 검사",
        "method": "목 혈관 초음파",
        "result": "뇌로 가는 혈관벽의 두께와 플라크(찌꺼기) 좁아짐 정도를 측정하여 뇌졸중 위험을 예측합니다."
    },
    {
        "part": "🫁 심장/폐",
        "item": "심장 초음파 검사",
        "method": "가슴 부위 초음파",
        "result": "심장의 크기, 심장 근육의 수축력, 판막의 이상 여부를 실시간 영상으로 정밀 평가합니다."
    },
    {
        "part": "👩‍⚕️ 여성 의학",
        "item": "유방 촬영술 (맘모그래피)",
        "method": "유방 압박 후 X-ray",
        "result": "초기 유방암의 징후인 미세석회화 병변을 찾는 데 탁월한 유방암 기본 국가검진 항목입니다."
    },
    {
        "part": "👩‍⚕️ 여성 의학",
        "item": "유방 초음파 검사",
        "method": "가슴 초음파",
        "result": "동양인에게 흔한 치밀 유방(X-ray가 하얗게 나옴)에서 숨겨진 종양이나 낭종을 꼼꼼히 찾아냅니다."
    },
    {
        "part": "👩‍⚕️ 여성 의학",
        "item": "자궁경부 세포진 검사",
        "method": "질경 삽입 후 세포 채취",
        "result": "자궁경부암 전단계(이형성증) 세포를 발견하는 국가검진 검사로 성경험이 있는 여성 필수 항목입니다."
    },
    {
        "part": "🦴 뼈/관절",
        "item": "골밀도 검사 (BMD)",
        "method": "이중에너지 X선 (DEXA)",
        "result": "T-score 기준으로 뼈의 튼튼한 정도를 측정하여 골감소증 및 골다공증을 진단합니다."
    },
    {
        "part": "🧠 뇌신경",
        "item": "뇌 MRI / MRA",
        "method": "자기공명영상/혈관 촬영",
        "result": "MRI는 뇌종양, 치매, 뇌경색 등 뇌 조직 자체를, MRA는 뇌동맥류 등 뇌혈관의 구조적 이상을 입체적으로 정밀 검사합니다."
    }
];

// 모달 표시 함수
window.showHealthModal = function(title, method, desc, part) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalMethod').innerText = "검사 방법: " + method;
    document.getElementById('modalDesc').innerText = desc;
    document.getElementById('modalPart').innerText = "검사 분류: " + part;
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
            
            const charCode = item.part.charCodeAt(0) + item.part.charCodeAt(item.part.length - 1);
            const hue1 = (charCode * 37) % 360;
            const hue2 = (charCode * 59) % 360;
            
            const getIcon = (str) => {
                if (/키|신장\s*\(/.test(str)) return "📏";
                if (/체중|체질량|BMI|인바디/.test(str)) return "⚖️";
                if (/허리/.test(str)) return "👖";
                if (/시력|안저|안압/.test(str)) return "👓";
                if (/청력/.test(str)) return "🎧";
                if (/혈압/.test(str)) return "💓";
                if (/맥박/.test(str)) return "⏱️";
                if (/문진|상담/.test(str)) return "👨‍⚕️";
                if (/초음파/.test(str)) return "📻";
                if (/내시경/.test(str)) return "🔍";
                if (/X선|X-ray|촬영|맘모/.test(str)) return "🩻";
                if (/MRI|MRA/.test(str)) return "🖥️";
                if (/심전도|폐기능/.test(str)) return "📈";
                if (/혈당|당화혈색소|요당/.test(str)) return "🍬";
                if (/콜레스테롤|중성지방|지단백/.test(str)) return "🧈";
                if (/혈액형/.test(str)) return "🅰️";
                if (/백혈구|적혈구|혈소판|혈색소|빈혈|혈액|MCV|MCH/.test(str)) return "🩸";
                if (/철분|페리틴|TIBC/.test(str)) return "🧲";
                if (/비타민/.test(str)) return "☀️";
                if (/AST|ALT|지티|빌리루빈|알칼리|단백|알부민|간염/.test(str)) return "🧪";
                if (/요소|크레아티닌|여과율/.test(str)) return "💧";
                if (/아밀라아제|리파아제/.test(str)) return "🍰";
                if (/나트륨|칼륨|염소|전해질/.test(str)) return "🧂";
                if (/칼슘|인|골밀도/.test(str)) return "🦴";
                if (/요단백|요잠혈|요산도|요빌|요케톤|요침사|요산/.test(str)) return "🚽";
                if (/대변|분변/.test(str)) return "💩";
                if (/갑상선|티록신|T3|T4|TSH/.test(str)) return "🦋";
                if (/여성|에스트로겐|자궁|난소/.test(str)) return "🚺";
                if (/남성|테스토스테론|전립선/.test(str)) return "🚹";
                if (/암|종양|항원|마커|AFP|CEA|PSA|CA\s*\d|SCC|EBV|칼시토닌|바스프/.test(str)) return "🧬";
                if (/균|헬리코박터/.test(str)) return "🦠";
                return "🩺";
            };
            const emoji = getIcon(item.item);

            
            card.innerHTML = `
                <div class="card-img" style="background: linear-gradient(45deg, hsl(${hue1}, 80%, 80%), hsl(${hue2}, 80%, 80%));">
                    ${emoji}
                </div>
                <span class="part" style="background:#f1f5f9; color:#475569; padding:4px 10px; border-radius:20px; font-size:12px; margin-bottom:10px; display:inline-block; font-weight:bold;">${item.part}</span>
                <h3 style="margin:5px 0 10px 0; font-size:18px; color:var(--accent);">${item.item}</h3>
                <p style="font-size:14px; color:var(--text-light); display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; line-height: 1.5; margin:0;">${item.result}</p>
            `;
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
