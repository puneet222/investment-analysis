const axios = require("axios");
const cliProgress = require('cli-progress');
const chalk = require('chalk');
const relevantFundData = require("../../common/relevantFundData");
const relevantFundHoldings = require("./relevantFundHoldings");
const { sleep, SLEEP_TIME, asyncForEach, getFundInfoUrl, getFundHoldingsUrl } = require("../../common/utils");

module.exports = (fundIds, fundName) => {
    let consolidatedData = [];
    let sectors = new Set();
    console.log(chalk.red.bold(`Analyzing ${fundName}...`));
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    let totalResolved = 0;
    bar.start(fundIds.length, totalResolved);
    return new Promise(async resolve => {
        await asyncForEach(fundIds, async (fundId, index) => {
            let fundInfoUrl = getFundInfoUrl(fundId);
            let fundHoldingUrl = getFundHoldingsUrl(fundId);
            let fundInfo = await axios.get(fundInfoUrl);
            await sleep(SLEEP_TIME);
            let holdingsInfo = await axios.get(fundHoldingUrl);
            await sleep(SLEEP_TIME);
            let fundData = relevantFundData(fundInfo.data);
            let fundHoldings = relevantFundHoldings(holdingsInfo.data, fundId);
            fundData = {...fundData, sectorHoldings: fundHoldings.holdings};
            sectors = new Set([...sectors, ...fundHoldings.sectors]);
            consolidatedData.push(fundData);
            totalResolved++;
            bar.update(totalResolved);
        });
        let completeFundData = {
            fundData: consolidatedData,
            fundSectors: sectors
        }
        bar.stop();
        resolve(completeFundData);
    });
}