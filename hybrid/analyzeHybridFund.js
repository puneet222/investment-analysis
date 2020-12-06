const utils = require("./utils");

module.exports = (data, hybridFundType, worksheet) => {
    let fundIds = utils.segregateFundIds(data);
    return new Promise(resolve => {
        utils.getConsolidatedDataByFundIds(fundIds.growthFundIds, hybridFundType).then(data => {
            let sectors = Array.from(data.fundSectors);
            let ratings = Array.from(data.fundRatings).map(rating => utils.getRatings(rating));
            let headers = utils.getHeaders(sectors, ratings);
            worksheet = utils.updateWorksheet(worksheet, headers, data.fundData);
            resolve(worksheet);
        }).catch(err => {
            console.log(err)
        });
    });
}
