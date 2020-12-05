const headers = {
    'short_name': {
        field: 'Fund',
        color: '81d4fa'
    },
    'expense_ratio': {
        field: 'TER',
        color: 'bcb781'
    },
    'code':{
        field: 'Code',
        color: 'pink'
    },
    'crisil_rating': {
        field: 'Risk',
        color: 'bc95a8'
    },
    'portfolio_turnover': {
        field: 'Turnover',
        color: 'f48fb1'
    },
    'aum': {
        field: 'AUM',
        color: 'f2c85c'
    },
    'volatility': {
        field: 'Volatility',
        color: 'bcaaa4'
    },
    'year_1': {
        field: '1 Y',
        color: 'ce93d8'
    },
    'year_3': {
        field: '3 Y',
        color: 'ce93d8'
    },
    'year_5': {
        field: '5 Y',
        color: 'ce93d8'
    },
    'total_equity_holdings': {
        field: 'Equity',
        color: 'ce93d8'
    },
    'total_bond_holdings': {
        field: 'Bond',
        color: 'ce93d8'
    }
}

module.exports = (sectors, ratings) => {
    sectors.forEach(sector => {
        headers[sector] = {
            field: sector ? sector : 'Others',
            color: 'ffab91'
        }
    });
    ratings.forEach(rating => {
        headers[rating] = {
            field: rating ? rating : 'Others',
            color: 'f6bd60'
        }
    });
    Object.keys(headers).forEach((key, index) => {
        headers[key]['position'] = index + 1;
    });
    return headers;
}