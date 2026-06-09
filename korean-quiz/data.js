const quizData = {
    restaurant: {
        title: "At the Restaurant (식당에서)",
        icon: "🍽️",
        questions: [
            {
                id: "r1",
                scenario: "You want to order food from the menu.",
                question: "여기요, _________ 주세요.",
                translation: "Excuse me, please give me the _________.",
                options: ["메뉴판 (Menu)", "계산서 (Bill)", "휴지 (Tissue)", "영수증 (Receipt)"],
                correct: 0,
                explanation: "'메뉴판' means menu. '계산서' is the bill, '휴지' is tissue, and '영수증' is receipt."
            },
            {
                id: "r2",
                scenario: "You want to ask for some water.",
                question: "_________ 좀 주시겠어요?",
                translation: "Could you please give me some _________?",
                options: ["불 (Fire)", "물 (Water)", "소금 (Salt)", "간장 (Soy sauce)"],
                correct: 1,
                explanation: "'물' means water. '불' means fire."
            },
            {
                id: "r3",
                scenario: "You finished eating and want to pay.",
                question: "_________ 해주세요.",
                translation: "Please _________.",
                options: ["주문 (Order)", "포장 (Takeout)", "계산 (Calculate/Pay)", "예약 (Reservation)"],
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
                options: ["머리 (Head)", "배 (Stomach)", "다리 (Leg)", "손 (Hand)"],
                correct: 0,
                explanation: "'머리' means head. '배' is stomach, '다리' is leg, '손' is hand."
            },
            {
                id: "h2",
                scenario: "You have a fever.",
                question: "_________이/가 많이 나요.",
                translation: "I have a lot of _________.",
                options: ["기침 (Cough)", "콧물 (Runny nose)", "열 (Fever)", "땀 (Sweat)"],
                correct: 2,
                explanation: "'열이 나다' means to have a fever."
            },
            {
                id: "h3",
                scenario: "You want to get a prescription.",
                question: "_________ 주세요.",
                translation: "Please give me the _________.",
                options: ["진단서 (Medical certificate)", "처방전 (Prescription)", "주사 (Injection)", "연고 (Ointment)"],
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
                options: ["어디예요 (Where)", "누구예요 (Who)", "얼마예요 (How much)", "언제예요 (When)"],
                correct: 2,
                explanation: "'얼마예요' means 'How much is it?'"
            },
            {
                id: "s2",
                scenario: "You want to pay with a credit card.",
                question: "_________ 결제할게요.",
                translation: "I will pay by _________.",
                options: ["현금 (Cash)", "카드 (Card)", "포인트 (Points)", "수표 (Check)"],
                correct: 1,
                explanation: "'카드' means card. '현금' means cash."
            },
            {
                id: "s3",
                scenario: "You don't need a plastic bag.",
                question: "_________ 안 주셔도 돼요.",
                translation: "You don't need to give me a _________.",
                options: ["영수증 (Receipt)", "봉투 (Bag)", "거스름돈 (Change)", "쿠폰 (Coupon)"],
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
                options: ["표 (Ticket)", "포스터 (Poster)", "의자 (Chair)", "시간 (Time)"],
                correct: 0,
                explanation: "'표' means ticket (also called '티켓')."
            },
            {
                id: "c2",
                scenario: "You are ordering popcorn at the snack bar.",
                question: "팝콘 _________ 맛으로 주세요.",
                translation: "Please give me _________ flavor popcorn.",
                options: ["매운 (Spicy)", "쓴 (Bitter)", "신 (Sour)", "달콤한 (Sweet)"],
                correct: 3,
                explanation: "Popcorn is typically sweet (달콤한) or salty (고소한/짠). '매운' means spicy."
            },
            {
                id: "c3",
                scenario: "You are looking for your seat inside the theater.",
                question: "제 _________가 어디인가요?",
                translation: "Where is my _________?",
                options: ["가방 (Bag)", "자리 (Seat)", "친구 (Friend)", "신발 (Shoes)"],
                correct: 1,
                explanation: "'자리' means seat or place."
            }
        ]
    }
};
