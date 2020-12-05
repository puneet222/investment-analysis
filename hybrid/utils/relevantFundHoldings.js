const getRatings = require("../../common/ratings");

module.exports = (data, fundId) => {
    let sectors = new Set();
    let ratings = new Set();
    let sectorMap = new Map();
    let ratingsMap = new Map();
    let totalEquityHoldings = 0;
    let totalBondHoldings = 0;
    data[fundId].forEach(holding => {
        if(holding.ticker) {
            // Sector
            if(sectorMap.has(holding.sector_name)) {
                sectorMap.set(holding.sector_name, sectorMap.get(holding.sector_name) + holding.percentage_to_aum);
            } else {
                sectorMap.set(holding.sector_name, holding.percentage_to_aum);
            }
            sectors.add(holding.sector_name);
            totalEquityHoldings += holding.percentage_to_aum;
        } else {
            // Bond
            let derivedRatings = getRatings(holding.credit_rating)
            if(ratingsMap.has(derivedRatings)) {
                ratingsMap.set(derivedRatings, ratingsMap.get(derivedRatings) + holding.percentage_to_aum);
            } else {
                ratingsMap.set(derivedRatings, holding.percentage_to_aum);
            }
            ratings.add(derivedRatings);
            if(holding.value_in_mn < 0) {
                totalBondHoldings -= holding.percentage_to_aum;
            } else {
                totalBondHoldings += holding.percentage_to_aum;
            }
        }
    });
    return {
        sectorHoldings: sectorMap,
        sectors: sectors,
        bondHoldings: ratingsMap,
        ratings: ratings,
        totalEquityHoldings,
        totalBondHoldings
    };
}