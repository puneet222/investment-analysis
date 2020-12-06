const consolidatedFundData = require("./consolidatedFundData");
const cellStyles = require("../../common/cellStyles");
const roundOff = require("../../common/roundOff");
const segregateFundIds = require("../../common/segregateFundIds");
const headers = require("./headers");
const updateWorksheet = require("./updateWorksheet");
const getRatings = require("../../common/ratings");
const chalk = require('chalk');

module.exports = {
    getSectorHeaders: headers.getSectorHeaders,
    getCompanyHeaders: headers.getCompanyHeaders,
    getConsolidatedDataByFundIds: consolidatedFundData,
    cellStyles,
    roundOff,
    segregateFundIds,
    updateWorksheet,
    chalk,
    getRatings
}