const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'health-test', 'app.js');
let content = fs.readFileSync(filePath, 'utf8');

const newTranslations = {
  en: `
        btnGuideTop: "📖 Guide",
        guideSummary: "📖 Read K-Medical Guide & Tips (Click to Expand)",
        guideTitle: "The Ultimate Guide to Health Checkups in South Korea for Foreigners",
        guideIntro: "South Korea has emerged as one of the top destinations globally for medical tourism, particularly renowned for its highly efficient, technologically advanced, and comprehensive health screening programs. Whether you are an expatriate residing in Korea or a medical tourist visiting specifically for healthcare purposes, navigating the Korean medical system requires understanding certain administrative protocols. This guide provides strictly factual, administrative, and procedural information to help you prepare for a health checkup in South Korea.",
        guideSec1Title: "1. National Health Insurance Service (NHIS) Applicability",
        guideSec1Desc: "For foreigners residing in South Korea, enrollment in the <strong>National Health Insurance Service (NHIS)</strong> is generally mandatory after residing in the country for six consecutive months (with some exceptions depending on visa types, such as D-2 students or E-9 workers who may have different timelines). Once enrolled, foreigners receive the exact same benefits as Korean citizens. This includes the biennial (every two years) general health screening provided free of charge by the NHIS for individuals aged 20 and older. However, comprehensive VIP screening packages that include MRI, MRA, or advanced endoscopy are usually not fully covered by NHIS and require out-of-pocket payments.",
        guideSec2Title: "2. Language Support and International Clinics",
        guideSec2Desc: "One of the biggest concerns for international patients is the language barrier. Fortunately, South Korea's Ministry of Health and Welfare officially designates certain hospitals as accredited medical institutions for foreign patients. Most tertiary hospitals (university hospitals) and large specialized checkup centers in Seoul, Busan, and Incheon operate dedicated <strong>International Healthcare Centers (IHC)</strong>. These centers typically provide full-time interpretation services in English, Chinese, Russian, Japanese, and Mongolian. It is highly recommended to book your appointment through the IHC rather than the general domestic reception to ensure an interpreter accompanies you during the medical consultations and examinations.",
        guideSec3Title: "3. General Administrative Preparations for Screening",
        guideSec3Desc: "While medical advice should always come directly from your designated clinic, there are universal administrative and procedural steps required by all Korean health screening centers: <br><br><strong>Fasting Requirement:</strong> Most comprehensive screenings require a strict fasting period of 8 to 12 hours prior to the exam. This usually means no food, water, gum, or coffee after 9:00 PM the night before a morning appointment.<br><strong>Medication Guidelines:</strong> Patients are typically advised by the hospital administrators to bring their current prescriptions. Blood pressure medications are often allowed with a small sip of water early in the morning, while diabetes medications or insulin should generally be skipped on the morning of the fasting exam.<br><strong>Identification:</strong> Foreign residents must bring their Alien Registration Card (ARC), while medical tourists must present their Passport.",
        guideSec4Title: "4. Medical Tourism Visas (C-3-3 & G-1-10)",
        guideSec4Desc: "If you are traveling to South Korea specifically for medical treatment or comprehensive health screenings that require a long stay, you may need a Medical Visa. The South Korean government issues the <strong>C-3-3 visa (Short-term Medical Tourism)</strong> for treatments lasting less than 90 days, and the <strong>G-1-10 visa (Long-term Medical Tourism)</strong> for treatments exceeding 90 days. To apply for these visas, you generally need an invitation letter from a medical institution registered with the Korean government or a certified medical tourism facilitation agency.",
        guideNotice: "<strong>Important Notice:</strong> The information provided in this guide is sourced from general administrative guidelines regarding the Korean healthcare system. Prices, policies, and visa regulations are subject to change. Please contact the Korean Embassy or your chosen medical facility directly for the most up-to-date administrative information.",`,
  ko: `
        btnGuideTop: "📖 가이드",
        guideSummary: "📖 K-의료 관광 가이드 및 꿀팁 (클릭하여 펼치기)",
        guideTitle: "외국인을 위한 한국 건강검진 완벽 가이드",
        guideIntro: "한국은 고도로 효율적이고 첨단 기술이 집약된 종합 건강검진 프로그램으로 유명한 전 세계 최고의 의료 관광 목적지 중 하나입니다. 한국에 거주하는 외국인이든 의료 목적으로 방문하는 관광객이든, 한국 의료 시스템을 이용하려면 특정 행정 절차를 이해해야 합니다. 이 가이드는 한국에서의 건강검진을 준비하는 데 도움이 되는 100% 사실 기반의 행정적, 절차적 정보를 제공합니다.",
        guideSec1Title: "1. 국민건강보험(NHIS) 가입 여부",
        guideSec1Desc: "한국에 거주하는 외국인의 경우, <strong>국민건강보험(NHIS)</strong> 가입은 일반적으로 6개월 이상 연속 체류 시 의무화됩니다 (D-2 학생이나 E-9 근로자 등 비자 종류에 따라 예외 있음). 가입 시 외국인도 내국인과 동일한 혜택을 받습니다. 여기에는 20세 이상 개인을 대상으로 건강보험공단이 무료로 제공하는 격년제(2년 1회) 일반건강검진이 포함됩니다. 단, MRI, MRA, 수면 내시경 등이 포함된 정밀 VIP 검진 패키지는 건강보험이 전액 적용되지 않으므로 본인 부담금이 발생합니다.",
        guideSec2Title: "2. 언어 지원 및 국제 진료 센터",
        guideSec2Desc: "외국인 환자의 가장 큰 고민 중 하나는 언어 장벽입니다. 다행히 대한민국 보건복지부는 특정 병원을 외국인 환자 유치 등록 의료기관으로 공식 지정하고 있습니다. 서울, 부산, 인천의 대부분의 3차 병원(대학병원)과 대형 전문 검진 센터는 전담 <strong>국제진료센터(IHC)</strong>를 운영합니다. 이곳에서는 일반적으로 영어, 중국어, 러시아어, 일본어, 몽골어 전담 통역 서비스를 제공합니다. 진료 및 검사 시 통역사의 동행을 보장받으려면 일반 국내 접수처가 아닌 국제진료센터를 통해 예약하는 것을 강력히 권장합니다.",
        guideSec3Title: "3. 건강검진을 위한 일반적인 행정 준비",
        guideSec3Desc: "의학적 조언은 항상 지정된 병원 전문의에게 직접 받아야 하지만, 모든 한국 건강검진 센터에서 요구하는 공통적인 행정 및 절차적 단계가 있습니다: <br><br><strong>금식 요구 사항:</strong> 대부분의 종합 검진은 검사 전 8~12시간의 엄격한 금식이 필요합니다. 이는 일반적으로 오전 예약 전날 밤 9시 이후에는 음식, 물, 껌, 커피를 일절 금하는 것을 의미합니다.<br><strong>약물 복용 지침:</strong> 환자는 현재 복용 중인 처방전을 가져오도록 안내받습니다. 혈압약은 이른 아침 소량의 물과 함께 복용이 허용되는 경우가 많지만, 당뇨약이나 인슐린은 일반적으로 금식하는 당일 아침에는 투여를 건너뛰어야 합니다.<br><strong>신분증:</strong> 국내 거주 외국인은 외국인등록증(ARC)을, 의료 관광객은 여권을 반드시 지참해야 합니다.",
        guideSec4Title: "4. 의료 관광 비자 (C-3-3 & G-1-10)",
        guideSec4Desc: "장기 체류가 필요한 치료나 종합 건강검진을 위해 한국을 방문하는 경우 의료 비자가 필요할 수 있습니다. 한국 정부는 90일 미만 치료의 경우 <strong>C-3-3 비자(단기 의료 관광)</strong>를, 90일 이상 치료의 경우 <strong>G-1-10 비자(장기 의료 관광)</strong>를 발급합니다. 이 비자를 신청하려면 일반적으로 한국 정부에 등록된 의료기관이나 공식 인증된 의료 관광 유치 기관의 초청장이 필요합니다.",
        guideNotice: "<strong>중요 공지:</strong> 이 가이드에 제공된 정보는 한국 의료 시스템과 관련된 일반적인 행정 지침을 출처로 합니다. 가격, 정책 및 비자 규정은 수시로 변경될 수 있습니다. 가장 최신의 행정 정보는 한국 대사관이나 선택하신 의료 기관에 직접 문의하시기 바랍니다.",`,
  ja: `
        btnGuideTop: "📖 ガイド",
        guideSummary: "📖 K-医療観光ガイドとヒント（クリックして展開）",
        guideTitle: "外国人のための韓国健康診断 完璧ガイド",
        guideIntro: "韓国は、効率的でハイテクな総合健康診断プログラムで知られる世界有数の医療観光の目的地です。韓国在住の外国人であれ、医療目的で訪れる観光客であれ、韓国の医療システムを利用するには行政手続きを理解する必要があります。このガイドは、韓国での健康診断の準備に役立つ、事実に基づく行政的および手続き的な情報を提供します。",
        guideSec1Title: "1. 国民健康保険（NHIS）の適用",
        guideSec1Desc: "韓国に居住する外国人の場合、<strong>国民健康保険（NHIS）</strong>への加入は、通常、入国後6ヶ月以上連続して滞在した場合に義務付けられます。加入すると、外国人も韓国市民と全く同じ恩恵を受けられます。これには、20歳以上の個人を対象としたNHIS提供の無料の隔年（2年に1度）の一般健康診断が含まれます。ただし、MRIや睡眠内視鏡を含むVIP精密検査パッケージは、全額保険適用外となり、自己負担が必要です。",
        guideSec2Title: "2. 言語サポートと国際診療センター",
        guideSec2Desc: "外国人患者の最大の懸念の一つは言葉の壁です。幸いなことに、保健福祉部は特定の病院を外国人患者誘致医療機関として公式に指定しています。ほとんどの大学病院や大型検診センターは、専用の<strong>国際診療センター（IHC）</strong>を運営しています。これらのセンターでは通常、英語、中国語、ロシア語、日本語などの通訳サービスを提供しています。",
        guideSec3Title: "3. 健康診断のための一般的な準備",
        guideSec3Desc: "医学的なアドバイスは必ず専門医から受けるべきですが、韓国のすべての検診センターで共通して求められる手続きがあります：<br><br><strong>絶食の要件：</strong> ほとんどの総合検診では、検査前に8〜12時間の厳格な絶食が必要です。<br><strong>薬のガイドライン：</strong> 血圧の薬は早朝に少量の水で服用できることが多いですが、糖尿病の薬やインスリンは通常、絶食日の朝は避けるべきです。<br><strong>身分証明書：</strong> 国内居住の外国人は外国人登録証（ARC）を、医療観光客はパスポートを持参する必要があります。",
        guideSec4Title: "4. 医療観光ビザ（C-3-3 & G-1-10）",
        guideSec4Desc: "長期滞在が必要な治療や総合検診のために韓国を訪問する場合、医療ビザが必要になることがあります。韓国政府は、90日未満の治療には<strong>C-3-3ビザ（短期医療観光）</strong>を、90日以上の治療には<strong>G-1-10ビザ（長期医療観光）</strong>を発行しています。",
        guideNotice: "<strong>重要なお知らせ：</strong> このガイドで提供される情報は、一般的な行政ガイドラインに基づいています。価格、ポリシー、ビザの規定は変更される場合があります。最新の情報については、韓国大使館または選択した医療機関に直接お問い合わせください。",`,
  zh: `
        btnGuideTop: "📖 指南",
        guideSummary: "📖 K-医疗旅游指南与提示 (点击展开)",
        guideTitle: "外国人在韩国进行健康体检的终极指南",
        guideIntro: "韩国已成为全球顶级的医疗旅游目的地之一，以其高效、高科技的综合健康体检项目而闻名。无论您是在韩外国人还是专门为医疗而来的游客，了解韩国的医疗系统都需要熟悉一些行政规定。本指南提供基于事实的行政和程序信息，帮助您准备在韩国的健康体检。",
        guideSec1Title: "1. 国民健康保险 (NHIS) 的适用性",
        guideSec1Desc: "对于居住在韩国的外国人，通常在连续居住六个月后必须加入<strong>国民健康保险 (NHIS)</strong>。加入后，外国人享有与韩国公民完全相同的福利，包括为20岁及以上人士提供免费的每两年一次的基础体检。然而，包含MRI或无痛内窥镜的高级VIP体检套餐通常不被完全覆盖，需要自费。",
        guideSec2Title: "2. 语言支持与国际诊疗中心",
        guideSec2Desc: "国际患者最大的担忧之一是语言障碍。幸运的是，韩国保健福祉部正式指定了某些医院作为接收外国患者的医疗机构。大多数大型医院和专业体检中心都设有专门的<strong>国际诊疗中心 (IHC)</strong>，通常提供英语、中文、俄语和日语的翻译服务。",
        guideSec3Title: "3. 体检的常规行政准备",
        guideSec3Desc: "虽然医疗建议应始终直接来自您的医生，但所有韩国体检中心都有普遍的程序要求：<br><br><strong>禁食要求：</strong> 大多数综合体检需要考前8-12小时严格禁食。<br><strong>用药指南：</strong> 血压药通常可以在清晨用少量水送服，但糖尿病药物或胰岛素在禁食的早晨通常应停用。<br><strong>身份证明：</strong> 在韩外国人必须携带外国人登录证 (ARC)，而医疗游客必须出示护照。",
        guideSec4Title: "4. 医疗旅游签证 (C-3-3 & G-1-10)",
        guideSec4Desc: "如果您前往韩国进行需要长期停留的治疗或体检，您可能需要医疗签证。韩国政府为90天以下的治疗签发<strong>C-3-3签证（短期医疗旅游）</strong>，为超过90天的治疗签发<strong>G-1-10签证（长期医疗旅游）</strong>。",
        guideNotice: "<strong>重要提示：</strong> 本指南提供的信息源自有关韩国医疗系统的常规行政指南。价格、政策和签证规定可能随时更改。请直接联系韩国大使馆或您选择的医疗机构获取最新信息。",`,
  vi: `
        btnGuideTop: "📖 Hướng dẫn",
        guideSummary: "📖 Hướng dẫn & Mẹo Du lịch Y tế Hàn Quốc (Bấm để Mở)",
        guideTitle: "Hướng dẫn Tối thượng về Khám Sức khỏe tại Hàn Quốc cho Người Nước ngoài",
        guideIntro: "Hàn Quốc đã trở thành một trong những điểm đến hàng đầu toàn cầu về du lịch y tế, nổi tiếng với các chương trình khám sức khỏe toàn diện, hiệu quả cao và công nghệ tiên tiến. Dù bạn là người nước ngoài đang cư trú tại Hàn Quốc hay khách du lịch y tế, việc hiểu rõ các thủ tục hành chính là cần thiết. Hướng dẫn này cung cấp thông tin hành chính thực tế để giúp bạn chuẩn bị.",
        guideSec1Title: "1. Áp dụng Bảo hiểm Y tế Quốc gia (NHIS)",
        guideSec1Desc: "Đối với người nước ngoài cư trú tại Hàn Quốc, việc tham gia <strong>Bảo hiểm Y tế Quốc gia (NHIS)</strong> thường là bắt buộc sau khi cư trú liên tục 6 tháng. Sau khi tham gia, người nước ngoài được hưởng các quyền lợi y hệt công dân Hàn Quốc, bao gồm khám sức khỏe tổng quát miễn phí 2 năm 1 lần. Tuy nhiên, các gói khám VIP chuyên sâu (như MRI) thường yêu cầu tự chi trả.",
        guideSec2Title: "2. Hỗ trợ Ngôn ngữ và Trung tâm Quốc tế",
        guideSec2Desc: "Rào cản ngôn ngữ là mối lo lớn. May mắn thay, hầu hết các bệnh viện lớn đều có <strong>Trung tâm Chăm sóc Sức khỏe Quốc tế (IHC)</strong> cung cấp dịch vụ thông dịch (Anh, Trung, Nga, Nhật, Việt). Bạn nên đặt lịch thông qua IHC để được hỗ trợ thông dịch viên trong suốt quá trình khám.",
        guideSec3Title: "3. Chuẩn bị Thủ tục Chung",
        guideSec3Desc: "Các bước chuẩn bị hành chính phổ biến: <br><br><strong>Nhịn ăn:</strong> Cần nhịn ăn nghiêm ngặt 8-12 tiếng trước khi khám.<br><strong>Thuốc:</strong> Thuốc huyết áp thường được uống với một ngụm nước nhỏ, nhưng thuốc tiểu đường/insulin nên bỏ qua vào buổi sáng nhịn ăn.<br><strong>Giấy tờ:</strong> Mang theo Thẻ Người Nước ngoài (ARC) hoặc Hộ chiếu.",
        guideSec4Title: "4. Visa Du lịch Y tế (C-3-3 & G-1-10)",
        guideSec4Desc: "Hàn Quốc cấp <strong>Visa C-3-3</strong> cho các đợt điều trị ngắn hạn dưới 90 ngày, và <strong>Visa G-1-10</strong> cho điều trị dài hạn hơn 90 ngày. Cần có thư mời từ một cơ sở y tế được cấp phép.",
        guideNotice: "<strong>Lưu ý Quan trọng:</strong> Thông tin này mang tính tham khảo hành chính. Chính sách và visa có thể thay đổi. Vui lòng liên hệ trực tiếp với Đại sứ quán hoặc bệnh viện để có thông tin mới nhất.",`,
  th: `
        btnGuideTop: "📖 คู่มือ",
        guideSummary: "📖 คู่มือและเคล็ดลับ K-Medical (คลิกเพื่อขยาย)",
        guideTitle: "คู่มือการตรวจสุขภาพในเกาหลีใต้สำหรับชาวต่างชาติ",
        guideIntro: "เกาหลีใต้เป็นหนึ่งในจุดหมายปลายทางยอดนิยมสำหรับการท่องเที่ยวเชิงการแพทย์ คู่มือนี้จะให้ข้อมูลเชิงขั้นตอนและข้อเท็จจริงเพื่อเตรียมพร้อมสำหรับการตรวจสุขภาพในเกาหลีใต้.",
        guideSec1Title: "1. การประกันสุขภาพแห่งชาติ (NHIS)",
        guideSec1Desc: "ชาวต่างชาติที่พำนักในเกาหลีเกิน 6 เดือนมักจะต้องเข้าร่วม <strong>NHIS</strong> ซึ่งให้สิทธิ์การตรวจสุขภาพขั้นพื้นฐานฟรีทุกๆ 2 ปี อย่างไรก็ตาม แพ็คเกจ VIP ที่ครอบคลุม MRI จะต้องจ่ายเงินเพิ่มเอง.",
        guideSec2Title: "2. การสนับสนุนด้านภาษาและคลินิกนานาชาติ",
        guideSec2Desc: "โรงพยาบาลใหญ่ๆ มักจะมี <strong>International Healthcare Centers (IHC)</strong> ที่ให้บริการล่าม (อังกฤษ, จีน, รัสเซีย เป็นต้น) แนะนำให้จองผ่าน IHC เพื่อรับบริการล่าม.",
        guideSec3Title: "3. การเตรียมตัวทั่วไป",
        guideSec3Desc: "<strong>การงดอาหาร:</strong> งดอาหารและน้ำ 8-12 ชั่วโมงก่อนตรวจ<br><strong>ยา:</strong> ยาความดันสามารถทานกับน้ำจิบเล็กน้อยได้ แต่งดยาเบาหวานในเช้าวันตรวจ<br><strong>เอกสาร:</strong> พก ARC หรือพาสปอร์ต.",
        guideSec4Title: "4. วีซ่าท่องเที่ยวเชิงการแพทย์ (C-3-3 & G-1-10)",
        guideSec4Desc: "หากการรักษาต้องใช้เวลานาน รัฐบาลจะออก <strong>วีซ่า C-3-3</strong> สำหรับระยะสั้น และ <strong>G-1-10</strong> สำหรับระยะยาว.",
        guideNotice: "<strong>ประกาศสำคัญ:</strong> ข้อมูลนี้เป็นคำแนะนำทั่วไป นโยบายอาจมีการเปลี่ยนแปลง โปรดตรวจสอบกับโรงพยาบาลหรือสถานทูต.",`,
  ru: `
        btnGuideTop: "📖 Руководство",
        guideSummary: "📖 K-Medical Руководство (Нажмите, чтобы развернуть)",
        guideTitle: "Полное руководство по медицинским обследованиям в Южной Корее для иностранцев",
        guideIntro: "Южная Корея стала одним из ведущих мировых центров медицинского туризма. Это руководство предоставляет чисто фактическую административную информацию для подготовки к медобследованию.",
        guideSec1Title: "1. Национальная служба медицинского страхования (NHIS)",
        guideSec1Desc: "Для иностранцев, проживающих в Корее, регистрация в <strong>NHIS</strong> обязательна через 6 месяцев. Это дает право на бесплатное базовое обследование раз в 2 года. Пакеты VIP (МРТ и т.д.) оплачиваются отдельно.",
        guideSec2Title: "2. Языковая поддержка",
        guideSec2Desc: "Большинство крупных клиник имеют <strong>Международные центры (IHC)</strong> с переводчиками на русский, английский и другие языки. Рекомендуется записываться через них.",
        guideSec3Title: "3. Подготовка",
        guideSec3Desc: "<strong>Голодание:</strong> 8-12 часов до обследования.<br><strong>Медикаменты:</strong> Таблетки от давления можно запить глотком воды, лекарства от диабета следует пропустить.<br><strong>Документы:</strong> ARC или Паспорт.",
        guideSec4Title: "4. Медицинские визы (C-3-3 и G-1-10)",
        guideSec4Desc: "Корея выдает визу <strong>C-3-3</strong> (до 90 дней) и <strong>G-1-10</strong> (более 90 дней) для медицинского туризма.",
        guideNotice: "<strong>Важно:</strong> Это руководство носит информационный характер. Правила могут меняться. Проверяйте актуальную информацию в посольстве или клинике.",`
};

for (const lang in newTranslations) {
  const marker = \`\${lang}: {\`;
  const insertIndex = content.indexOf(marker);
  if (insertIndex !== -1) {
    const afterMarker = insertIndex + marker.length;
    content = content.slice(0, afterMarker) + '\\n' + newTranslations[lang] + content.slice(afterMarker);
  }
}

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully updated app.js with guide translations');
