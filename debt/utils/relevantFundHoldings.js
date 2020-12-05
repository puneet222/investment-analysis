const getRatings = require("./ratings");

module.exports = (data, fundId) => {
    let ratings = new Set();
    let ratingsMap = new Map();
    data[fundId].forEach(holding => {
        let derivedRatings = getRatings(holding.credit_rating)
        if(ratingsMap.has(derivedRatings)) {
            ratingsMap.set(derivedRatings, ratingsMap.get(derivedRatings) + holding.percentage_to_aum);
        } else {
            ratingsMap.set(derivedRatings, holding.percentage_to_aum);
        }
        ratings.add(derivedRatings);
    });
    return {
        holdings: ratingsMap,
        ratings: ratings
    };
}