const axios = require("axios");
const cliProgress = require('cli-progress');
const chalk = require('chalk');
const relevantFundData = require("../../common/relevantFundData");
const relevantFundHoldings = require("./relevantFundHoldings");
const { FUND_NAMES } = require("./funds");
const { sleep, SLEEP_TIME, asyncForEach } = require("../../common/utils");

const completeFundData = {
    fundData: [],
    fundSectors: new Set(),
    fundCompanies: new Set() 
}

module.exports = (fundIds, fundTypeName) => {
    let consolidatedData = [];
    let sectors = new Set();
    let companies = new Set();
    if(fundTypeName === FUND_NAMES.INDEX_FUNDS) {
        console.log(chalk.red.bold(`Analyzing ${fundTypeName}...`));
        const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
        let totalResolved = 0;
        bar.start(fundIds.length, totalResolved);
        return new Promise(async resolve => {
            await asyncForEach(fundIds, async fundId => {
                let fundInfoUrl = `https://api.kuvera.in/mf/api/v4/fund_schemes/${fundId}.json?v=1.171.8`;
                let fundHoldingUrl = `https://api.kuvera.in/mf/api/v4/fund_portfolio_holdings/${fundId}.json?v=1.171.8`;
                let fundInfo = await axios.get(fundInfoUrl);
                await sleep(SLEEP_TIME);
                let holdingsInfo = await axios.get(fundHoldingUrl);
                await sleep(SLEEP_TIME);
                let fundData = relevantFundData(fundInfo.data);
                let fundHoldings = relevantFundHoldings(holdingsInfo.data, fundId, fundTypeName);
                fundData = {
                    ...fundData, 
                    sectorHoldings: fundHoldings.sectorHoldings, 
                    companyHoldings: fundHoldings.companyHoldings,
                };
                sectors = new Set([...sectors, ...fundHoldings.sectors]);
                companies = new Set([...companies, ...fundHoldings.companies]);
                consolidatedData.push(fundData);
                totalResolved++;
                bar.update(totalResolved);
            });
            completeFundData.fundData = consolidatedData,
            completeFundData.fundSectors = sectors;
            completeFundData.fundCompanies = companies;
            bar.stop();
            resolve(completeFundData);
        });
    } else {
        console.log(chalk.redBright.bold(`****** ${fundTypeName} not supported yet ******`));
        return new Promise(resolve => resolve(completeFundData));
    }
}