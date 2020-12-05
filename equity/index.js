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

async function asyncForEach(array, callback) {
    for(let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const analyzeEquityFunds = async data => {
    let promiseArray = [];
    await asyncForEach(Object.keys(data) , async type => {
        switch (type) {
            case "Multi Cap Fund":
                let multiCapWorksheet = workbook.addWorksheet('Multi Cap Funds');
                await multiCapFund(data[type], multiCapWorksheet);
                break;
            case "Large Cap Fund":
                let largeCapWorksheet = workbook.addWorksheet('Large Cap Funds');
                await largeCapFund(data[type], largeCapWorksheet);
                break;
            case "Mid Cap Fund":
                let midCapWorksheet = workbook.addWorksheet('Mid Cap Funds');
                await midCapFund(data[type], midCapWorksheet);
                break;
            case "Sectoral/Thematic":
                let sectoralThematicWorksheet = workbook.addWorksheet('Sectoral Thematic Funds');
                await sectoralThematicFund(data[type], sectoralThematicWorksheet);
                break;
            case "ELSS":
                let elssWorksheet = workbook.addWorksheet('ELSS');
                await elss(data[type], elssWorksheet);
                break;
            case "Value Fund":
                let valueWorksheet = workbook.addWorksheet('Value Funds');
                await valueFund(data[type], valueWorksheet);
                break;
            case "Large & Mid Cap fund":
                let largeMidCapWorksheet = workbook.addWorksheet('Large & Mid Cap Funds');
                await largeMidCapFund(data[type], largeMidCapWorksheet);
                break;
            case "Small Cap Fund":
                let smallCapWorksheet = workbook.addWorksheet('Small Cap Funds');
                await smallCapFund(data[type], smallCapWorksheet);
                break;
            case "Dividend Yield Fund":
                let dividendYieldWorksheet = workbook.addWorksheet('Dividend Yield Funds');
                await dividendYieldFund(data[type], dividendYieldWorksheet);
                break;
            case "Focused Fund":
                let focusedFundWorksheet = workbook.addWorksheet('Focused Funds');
                await focusedFund(data[type], focusedFundWorksheet);
                break;
            case "Contra Fund":
                let contraFundWorksheet = workbook.addWorksheet('Contra Funds');
                await contraFund(data[type], contraFundWorksheet);
                break;
        
            default:
                console.log("Equity of type: ", type, " not found");
                break;
        }
    });
    workbook.write('Excel.xlsx')
}

module.exports = analyzeEquityFunds;