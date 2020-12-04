const axios = require("axios");

const sectors = new Set();

const analyzeFocusedFunds = (data, worksheet) => {
    let growthFundIds = [];
    let dividendPayoutsFundIds = [];
    let dividendReinvestedFundIds = [];
    Object.keys(data).forEach(fund => {
        data[fund].forEach(type => {
            if(type.c.includes("GR")) {
                // Growth Plans
                growthFundIds.push(type.c);
            } else if(type.c.includes("DP")) {
                // Dividend Payout Plans
                dividendPayoutsFundIds.push(type.c);
            } else if(type.c.includes("DR")) {
                // Dividend Reinvested Plans
                dividendReinvestedFundIds.push(type.c);
            } else {
                console.log(type);
            }
        });
    });
    // getConsolidatedDataByFundIds(growthFundIds);
    console.log(growthFundIds);
    console.log(dividendPayoutsFundIds);
    console.log(dividendReinvestedFundIds);
}

const getConsolidatedDataByFundIds = (fundIds) => {
    let consolidatedData = [];
    fundIds.forEach(async fundId => {
        let fundInfoUrl = `https://api.kuvera.in/mf/api/v4/fund_schemes/${fundId}.json?v=1.171.8`;
        let fundHoldingUrl = `https://api.kuvera.in/mf/api/v4/fund_portfolio_holdings/${fundId}.json?v=1.171.8`;
        let fundInfo = await axios.get(fundInfoUrl);
        let holdingsInfo = await axios.get(fundHoldingUrl);
        let fundData = getRelevantFundData(fundInfo.data);
        let fundHoldings = getRelevantFundHoldings(holdingsInfo.data, fundId);
        fundData = {...fundData, sectorHoldings: fundHoldings};
        console.log(fundData);
        console.log(sectors);
    });
}

const getRelevantFundData = (data) => {
    let fundData = data[0];
    let relevantData = {
        code: fundData.code,
        name: fundData.name,
        lump_available: fundData.lump_available,
        sip_available: fundData.sip_available,
        redemption_allowed: fundData.redemption_allowed,
        short_name: fundData.short_name,
        fund_house: fundData.fund_house,
        fund_name: fundData.fund_name,
        short_code: fundData.short_code,
        detail_info: fundData.detail_info,
        ISIN: fundData.ISIN,
        switch_allowed: fundData.switch_allowed,
        instant: fundData.instant,
        slug: fundData.slug,
        tax_period: fundData.tax_period,
        volatility: fundData.volatility,
        returns: fundData.returns,
        expense_ratio: fundData.expense_ratio,
        crisil_rating: fundData.crisil_rating,
        portfolio_turnover: fundData.portfolio_turnover,
        maturity_type: fundData.maturity_type,
        aum: fundData.aum
    };

    return relevantData;
}

const getRelevantFundHoldings = (data, fundId) => {
    let sectorMap = new Map();
    data[fundId].forEach(holding => {
        if(sectorMap.has(holding.sector_name)) {
            sectorMap.set(holding.sector_name, sectorMap.get(holding.sector_name) + holding.percentage_to_aum);
        } else {
            sectorMap.set(holding.sector_name, holding.percentage_to_aum);
        }
        sectors.add(holding.sector_name);
    });
    return sectorMap;
}

const unique_sectors = [
    'Financial Services',
    'Technology',
    'Communication Services',
    'Healthcare',
    'Energy',
    'Basic Materials',
    'Utilities',
    'Consumer Cyclical',
    'Consumer Defensive',
    'Industrials',
    null,
    'Real Estate'
]

module.exports = analyzeFocusedFunds;