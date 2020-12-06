const consolidatedFundData = require("./consolidatedFundData");
const cellStyles = require("../../common/cellStyles");
const { roundOff } = require("../../common/utils");
const segregateFundIds = require("../../common/segregateFundIds");
const headers = require("./headers");
const updateWorksheet = require("./updateWorksheet");
const chalk = require('chalk');

const FUND_NAMES = {
    CONTRA_FUND: 'Contra Fund',
    DIVIDEND_YIELD_FUND: 'Dividend Yield Fund',
    ELSS: 'ELSS',
    FOCUSED_FUND: 'Focused Fund',
    LARGE_CAP_FUND: 'Large Cap Fund',
    LARGE_MID_CAP_FUND: 'Large Mid Cap Fund',
    MID_CAP_FUND: 'Mid Cap Fund',
    MULTI_CAP_FUND: 'Multi Cap Fund',
    SECTORAL_THEMATIC_FUND: 'Sectoral Thematic Fund',
    SMALL_CAP_FUND: 'Small Cap Fund',
    VALUE_FUND: 'Value Fund'
};


module.exports = {
    getHeaders: headers,
    getConsolidatedDataByFundIds: consolidatedFundData,
    cellStyles,
    roundOff,
    segregateFundIds,
    updateWorksheet,
    chalk,
    FUND_NAMES
}