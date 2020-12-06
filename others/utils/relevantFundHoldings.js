const getRatings = require("../../common/ratings");
const { FUND_NAMES } = require("./funds");

module.exports = (data, fundId, fundTypeName) => {
    let sectors = new Set();
    let companies = new Set();
    let sectorMap = new Map();
    let companyMap = new Map();
    if(fundTypeName === FUND_NAMES.INDEX_FUNDS) {
        data[fundId].forEach(holding => {
            if(sectorMap.has(holding.sector_name)) {
                sectorMap.set(holding.sector_name, sectorMap.get(holding.sector_name) + holding.percentage_to_aum);
            } else {
                sectorMap.set(holding.sector_name, holding.percentage_to_aum);
            }
            sectors.add(holding.sector_name);
        });
    } 
    if(fundTypeName === FUND_NAMES.FUND_OF_FUNDS) {
        data[fundId].forEach(holding => {
            if(companyMap.has(holding.company_name)) {
                companyMap.set(holding.company_name, companyMap.get(holding.company_name) + holding.percentage_to_aum);
            } else {
                companyMap.set(holding.company_name, holding.percentage_to_aum);
            }
            companies.add(holding.company_name);
        });
    }
    return {
        sectorHoldings: sectorMap,
        sectors: sectors,
        companyHoldings: companyMap,
        companies: companies,
    };
}