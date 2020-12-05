const analyzeHybridFunds = require("./analyzeHybridFund");

const excel = require('excel4node');

const workbook = new excel.Workbook();

async function asyncForEach(array, callback) {
    for(let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
    }
}

module.exports = async data => {
    let promiseArray = [];
    await asyncForEach(Object.keys(data) , async type => {
        let worksheet = workbook.addWorksheet(type);
        await analyzeHybridFunds(data[type], type, worksheet);
        return;
    });
    workbook.write('Hybrid.xlsx')
}