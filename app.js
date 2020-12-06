const equity = require("./equity");
const debt = require("./debt");
const hybrid = require("./hybrid");
const others = require("./others");
const data = require("./data.json");

let fund_schemes_api = "https://api.kuvera.in/mf/api/v4/fund_schemes/list.json?v=1.171.8";
let fund_details_api = "https://api.kuvera.in/mf/api/v4/fund_schemes/PR2FD1-GR.json?v=1.171.8";
let fund_navs_api = "https://api.kuvera.in/mf/api/v4/fund_navs/PR2FD1-GR.json?v=1.171.8";
let fund_holdings_api = "https://api.kuvera.in/mf/api/v4/fund_portfolio_holdings/8270-DR.json?v=1.171.8";

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
                    others(data[type]);
                    break;
                case "Debt":
                    // Analyze Debt funds
                    // debt(data[type]);
                    break;
                case "Hybrid":
                    // Analyze Hybrid funds
                    // hybrid(data[type]);
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