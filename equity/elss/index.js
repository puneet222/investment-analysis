//@ts-check

const utils = require("../utils");
var excel = require('excel4node');

// Create a new instance of a Workbook class
var workbook = new excel.Workbook();

var style = workbook.createStyle({
    font: {
      color: '#FF0800',
      size: 12
    },
    numberFormat: '$#,##0.00; ($#,##0.00); -'
});

const getSectorStyle = (percentage) => {
    let styleObject = {
        fill: {
            type: 'pattern',
            patternType: 'solid',
            fgColor: '546e7a'
        }
    };
    if(percentage > 0 && percentage < 3) {
        styleObject.fill.fgColor = 'ede7f6';
    } else if(percentage >= 3 && percentage < 7) {
        styleObject.fill.fgColor = 'd1c4e9';
    } else if(percentage >= 7 && percentage < 12) {
        styleObject.fill.fgColor = 'b39ddb';
    } else if(percentage >= 12 && percentage < 18) {
        styleObject.fill.fgColor = '9575cd';
    } else if(percentage >= 18 && percentage < 23) {
        styleObject.fill.fgColor = '7e57c2';
    } else if(percentage >= 23 && percentage < 27) {
        styleObject.fill.fgColor = '673ab7';
    } else if(percentage >= 27 && percentage < 33) {
        styleObject.fill.fgColor = '5e35b1';
    } else if(percentage >= 33 && percentage < 38) {
        styleObject.fill.fgColor = '512da8';
    } else if(percentage >= 38 && percentage < 45) {
        styleObject.fill.fgColor = '4527a0';
    } else if(percentage >= 45) {
        styleObject.fill.fgColor = '311b92';
    }
    return workbook.createStyle(styleObject);
}



const analyzeElssFunds = (data, worksheet) => {
    let headers = utils.headers;
    let growthFundIds = [];
    let dividendPayoutsFundIds = [];
    let dividendReinvestedFundIds = [];
    Object.keys(data).forEach(fund => {
        data[fund].forEach(type => {
            if(type.c.includes("GR")) {
                // Growth Plans
                growthFundIds.push(type.c);
            } else if(type.c.includes("DP")) {
                // Dividend Payout Plans
                dividendPayoutsFundIds.push(type.c);
            } else if(type.c.includes("DR")) {
                // Dividend Reinvested Plans
                dividendReinvestedFundIds.push(type.c);
            } else {
                console.log(type);
            }
        });
    });
    return new Promise(resolve => {
        utils.getConsolidatedDataByFundIds(growthFundIds).then(data => {
            let sectors = Array.from(data.fundSectors);
            sectors.forEach((sector, index) => {
                headers[sector] = {
                    field: sector ? sector : 'Others',
                    position: index + 10
                }
            });
            Object.keys(headers).forEach(key => {
                worksheet.cell(1, headers[key]['position']).string(headers[key]['field']);
            });
            let dataRow = 2;
            data.fundData.forEach(fundObject => {
                Object.keys(fundObject).forEach(key => {
                    if(key === 'sectorHoldings') {
                        let holdingsMap = fundObject[key];
                        holdingsMap.forEach((v, k) => {
                            if(headers[k]) {
                                worksheet.cell(dataRow, headers[k]['position']).number(v).style(getSectorStyle(v));
                            }
                        })
                    } else if(key === 'returns') {
                        let returns = fundObject[key];
                        Object.keys(returns).forEach(ret => {
                            if(headers[ret]) {
                                worksheet.cell(dataRow, headers[ret]['position']).number(returns[ret])
                            }
                        })
                    } else {
                        if(fundObject[key] && headers[key]) {
                            if((typeof fundObject[key]) === 'string') {
                                worksheet.cell(dataRow, headers[key]['position']).string(fundObject[key]);
                            } else if((typeof fundObject[key]) === 'number') {
                                worksheet.cell(dataRow, headers[key]['position']).number(fundObject[key]);
                            } else {
                                console.error("Error Occured for key ", key, " and value : ", fundObject[key]);
                            }
                        }
                    }
                });
                dataRow++;
            })
            resolve(worksheet)
        });
    });
    // console.log(dividendPayoutsFundIds);
    // console.log(dividendReinvestedFundIds);
}

const unique_sectors = [
    'Financial Services',
    'Technology',
    'Communication Services',
    'Healthcare',
    'Energy',
    'Basic Materials',
    'Utilities',
    'Consumer Cyclical',
    'Consumer Defensive',
    'Industrials',
    null,
    'Real Estate'
]

module.exports = analyzeElssFunds;