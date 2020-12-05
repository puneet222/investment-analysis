const excel = require('excel4node');

const workbook = new excel.Workbook();

const types = [
    'Liquid Fund',
    'Dynamic Bond',
    'Corporate Bond Fund',
    'Other Bond',
    'Money Market Fund',
    'Gilt Fund',
    'Banking and PSU Fund',
    'Floater Fund',
    'Long Duration Fund',
    'Short Duration Fund',
    'Medium Duration Fund',
    'Low Duration Fund',
    'Ultra Short Duration Fund',
    'Credit Risk Fund',
    'Medium to Long Duration Fund',
    'Gilt Fund with 10 year constant duration',
    'Overnight Fund'
  ]

const analyzeDebtFunds = (data) => {
    let promiseArray = [];
    Object.keys(data).forEach(type => {
        switch (type) {
            case "Liquid Fund":
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
    Promise.all(promiseArray).then(resp => workbook.write('Excel.xlsx'));
}

module.exports = analyzeDebtFunds;