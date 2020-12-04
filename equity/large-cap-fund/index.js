//@ts-check
const utils = require("../utils");

const analyzeLargeCapFunds = (data, worksheet) => {
    let fundIds = utils.segregateFundIds(data);
    return new Promise(resolve => {
        utils.getConsolidatedDataByFundIds(fundIds.growthFundIds).then(data => {
            let sectors = Array.from(data.fundSectors);
            let headers = utils.getHeaders(sectors);
            worksheet = utils.updateWorksheet(worksheet, headers, data.fundData);
            console.log("Resolved Large CAP Funds");
            resolve(worksheet);
        }).catch(err => {
            console.log(err)
        });
    });
}

module.exports = analyzeLargeCapFunds;