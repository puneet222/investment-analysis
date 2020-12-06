const equity = require("./equity");
const debt = require("./debt");
const hybrid = require("./hybrid");
const others = require("./others");
const data = require("./data.json");
const { asyncForEach } = require("./common/utils");

const getAllfundSchemes = async () => {
    try {
        // let { data } = await axios.get(fund_schemes_api);
        await asyncForEach(Object.keys(data), async type => {
            console.log(type);
            switch (type) {
                case "Equity":
                    // Analyze Equity funds
                    await equity(data[type]);
                    break;
                case "Others":
                    // Analyze Others funds
                    await others(data[type]);
                    break;
                case "Debt":
                    // Analyze Debt funds
                    await debt(data[type]);
                    break;
                case "Hybrid":
                    // Analyze Hybrid funds
                    await hybrid(data[type]);
                    break;
                case "Solution Oriented":
                    // Analyze Solution Oriented funds
                    break;
                default:
                    console.log(type + " funds not found");
                    break;
            }
        });
        // equity.analyzeEquityFunds("test");
    } catch(err) {
        console.error("Error while getting fund schemes", err);
    }
}

getAllfundSchemes();