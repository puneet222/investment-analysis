const cellStyles = require("../../common/cellStyles");
const { roundOff } = require("../../common/utils");

const NA = 'N/A';
const DISABLE_LIGHT_COLOR = 'b0bec5';

module.exports = (worksheet, headers, data) => {
    Object.keys(headers).forEach(key => {
        worksheet.cell(1, headers[key]['position'])
        .string(headers[key]['field'])
        .style(cellStyles.getHeaderStyle(headers[key]['color']));
    });
    let totalColumns = Object.keys(headers).length;
    let dataRow = 2;
    if(data && data.length > 0) {
        data.forEach(fundObject => {
            for(let i = 0; i < totalColumns; i++) {
                worksheet.cell(dataRow, i+1)
                .string('-')
                .style(cellStyles.getCellBackgroundStyle(DISABLE_LIGHT_COLOR));
            }
            Object.keys(fundObject).forEach(key => {
                if(key === 'sectorHoldings') {
                    let holdingsMap = fundObject[key];
                    holdingsMap.forEach((v, k) => {
                        if(headers[k] && v !== null) {
                            worksheet.cell(dataRow, headers[k]['position'])
                            .number(roundOff(v, 2))
                            .style(cellStyles.getSectorStyle(v));
                        }
                    });
                }
                else if(key === 'returns') {
                    let returns = fundObject[key];
                    if(returns) {
                        Object.keys(returns).forEach(ret => {
                            if(headers[ret]) {
                                if(returns[ret] !== null) {
                                    worksheet.cell(dataRow, headers[ret]['position'])
                                    .number(roundOff(returns[ret], 2))
                                    .style(cellStyles.getReturnStyle(returns[ret]));
                                } else {
                                    worksheet.cell(dataRow, headers[ret]['position'])
                                    .string(NA)
                                    .style(cellStyles.getCellBackgroundStyle(DISABLE_LIGHT_COLOR));
                                }
                            }
                        });
                    }
                } else {
                    if(key === 'expense_ratio') {
                        if(fundObject[key] !== null) {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .number(roundOff(fundObject[key], 2))
                            .style(cellStyles.getExpenseRatioStyle(fundObject[key]));
                        } else {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .string(NA)
                            .style(cellStyles.getCellBackgroundStyle(DISABLE_LIGHT_COLOR));
                        }
                    } else if(key === 'crisil_rating') {
                        if(fundObject[key] !== null) {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .string(fundObject[key])
                            .style(cellStyles.getRiskStyle(fundObject[key]));
                        } else {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .string(NA)
                            .style(cellStyles.getCellBackgroundStyle(DISABLE_LIGHT_COLOR));
                        }
                    } else if(key === 'aum') {
                        if(fundObject[key] !== null) {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .number(Number(fundObject[key])/10)
                            .style(cellStyles.getCellBackgroundStyle('f9fbe7'));
                        } else {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .string(NA)
                            .style(cellStyles.getCellBackgroundStyle(DISABLE_LIGHT_COLOR));
                        }
                    } else if(key === 'portfolio_turnover') {
                        if(fundObject[key] !== null) {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .number(roundOff(fundObject[key], 2))
                            .style(cellStyles.getCellBackgroundStyle('f9fbe7'));
                        } else {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .string(NA)
                            .style(cellStyles.getCellBackgroundStyle(DISABLE_LIGHT_COLOR));
                        }
                    } else if(key === 'volatility') {
                        if(fundObject[key] !== null) {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .number(roundOff(fundObject[key], 2))
                            .style(cellStyles.getCellBackgroundStyle('f9fbe7'));
                        } else {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .string(NA)
                            .style(cellStyles.getCellBackgroundStyle(DISABLE_LIGHT_COLOR));
                        }
                    } else if(key === 'short_name') {
                        if(fundObject[key] !== null) {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .string(fundObject[key])
                            .style(cellStyles.getCellBackgroundStyle('daf1f9'));
                        } else {
                            worksheet.cell(dataRow, headers[key]['position'])
                            .string(NA)
                            .style(cellStyles.getCellBackgroundStyle(DISABLE_LIGHT_COLOR));
                        }
                    }
                    else if(fundObject[key] && headers[key]) {
                        if((typeof fundObject[key]) === 'string') {
                            worksheet.cell(dataRow, headers[key]['position']).string(fundObject[key]);
                        } else if((typeof fundObject[key]) === 'number') {
                            worksheet.cell(dataRow, headers[key]['position']).number(roundOff(fundObject[key], 2));
                        } else {
                            console.log("Error Occured for key ", key, " and value : ", fundObject[key]);
                        }
                    }
                }
            });
            dataRow++;
        });
    }
    return worksheet;
}