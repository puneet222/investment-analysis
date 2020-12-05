const utils = require("./utils");

module.exports = (data, worksheet) => {
    let fundIds = utils.segregateFundIds(data);
    return new Promise(resolve => {
        utils.getConsolidatedDataByFundIds(fundIds.growthFundIds, "Test Fund").then(data => {
            /* let sectors = Array.from(data.fundSectors);
            let headers = utils.getHeaders(sectors);
            worksheet = utils.updateWorksheet(worksheet, headers, data.fundData);
            resolve(worksheet); */
            console.log(data);
        }).catch(err => {
            console.log(err)
        });
    });
    console.log(fundIds.growthFundIds);
}
