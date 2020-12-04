//@ts-check
const utils = require("../utils");

const analyzeValueFunds = (data, worksheet) => {
    let fundIds = utils.segregateFundIds(data);
    return new Promise(resolve => {
        utils.getConsolidatedDataByFundIds(fundIds.growthFundIds).then(data => {
            let sectors = Array.from(data.fundSectors);
            let headers = utils.getHeaders(sectors);
            worksheet = utils.updateWorksheet(worksheet, headers, data.fundData);
            console.log("Resolved Value Funds");
            resolve(worksheet);
        }).catch(err => {
            console.log(err)
        });
    });
}

module.exports = analyzeValueFunds;