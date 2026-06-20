const grammarDB = {
    middle: [
        {
            title: "1. 현재진행형 (Present Continuous)",
            explanation: "현재 진행 중이거나 일어나고 있는 동작을 나타냅니다. 형태는 「be동사(am/are/is) + 동사원형-ing」 입니다.",
            examples: [
                { en: "I am studying English now.", ko: "나는 지금 영어를 공부하고 있다." },
                { en: "She is not playing the piano.", ko: "그녀는 피아노를 치고 있지 않다." },
                { en: "What are you doing here?", ko: "너는 여기서 무엇을 하고 있니?" }
            ]
        },
        {
            title: "2. 과거진행형 (Past Continuous)",
            explanation: "과거의 특정 시점에 진행 중이었던 동작을 나타냅니다. 형태는 「be동사의 과거형(was/were) + 동사원형-ing」 입니다.",
            examples: [
                { en: "I was reading a book when he called.", ko: "그가 전화했을 때 나는 책을 읽고 있었다." },
                { en: "They were playing soccer yesterday afternoon.", ko: "그들은 어제 오후에 축구를 하고 있었다." }
            ]
        },
        {
            title: "3. to부정사의 명사적 용법",
            explanation: "to부정사가 문장에서 명사처럼 쓰여 주어, 목적어, 보어 역할을 합니다. '~하는 것'으로 해석됩니다.",
            examples: [
                { en: "To read books is a good habit. (주어)", ko: "책을 읽는 것은 좋은 습관이다." },
                { en: "I want to buy a new car. (목적어)", ko: "나는 새 차를 사고 싶다." },
                { en: "My dream is to travel around the world. (보어)", ko: "내 꿈은 전 세계를 여행하는 것이다." }
            ]
        },
        {
            title: "4. to부정사의 형용사적 용법",
            explanation: "to부정사가 앞의 명사나 대명사를 꾸며주는 형용사 역할을 합니다. '~할, ~하는'으로 해석됩니다.",
            examples: [
                { en: "I have a lot of homework to do.", ko: "나는 해야 할 숙제가 많다." },
                { en: "Would you like something to drink?", ko: "마실 것 좀 드릴까요?" }
            ]
        },
        {
            title: "5. to부정사의 부사적 용법",
            explanation: "to부정사가 부사처럼 쓰여 목적(~하기 위해), 감정의 원인(~해서), 결과 등을 나타냅니다.",
            examples: [
                { en: "I went to the library to borrow books. (목적)", ko: "나는 책을 빌리기 위해 도서관에 갔다." },
                { en: "I am glad to see you again. (감정의 원인)", ko: "당신을 다시 보게 되어 기쁩니다." }
            ]
        },
        {
            title: "6. 동명사 (Gerund)",
            explanation: "동사원형에 -ing를 붙여 명사 역할을 하게 만든 것으로, '~하는 것'으로 해석됩니다. 주어, 목적어, 전치사의 목적어로 쓰입니다.",
            examples: [
                { en: "Taking pictures is my hobby.", ko: "사진을 찍는 것은 내 취미이다." },
                { en: "She enjoys listening to music.", ko: "그녀는 음악 듣는 것을 즐긴다." },
                { en: "He is good at playing tennis.", ko: "그는 테니스 치는 것을 잘한다." }
            ]
        },
        {
            title: "7. 비교급과 최상급",
            explanation: "비교급은 둘 사이의 비교(형용사/부사-er + than)를, 최상급은 셋 이상에서의 최고(the + 형용사/부사-est + in/of)를 나타냅니다.",
            examples: [
                { en: "This box is heavier than that one.", ko: "이 상자가 저것보다 더 무겁다." },
                { en: "Mt. Everest is the highest mountain in the world.", ko: "에베레스트 산은 세계에서 가장 높은 산이다." }
            ]
        },
        {
            title: "8. 주격 관계대명사 (who, which, that)",
            explanation: "관계대명사절 안에서 주어 역할을 하며, 앞의 명사(선행사)를 꾸며줍니다. 선행사가 사람이면 who, 사물이면 which를 씁니다.",
            examples: [
                { en: "I know the boy who is playing the guitar.", ko: "나는 기타를 치고 있는 그 소년을 안다." },
                { en: "Look at the dog which has long ears.", ko: "긴 귀를 가진 개를 봐라." }
            ]
        },
        {
            title: "9. 목적격 관계대명사 (whom, which, that)",
            explanation: "관계대명사절 안에서 목적어 역할을 하며, 주로 생략할 수 있습니다.",
            examples: [
                { en: "The book (which) I read yesterday was interesting.", ko: "내가 어제 읽은 그 책은 재미있었다." },
                { en: "The man (whom) we met was very kind.", ko: "우리가 만났던 그 남자는 매우 친절했다." }
            ]
        },
        {
            title: "10. 수동태 (Passive Voice)",
            explanation: "주어가 어떤 동작을 '당하는' 입장을 나타낼 때 씁니다. 형태는 「be동사 + 과거분사(p.p.) + by 행위자」 입니다.",
            examples: [
                { en: "The window was broken by Tom.", ko: "그 창문은 톰에 의해 깨졌다." },
                { en: "English is spoken all over the world.", ko: "영어는 전 세계에서 사용된다." }
            ]
        }
    ],
    high: [
        {
            title: "1. 과거완료 (Past Perfect)",
            explanation: "과거의 어떤 시점보다 먼저 일어난 일을 나타낼 때 사용합니다 (대과거). 형태는 「had + 과거분사(p.p.)」 입니다.",
            examples: [
                { en: "When I arrived at the station, the train had already left.", ko: "내가 역에 도착했을 때, 기차는 이미 떠나고 없었다." },
                { en: "I lost the watch which my father had bought for me.", ko: "나는 아버지가 사주셨던 시계를 잃어버렸다." }
            ]
        },
        {
            title: "2. 미래완료 (Future Perfect)",
            explanation: "미래의 어느 시점까지 동작이나 상태가 완료, 경험, 계속될 것임을 나타냅니다. 형태는 「will have + 과거분사(p.p.)」 입니다.",
            examples: [
                { en: "I will have finished this work by tomorrow.", ko: "나는 내일까지 이 일을 끝마칠 것이다." },
                { en: "She will have lived here for 10 years next month.", ko: "다음 달이면 그녀가 이곳에 산 지 10년이 된다." }
            ]
        },
        {
            title: "3. 가정법 과거 (Subjunctive Past)",
            explanation: "현재의 사실과 반대되거나 실현 불가능한 일을 가정할 때 씁니다. 「If + 주어 + 과거동사/were, 주어 + 조동사 과거(would/could) + 동사원형」",
            examples: [
                { en: "If I were a bird, I could fly to you.", ko: "내가 새라면 너에게 날아갈 수 있을 텐데." },
                { en: "If I had enough money, I would buy the house.", ko: "내게 돈이 충분히 있다면, 그 집을 살 텐데." }
            ]
        },
        {
            title: "4. 가정법 과거완료 (Subjunctive Past Perfect)",
            explanation: "과거의 사실과 반대되는 일을 가정할 때 씁니다. 「If + 주어 + had p.p., 주어 + 조동사 과거 + have p.p.」",
            examples: [
                { en: "If I had studied harder, I would have passed the exam.", ko: "내가 더 열심히 공부했더라면 시험에 합격했을 텐데." },
                { en: "If he had known the truth, he would not have been angry.", ko: "그가 진실을 알았더라면 화내지 않았을 텐데." }
            ]
        },
        {
            title: "5. 분사구문 (Participle Clauses)",
            explanation: "접속사와 주어를 생략하고 동사를 현재분사(V-ing) 형태로 바꾸어 문장을 간결하게 만드는 구문입니다.",
            examples: [
                { en: "Seeing me, she ran away. (= When she saw me, ~)", ko: "나를 보자마자 그녀는 도망쳤다." },
                { en: "Not knowing what to do, I asked for help.", ko: "무엇을 해야 할지 몰라서 나는 도움을 요청했다." }
            ]
        },
        {
            title: "6. 관계부사 (Where, When, Why, How)",
            explanation: "접속사와 부사의 역할을 동시에 하며 선행사를 수식합니다. 관계부사 뒤에는 완전한 문장이 옵니다.",
            examples: [
                { en: "This is the house where I was born.", ko: "이곳이 내가 태어난 집이다." },
                { en: "I don't know the reason why she is crying.", ko: "나는 그녀가 우는 이유를 모른다." }
            ]
        },
        {
            title: "7. 복합관계대명사 (whoever, whichever, whatever)",
            explanation: "관계대명사에 -ever를 붙인 형태로, 명사절(~하는 누구든, 무엇이든)이나 양보 부사절(누가 ~하더라도)을 이끕니다.",
            examples: [
                { en: "I will give this to whoever wants it.", ko: "이것을 원하는 누구에게든 주겠다." },
                { en: "Whatever happens, I will never give up.", ko: "무슨 일이 일어나더라도 나는 절대 포기하지 않을 것이다." }
            ]
        },
        {
            title: "8. 강조 구문 (It is/was ~ that ...)",
            explanation: "문장에서 주어, 목적어, 부사구를 강조할 때 It is와 that 사이에 강조하고 싶은 말을 넣습니다. (동사는 강조 불가)",
            examples: [
                { en: "It was Tom that(who) broke the window yesterday.", ko: "어제 창문을 깬 사람은 바로 톰이었다." },
                { en: "It was yesterday that Tom broke the window.", ko: "톰이 창문을 깬 것은 바로 어제였다." }
            ]
        },
        {
            title: "9. 도치 구문 (Inversion)",
            explanation: "부정어(never, hardly, little 등)나 장소 부사구가 문장 맨 앞으로 올 때 주어와 동사의 어순이 바뀝니다.",
            examples: [
                { en: "Never have I seen such a beautiful sunset.", ko: "그렇게 아름다운 일몰은 결코 본 적이 없다." },
                { en: "Hardly had I arrived when it started to rain.", ko: "내가 도착하자마자 비가 내리기 시작했다." }
            ]
        },
        {
            title: "10. 병렬 구조 (Parallelism)",
            explanation: "등위접속사(and, but, or)나 상관접속사에 의해 연결되는 어구들은 문법적, 논리적으로 같은 형태(품사)를 취해야 합니다.",
            examples: [
                { en: "She likes dancing, singing, and acting.", ko: "그녀는 춤추기, 노래하기, 연기하기를 좋아한다." },
                { en: "You must either stay here or go with him.", ko: "너는 여기에 머물거나 그와 함께 가거나 해야 한다." }
            ]
        }
    ]
};
