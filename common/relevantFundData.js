module.exports = (data) => {
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