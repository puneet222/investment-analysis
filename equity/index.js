const elss = require("./elss");
const focusedFund = require("./focused-fund");
const multiCapFund = require("./multi-cap-fund");
const largeCapFund = require("./large-cap-fund");
const midCapFund = require("./mid-cap-fund");
const sectoralThematicFund = require("./sectoral-thematic");
const valueFund = require("./value-fund");
const smallCapFund = require("./small-cap-fund");
const largeMidCapFund = require("./large-mid-cap-funds");
const dividendYieldFund = require("./dividend-yield-fund");
const contraFund = require("./contra-fund");

const excel = require('excel4node');

const workbook = new excel.Workbook();

const analyzeEquityFunds = (data) => {
    let promiseArray = [];
    let types = Object.keys(data).forEach(type => {
        switch (type) {
            case "Multi Cap Fund":
                // Analyse Multi Cap Funds
                let multiCapWorksheet = workbook.addWorksheet('Multi Cap Funds');
                let multiCapPromise = multiCapFund(data[type], multiCapWorksheet);
                promiseArray.push(multiCapPromise);
                break;
            case "Large Cap Fund":
                // Analyse Large Cap Funds
                let largeCapWorksheet = workbook.addWorksheet('Large Cap Funds');
                let largeCapPromise = largeCapFund(data[type], largeCapWorksheet);
                promiseArray.push(largeCapPromise);
                break;
            case "Mid Cap Fund":
                // Analyse Mid Cap Funds
                let midCapWorksheet = workbook.addWorksheet('Mid Cap Funds');
                let midCapPromise = midCapFund(data[type], midCapWorksheet);
                promiseArray.push(midCapPromise);
                break;
            case "Sectoral/Thematic":
                // Analyse Sectoral/Thematics
                let sectoralThematicWorksheet = workbook.addWorksheet('Sectoral Thematic Funds');
                let sectoralThematicPromise = sectoralThematicFund(data[type], sectoralThematicWorksheet);
                promiseArray.push(sectoralThematicPromise);
                break;
            case "ELSS":
                // Analyse ELSSs
                let elssWorksheet = workbook.addWorksheet('ELSS');
                let elssPromise = elss(data[type], elssWorksheet);
                promiseArray.push(elssPromise);
                break;
            case "Value Fund":
                // Analyse Value Funds
                let valueWorksheet = workbook.addWorksheet('Value Funds');
                let valuePromise = valueFund(data[type], valueWorksheet);
                promiseArray.push(valuePromise);
                break;
            case "Large & Mid Cap fund":
                // Analyse Large & Mid Cap funds
                let largeMidCapWorksheet = workbook.addWorksheet('Large & Mid Cap Funds');
                let largeMidCapPromise = largeMidCapFund(data[type], largeMidCapWorksheet);
                promiseArray.push(largeMidCapPromise);
                break;
            case "Small Cap Fund":
                // Analyse Small Cap Funds
                let smallCapWorksheet = workbook.addWorksheet('Small Cap Funds');
                let smallCapPromise = smallCapFund(data[type], smallCapWorksheet);
                promiseArray.push(smallCapPromise);
                break;
            case "Dividend Yield Fund":
                // Analyse Dividend Yield Funds
                let dividendYieldWorksheet = workbook.addWorksheet('Dividend Yield Funds');
                let dividendYieldPromise = dividendYieldFund(data[type], dividendYieldWorksheet);
                promiseArray.push(dividendYieldPromise);
                break;
            case "Focused Fund":
                // Analyse Focused Funds
                let focusedFundWorksheet = workbook.addWorksheet('Focused Funds');
                let focusedFundPromise = focusedFund(data[type], focusedFundWorksheet);
                promiseArray.push(focusedFundPromise);
                break;
            case "Contra Fund":
                // Analyse Contra Funds
                let contraFundWorksheet = workbook.addWorksheet('Contra Funds');
                let contraFundPromise = contraFund(data[type], contraFundWorksheet);
                promiseArray.push(contraFundPromise);
                break;
        
            default:
                break;
        }
    });
    Promise.all(promiseArray).then(resp => workbook.write('Excel.xlsx'));
}

module.exports = analyzeEquityFunds;