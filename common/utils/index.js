const roundOff = (number, decimals) => {
    return Number((Number(number).toFixed(decimals)));
}

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const SLEEP_TIME = 1000;

const asyncForEach = async (array, callback) => {
    for(let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const API_VERSION = '1.171.8';

const getFundInfoUrl = (fundId) => {
    return `https://api.kuvera.in/mf/api/v4/fund_schemes/${fundId}.json?v=${API_VERSION}`;
}

const getFundHoldingsUrl = (fundId) => {
    return `https://api.kuvera.in/mf/api/v4/fund_portfolio_holdings/${fundId}.json?v=${API_VERSION}`;
}

module.exports = {
    roundOff,
    sleep,
    SLEEP_TIME,
    asyncForEach,
    getFundInfoUrl,
    getFundHoldingsUrl
}