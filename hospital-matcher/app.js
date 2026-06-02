const dictionary = {
    en: {
        title: "Korean Hospital Guide",
        subtitle: "Where to go when you are sick in Korea",
        intro: "In Korea, you usually don't visit a General Practitioner. You go directly to a specialist clinic based on your symptoms. Find your symptoms below to know which clinic to visit.",
        symptomsLabel: "If your symptoms are:",
        visitLabel: "You should visit:"
    },
    ja: {
        title: "韓国の病院ガイド",
        subtitle: "韓国で体調が悪いとき、どこに行くべきか",
        intro: "韓国では、一般的な総合診療医(GP)に先に行くのではなく、症状に合わせて専門のクリニックに直接行きます。以下の症状から、行くべき病院を確認してください。",
        symptomsLabel: "症状が次のような場合：",
        visitLabel: "行くべき病院："
    },
    zh: {
        title: "韩国就医指南",
        subtitle: "在韩国生病了该去哪里",
        intro: "在韩国，通常不需要先去看全科医生。你可以根据症状直接去专科诊所。请在下方查找你的症状以确定该去哪家诊所。",
        symptomsLabel: "如果你的症状是：",
        visitLabel: "你应该去："
    },
    th: {
        title: "คำแนะนำโรงพยาบาลเกาหลี",
        subtitle: "เมื่อคุณป่วยที่เกาหลีต้องไปที่ไหน",
        intro: "ในเกาหลี คุณไม่จำเป็นต้องไปพบแพทย์ทั่วไปก่อน คุณสามารถตรงไปยังคลินิกเฉพาะทางได้ตามอาการของคุณ ค้นหาอาการของคุณด้านล่างเพื่อดูว่าควรไปคลินิกไหน",
        symptomsLabel: "หากคุณมีอาการ:",
        visitLabel: "คุณควรไปที่:"
    },
    ru: {
        title: "Справочник по больницам",
        subtitle: "Куда идти, если вы заболели в Корее",
        intro: "В Корее обычно не ходят к терапевту. Вы идете напрямую в специализированную клинику в зависимости от симптомов. Найдите свои симптомы ниже, чтобы узнать, в какую клинику обратиться.",
        symptomsLabel: "Если ваши симптомы:",
        visitLabel: "Вам следует посетить:"
    },
    vi: {
        title: "Hướng dẫn bệnh viện Hàn Quốc",
        subtitle: "Nên đi đâu khi bị ốm ở Hàn Quốc",
        intro: "Ở Hàn Quốc, bạn thường không cần gặp Bác sĩ Đa khoa trước. Bạn có thể đến thẳng phòng khám chuyên khoa tùy theo triệu chứng. Hãy tìm triệu chứng của bạn bên dưới để biết nên đi phòng khám nào.",
        symptomsLabel: "Nếu triệu chứng của bạn là:",
        visitLabel: "Bạn nên đến:"
    }
};

