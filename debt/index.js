const analyzeDebtFunds = require("./analyzeDebtFunds");
const { asyncForEach } = require("../common/utils");

const excel = require('excel4node');

const workbook = new excel.Workbook();

module.exports = async data => {
    // let testKey = Object.keys(data)[0];
    // let testObject = {[testKey] : data[testKey]};
    await asyncForEach(Object.keys(data) , async type => {
        let worksheet = workbook.addWorksheet(type);
        await analyzeDebtFunds(data[type], type, worksheet);
        return;
    });
    workbook.write('Debt.xlsx')
}