const dictionaryData = {
    "real-estate": [
        {
            "term": "LTV (주택담보대출비율)",
            "desc": "Loan to Value ratio. 주택을 담보로 돈을 빌릴 때 인정되는 자산가치의 비율입니다. 예: 10억 아파트의 LTV가 40%라면 최대 4억 원까지 대출이 가능합니다."
        },
        {
            "term": "DSR (총부채원리금상환비율)",
            "desc": "Debt Service Ratio. 대출받는 사람의 연소득 대비 전체 금융부채의 원리금 상환액 비율입니다. 차주의 상환 능력을 평가하는 가장 엄격한 지표입니다."
        },
        {
            "term": "재건축",
            "desc": "기존의 낡은 아파트나 연립주택을 헐고 그 자리에 새로 아파트를 짓는 것입니다. 기반 시설이 양호한 곳에서 이루어집니다."
        },
        {
            "term": "임대차 3법",
            "desc": "전월세신고제, 전월세상한제, 계약갱신청구권제를 묶어 부르는 말입니다. 임차인의 주거 안정을 목적으로 도입되었습니다."
        },
        {
            "term": "청약 가점제",
            "desc": "무주택 기간, 부양가족 수, 청약통장 가입 기간을 점수로 환산하여 점수가 높은 순으로 아파트 당첨자를 선정하는 제도입니다."
        },
        {
            "term": "전세권 설정",
            "desc": "전세금을 지급하고 타인의 부동산을 점유할 수 있는 권리를 등기부등본에 기록하는 것입니다. 확정일자보다 더 강력한 물권적 효력을 가집니다."
        }
    ],
    "stocks": [
        {
            "term": "PER (주가수익비율)",
            "desc": "Price Earning Ratio. 주가를 1주당 순이익(EPS)으로 나눈 값입니다. 기업이 벌어들이는 이익 대비 주가가 고평가되었는지 저평가되었는지 판단하는 대표적 지표입니다."
        },
        {
            "term": "PBR (주가순자산비율)",
            "desc": "Price Book-value Ratio. 주가를 1주당 순자산으로 나눈 값입니다. PBR이 1 미만이면 회사의 청산 가치보다 시가총액이 낮다는 의미로 저평가를 시사합니다."
        },
        {
            "term": "ETF (상장지수펀드)",
            "desc": "Exchange Traded Fund. 특정 지수(예: 코스피, S&P 500)의 수익률을 추종하도록 설계된 펀드로, 일반 주식처럼 거래소에서 실시간으로 매매할 수 있습니다."
        },
        {
            "term": "공매도 (Short Selling)",
            "desc": "주가가 하락할 것으로 예상되는 주식을 빌려서 판 뒤, 실제로 주가가 하락하면 싼값에 되사서 갚아 차익을 남기는 투자 기법입니다."
        },
        {
            "term": "배당락 (Ex-Dividend)",
            "desc": "배당을 받을 권리가 소멸되는 날입니다. 배당락일에는 보통 배당금만큼 주가가 하락한 상태로 거래가 시작됩니다."
        },
        {
            "term": "ROE (자기자본이익률)",
            "desc": "Return On Equity. 투입한 자기자본이 얼마만큼의 이익을 냈는지를 나타내는 지표로, 워런 버핏이 기업 투자를 결정할 때 가장 중요하게 보는 지표 중 하나입니다."
        }
    ],
    "finance": [
        {
            "term": "인플레이션 (Inflation)",
            "desc": "화폐 가치가 하락하여 전반적인 물가가 지속적으로 상승하는 경제 현상입니다."
        },
        {
            "term": "기준금리",
            "desc": "한 나라의 중앙은행(한국은행, 미 연준 등)이 국가 경제 상황을 고려해 결정하는 정책 금리입니다. 시중 은행 금리의 기준이 됩니다."
        },
        {
            "term": "연말정산",
            "desc": "1년간 징수했던 근로소득세를 이듬해 2월에 실제 소득과 지출에 맞게 재계산하여, 많이 낸 세금은 돌려주고 적게 낸 세금은 더 걷는 제도입니다."
        },
        {
            "term": "소득공제 vs 세액공제",
            "desc": "소득공제는 세금을 매기는 기준이 되는 '소득' 자체를 줄여주는 것이고, 세액공제는 최종적으로 계산된 '세금' 자체를 깎아주는 것입니다."
        },
        {
            "term": "양적완화 (QE)",
            "desc": "Quantitative Easing. 중앙은행이 금리 인하로도 경기 부양이 어려울 때, 직접 돈을 찍어내어 시중의 채권을 사들임으로써 시장에 유동성(돈)을 공급하는 비전통적 통화 정책입니다."
        },
        {
            "term": "스태그플레이션",
            "desc": "Stagflation. 경기 침체(Stagnation)와 물가 상승(Inflation)이 동시에 발생하는 최악의 경제 상황을 뜻합니다."
        }
    ]
};

function initDictionary(category) {
    const searchInput = document.getElementById("dictSearch");
    const resultsContainer = document.getElementById("dictResults");
    if (!searchInput || !resultsContainer || !dictionaryData[category]) return;

    const data = dictionaryData[category];

    const renderResults = (items) => {
        resultsContainer.innerHTML = "";
        if (items.length === 0) {
            resultsContainer.innerHTML = "<p style='color:var(--text-light);'>검색 결과가 없습니다. 철자를 확인해주세요.</p>";
            return;
        }
        items.forEach(item => {
            const card = document.createElement("div");
            card.className = "dict-card";
            card.innerHTML = `<h3>${item.term}</h3><p>${item.desc}</p>`;
            resultsContainer.appendChild(card);
        });
    };

    // Show all initially
    renderResults(data);

    // Live search event
    searchInput.addEventListener("input", (e) => {
        const query = e.target.value.toLowerCase().replace(/\s/g, '');
        if (!query) {
            renderResults(data);
            return;
        }
        const filtered = data.filter(item => 
            item.term.toLowerCase().replace(/\s/g, '').includes(query) || 
            item.desc.toLowerCase().replace(/\s/g, '').includes(query)
        );
        renderResults(filtered);
    });
}
