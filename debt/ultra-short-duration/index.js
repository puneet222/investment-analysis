const utils = require("../utils");

module.exports = (data, worksheet) => {
    let fundIds = utils.segregateFundIds(data);
    return new Promise(resolve => {
        utils.getConsolidatedDataByFundIds(fundIds.growthFundIds).then(data => {
            let ratings = Array.from(data.fundRatings).map(rating => utils.getRatings(rating));
            let headers = utils.getHeaders(ratings);
            worksheet = utils.updateWorksheet(worksheet, headers, data.fundData);
            console.log("Resolved Ultra Short Duration Funds");
            resolve(worksheet);
        }).catch(err => {
            console.log(err)
        });
    });
}