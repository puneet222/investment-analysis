const axios = require("axios");
const relevantFundData = require("./relevantFundData");
const relevantFundHoldings = require("./relevantFundHoldings");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

module.exports = (fundIds) => {
    let consolidatedData = [];
    let sectors = new Set();
    return new Promise(async resolve => {
        await asyncForEach(fundIds, async (fundId, index) => {
            let fundInfoUrl = `https://api.kuvera.in/mf/api/v4/fund_schemes/${fundId}.json?v=1.171.8`;
            let fundHoldingUrl = `https://api.kuvera.in/mf/api/v4/fund_portfolio_holdings/${fundId}.json?v=1.171.8`;
            let fundInfo = await axios.get(fundInfoUrl);
            await sleep(1000);
            let holdingsInfo = await axios.get(fundHoldingUrl);
            await sleep(1000);
            let fundData = relevantFundData(fundInfo.data);
            let fundHoldings = relevantFundHoldings(holdingsInfo.data, fundId);
            fundData = {...fundData, sectorHoldings: fundHoldings.holdings};
            sectors = new Set([...sectors, ...fundHoldings.sectors]);
            consolidatedData.push(fundData);
        });
        let completeFundData = {
            fundData: consolidatedData,
            fundSectors: sectors
        }
        resolve(completeFundData);
    });
}

async function asyncForEach(array, callback) {
    for(let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}