const liquidFund = require('./liquid-fund');
const bankPSUFund = require("./banking-and-psu");
const corporateFund = require("./corporate-bond");
const creditRiskFund = require("./credit-risk");
const dynamicFund = require("./dynamic-bond");
const floaterFund = require("./floater-fund");
const giltFund = require("./gilt-fund");
const gilt10YFund = require("./gilt-fund-10-years");
const lowDurationFund = require("./low-duration");
const mediumDurationFund = require("./medium-duration");
const shortDurationFund = require("./short-duration");
const longDurationFund = require("./long-duration");
const otherFund = require("./other-bond");
const moneyMarketFund = require("./money-market");
const ultraShortDurationFund = require("./ultra-short-duration");
const mediumLongDurationFund = require("./medium-to-long-duration");
const overnightFund = require("./overnight-fund");

const excel = require('excel4node');

const workbook = new excel.Workbook();

async function asyncForEach(array, callback) {
    for(let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

const analyzeDebtFunds = async data => {
    let promiseArray = [];
    await asyncForEach(Object.keys(data), async type => {
        switch (type) {
            case "Liquid Fund":
                let liquidWorksheet = workbook.addWorksheet('Liquid Fund');
                await liquidFund(data[type], liquidWorksheet);
                break;
            case "Dynamic Bond":
                let dynamicWorksheet = workbook.addWorksheet('Dynamic Fund');
                await dynamicFund(data[type], dynamicWorksheet);
                break;
            case "Corporate Bond Fund":
                let corporateWorksheet = workbook.addWorksheet('Corporate Fund');
                await corporateFund(data[type], corporateWorksheet);
                break;
            case "Other Bond":
                let otherWorksheet = workbook.addWorksheet('Other Fund');
                await otherFund(data[type], otherWorksheet);
                break;
            case "Money Market Fund":
                let moneyMarketWorksheet = workbook.addWorksheet('Money Market Fund');
                await moneyMarketFund(data[type], moneyMarketWorksheet);
                break;
            case "Gilt Fund":
                let giltWorksheet = workbook.addWorksheet('Gilt Fund');
                await giltFund(data[type], giltWorksheet);
                break;
            case "Banking and PSU Fund":
                let bankPSUWorksheet = workbook.addWorksheet('Bank PSU');
                await bankPSUFund(data[type], bankPSUWorksheet);
                break;
            case "Floater Fund":
                let floaterWorksheet = workbook.addWorksheet('Floater Fund');
                await floaterFund(data[type], floaterWorksheet);
                break;
            case "Long Duration Fund":
                let longDurationWorksheet = workbook.addWorksheet('Long Duration Fund');
                await longDurationFund(data[type], longDurationWorksheet);
                break;
            case "Short Duration Fund":
                let shortDurationWorksheet = workbook.addWorksheet('Short Duration Fund');
                await shortDurationFund(data[type], shortDurationWorksheet);
                break;
            case "Medium Duration Fund":
                let mediumDurationWorksheet = workbook.addWorksheet('Medium Duration Fund');
                await mediumDurationFund(data[type], mediumDurationWorksheet);
                break;
            case "Low Duration Fund":
                let lowDurationWorksheet = workbook.addWorksheet('Low Duration Fund');
                await lowDurationFund(data[type], lowDurationWorksheet);
                break;
            case "Ultra Short Duration Fund":
                let ultraShortDurationWorksheet = workbook.addWorksheet('Ultra Short Duration');
                await ultraShortDurationFund(data[type], ultraShortDurationWorksheet);
                break;
            case "Credit Risk Fund":
                let creditRiskWorksheet = workbook.addWorksheet('Credit Risk Fund');
                await creditRiskFund(data[type], creditRiskWorksheet);
                break;
            case "Medium to Long Duration Fund":
                let mediumLongDurationWorksheet = workbook.addWorksheet('Medium to Long Duration');
                await mediumLongDurationFund(data[type], mediumLongDurationWorksheet);
                break;
            case "Gilt Fund with 10 year constant duration":
                let gilt10YWorksheet = workbook.addWorksheet('Gilt 10Y Fund');
                await gilt10YFund(data[type], gilt10YWorksheet);
                break;
            case "Overnight Fund":
                let overnightWorksheet = workbook.addWorksheet('Overnight Fund');
                await overnightFund(data[type], overnightWorksheet);
                break;
        
            default:
                break;
        }
    });
    workbook.write('Debt.xlsx');
    // Promise.all(promiseArray).then(resp => workbook.write('Debt.xlsx'));
}

module.exports = analyzeDebtFunds;