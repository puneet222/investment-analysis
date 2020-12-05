const headers = {
    'short_name': {
        field: 'Fund',
        color: '81d4fa'
    },
    'expense_ratio': {
        field: 'TER',
        color: 'bcb781'
    },
    'crisil_rating': {
        field: 'Risk',
        color: 'bc95a8'
    },
    'aum': {
        field: 'AUM',
        color: 'f2c85c'
    },
    'volatility': {
        field: 'Volatility',
        color: 'bcaaa4'
    },
    'week_1': {
        field: '1 W',
        color: 'ce93d8'
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
    }
}

module.exports = (ratings) => {
    ratings.forEach(rating => {
        headers[rating] = {
            field: rating ? rating : 'Others',
            color: 'ffab91'
        }
    });
    Object.keys(headers).forEach((key, index) => {
        headers[key]['position'] = index + 1;
    });
    return headers;
}