//@ts-check
const { FUND_NAMES } = require("../utils");
const utils = require("../utils");

const analyzeSectoralThematicFunds = (data, worksheet) => {
    let fundIds = utils.segregateFundIds(data);
    return new Promise(resolve => {
        utils.getConsolidatedDataByFundIds(fundIds.growthFundIds, FUND_NAMES.SECTORAL_THEMATIC_FUND).then(data => {
            let sectors = Array.from(data.fundSectors);
            let headers = utils.getHeaders(sectors);
            worksheet = utils.updateWorksheet(worksheet, headers, data.fundData);
            resolve(worksheet);
        }).catch(err => {
            console.log(err)
        });
    });
}

module.exports = analyzeSectoralThematicFunds;