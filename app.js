const equity = require("./equity");
const debt = require("./debt");
const hybrid = require("./hybrid");
const others = require("./others");
const data = require("./data.json");

const getAllfundSchemes = async() => {
    try {
        // let { data } = await axios.get(fund_schemes_api);
        Object.keys(data).forEach(type => {
            switch (type) {
                case "Equity":
                    // Analyze Equity funds
                    // equity(data[type]);
                    break;
                case "Others":
                    // Analyze Others funds
                    // others(data[type]);
                    break;
                case "Debt":
                    // Analyze Debt funds
                    // debt(data[type]);
                    break;
                case "Hybrid":
                    // Analyze Hybrid funds
                    hybrid(data[type]);
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

let types = [ 'Equity', 'Others', 'Debt', 'Hybrid', 'Solution Oriented' ];

getAllfundSchemes();