const infoData = [
    {
        deptKorean: "내과",
        deptNative: {
            en: "Internal Medicine",
            ja: "内科",
            zh: "内科",
            th: "แผนกอายุรกรรม",
            ru: "Терапевтическое отделение",
            vi: "Nội khoa"
        },
        symptoms: {
            en: "Fever, General Cold, Stomachache, Indigestion, Diarrhea, Heartburn",
            ja: "熱、風邪、腹痛、消化不良、下痢、胸焼け",
            zh: "发烧、普通感冒、胃痛、消化不良、腹泻、胃灼热",
            th: "ไข้, หวัดทั่วไป, ปวดท้อง, อาหารไม่ย่อย, ท้องเสีย, แสบร้อนกลางอก",
            ru: "Жар, Простуда, Боль в животе, Несварение, Диарея, Изжога",
            vi: "Sốt, Cảm lạnh, Đau bụng, Khó tiêu, Tiêu chảy, Ợ nóng"
        },
        desc: {
            en: "Internal Medicine (Nae-gwa) is the most common clinic in Korea. Visit here first for any general sickness, digestion issues, or mild fevers.",
            ja: "内科(ネグァ)は韓国で最も一般的なクリニックです。風邪、胃腸の不調、軽い熱など、一般的な病気はまずここを受診してください。",
            zh: "内科 (Nae-gwa) 是韩国最常见的诊所。对于普通疾病、消化问题或轻度发烧，请首先访问这里。",
            th: "แผนกอายุรกรรม (แน-กวา) เป็นคลินิกที่พบบ่อยที่สุดในเกาหลี ไปที่นี่ก่อนสำหรับอาการป่วยทั่วไป ปัญหาการย่อยอาหาร หรือไข้ต่ำ",
            ru: "Терапевтическое отделение (Нэ-гва) - самая распространенная клиника в Корее. Сначала обращайтесь сюда при любых общих заболеваниях, проблемах с пищеварением или легком жаре.",
            vi: "Nội khoa (Nae-gwa) là phòng khám phổ biến nhất ở Hàn Quốc. Hãy đến đây trước cho bất kỳ bệnh chung, vấn đề tiêu hóa hoặc sốt nhẹ nào."
        }
    },
    {
        deptKorean: "이비인후과",
        deptNative: {
            en: "ENT (Ear, Nose & Throat)",
            ja: "耳鼻咽喉科",
            zh: "耳鼻喉科",
            th: "คลินิก หู คอ จมูก",
            ru: "ЛОР-отделение",
            vi: "Khoa Tai Mũi Họng"
        },
        symptoms: {
            en: "Sore throat, Runny nose, Earache, Severe cough, Tonsillitis",
            ja: "喉の痛み、鼻水、耳の痛み、ひどい咳、扁桃炎",
            zh: "喉咙痛、流鼻涕、耳痛、严重咳嗽、扁桃体炎",
            th: "เจ็บคอ, น้ำมูกไหล, ปวดหู, ไออย่างรุนแรง, ทอนซิลอักเสบ",
            ru: "Боль в горле, Насморк, Боль в ухе, Сильный кашель, Тонзиллит",
            vi: "Đau họng, Chảy nước mũi, Đau tai, Ho nặng, Viêm amidan"
        },
        desc: {
            en: "ENT clinics (Ibi-in-hu-gwa) are everywhere in Korea. Many Koreans visit ENT directly instead of Internal Medicine if their cold is mostly in the nose or throat.",
            ja: "耳鼻咽喉科(イビインフグァ)は韓国中にあります。鼻や喉の風邪の場合、韓国人は内科ではなく直接耳鼻科を受診することが多いです。",
            zh: "耳鼻喉科诊所 (Ibi-in-hu-gwa) 在韩国随处可见。如果感冒主要在鼻子或喉咙，许多韩国人会直接去耳鼻喉科而不是内科。",
            th: "คลินิก หู คอ จมูก (อีบีอินฮูกวา) มีอยู่ทุกที่ในเกาหลี คนเกาหลีจำนวนมากจะไปคลินิกนี้โดยตรงแทนที่จะไปแผนกอายุรกรรมหากเป็นหวัดที่จมูกหรือคอ",
            ru: "ЛОР-клиники (Иби-ин-ху-гва) есть повсюду в Корее. Многие корейцы обращаются напрямую к ЛОР-врачу вместо терапевта, если простуда в основном в носу или горле.",
            vi: "Phòng khám Tai Mũi Họng (Ibi-in-hu-gwa) có ở khắp nơi tại Hàn Quốc. Nhiều người Hàn Quốc đến thẳng đây thay vì Nội khoa nếu cảm lạnh chủ yếu ở mũi hoặc họng."
        }
    },
    {
        deptKorean: "정형외과",
        deptNative: {
            en: "Orthopedics",
            ja: "整形外科",
            zh: "骨科",
            th: "แผนกกระดูกและข้อ",
            ru: "Ортопедия",
            vi: "Khoa Chấn thương chỉnh hình"
        },
        symptoms: {
            en: "Sprained ankle, Back pain, Joint pain, Muscle cramps, Fractures",
            ja: "足首の捻挫、腰痛、関節痛、筋肉の痙攣、骨折",
            zh: "脚踝扭伤、背痛、关节痛、肌肉痉挛、骨折",
            th: "ข้อเท้าพลิก, ปวดหลัง, ปวดข้อ, ตะคริว, กระดูกหัก",
            ru: "Растяжение лодыжки, Боль в спине, Боль в суставах, Мышечные спазмы, Переломы",
            vi: "Bong gân mắt cá chân, Đau lưng, Đau khớp, Chuột rút, Gãy xương"
        },
        desc: {
            en: "Orthopedics (Jeong-hyeong-oe-gwa) deals with bones, joints, and muscles. They also provide physical therapy programs which are partially covered by Korean health insurance.",
            ja: "整形外科(チョンヒョンウェグァ)は骨、関節、筋肉を扱います。韓国の健康保険が一部適用される物理治療（リハビリ）プログラムも提供しています。",
            zh: "骨科 (Jeong-hyeong-oe-gwa) 负责骨骼、关节和肌肉。他们还提供由韩国健康保险部分覆盖的物理治疗项目。",
            th: "แผนกกระดูกและข้อ (จองฮยองโอกวา) จัดการเรื่องกระดูก ข้อต่อ และกล้ามเนื้อ นอกจากนี้ยังมีโปรแกรมกายภาพบำบัดที่ประกันสุขภาพของเกาหลีครอบคลุมบางส่วน",
            ru: "Ортопедия (Джонг-хёнг-оэ-гва) занимается костями, суставами и мышцами. Они также предлагают программы физиотерапии, которые частично покрываются корейской медицинской страховкой.",
            vi: "Khoa Chấn thương chỉnh hình (Jeong-hyeong-oe-gwa) chuyên về xương, khớp và cơ bắp. Họ cũng cung cấp các chương trình vật lý trị liệu được bảo hiểm y tế Hàn Quốc chi trả một phần."
        }
    },
    {
        deptKorean: "피부과",
        deptNative: {
            en: "Dermatology",
            ja: "皮膚科",
            zh: "皮肤科",
            th: "แผนกผิวหนัง",
            ru: "Дерматология",
            vi: "Khoa Da liễu"
        },
        symptoms: {
            en: "Skin rash, Hives, Severe acne, Itching, Minor burns",
            ja: "発疹、じんましん、ひどいニキビ、かゆみ、軽いやけど",
            zh: "皮疹、荨麻疹、严重痤疮、瘙痒、轻微烧伤",
            th: "ผื่น, ลมพิษ, สิวรุนแรง, คัน, แผลไฟไหม้เล็กน้อย",
            ru: "Сыпь, Крапивница, Сильное акне, Зуд, Мелкие ожоги",
            vi: "Phát ban, Nổi mề đay, Mụn trứng cá nặng, Ngứa, Bỏng nhẹ"
        },
        desc: {
            en: "Dermatology (Pi-bu-gwa) treats both medical skin conditions and cosmetic procedures. Be aware that cosmetic treatments are not covered by health insurance.",
            ja: "皮膚科(ピブグァ)は医療的な皮膚疾患と美容処置の両方を行います。美容目的の治療は健康保険が適用されないことに注意してください。",
            zh: "皮肤科 (Pi-bu-gwa) 既治疗皮肤疾病也提供美容服务。请注意，美容治疗不在健康保险覆盖范围内。",
            th: "แผนกผิวหนัง (พีบูกวา) รักษาทั้งโรคผิวหนังและเสริมความงาม โปรดทราบว่าการรักษาเพื่อความงามไม่ครอบคลุมโดยประกันสุขภาพ",
            ru: "Дерматология (Пи-бу-гва) лечит как медицинские кожные заболевания, так и косметические процедуры. Учтите, что косметические процедуры не покрываются медицинской страховкой.",
            vi: "Khoa Da liễu (Pi-bu-gwa) điều trị cả bệnh da liễu và các thủ thuật thẩm mỹ. Lưu ý rằng các phương pháp điều trị thẩm mỹ không được bảo hiểm y tế chi trả."
        }
    },
    {
        deptKorean: "안과",
        deptNative: {
            en: "Ophthalmology",
            ja: "眼科",
            zh: "眼科",
            th: "จักษุวิทยา (แผนกตา)",
            ru: "Офтальмология",
            vi: "Khoa Mắt"
        },
        symptoms: {
            en: "Eye pain, Red eye, Pink eye, Blurry vision, Dry eyes",
            ja: "目の痛み、充血、結膜炎、視界のぼやけ、ドライアイ",
            zh: "眼痛、红眼、结膜炎、视力模糊、干眼症",
            th: "ปวดตา, ตาแดง, เยื่อบุตาอักเสบ, ตาพร่ามัว, ตาแห้ง",
            ru: "Боль в глазах, Покраснение глаз, Конъюнктивит, Нечеткое зрение, Сухость глаз",
            vi: "Đau mắt, Đỏ mắt, Đau mắt đỏ, Mờ mắt, Khô mắt"
        },
        desc: {
            en: "Ophthalmology (An-gwa) treats all eye-related issues. If you have an eye infection like pink eye, or need an eye exam for glasses, visit here.",
            ja: "眼科(アングァ)は目に関するすべての問題に対応します。結膜炎などの感染症や、メガネのための視力検査が必要な場合はここを受診してください。",
            zh: "眼科 (An-gwa) 治疗所有与眼睛相关的问题。如果您有红眼病等眼部感染，或者需要验光配镜，请来这里。",
            th: "แผนกตา (อันกวา) รักษาปัญหาเกี่ยวกับตาทั้งหมด หากคุณติดเชื้อที่ตาเช่นตาแดง หรือต้องการตรวจสายตาเพื่อตัดแว่น ให้มาที่นี่",
            ru: "Офтальмология (Ан-гва) лечит все заболевания глаз. Если у вас глазная инфекция (конъюнктивит) или вам нужно проверить зрение для очков, обращайтесь сюда.",
            vi: "Khoa Mắt (An-gwa) điều trị tất cả các vấn đề liên quan đến mắt. Nếu bạn bị nhiễm trùng mắt như đau mắt đỏ hoặc cần khám mắt để đo kính, hãy đến đây."
        }
    },
    {
        deptKorean: "치과",
        deptNative: {
            en: "Dentistry",
            ja: "歯科",
            zh: "牙科",
            th: "ทันตกรรม (คลินิกทำฟัน)",
            ru: "Стоматология",
            vi: "Nha khoa"
        },
        symptoms: {
            en: "Toothache, Bleeding gums, Cavities, Scaling (Teeth cleaning)",
            ja: "歯痛、歯茎の出血、虫歯、スケーリング（歯石除去）",
            zh: "牙痛、牙龈出血、蛀牙、洗牙",
            th: "ปวดฟัน, เหงือกเลือดออก, ฟันผุ, ขูดหินปูน",
            ru: "Зубная боль, Кровоточивость десен, Кариес, Чистка зубов (Скейлинг)",
            vi: "Đau răng, Chảy máu chân răng, Sâu răng, Lấy cao răng"
        },
        desc: {
            en: "Dentistry (Chi-gwa) treats teeth and gums. Note that annual scaling (teeth cleaning) is highly subsidized by Korean National Health Insurance and is very affordable.",
            ja: "歯科(チグァ)は歯と歯茎を治療します。年に1回のスケーリング(歯石除去)は韓国の国民健康保険が適用され、非常に安く受けられます。",
            zh: "牙科 (Chi-gwa) 治疗牙齿和牙龈。请注意，每年一次的洗牙受到韩国国民健康保险的高额补贴，价格非常便宜。",
            th: "คลินิกทำฟัน (ชิกวา) รักษาฟันและเหงือก โปรดทราบว่าการขูดหินปูนประจำปีได้รับการอุดหนุนจากประกันสุขภาพของเกาหลีทำให้มีราคาถูกมาก",
            ru: "Стоматология (Чи-гва) лечит зубы и десны. Обратите внимание, что ежегодная чистка зубов субсидируется корейской страховкой и стоит очень дешево.",
            vi: "Nha khoa (Chi-gwa) điều trị răng và nướu. Lưu ý rằng việc lấy cao răng hàng năm được bảo hiểm y tế Hàn Quốc trợ giá và rất rẻ."
        }
    },
    {
        deptKorean: "산부인과",
        deptNative: {
            en: "OB/GYN (Women's Health)",
            ja: "産婦人科",
            zh: "妇产科",
            th: "สูตินรีเวช (สุขภาพสตรี)",
            ru: "Гинекология",
            vi: "Sản phụ khoa"
        },
        symptoms: {
            en: "Irregular periods, Pregnancy, Vaginitis, Women's checkup",
            ja: "生理不順、妊娠、膣炎、女性の健康診断",
            zh: "月经不调、怀孕、阴道炎、女性健康检查",
            th: "ประจำเดือนมาไม่ปกติ, การตั้งครรภ์, ช่องคลอดอักเสบ, การตรวจสุขภาพสตรี",
            ru: "Нерегулярные месячные, Беременность, Вагинит, Женский осмотр",
            vi: "Kinh nguyệt không đều, Mang thai, Viêm âm đạo, Khám phụ khoa"
        },
        desc: {
            en: "OB/GYN (San-bu-in-gwa) is for women's health. In Korea, unmarried women also visit freely for regular checkups or minor issues like vaginitis.",
            ja: "産婦人科(サンブイングァ)は女性の健康のための科です。韓国では未婚女性も定期検診や膣炎などの軽い症状で気軽に受診します。",
            zh: "妇产科 (San-bu-in-gwa) 负责女性健康。在韩国，未婚女性也经常来做定期检查或治疗阴道炎等小问题。",
            th: "สูตินรีเวช (ซานบูอินกวา) สำหรับสุขภาพสตรี ในเกาหลีผู้หญิงที่ยังไม่แต่งงานก็สามารถมาตรวจสุขภาพประจำปีหรือรักษาอาการทั่วไปได้ตามปกติ",
            ru: "Гинекология (Сан-бу-ин-гва) заботится о женском здоровье. В Корее незамужние женщины также свободно посещают ее для регулярных осмотров или мелких проблем.",
            vi: "Sản phụ khoa (San-bu-in-gwa) dành cho sức khỏe phụ nữ. Ở Hàn Quốc, phụ nữ chưa kết hôn cũng tự do đến khám sức khỏe định kỳ hoặc các vấn đề nhỏ."
        }
    },
    {
        deptKorean: "비뇨기과",
        deptNative: {
            en: "Urology (Men's Health)",
            ja: "泌尿器科",
            zh: "泌尿科",
            th: "ระบบทางเดินปัสสาวะ (สุขภาพเพศชาย)",
            ru: "Урология",
            vi: "Tiết niệu"
        },
        symptoms: {
            en: "Painful urination, Kidney stones, Prostate issues",
            ja: "排尿痛、尿路結石、前立腺の問題",
            zh: "排尿疼痛、肾结石、前列腺问题",
            th: "ปัสสาวะเจ็บ, นิ่วในไต, ปัญหาต่อมลูกหมาก",
            ru: "Боль при мочеиспускании, Камни в почках, Проблемы с простатой",
            vi: "Tiểu buốt, Sỏi thận, Vấn đề tuyến tiền liệt"
        },
        desc: {
            en: "Urology (Bi-nyo-gi-gwa) deals with the urinary tract and men's health. Don't hesitate to visit if you have pain during urination.",
            ja: "泌尿器科(ピニョギグァ)は尿路と男性の健康を扱います。排尿時に痛みがある場合はためらわずに受診してください。",
            zh: "泌尿科 (Bi-nyo-gi-gwa) 治疗泌尿道和男性健康问题。如果您排尿时感到疼痛，请不要犹豫来这里就诊。",
            th: "แผนกระบบทางเดินปัสสาวะ (บีนโยกิกวา) ดูแลทางเดินปัสสาวะและสุขภาพเพศชาย อย่าลังเลที่จะมาตรวจหากคุณมีอาการปวดขณะปัสสาวะ",
            ru: "Урология (Би-нё-ги-гва) занимается мочевыводящими путями и мужским здоровьем. Не стесняйтесь обращаться при болях во время мочеиспускания.",
            vi: "Tiết niệu (Bi-nyo-gi-gwa) giải quyết các vấn đề về đường tiết niệu và sức khỏe nam giới. Đừng ngần ngại đến khám nếu bạn bị đau khi đi tiểu."
        }
    },
    {
        deptKorean: "신경과",
        deptNative: {
            en: "Neurology",
            ja: "神経科",
            zh: "神经科",
            th: "แผนกประสาทวิทยา",
            ru: "Неврология",
            vi: "Khoa Thần kinh"
        },
        symptoms: {
            en: "Severe Migraine, Persistent Dizziness, Numbness, Seizures",
            ja: "ひどい偏頭痛、続くめまい、しびれ、けいれん",
            zh: "严重偏头痛、持续头晕、麻木、癫痫发作",
            th: "ไมเกรนรุนแรง, เวียนหัวอย่างต่อเนื่อง, อาการชา, ชัก",
            ru: "Сильная мигрень, Постоянное головокружение, Онемение, Судороги",
            vi: "Đau nửa đầu dữ dội, Chóng mặt kéo dài, Tê, Co giật"
        },
        desc: {
            en: "Neurology (Sin-gyeong-gwa) focuses on the brain and nervous system. If you have an unusually severe headache or prolonged dizziness, visit here instead of Internal Medicine.",
            ja: "神経科(シンギョングァ)は脳と神経系を専門としています。異常に激しい頭痛や長引くめまいがある場合は、内科ではなくここを受診してください。",
            zh: "神经科 (Sin-gyeong-gwa) 专注于大脑和神经系统。如果您有异常严重的头痛或持续的头晕，请来这里而不是内科。",
            th: "แผนกประสาทวิทยา (ชินกยองกวา) มุ่งเน้นไปที่สมองและระบบประสาท หากคุณมีอาการปวดหัวรุนแรงผิดปกติหรือเวียนหัวเป็นเวลานาน ให้มาที่นี่แทนแผนกอายุรกรรม",
            ru: "Неврология (Син-гёнг-гва) специализируется на мозге и нервной системе. Если у вас необычно сильная головная боль или длительное головокружение, обращайтесь сюда, а не в терапевтическое отделение.",
            vi: "Khoa Thần kinh (Sin-gyeong-gwa) tập trung vào não và hệ thần kinh. Nếu bạn bị đau đầu dữ dội bất thường hoặc chóng mặt kéo dài, hãy đến đây thay vì Nội khoa."
        }
    },
    {
        deptKorean: "정신건강의학과",
        deptNative: {
            en: "Psychiatry",
            ja: "精神健康医学科",
            zh: "精神健康医学科 (精神科)",
            th: "จิตเวชศาสตร์",
            ru: "Психиатрия",
            vi: "Tâm thần học"
        },
        symptoms: {
            en: "Severe insomnia, Depression, Anxiety, Panic attacks",
            ja: "ひどい不眠症、うつ病、不安、パニック障害",
            zh: "严重失眠、抑郁、焦虑、恐慌发作",
            th: "นอนไม่หลับรุนแรง, ซึมเศร้า, วิตกกังวล, อาการแพนิค",
            ru: "Сильная бессонница, Депрессия, Тревожность, Панические атаки",
            vi: "Mất ngủ nặng, Trầm cảm, Lo âu, Các cơn hoảng loạn"
        },
        desc: {
            en: "Psychiatry (Jeong-sin-geon-gang-ui-hak-gwa) treats mental health. Getting a prescription for sleep medication or anxiety pills in Korea requires a visit here.",
            ja: "精神健康医学科(チョンシンコンガンウィハックァ)は心の健康を治療します。韓国で睡眠薬や抗不安薬の処方を受けるにはここを受診する必要があります。",
            zh: "精神健康医学科 (Jeong-sin-geon-gang-ui-hak-gwa) 治疗心理健康。在韩国，获取安眠药或抗焦虑药的处方必须来这里。",
            th: "แผนกจิตเวช (จองชินกอนกังอึยฮักกวา) รักษาปัญหาสุขภาพจิต การจะรับยาแก้โรคนอนไม่หลับหรือยาลดความวิตกกังวลในเกาหลีจำเป็นต้องมาที่นี่",
            ru: "Психиатрия (Джонг-син-гон-ганг-уй-хак-гва) лечит психическое здоровье. Для получения рецепта на снотворное или таблетки от тревожности в Корее нужно обратиться сюда.",
            vi: "Khoa Tâm thần (Jeong-sin-geon-gang-ui-hak-gwa) điều trị sức khỏe tâm thần. Để được kê đơn thuốc ngủ hoặc thuốc chống lo âu ở Hàn Quốc, bạn phải đến đây."
        }
    }
];

