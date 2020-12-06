const analyzeEquityFunds = require("./analyzeEquityFunds");
const { asyncForEach } = require("../common/utils");
const excel = require('excel4node');

const workbook = new excel.Workbook();

module.exports = async data => {
    let testKey = Object.keys(data)[0];
    let testObject = {[testKey] : data[testKey]};
    await asyncForEach(Object.keys(testObject) , async type => {
        let worksheet = workbook.addWorksheet(type);
        await analyzeEquityFunds(data[type], type, worksheet);
        return;
    });
    workbook.write('Equity.xlsx')
}