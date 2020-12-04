const consolidatedFundData = require("./consolidatedFundData");

const headers = {
    'name': {
        field: 'Fund',
        position: 1
    },
    'expense_ratio': {
        field: 'TER',
        position: 2
    },
    'crisil_rating': {
        field: 'Ratings',
        position: 3
    },
    'portfolio_turnover': {
        field: 'Turnover',
        position: 4
    },
    'aum': {
        field: 'AUM',
        position: 5
    },
    'week_1': {
        field: 'W 1',
        position: 6
    },
    'year_1': {
        field: '1 Y',
        position: 7
    },
    'year_3': {
        field: '3 Y',
        position: 8
    },
    'year_5': {
        field: '5 Y',
        position: 9
    }
}

module.exports = {
    headers,
    getConsolidatedDataByFundIds: consolidatedFundData
}