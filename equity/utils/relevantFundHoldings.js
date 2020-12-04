module.exports = (data, fundId) => {
    let sectors = new Set();
    let sectorMap = new Map();
    data[fundId].forEach(holding => {
        if(sectorMap.has(holding.sector_name)) {
            sectorMap.set(holding.sector_name, sectorMap.get(holding.sector_name) + holding.percentage_to_aum);
        } else {
            sectorMap.set(holding.sector_name, holding.percentage_to_aum);
        }
        sectors.add(holding.sector_name);
    });
    return {
        holdings: sectorMap,
        sectors: sectors
    };
}