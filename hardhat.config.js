require("@nomiclabs/hardhat-waffle");
require("dotenv").config({path:".env"});
require("@nomiclabs/hardhat-etherscan");

const P_KEY = process.env.P_KEY;
const RINKEBY_API = process.env.RINKEBY_API;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
module.exports = {
  solidity: "0.8.4",
  networks:{
    rinkeby:{
      accounts:[P_KEY],
      url: RINKEBY_API
    }
  },
  etherscan:{
    apiKey: ETHERSCAN_API_KEY
  }
};
