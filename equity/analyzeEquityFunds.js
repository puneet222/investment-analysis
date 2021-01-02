const utils = require("./utils");

module.exports = (data, equityFundType, worksheet) => {
    let fundIds = utils.segregateFundIds(data);
    return new Promise(async resolve => {
        let data = await utils.getConsolidatedDataByFundIds(fundIds.growthFundIds, equityFundType);
        let sectors = Array.from(data.fundSectors);
        let headers = utils.getHeaders(sectors);
        worksheet = utils.updateWorksheet(worksheet, headers, data.fundData);
        resolve(worksheet);
    }).catch(err => {
        console.log(err);
    });
};
