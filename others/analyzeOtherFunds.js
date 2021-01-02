const utils = require("./utils");
const { FUND_NAMES } = require("./utils/funds");

module.exports = (data, otherFundType, worksheet) => {
    let fundIds = utils.segregateFundIds(data);
    return new Promise(async resolve => {
        let data = await utils.getConsolidatedDataByFundIds(fundIds.growthFundIds, otherFundType);
        let sectors = Array.from(data.fundSectors);
        let companies = Array.from(data.fundCompanies);
        let headers = [];
        if(otherFundType === FUND_NAMES.INDEX_FUNDS) {
            headers = utils.getSectorHeaders(sectors);
            worksheet = utils.updateWorksheet(worksheet, headers, data.fundData);
        }
        resolve(worksheet);
    }).catch(err => {
        console.log(err)
    });
}