let currentLang = 'en';

const ui = {
    title: document.getElementById('page-title'),
    subtitle: document.getElementById('page-subtitle'),
    intro: document.getElementById('info-intro'),
    list: document.getElementById('info-list')
};

function init() {
    renderApp();
}

window.changeLanguage = function(lang, event) {
    currentLang = lang;
    
    // update buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    if (event && event.target) {
        event.target.classList.add('active');
    }
    
    renderApp();
}

function renderApp() {
    const dict = dictionary[currentLang];
    
    // Update Header and Intro
    ui.title.textContent = "🏥 " + dict.title;
    ui.subtitle.textContent = dict.subtitle;
    ui.intro.textContent = dict.intro;

    // Render Info Cards
    ui.list.innerHTML = '';
    
    infoData.forEach(item => {
        const card = document.createElement('div');
        card.className = 'info-card';
        
        card.innerHTML = `
            <div class="symptoms-title">${dict.symptomsLabel}</div>
            <div class="symptoms-text">${item.symptoms[currentLang]}</div>
            
            <div class="dept-box">
                <div class="dept-box-label">${dict.visitLabel}</div>
                <div class="dept-name">${item.deptNative[currentLang]}</div>
                <div class="dept-name" style="font-size: 18px; margin-top: 5px;">(${item.deptKorean})</div>
            </div>
            
            <div class="dept-desc">${item.desc[currentLang]}</div>
        `;
        
        ui.list.appendChild(card);
    });
}

init();
