const headers = {
    'short_name': {
        field: 'Fund',
        position: 1,
        color: '81d4fa'
    },
    'expense_ratio': {
        field: 'TER',
        position: 2,
        color: 'bcb781'
    },
    'crisil_rating': {
        field: 'Ratings',
        position: 3,
        color: 'bc95a8'
    },
    'portfolio_turnover': {
        field: 'Turnover',
        position: 4,
        color: 'f48fb1'
    },
    'aum': {
        field: 'AUM',
        position: 5,
        color: 'f2c85c'
    },
    'volatility': {
        field: 'Volatility',
        position: 6,
        color: 'bcaaa4'
    },
    'year_1': {
        field: '1 Y',
        position: 7,
        color: 'ce93d8'
    },
    'year_3': {
        field: '3 Y',
        position: 8,
        color: 'ce93d8'
    },
    'year_5': {
        field: '5 Y',
        position: 9,
        color: 'ce93d8'
    }
}

module.exports = (sectors) => {
    sectors.forEach((sector, index) => {
        headers[sector] = {
            field: sector ? sector : 'Others',
            position: index + 10,
            color: 'ffab91'
        }
    });
    return headers;
}