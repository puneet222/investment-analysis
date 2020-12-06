const analyzeHybridFunds = require("./analyzeHybridFund");
const { asyncForEach } = require("../common/utils");
const excel = require('excel4node');

const workbook = new excel.Workbook();

module.exports = async data => {
    await asyncForEach(Object.keys(data) , async type => {
        let worksheet = workbook.addWorksheet(type);
        await analyzeHybridFunds(data[type], type, worksheet);
    });
    return new Promise(resolve => resolve(workbook.write('Hybrid.xlsx')));
}