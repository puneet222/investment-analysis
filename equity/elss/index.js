//@ts-check
const utils = require("../utils");

const analyzeElssFunds = (data, worksheet) => {
    let fundIds = utils.segregateFundIds(data);
    return new Promise(resolve => {
        utils.getConsolidatedDataByFundIds(fundIds.growthFundIds).then(data => {
            let sectors = Array.from(data.fundSectors);
            let headers = utils.getHeaders(sectors);
            worksheet = utils.updateWorksheet(worksheet, headers, data.fundData);
            resolve(worksheet);
        });
    });
    // console.log(dividendPayoutsFundIds);
    // console.log(dividendReinvestedFundIds);
}

module.exports = analyzeElssFunds;