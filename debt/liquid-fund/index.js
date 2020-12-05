const utils = require("../utils");

module.exports = (data, worksheet) => {
    let fundIds = utils.segregateFundIds(data);
    return new Promise(resolve => {
        utils.getConsolidatedDataByFundIds(fundIds.growthFundIds).then(data => {
            let ratings = Array.from(data.fundRatings).map(rating => utils.getRatings(rating));
            let headers = utils.getHeaders(ratings);
            worksheet = utils.updateWorksheet(worksheet, headers, data.fundData);
            console.log("Resolved Liquid Funds");
            resolve(worksheet);
        }).catch(err => {
            console.log(err)
        });
    });
}

const types = [
    null,           'Sovereign',      'CRISIL A1+',
    'ICRA A1+',     'SOVEREIGN',      'CRISIL AAA',
    'CARE A1+',     'SOV',            'ICRA AAA',
    'CARE AAA',     'FITCH A1+',      'IND A1+',
    '[ICRA]A1+',    'FITCH AAA(IND)', 'GOV - SOVRN',
    'CRISIL - AAA', 'CARE - AAA',     'CRISIL - A1+',
    'ICRA - A1+',   'CARE - A1+',     'GOI SOV',
    'FITCH AAA',    'IND AAA',        'CRISIL- AAA',
    'CRISIL- A1+',  'CARE- A1+',      'ICRA- A1+',
    '[ICRA]AAA',    'Fitch A1+',      'AAA',
    'A1+(CRISIL)',  'A1+(ICRA)',      'CRISIL-A1+',
    'ICRA-A1+',     'CARE-A1+',       'A1+'
  ]