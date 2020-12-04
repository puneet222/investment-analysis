const cellStyles = require("./cellStyles");
const roundOff = require("./roundOff");

module.exports = (worksheet, headers, data) => {
    Object.keys(headers).forEach(key => {
        worksheet.cell(1, headers[key]['position'])
        .string(headers[key]['field'])
        .style(cellStyles.getHeaderStyle(headers[key]['color']));
    });
    let dataRow = 2;
    data.forEach(fundObject => {
        Object.keys(fundObject).forEach(key => {
            if(key === 'sectorHoldings') {
                let holdingsMap = fundObject[key];
                holdingsMap.forEach((v, k) => {
                    if(headers[k]) {
                        worksheet.cell(dataRow, headers[k]['position'])
                        .number(roundOff(v, 2))
                        .style(cellStyles.getSectorStyle(v));
                    }
                })
            } else if(key === 'returns') {
                let returns = fundObject[key];
                Object.keys(returns).forEach(ret => {
                    if(headers[ret]) {
                        worksheet.cell(dataRow, headers[ret]['position'])
                        .number(roundOff(returns[ret], 2))
                        .style(cellStyles.getReturnStyle(returns[ret]));
                    }
                })
            } else {
                if(key === 'expense_ratio') {
                    worksheet.cell(dataRow, headers[key]['position'])
                    .number(roundOff(fundObject[key], 2))
                    .style(cellStyles.getExpenseRatioStyle(fundObject[key]));
                } else if(key === 'crisil_rating') {
                    worksheet.cell(dataRow, headers[key]['position'])
                    .string(fundObject[key])
                    .style(cellStyles.getRiskStyle(fundObject[key]));
                } else if(key === 'aum') {
                    worksheet.cell(dataRow, headers[key]['position'])
                    .number(Number(fundObject[key])/10)
                    .style(cellStyles.getCellBackgroundStyle('f9fbe7'));
                } else if(key === 'portfolio_turnover') {
                    worksheet.cell(dataRow, headers[key]['position'])
                    .number(roundOff(fundObject[key], 2))
                    .style(cellStyles.getCellBackgroundStyle('f9fbe7'));
                } else if(key === 'volatility') {
                    worksheet.cell(dataRow, headers[key]['position'])
                    .number(roundOff(fundObject[key], 2))
                    .style(cellStyles.getCellBackgroundStyle('f9fbe7'));
                } else if(key === 'short_name') {
                    worksheet.cell(dataRow, headers[key]['position'])
                    .string(fundObject[key])
                    .style(cellStyles.getCellBackgroundStyle('daf1f9'));
                }
                else if(fundObject[key] && headers[key]) {
                    if((typeof fundObject[key]) === 'string') {
                        worksheet.cell(dataRow, headers[key]['position']).string(fundObject[key]);
                    } else if((typeof fundObject[key]) === 'number') {
                        worksheet.cell(dataRow, headers[key]['position']).number(roundOff(fundObject[key], 2));
                    } else {
                        console.error("Error Occured for key ", key, " and value : ", fundObject[key]);
                    }
                }
            }
        });
        dataRow++;
    });
}