module.exports = (data) => {
    let growthFundIds = [];
    let dividendPayoutsFundIds = [];
    let dividendReinvestedFundIds = [];
    Object.keys(data).forEach(fund => {
        data[fund].forEach(type => {
            if(type.c.includes("GR") || type.c.includes("GP")) {
                // Growth Plans
                growthFundIds.push(type.c);
            } else if(type.c.includes("DP")) {
                // Dividend Payout Plans
                dividendPayoutsFundIds.push(type.c);
            } else if(type.c.includes("DR")) {
                // Dividend Reinvested Plans
                dividendReinvestedFundIds.push(type.c);
            } else {
                console.log("type not found: ", type);
            }
        });
    });
    return {
        growthFundIds,
        dividendPayoutsFundIds,
        dividendReinvestedFundIds
    }
}