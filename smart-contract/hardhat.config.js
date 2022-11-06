require("@nomicfoundation/hardhat-toolbox");
require("@nomicfoundation/hardhat-chai-matchers");

require("dotenv");

const PRIVATE_KEY = "d1c3c102915d6a68df8c42482f609abf821aa9d043f29e6be025a905cbb3d85c";
const RPC_URL = "https://alfajores-forno.celo-testnet.org";


if(!PRIVATE_KEY){
  console.error("Missing PRIVATE_KEY ENVIRONMENT VARIABLE");
}
if(!RPC_URL) {
  console.error("Missing RPC_URL environment variable");
}
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    alfajores: {
      url: RPC_URL,
      accounts: [PRIVATE_KEY],
    },
  },
};
