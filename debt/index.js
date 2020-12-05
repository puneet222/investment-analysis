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

const excel = require('excel4node');

const workbook = new excel.Workbook();

const analyzeDebtFunds = (data) => {
    let promiseArray = [];
    Object.keys(data).forEach(type => {
        switch (type) {
            case "Liquid Fund-":
                let liquidWorksheet = workbook.addWorksheet('Liquid Fund');
                let liquidPromise = liquidFund(data[type], liquidWorksheet);
                promiseArray.push(liquidPromise);
                break;
            case "Dynamic Bond-":
                let dynamicWorksheet = workbook.addWorksheet('Dynamic Fund');
                let dynamicPromise = dynamicFund(data[type], dynamicWorksheet);
                promiseArray.push(dynamicPromise);
                break;
            case "Corporate Bond Fund-":
                let corporateWorksheet = workbook.addWorksheet('Corporate Fund');
                let corporatePromise = corporateFund(data[type], corporateWorksheet);
                promiseArray.push(corporatePromise);
                break;
            case "Other Bond":
                break;
            case "Money Market Fund":
                break;
            case "Gilt Fund-":
                let giltWorksheet = workbook.addWorksheet('Gilt Fund');
                let giltPromise = giltFund(data[type], giltWorksheet);
                promiseArray.push(giltPromise);
                break;
            case "Banking and PSU Fund-":
                let bankPSUWorksheet = workbook.addWorksheet('Bank PSU');
                let bankPSUPromise = bankPSUFund(data[type], bankPSUWorksheet);
                promiseArray.push(bankPSUPromise);
                break;
            case "Floater Fund-":
                let floaterWorksheet = workbook.addWorksheet('Floater Fund');
                let floaterPromise = floaterFund(data[type], floaterWorksheet);
                promiseArray.push(floaterPromise);
                break;
            case "Long Duration Fund":
                let longDurationWorksheet = workbook.addWorksheet('Long Duration Fund');
                let longDurationPromise = longDurationFund(data[type], longDurationWorksheet);
                promiseArray.push(longDurationPromise);
                break;
            case "Short Duration Fund":
                let shortDurationWorksheet = workbook.addWorksheet('Short Duration Fund');
                let shortDurationPromise = shortDurationFund(data[type], shortDurationWorksheet);
                promiseArray.push(shortDurationPromise);
                break;
            case "Medium Duration Fund":
                let mediumDurationWorksheet = workbook.addWorksheet('Medium Duration Fund');
                let mediumDurationPromise = mediumDurationFund(data[type], mediumDurationWorksheet);
                promiseArray.push(mediumDurationPromise);
                break;
            case "Low Duration Fund":
                let lowDurationWorksheet = workbook.addWorksheet('Low Duration Fund');
                let lowDurationPromise = lowDurationFund(data[type], lowDurationWorksheet);
                promiseArray.push(lowDurationPromise);
                break;
            case "Ultra Short Duration Fund":
                break;
            case "Credit Risk Fund-":
                let creditRiskWorksheet = workbook.addWorksheet('Credit Risk Fund');
                let creditRiskPromise = creditRiskFund(data[type], creditRiskWorksheet);
                promiseArray.push(creditRiskPromise);
                break;
            case "Medium to Long Duration Fund":
                break;
            case "Gilt Fund with 10 year constant duration-":
                let gilt10YWorksheet = workbook.addWorksheet('Gilt 10Y Fund');
                let gilt10YPromise = gilt10YFund(data[type], gilt10YWorksheet);
                promiseArray.push(gilt10YPromise);
                break;
            case "Overnight Fund":
                break;
        
            default:
                break;
        }
    });
    Promise.all(promiseArray).then(resp => workbook.write('Debt.xlsx'));
}

module.exports = analyzeDebtFunds;