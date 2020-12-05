const liquidFund = require('./liquid-fund');

const excel = require('excel4node');

const workbook = new excel.Workbook();

const analyzeDebtFunds = (data) => {
    let promiseArray = [];
    Object.keys(data).forEach(type => {
        switch (type) {
            case "Liquid Fund":
                let liquidWorksheet = workbook.addWorksheet('Liquid Fund');
                let liquidPromise = liquidFund(data[type], liquidWorksheet);
                promiseArray.push(liquidPromise);
                break;
            case "Dynamic Bond":
                break;
            case "Corporate Bond Fund":
                break;
            case "Other Bond":
                break;
            case "Money Market Fund":
                break;
            case "Gilt Fund":
                break;
            case "Banking and PSU Fund":
                break;
            case "Floater Fund":
                break;
            case "Long Duration Fund":
                break;
            case "Short Duration Fund":
                break;
            case "Medium Duration Fund":
                break;
            case "Low Duration Fund":
                break;
            case "Ultra Short Duration Fund":
                break;
            case "Credit Risk Fund":
                break;
            case "Medium to Long Duration Fund":
                break;
            case "Gilt Fund with 10 year constant duration":
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