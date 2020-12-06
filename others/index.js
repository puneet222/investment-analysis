const analyzeOtherFunds = require("./analyzeOtherFunds");
const { asyncForEach } = require("../common/utils");
const excel = require('excel4node');

const workbook = new excel.Workbook();

module.exports = async data => {
    let promiseArray = [];
    await asyncForEach(Object.keys(data) , async type => {
        let worksheet = workbook.addWorksheet(type);
        await analyzeOtherFunds(data[type], type, worksheet);
        return;
    });
    workbook.write('Other.xlsx')
}