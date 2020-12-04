const elss = require("./elss");
const focusedFund = require("./focused-fund");
const excel = require('excel4node');

const workbook = new excel.Workbook();

const analyzeEquityFunds = (data) => {
    let promiseArray = [];
    let types = Object.keys(data).forEach(type => {
        switch (type) {
            case "Multi Cap Fund":
                // Analyse Multi Cap Funds
                break;
            case "Large Cap Fund":
                // Analyse Large Cap Funds
                break;
            case "Mid Cap Fund":
                // Analyse Mid Cap Funds
                break;
            case "Sectoral/Thematic":
                // Analyse Sectoral/Thematics
                break;
            case "ELSS":
                // Analyse ELSSs
                let elssWorksheet = workbook.addWorksheet('ELSS');
                let elssPromise = elss(data[type], elssWorksheet);
                promiseArray.push(elssPromise);
                break;
            case "Value Fund":
                // Analyse Value Funds
                break;
            case "Large & Mid Cap fund":
                // Analyse Large & Mid Cap funds
                break;
            case "Small Cap Fund":
                // Analyse Small Cap Funds
                break;
            case "Dividend Yield Fund":
                // Analyse Dividend Yield Funds
                break;
            case "Focused Fund":
                // Analyse Focused Funds
                let focusedFundWorksheet = workbook.addWorksheet('Focused Funds');
                let focusedFundPromise = focusedFund(data[type], focusedFundWorksheet);
                promiseArray.push(focusedFundPromise);
                break;
            case "Contra Fund":
                // Analyse Contra Funds
                break;
        
            default:
                break;
        }
    });
    Promise.all(promiseArray).then(resp => workbook.write('Excel.xlsx'));
}

let types = [
    'Multi Cap Fund',
    'Large Cap Fund',
    'Mid Cap Fund',
    'Sectoral/Thematic',
    'ELSS',
    'Value Fund',
    'Large & Mid Cap fund',
    'Small Cap Fund',
    'Dividend Yield Fund',
    'Focused Fund',
    'Contra Fund'
  ];

module.exports = analyzeEquityFunds;