var excel = require('excel4node');

// Create a new instance of a Workbook class
var workbook = new excel.Workbook();

const getSectorStyle = (percentage) => {
    let styleObject = {
        fill: {
            type: 'pattern',
            patternType: 'solid',
            fgColor: '546e7a'
        }, 
        font: {}
    };
    if(percentage > 0 && percentage < 3) {
        styleObject.fill.fgColor = 'e0f2f1';
    } else if(percentage >= 3 && percentage < 7) {
        styleObject.fill.fgColor = 'b2dfdb';
    } else if(percentage >= 7 && percentage < 12) {
        styleObject.fill.fgColor = '80cbc4';
    } else if(percentage >= 12 && percentage < 18) {
        styleObject.fill.fgColor = '4db6ac';
    } else if(percentage >= 18 && percentage < 23) {
        styleObject.fill.fgColor = '26a69a';
    } else if(percentage >= 23 && percentage < 27) {
        styleObject.fill.fgColor = '009688';
    } else if(percentage >= 27 && percentage < 33) {
        styleObject.fill.fgColor = '00897b';
    } else if(percentage >= 33 && percentage < 38) {
        styleObject.fill.fgColor = '00796b';
        styleObject.font.color = '#eceff1';
    } else if(percentage >= 38 && percentage < 45) {
        styleObject.fill.fgColor = '00695c';
        styleObject.font.color = '#eceff1';
    } else if(percentage >= 45) {
        styleObject.fill.fgColor = '004d40';
        styleObject.font.color = '#eceff1';
    }
    return workbook.createStyle(styleObject);
}

const getReturnStyle = (returns) => {
    let styleObject = {
        fill: {
            type: 'pattern',
            patternType: 'solid',
            fgColor: '546e7a'
        }, 
        font: {}
    };
    if(returns <= -20) {
        styleObject.fill.fgColor = 'c62828';
        styleObject.font.color = '#eceff1';
    } else if(returns <= -15) {
        styleObject.fill.fgColor = 'd32f2f';
        styleObject.font.color = '#eceff1';
    } else if(returns <= -10) {
        styleObject.fill.fgColor = 'e53935';
    } else if(returns <= -5) {
        styleObject.fill.fgColor = 'ef5350';
    } else if(returns <= -3) {
        styleObject.fill.fgColor = 'e57373';
    }  else if(returns <= -1) {
        styleObject.fill.fgColor = 'ef9a9a';
    } else if(returns < 0) {
        styleObject.fill.fgColor = 'ffcdd2';
    } else if(returns >= 0 && returns < 1) {
        styleObject.fill.fgColor = 'f9a825';
    } else if(returns >= 1 && returns < 2) {
        styleObject.fill.fgColor = 'ffeb3b';
    } else if(returns >= 2 && returns < 3) {
        styleObject.fill.fgColor = 'ffee58';
    } else if(returns >= 3 && returns < 4) {
        styleObject.fill.fgColor = 'fff176';
    } else if(returns >= 4 && returns < 5) {
        styleObject.fill.fgColor = 'fff59d';
    } else if(returns >= 5 && returns < 6) {
        styleObject.fill.fgColor = 'fff9c4';
    } else if(returns >= 6 && returns < 7) {
        styleObject.fill.fgColor = 'e8f5e9';
    } else if(returns >= 7 && returns < 8) {
        styleObject.fill.fgColor = 'c8e6c9';
    } else if(returns >= 8 && returns < 9) {
        styleObject.fill.fgColor = 'a5d6a7';
    } else if(returns >= 9 && returns < 10) {
        styleObject.fill.fgColor = '81c784';
    } else if(returns >= 10 && returns < 11.5) {
        styleObject.fill.fgColor = '66bb6a';
    } else if(returns >= 11.5 && returns < 14.5) {
        styleObject.fill.fgColor = '4caf50';
    } else if(returns >= 14.5 && returns < 18) {
        styleObject.fill.fgColor = '43a047';
    } else if(returns >= 18 && returns < 23) {
        styleObject.fill.fgColor = '388e3c';
        styleObject.font.color = '#eceff1';
    } else if(returns >= 23 && returns < 30) {
        styleObject.fill.fgColor = '2e7d32';
        styleObject.font.color = '#eceff1';
    } else if(returns >= 30 && returns < 45) {
        styleObject.fill.fgColor = '1b5e20';
        styleObject.font.color = '#eceff1';
    } else if(returns >= 45) {
        styleObject.fill.fgColor = '003300';
        styleObject.font.color = '#eceff1';
    }
    return workbook.createStyle(styleObject);
}

