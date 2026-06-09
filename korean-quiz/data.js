const quizData = {
    daily: {
        title: "Daily Life (일상생활)",
        icon: "👋",
        questions: [
            {
                id: "d1",
                scenario: "You accidentally bump into someone on the street.",
                question: "아이고, _________.",
                translation: "Oops, _________.",
                options: ["감사합니다", "안녕하세요", "죄송합니다", "반갑습니다"],
                correct: 2,
                explanation: "'죄송합니다' means 'I am sorry'. '감사합니다' means thank you."
            },
            {
                id: "d2",
                scenario: "You are looking for the restroom in a cafe.",
                question: "_________이/가 어디예요?",
                translation: "Where is the _________?",
                options: ["화장실", "지하철", "편의점", "식당"],
                correct: 0,
                explanation: "'화장실' means restroom/toilet. '지하철' is subway, '편의점' is convenience store."
            },
            {
                id: "d3",
                scenario: "Someone helps you pick up your dropped wallet.",
                question: "정말 _________.",
                translation: "Thank you very much.",
                options: ["미안합니다", "감사합니다", "괜찮습니다", "몰라요"],
                correct: 1,
                explanation: "'감사합니다' means 'Thank you'. '미안합니다' means sorry, '괜찮습니다' means it's okay."
            }
        ]
    },
    restaurant: {
        title: "At the Restaurant (식당에서)",
        icon: "🍽️",
        questions: [
            {
                id: "r1",
                scenario: "You want to order food from the menu.",
                question: "여기요, _________ 주세요.",
                translation: "Excuse me, please give me the _________.",
                options: ["메뉴판", "계산서", "휴지", "영수증"],
                correct: 0,
                explanation: "'메뉴판' means menu. '계산서' is the bill, '휴지' is tissue, and '영수증' is receipt."
            },
            {
                id: "r2",
                scenario: "You want to ask for some water.",
                question: "_________ 좀 주시겠어요?",
                translation: "Could you please give me some _________?",
                options: ["불", "물", "소금", "간장"],
                correct: 1,
                explanation: "'물' means water. '불' means fire."
            },
            {
                id: "r3",
                scenario: "You finished eating and want to pay.",
                question: "_________ 해주세요.",
                translation: "Please _________.",
                options: ["주문", "포장", "계산", "예약"],
                correct: 2,
                explanation: "'계산' means calculation or paying the bill. '계산 해주세요' is the standard way to say 'Check, please'."
            }
        ]
    },
    hospital: {
        title: "At the Hospital (병원에서)",
        icon: "🏥",
        questions: [
            {
                id: "h1",
                scenario: "The doctor asks what's wrong. You have a headache.",
                question: "_________가 아파요.",
                translation: "My _________ hurts.",
                options: ["머리", "배", "다리", "손"],
                correct: 0,
                explanation: "'머리' means head. '배' is stomach, '다리' is leg, '손' is hand."
            },
            {
                id: "h2",
                scenario: "You have a fever.",
                question: "_________이/가 많이 나요.",
                translation: "I have a lot of _________.",
                options: ["기침", "콧물", "열", "땀"],
                correct: 2,
                explanation: "'열이 나다' means to have a fever."
            },
            {
                id: "h3",
                scenario: "You want to get a prescription.",
                question: "_________ 주세요.",
                translation: "Please give me the _________.",
                options: ["진단서", "처방전", "주사", "연고"],
                correct: 1,
                explanation: "'처방전' means prescription, which you need to get medicine at the pharmacy."
            }
        ]
    },
    store: {
        title: "At the Store (가게에서)",
        icon: "🏪",
        questions: [
            {
                id: "s1",
                scenario: "You want to know the price of an item.",
                question: "이거 _________?",
                translation: "_________ is this?",
                options: ["어디예요", "누구예요", "얼마예요", "언제예요"],
                correct: 2,
                explanation: "'얼마예요' means 'How much is it?'"
            },
            {
                id: "s2",
                scenario: "You want to pay with a credit card.",
                question: "_________ 결제할게요.",
                translation: "I will pay by _________.",
                options: ["현금", "카드", "포인트", "수표"],
                correct: 1,
                explanation: "'카드' means card. '현금' means cash."
            },
            {
                id: "s3",
                scenario: "You don't need a plastic bag.",
                question: "_________ 안 주셔도 돼요.",
                translation: "You don't need to give me a _________.",
                options: ["영수증", "봉투", "거스름돈", "쿠폰"],
                correct: 1,
                explanation: "'봉투' means bag or envelope. In stores, it usually refers to a plastic or paper shopping bag."
            }
        ]
    },
    cinema: {
        title: "At the Cinema (영화관에서)",
        icon: "🎬",
        questions: [
            {
                id: "c1",
                scenario: "You want to buy tickets for a movie.",
                question: "영화 _________ 두 장 주세요.",
                translation: "Please give me two movie _________.",
                options: ["표", "포스터", "의자", "시간"],
                correct: 0,
                explanation: "'표' means ticket (also called '티켓')."
            },
            {
                id: "c2",
                scenario: "You are ordering popcorn at the snack bar.",
                question: "팝콘 _________ 맛으로 주세요.",
                translation: "Please give me _________ flavor popcorn.",
                options: ["매운", "쓴", "신", "달콤한"],
                correct: 3,
                explanation: "Popcorn is typically sweet (달콤한) or salty (고소한/짠). '매운' means spicy."
            },
            {
                id: "c3",
                scenario: "You are looking for your seat inside the theater.",
                question: "제 _________가 어디인가요?",
                translation: "Where is my _________?",
                options: ["가방", "자리", "친구", "신발"],
                correct: 1,
                explanation: "'자리' means seat or place."
            }
        ]
    }
};
