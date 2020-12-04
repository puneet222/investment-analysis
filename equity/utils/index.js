const consolidatedFundData = require("./consolidatedFundData");
const cellStyles = require("./cellStyles");
const roundOff = require("./roundOff");
const segregateFundIds = require("./segregateFundIds");
const headers = require("./headers");
const updateWorksheet = require("./updateWorksheet");


module.exports = {
    getHeaders: headers,
    getConsolidatedDataByFundIds: consolidatedFundData,
    cellStyles,
    roundOff,
    segregateFundIds,
    updateWorksheet
}