const getExpenseRatioStyle = (ter) => {
    let styleObject = {
        fill: {
            type: 'pattern',
            patternType: 'solid',
            fgColor: '546e7a'
        }, 
        font: {}
    };
    if(ter < 0.1) {
        styleObject.fill.fgColor = '1b5e20';
        styleObject.font.color = '#eceff1';
    } else if(ter >= 0.1 && ter < 0.2) {
        styleObject.fill.fgColor = '2e7d32';
        styleObject.font.color = '#eceff1';
    } else if(ter >= 0.2 && ter < 0.3) {
        styleObject.fill.fgColor = '388e3c';
    } else if(ter >= 0.3 && ter < 0.4) {
        styleObject.fill.fgColor = '43a047';
    } else if(ter >= 0.4 && ter < 0.5) {
        styleObject.fill.fgColor = '4caf50';
    } else if(ter >= 0.5 && ter < 0.6) {
        styleObject.fill.fgColor = '66bb6a';
    } else if(ter >= 0.6 && ter < 0.7) {
        styleObject.fill.fgColor = '81c784';
    } else if(ter >= 0.7 && ter < 0.8) {
        styleObject.fill.fgColor = 'a5d6a7';
    } else if(ter >= 0.8 && ter < 0.9) {
        styleObject.fill.fgColor = 'c8e6c9';
    } else if(ter >= 0.9 && ter < 1.0) {
        styleObject.fill.fgColor = 'fff9c4';
    } else if(ter >= 1.0 && ter < 1.1) {
        styleObject.fill.fgColor = 'fff59d';
    } else if(ter >= 1.1 && ter < 1.2) {
        styleObject.fill.fgColor = 'fff176';
    } else if(ter >= 1.2 && ter < 1.3) {
        styleObject.fill.fgColor = 'ffee58';
    } else if(ter >= 1.3 && ter < 1.4) {
        styleObject.fill.fgColor = 'ffeb3b';
    } else if(ter >= 1.4 && ter < 1.5) {
        styleObject.fill.fgColor = 'fdd835';
    } else if(ter >= 1.5 && ter < 1.6) {
        styleObject.fill.fgColor = 'fbc02d';
    } else if(ter >= 1.6 && ter < 1.7) {
        styleObject.fill.fgColor = 'f9a825';
    } else if(ter >= 1.7 && ter < 1.8) {
        styleObject.fill.fgColor = 'ef9a9a';
    } else if(ter >= 1.8 && ter < 1.9) {
        styleObject.fill.fgColor = 'e57373';
    } else if(ter >= 1.9 && ter < 2.0) {
        styleObject.fill.fgColor = 'ef5350';
    } else if(ter >= 2.0 && ter < 2.1) {
        styleObject.fill.fgColor = 'f44336';
    } else if(ter >= 2.1 && ter < 2.2) {
        styleObject.fill.fgColor = 'e53935';
    } else if(ter >= 2.2 && ter < 2.3) {
        styleObject.fill.fgColor = 'd32f2f';
        styleObject.font.color = '#eceff1';
    } else if(ter >= 2.3 && ter < 2.5) {
        styleObject.fill.fgColor = 'c62828';
        styleObject.font.color = '#eceff1';
    } else if(ter >= 2.5) {
        styleObject.fill.fgColor = 'b71c1c';
        styleObject.font.color = '#eceff1';
    }

    return workbook.createStyle(styleObject);
}

const getRiskStyle = (risk) => {
    let styleObject = {
        fill: {
            type: 'pattern',
            patternType: 'solid',
            fgColor: '546e7a'
        }, 
        font: {}
    };
    switch (risk) {
        case 'High':
            styleObject.fill.fgColor = 'c62828';
            styleObject.font.color = '#eceff1';
            break;
        case 'Moderately High':
            styleObject.fill.fgColor = 'ef5350';
            break;
        case 'Moderate':
            styleObject.fill.fgColor = 'ffc107';
            break;
        case 'Moderately Low':
            styleObject.fill.fgColor = 'aed581';
            break;
        case 'Low':
            styleObject.fill.fgColor = '689f38';
            break;
        default:
            break;
    }
    return workbook.createStyle(styleObject);
}

const getHeaderStyle = (color) => {
    let styleObject = {
        fill: {
            type: 'pattern',
            patternType: 'solid',
            fgColor: color
        }, 
        font: {
            bold: true
        }
    };
    return workbook.createStyle(styleObject);
}

const getCellBackgroundStyle = (color) => {
    let styleObject = {
        fill: {
            type: 'pattern',
            patternType: 'solid',
            fgColor: color
        }, 
        font: {}
    };
    return workbook.createStyle(styleObject);
}

module.exports = {
    getSectorStyle: getSectorStyle,
    getReturnStyle: getReturnStyle,
    getExpenseRatioStyle: getExpenseRatioStyle,
    getRiskStyle: getRiskStyle,
    getHeaderStyle: getHeaderStyle,
    getCellBackgroundStyle: getCellBackgroundStyle
}