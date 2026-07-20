const grammarDB = {
    en: {
        basic: [
            {
                title: "1. 현재진행형 (Present Continuous)",
                explanation: "현재 진행 중이거나 일어나고 있는 동작을 나타냅니다. 형태는 「be동사(am/are/is) + 동사원형-ing」 입니다.",
                examples: [
                    { original: "I am studying English now.", translated: "나는 지금 영어를 공부하고 있다." },
                    { original: "She is not playing the piano.", translated: "그녀는 피아노를 치고 있지 않다." },
                    { original: "What are you doing here?", translated: "너는 여기서 무엇을 하고 있니?" }
                ]
            },
            {
                title: "2. 과거진행형 (Past Continuous)",
                explanation: "과거의 특정 시점에 진행 중이었던 동작을 나타냅니다. 형태는 「be동사의 과거형(was/were) + 동사원형-ing」 입니다.",
                examples: [
                    { original: "I was reading a book when he called.", translated: "그가 전화했을 때 나는 책을 읽고 있었다." },
                    { original: "They were playing soccer yesterday afternoon.", translated: "그들은 어제 오후에 축구를 하고 있었다." }
                ]
            },
            {
                title: "3. to부정사의 명사적 용법",
                explanation: "to부정사가 문장에서 명사처럼 쓰여 주어, 목적어, 보어 역할을 합니다. '~하는 것'으로 해석됩니다.",
                examples: [
                    { original: "To read books is a good habit. (주어)", translated: "책을 읽는 것은 좋은 습관이다." },
                    { original: "I want to buy a new car. (목적어)", translated: "나는 새 차를 사고 싶다." },
                    { original: "My dream is to travel around the world. (보어)", translated: "내 꿈은 전 세계를 여행하는 것이다." }
                ]
            },
            {
                title: "4. to부정사의 형용사적 용법",
                explanation: "to부정사가 앞의 명사나 대명사를 꾸며주는 형용사 역할을 합니다. '~할, ~하는'으로 해석됩니다.",
                examples: [
                    { original: "I have a lot of homework to do.", translated: "나는 해야 할 숙제가 많다." },
                    { original: "Would you like something to drink?", translated: "마실 것 좀 드릴까요?" }
                ]
            },
            {
                title: "5. to부정사의 부사적 용법",
                explanation: "to부정사가 부사처럼 쓰여 목적(~하기 위해), 감정의 원인(~해서), 결과 등을 나타냅니다.",
                examples: [
                    { original: "I went to the library to borrow books. (목적)", translated: "나는 책을 빌리기 위해 도서관에 갔다." },
                    { original: "I am glad to see you again. (감정의 원인)", translated: "당신을 다시 보게 되어 기쁩니다." }
                ]
            },
            {
                title: "6. 동명사 (Gerund)",
                explanation: "동사원형에 -ing를 붙여 명사 역할을 하게 만든 것으로, '~하는 것'으로 해석됩니다. 주어, 목적어, 전치사의 목적어로 쓰입니다.",
                examples: [
                    { original: "Taking pictures is my hobby.", translated: "사진을 찍는 것은 내 취미이다." },
                    { original: "She enjoys listening to music.", translated: "그녀는 음악 듣는 것을 즐긴다." },
                    { original: "He is good at playing tennis.", translated: "그는 테니스 치는 것을 잘한다." }
                ]
            },
            {
                title: "7. 비교급과 최상급",
                explanation: "비교급은 둘 사이의 비교(형용사/부사-er + than)를, 최상급은 셋 이상에서의 최고(the + 형용사/부사-est + in/of)를 나타냅니다.",
                examples: [
                    { original: "This box is heavier than that one.", translated: "이 상자가 저것보다 더 무겁다." },
                    { original: "Mt. Everest is the highest mountain in the world.", translated: "에베레스트 산은 세계에서 가장 높은 산이다." }
                ]
            },
            {
                title: "8. 주격 관계대명사 (who, which, that)",
                explanation: "관계대명사절 안에서 주어 역할을 하며, 앞의 명사(선행사)를 꾸며줍니다. 선행사가 사람이면 who, 사물이면 which를 씁니다.",
                examples: [
                    { original: "I know the boy who is playing the guitar.", translated: "나는 기타를 치고 있는 그 소년을 안다." },
                    { original: "Look at the dog which has long ears.", translated: "긴 귀를 가진 개를 봐라." }
                ]
            },
            {
                title: "9. 목적격 관계대명사 (whom, which, that)",
                explanation: "관계대명사절 안에서 목적어 역할을 하며, 주로 생략할 수 있습니다.",
                examples: [
                    { original: "The book (which) I read yesterday was interesting.", translated: "내가 어제 읽은 그 책은 재미있었다." },
                    { original: "The man (whom) we met was very kind.", translated: "우리가 만났던 그 남자는 매우 친절했다." }
                ]
            },
            {
                title: "10. 수동태 (Passive Voice)",
                explanation: "주어가 어떤 동작을 '당하는' 입장을 나타낼 때 씁니다. 형태는 「be동사 + 과거분사(p.p.) + by 행위자」 입니다.",
                examples: [
                    { original: "The window was broken by Tom.", translated: "그 창문은 톰에 의해 깨졌다." },
                    { original: "English is spoken all over the world.", translated: "영어는 전 세계에서 사용된다." }
                ]
            }
        ],
        advanced: [
            {
                title: "1. 과거완료 (Past Perfect)",
                explanation: "과거의 어떤 시점보다 먼저 일어난 일을 나타낼 때 사용합니다 (대과거). 형태는 「had + 과거분사(p.p.)」 입니다.",
                examples: [
                    { original: "When I arrived at the station, the train had already left.", translated: "내가 역에 도착했을 때, 기차는 이미 떠나고 없었다." },
                    { original: "I lost the watch which my father had bought for me.", translated: "나는 아버지가 사주셨던 시계를 잃어버렸다." }
                ]
            },
            {
                title: "2. 미래완료 (Future Perfect)",
                explanation: "미래의 어느 시점까지 동작이나 상태가 완료, 경험, 계속될 것임을 나타냅니다. 형태는 「will have + 과거분사(p.p.)」 입니다.",
                examples: [
                    { original: "I will have finished this work by tomorrow.", translated: "나는 내일까지 이 일을 끝마칠 것이다." },
                    { original: "She will have lived here for 10 years next month.", translated: "다음 달이면 그녀가 이곳에 산 지 10년이 된다." }
                ]
            },
            {
                title: "3. 가정법 과거 (Subjunctive Past)",
                explanation: "현재의 사실과 반대되거나 실현 불가능한 일을 가정할 때 씁니다. 「If + 주어 + 과거동사/were, 주어 + 조동사 과거(would/could) + 동사원형」",
                examples: [
                    { original: "If I were a bird, I could fly to you.", translated: "내가 새라면 너에게 날아갈 수 있을 텐데." },
                    { original: "If I had enough money, I would buy the house.", translated: "내게 돈이 충분히 있다면, 그 집을 살 텐데." }
                ]
            },
            {
                title: "4. 가정법 과거완료 (Subjunctive Past Perfect)",
                explanation: "과거의 사실과 반대되는 일을 가정할 때 씁니다. 「If + 주어 + had p.p., 주어 + 조동사 과거 + have p.p.」",
                examples: [
                    { original: "If I had studied harder, I would have passed the exam.", translated: "내가 더 열심히 공부했더라면 시험에 합격했을 텐데." },
                    { original: "If he had known the truth, he would not have been angry.", translated: "그가 진실을 알았더라면 화내지 않았을 텐데." }
                ]
            },
            {
                title: "5. 분사구문 (Participle Clauses)",
                explanation: "접속사와 주어를 생략하고 동사를 현재분사(V-ing) 형태로 바꾸어 문장을 간결하게 만드는 구문입니다.",
                examples: [
                    { original: "Seeing me, she ran away. (= When she saw me, ~)", translated: "나를 보자마자 그녀는 도망쳤다." },
                    { original: "Not knowing what to do, I asked for help.", translated: "무엇을 해야 할지 몰라서 나는 도움을 요청했다." }
                ]
            },
            {
                title: "6. 관계부사 (Where, When, Why, How)",
                explanation: "접속사와 부사의 역할을 동시에 하며 선행사를 수식합니다. 관계부사 뒤에는 완전한 문장이 옵니다.",
                examples: [
                    { original: "This is the house where I was born.", translated: "이곳이 내가 태어난 집이다." },
                    { original: "I don't know the reason why she is crying.", translated: "나는 그녀가 우는 이유를 모른다." }
                ]
            },
            {
                title: "7. 복합관계대명사 (whoever, whichever, whatever)",
                explanation: "관계대명사에 -ever를 붙인 형태로, 명사절(~하는 누구든, 무엇이든)이나 양보 부사절(누가 ~하더라도)을 이끕니다.",
                examples: [
                    { original: "I will give this to whoever wants it.", translated: "이것을 원하는 누구에게든 주겠다." },
                    { original: "Whatever happens, I will never give up.", translated: "무슨 일이 일어나더라도 나는 절대 포기하지 않을 것이다." }
                ]
            },
            {
                title: "8. 강조 구문 (It is/was ~ that ...)",
                explanation: "문장에서 주어, 목적어, 부사구를 강조할 때 It is와 that 사이에 강조하고 싶은 말을 넣습니다. (동사는 강조 불가)",
                examples: [
                    { original: "It was Tom that(who) broke the window yesterday.", translated: "어제 창문을 깬 사람은 바로 톰이었다." },
                    { original: "It was yesterday that Tom broke the window.", translated: "톰이 창문을 깬 것은 바로 어제였다." }
                ]
            },
            {
                title: "9. 도치 구문 (Inversion)",
                explanation: "부정어(never, hardly, little 등)나 장소 부사구가 문장 맨 앞으로 올 때 주어와 동사의 어순이 바뀝니다.",
                examples: [
                    { original: "Never have I seen such a beautiful sunset.", translated: "그렇게 아름다운 일몰은 결코 본 적이 없다." },
                    { original: "Hardly had I arrived when it started to rain.", translated: "내가 도착하자마자 비가 내리기 시작했다." }
                ]
            },
            {
                title: "10. 병렬 구조 (Parallelism)",
                explanation: "등위접속사(and, but, or)나 상관접속사에 의해 연결되는 어구들은 문법적, 논리적으로 같은 형태(품사)를 취해야 합니다.",
                examples: [
                    { original: "She likes dancing, singing, and acting.", translated: "그녀는 춤추기, 노래하기, 연기하기를 좋아한다." },
                    { original: "You must either stay here or go with him.", translated: "너는 여기에 머물거나 그와 함께 가거나 해야 한다." }
                ]
            }
        ]
    },
    ja: {
        basic: [
            {
                title: "1. 일본어 동사의 그룹 분류 (1,2,3그룹)",
                explanation: "일본어 동사는 활용 형태에 따라 3가지 그룹으로 나뉩니다. 1그룹(う단 끝남), 2그룹(る앞이 い/え단), 3그룹(する, くる 불규칙).",
                examples: [
                    { original: "行く (iku) - 1그룹 동사", translated: "가다" },
                    { original: "食べる (taberu) - 2그룹 동사", translated: "먹다" },
                    { original: "勉強する (benkyousuru) - 3그룹 동사", translated: "공부하다" }
                ]
            },
            {
                title: "2. ~ます (~합니다)",
                explanation: "동사를 정중하게 표현하는 '정중체'입니다. 1그룹은 う단을 い단으로 바꾸고 ます, 2그룹은 る를 떼고 ます, 3그룹은 します/きます.",
                examples: [
                    { original: "私は 学校へ 行きます。", translated: "나는 학교에 갑니다." },
                    { original: "毎日 パンを 食べます。", translated: "매일 빵을 먹습니다." }
                ]
            },
            {
                title: "3. -て형 (~하고, ~해서)",
                explanation: "문장을 연결하거나 부탁할 때 사용합니다. 1그룹은 어미에 따라 활용(음편현상)이 다르고, 2/3그룹은 ます형과 규칙이 같습니다.",
                examples: [
                    { original: "本を 読んで、寝ました。", translated: "책을 읽고, 잤습니다." },
                    { original: "ちょっと 待って ください。", translated: "잠깐 기다려 주세요." }
                ]
            },
            {
                title: "4. -た형 (과거형: ~했다)",
                explanation: "동사의 과거형을 만들 때 사용하며 활용 규칙은 -て형과 완전히 동일합니다.",
                examples: [
                    { original: "昨日 映画を 見た。", translated: "어제 영화를 보았다." },
                    { original: "富士山に 登った ことが あります。", translated: "후지산에 등반한 적이 있습니다. (경험)" }
                ]
            },
            {
                title: "5. -ない형 (부정형: ~하지 않다)",
                explanation: "동사의 부정형을 만듭니다. 1그룹은 う단을 あ단으로 바꾸고 ない, 2그룹은 る를 떼고 ない, 3그룹은 しない/こない.",
                examples: [
                    { original: "今日は 勉強しない。", translated: "오늘은 공부하지 않는다." },
                    { original: "ここで 写真を 撮らないで ください。", translated: "여기서 사진을 찍지 말아 주세요." }
                ]
            },
            {
                title: "6. い형용사와 な형용사",
                explanation: "명사를 꾸미는 형용사로, 끝이 い로 끝나는 い형용사와 だ/な로 끝나는 な형용사로 나뉩니다. 명사 수식 시 형태가 다릅니다.",
                examples: [
                    { original: "高い 山 (takai yama)", translated: "높은 산 (い형용사)" },
                    { original: "静かな 町 (shizukana machi)", translated: "조용한 마을 (な형용사)" }
                ]
            },
            {
                title: "7. 조사 (は, が, を, に, で)",
                explanation: "문법적 관계를 나타내는 말입니다. は(은/는), が(이/가), を(~을/를), に(~에/에게), で(~에서/으로).",
                examples: [
                    { original: "私は 図書館で 本を 読みます。", translated: "나는 도서관에서 책을 읽습니다." },
                    { original: "友達に 会います。", translated: "친구를 (친구에게) 만납니다. (*会う는 に를 씀)" }
                ]
            },
            {
                title: "8. 수수 표현 (あげる, もらう, くれる)",
                explanation: "물건을 주거나 받을 때 쓰는 표현입니다. あげる(내가 남에게 주다), もらう(내가 남에게 받다), くれる(남이 나에게 주다).",
                examples: [
                    { original: "私は 妹に プレンゼントを あげました。", translated: "나는 여동생에게 선물을 주었습니다." },
                    { original: "父が 私に 時計を くれました。", translated: "아버지가 나에게 시계를 주셨습니다." }
                ]
            },
            {
                title: "9. 희망 표현 (~たい)",
                explanation: "자신의 바람이나 희망을 나타낼 때 사용합니다. 동사의 ます형 + たい.",
                examples: [
                    { original: "日本へ 行きたいです。", translated: "일본에 가고 싶습니다." },
                    { original: "寿司が 食べたい。", translated: "초밥을 먹고 싶다." }
                ]
            },
            {
                title: "10. 가능형 (~할 수 있다)",
                explanation: "능력이나 가능을 나타냅니다. 1그룹은 う단을 え단으로 바꾸고 る, 2그룹은 られる, 3그룹은 できる/こられる.",
                examples: [
                    { original: "私は 漢字が 読めます。", translated: "나는 한자를 읽을 수 있습니다." },
                    { original: "朝 早く 起きられません。", translated: "아침 일찍 일어날 수 없습니다." }
                ]
            }
        ],
        advanced: [
            {
                title: "1. 수동태 (れる/られる)",
                explanation: "남의 동작에 의해 영향을 받거나 당할 때 씁니다. 1그룹은 あ단+れる, 2그룹은 られる, 3그룹은 される/こられる.",
                examples: [
                    { original: "泥棒に 財布を 盗まれました。", translated: "도둑에게 지갑을 도둑맞았습니다. (피해 수동)" },
                    { original: "この 本は 世界中で 読まれています。", translated: "이 책은 전 세계에서 읽히고 있습니다." }
                ]
            },
            {
                title: "2. 사역태 (せる/させる)",
                explanation: "남에게 어떤 행동을 시키거나 허용할 때 씁니다. 1그룹은 あ단+せる, 2그룹은 させる, 3그룹은 させる/こさせる.",
                examples: [
                    { original: "母は 子供に 野菜を 食べさせました。", translated: "어머니는 아이에게 채소를 먹게 했습니다." },
                    { original: "私に 行かせて ください。", translated: "제가 가게 해 주세요. (허락 요구)" }
                ]
            },
            {
                title: "3. 사역수동태 (せられる/される)",
                explanation: "남이 시켜서 어쩔 수 없이 (억지로) 어떤 행동을 하게 될 때 씁니다. 사역+수동이 결합된 형태입니다.",
                examples: [
                    { original: "先輩に お酒を 飲まされました。", translated: "선배가 시켜서 (억지로) 술을 마시게 되었습니다." },
                    { original: "私は 先生に 走らされました。", translated: "나는 선생님 때문에 억지로 뛰게 되었습니다." }
                ]
            },
            {
                title: "4. 가정 조건표현 (と, ば, たら, なら)",
                explanation: "~하면 이라는 뜻의 4가지 표현입니다. と(필연,습관), ば(일반적 조건), たら(완료 후 발생), なら(주제,조언).",
                examples: [
                    { original: "春に なると、桜が 咲きます。(と)", translated: "봄이 되면 벚꽃이 핍니다. (자연의 법칙)" },
                    { original: "雨が 降ったら、行きません。(たら)", translated: "비가 오면, 가지 않겠습니다. (가장 널리 쓰임)" }
                ]
            },
            {
                title: "5. 경어 - 존경어",
                explanation: "상대방의 행동이나 상태를 높여서 말할 때 씁니다. お/ご~になる, 특별 존경어(いらっしゃる, 召し上がる 등).",
                examples: [
                    { original: "社長は もう お帰りに なりました。", translated: "사장님은 벌써 돌아가셨습니다." },
                    { original: "先生は 何を 召し上がりますか。", translated: "선생님은 무엇을 드시겠습니까?" }
                ]
            },
            {
                title: "6. 경어 - 겸양어",
                explanation: "자신의 행동을 낮추어 상대방을 간접적으로 높일 때 씁니다. お/ご~する, 특별 겸양어(参る, 拝見する 등).",
                examples: [
                    { original: "私が 荷物を お持ち します。", translated: "제가 짐을 들어 드리겠습니다." },
                    { original: "明日 午後 ３時に 伺います。", translated: "내일 오후 3시에 찾아뵙겠습니다." }
                ]
            },
            {
                title: "7. 상태 표현 (ている vs てある)",
                explanation: "ている는 눈앞에 진행/계속되는 상태(자동사), てある는 누군가의 의도로 결과가 남은 상태(타동사)를 나타냅니다.",
                examples: [
                    { original: "窓が 開いて います。(ている)", translated: "창문이 열려 있습니다. (그냥 열려있는 상태)" },
                    { original: "壁に カレンダーが 掛けて あります。(てある)", translated: "벽에 달력이 걸려 있습니다. (누군가 걸어놓은 상태)" }
                ]
            },
            {
                title: "8. 추측/전문 표현 (そうだ, らしい, ようだ, みたいだ)",
                explanation: "정보의 출처나 확신도에 따라 다르게 쓰입니다. そうだ(~라고 한다/전문, ~할 것 같다/양태).",
                examples: [
                    { original: "天気予報に よると、明日は 雨だ そうです。", translated: "일기예보에 따르면, 내일은 비가 온다고 합니다. (전문)" },
                    { original: "あの 人は 本当に 先生らしいです。", translated: "저 사람은 정말 선생님답습니다. (다운 성질/추측)" }
                ]
            },
            {
                title: "9. 수수동사 응용 (-てあげる, -てもらう, -てくれる)",
                explanation: "물건이 아닌 '동작(행위)'을 주고받을 때 사용합니다. (내가 ~해주다, 남에게 ~받다, 남이 ~해주다)",
                examples: [
                    { original: "私は 友達に 英語を 教えて もらいました。", translated: "나는 친구에게 영어를 가르침 받았습니다. (친구가 가르쳐 줌)" },
                    { original: "彼が 自転車を 修理して くれました。", translated: "그가 자전거를 수리해 주었습니다." }
                ]
            },
            {
                title: "10. 조동사 (べき, はず, つもり, わけ)",
                explanation: "행동의 의무, 당연성, 의도, 이유 등을 나타내는 형식명사 및 조동사입니다.",
                examples: [
                    { original: "約束は 守る べきだ。(べき)", translated: "약속은 마땅히 지켜야 한다. (당연한 의무)" },
                    { original: "彼は 来ない はずだ。(はず)", translated: "그는 오지 않을 것이다. (강한 확신이 있는 추측)" }
                ]
            }
        ]
    },
    zh: {
        basic: [
            {
                title: "1. 중국어의 기본 어순",
                explanation: "중국어는 기본적으로 '주어 + 동사 + 목적어(SVO)'의 어순을 가집니다. 영어와 비슷하지만 부사어나 수식어의 위치가 다릅니다.",
                examples: [
                    { original: "我 喝 咖啡。 (Wǒ hē kāfēi)", translated: "나는 커피를 마신다." },
                    { original: "他 明天 去 中国。 (Tā míngtiān qù Zhōngguó)", translated: "그는 내일 중국에 간다. (시간 부사는 동사 앞)" }
                ]
            },
            {
                title: "2. 의문사 '吗(ma)'와 의문대명사",
                explanation: "평서문 끝에 吗를 붙이면 일반 의문문이 됩니다. 谁(누구), 什么(무엇), 哪(어디) 등의 의문대명사도 사용됩니다.",
                examples: [
                    { original: "你是学生吗？ (Nǐ shì xuéshēng ma?)", translated: "당신은 학생입니까?" },
                    { original: "你叫什么名字？ (Nǐ jiào shénme míngzi?)", translated: "당신의 이름은 무엇입니까?" }
                ]
            },
            {
                title: "3. 형용사 술어문과 '很(hěn)'",
                explanation: "중국어는 be동사(是) 없이 형용사가 바로 술어 역할을 합니다. 이때 형용사 앞에는 습관적으로 '很(매우)'을 붙입니다.",
                examples: [
                    { original: "今天 天气 很 好。 (Jīntiān tiānqì hěn hǎo)", translated: "오늘 날씨가 (매우) 좋다." },
                    { original: "我 很 忙。 (Wǒ hěn máng)", translated: "나는 (매우) 바쁘다." }
                ]
            },
            {
                title: "4. 소유를 나타내는 '的(de)'",
                explanation: "'의, ~한' 이라는 뜻으로, 명사와 명사 사이, 형용사와 명사 사이를 연결하여 소유나 수식 관계를 나타냅니다.",
                examples: [
                    { original: "这是 我的 书。 (Zhè shì wǒ de shū)", translated: "이것은 나의 책이다." },
                    { original: "漂亮的 衣服 (piàoliang de yīfu)", translated: "예쁜 옷" }
                ]
            },
            {
                title: "5. 양사 (개수를 세는 단위)",
                explanation: "중국어에서는 명사를 셀 때 반드시 수사(숫자)와 명사 사이에 적절한 '양사'를 넣어야 합니다.",
                examples: [
                    { original: "一个 人 (yí ge rén)", translated: "한 사람 (个: 가장 기본적인 양사)" },
                    { original: "两本书 (liǎng běn shū)", translated: "두 권의 책 (本: 책을 세는 양사)" }
                ]
            },
            {
                title: "6. 변화를 나타내는 '了(le)'",
                explanation: "문장 끝에 쓰여 새로운 상황의 발생이나 상태의 변화를 나타냅니다. (동사 뒤에 쓰여 완료를 나타내기도 합니다)",
                examples: [
                    { original: "下雨 了。 (Xiàyǔ le)", translated: "비가 온다. (비가 안 오다가 오기 시작함)" },
                    { original: "我 吃饭 了。 (Wǒ chīfàn le)", translated: "나는 밥을 먹었다." }
                ]
            },
            {
                title: "7. 조동사 (想, 要, 能, 会)",
                explanation: "동사 앞에서 바람(想), 의지(要), 능력(能/会) 등을 나타냅니다.",
                examples: [
                    { original: "我想吃苹果。 (Wǒ xiǎng chī píngguǒ)", translated: "나는 사과를 먹고 싶다." },
                    { original: "我会说汉语。 (Wǒ huì shuō Hànyǔ)", translated: "나는 중국어를 할 줄 안다. (배워서 갖춘 능력)" }
                ]
            },
            {
                title: "8. 장소 전치사 '在(zài)'",
                explanation: "'~에, ~에서'라는 뜻으로 장소 명사 앞에 쓰입니다. 동사로 쓰이면 '~에 있다'가 됩니다.",
                examples: [
                    { original: "我在家。 (Wǒ zài jiā)", translated: "나는 집에 있다. (동사)" },
                    { original: "他在北京学习。 (Tā zài Běijīng xuéxí)", translated: "그는 베이징에서 공부한다. (전치사)" }
                ]
            },
            {
                title: "9. 시간의 표현",
                explanation: "시간을 나타내는 부사어는 반드시 주어의 앞이나, 주어와 동사 사이에 옵니다.",
                examples: [
                    { original: "明天我休息。 / 我明天休息。 (Míngtiān wǒ xiūxi)", translated: "내일 나는 쉰다." },
                    { original: "现在八点。 (Xiànzài bā diǎn)", translated: "지금은 8시이다." }
                ]
            },
            {
                title: "10. 제안과 청유의 '吧(ba)'",
                explanation: "문장 끝에 붙어 '~하자, ~합시다, ~해라' 등의 부드러운 제안, 권유, 명령을 나타냅니다.",
                examples: [
                    { original: "我们走吧。 (Wǒmen zǒu ba)", translated: "우리 가자." },
                    { original: "你喝茶吧。 (Nǐ hē chá ba)", translated: "차 드세요." }
                ]
            }
        ],
        advanced: [
            {
                title: "1. 把(bǎ)자문",
                explanation: "목적어를 동사 앞으로 도치시켜 목적어에 대한 처리나 처치를 강조하는 구문입니다. 「S + 把 + 목적어 + 동사 + 기타성분」",
                examples: [
                    { original: "我把书放在桌子上了。 (Wǒ bǎ shū fàng zài zhuōzi shang le)", translated: "나는 책을 책상 위에 놓았다." },
                    { original: "请把门关上。 (Qǐng bǎ mén guānshang)", translated: "문을 닫아 주세요." }
                ]
            },
            {
                title: "2. 被(bèi)자문",
                explanation: "중국어의 수동태 구문입니다. 「S + 被 + 행위자 + 동사 + 기타성분」으로 쓰며 부정적인 상황에 자주 쓰입니다.",
                examples: [
                    { original: "钱包被小偷拿走了。 (Qiánbāo bèi xiǎotōu názǒu le)", translated: "지갑을 도둑에게 도둑맞았다." },
                    { original: "杯子被打破了。 (Bēizi bèi dǎpò le)", translated: "컵이 깨졌다." }
                ]
            },
            {
                title: "3. 비교문 (比 bǐ)",
                explanation: "A가 B보다 더 ~하다를 나타냅니다. 「A + 比 + B + 형용사/동사」 형태로 씁니다.",
                examples: [
                    { original: "今天比昨天冷。 (Jīntiān bǐ zuótiān lěng)", translated: "오늘은 어제보다 춥다." },
                    { original: "他比我跑得快。 (Tā bǐ wǒ pǎo de kuài)", translated: "그는 나보다 빨리 달린다." }
                ]
            },
            {
                title: "4. 결과보어",
                explanation: "동사 바로 뒤에 쓰여 그 동작의 구체적인 '결과'를 나타냅니다. (完: 끝남, 懂: 이해함, 好: 완성됨 등)",
                examples: [
                    { original: "我看完了这本书。 (Wǒ kànwán le zhè běn shū)", translated: "나는 이 책을 다 보았다." },
                    { original: "你听懂了吗？ (Nǐ tīngdǒng le ma?)", translated: "알아 들었습니까?" }
                ]
            },
            {
                title: "5. 방향보어",
                explanation: "동사 뒤에 来/去, 혹은 上/下/进/出 등을 붙여 동작의 방향을 구체적으로 나타냅니다.",
                examples: [
                    { original: "他进来了。 (Tā jìnlái le)", translated: "그가 들어왔다." },
                    { original: "把东西拿出来。 (Bǎ dōngxi náchūlái)", translated: "물건을 꺼내라." }
                ]
            },
            {
                title: "6. 정도보어",
                explanation: "동작이나 상태의 '정도'가 어떠한지 평가하거나 묘사할 때 씁니다. 「동사/형용사 + 得(de) + 정도보어」",
                examples: [
                    { original: "他汉语说得很好。 (Tā Hànyǔ shuō de hěn hǎo)", translated: "그는 중국어를 매우 잘 말한다." },
                    { original: "她跑得很快。 (Tā pǎo de hěn kuài)", translated: "그녀는 매우 빨리 달린다." }
                ]
            },
            {
                title: "7. 가능보어",
                explanation: "어떤 동작을 해낼 수 있는지(가능), 없는지(불가능)를 나타냅니다. 「동사 + 得/不 + 결과보어/방향보어」",
                examples: [
                    { original: "这么多菜，我吃不完。 (Zhème duō cài, wǒ chībùwán)", translated: "이렇게 많은 요리를, 나는 다 먹을 수 없다." },
                    { original: "你看得清楚吗？ (Nǐ kàn de qīngchu ma?)", translated: "너는 똑똑히 볼 수 있니?" }
                ]
            },
            {
                title: "8. 연동문",
                explanation: "한 문장 안에 두 개 이상의 동사가 연이어 나타나는 구문입니다. 발생 순서나 목적을 나타냅니다.",
                examples: [
                    { original: "我去超市买东西。 (Wǒ qù chāoshì mǎi dōngxi)", translated: "나는 마트에 물건을 사러 간다. (가서 -> 산다)" },
                    { original: "他坐飞机去上海。 (Tā zuò fēijī qù Shànghǎi)", translated: "그는 비행기를 타고 상하이에 간다. (수단 -> 목적지)" }
                ]
            },
            {
                title: "9. 겸어문",
                explanation: "첫 번째 동사의 목적어가 두 번째 동사의 주어 역할을 겸하는 구문입니다. (주로 시키다, 부탁하다 류의 동사)",
                examples: [
                    { original: "老师让我学习。 (Lǎoshī ràng wǒ xuéxí)", translated: "선생님은 나에게 공부하라고 시키셨다." },
                    { original: "请你帮我。 (Qǐng nǐ bāng wǒ)", translated: "나를 좀 도와줘. (네가 도와주기를 청함)" }
                ]
            },
            {
                title: "10. 존현문",
                explanation: "어느 장소에 사람이나 사물이 존재하거나, 나타나거나, 사라짐을 나타내는 구문입니다.",
                examples: [
                    { original: "桌子上放着一本书。 (Zhuōzi shang fàngzhe yì běn shū)", translated: "책상 위에 책이 한 권 놓여 있다." },
                    { original: "前面走过来一个人。 (Qiánmiàn zǒuguòlái yí ge rén)", translated: "앞에서 한 사람이 걸어온다." }
                ]
            }
        ]
    }
};
