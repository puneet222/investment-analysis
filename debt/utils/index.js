const consolidatedFundData = require("./consolidatedFundData");
const cellStyles = require("../../common/cellStyles");
const { roundOff } = require("../../common/utils");
const segregateFundIds = require("../../common/segregateFundIds");
const headers = require("./headers");
const updateWorksheet = require("./updateWorksheet");
const getRatings = require("../../common/ratings");


module.exports = {
    getHeaders: headers,
    getConsolidatedDataByFundIds: consolidatedFundData,
    cellStyles,
    roundOff,
    segregateFundIds,
    getRatings,
    updateWorksheet
}