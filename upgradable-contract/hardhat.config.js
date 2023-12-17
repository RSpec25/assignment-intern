require("@nomicfoundation/hardhat-toolbox");
require("@openzeppelin/hardhat-upgrades");
// require("@nomiclabs/hardhat-etherscan");
// import { HardhatUserConfig } from "hardhat/config";
// import "@nomiclabs/hardhat-verify";
// require('@nomiclabs/hardhat-ethers');

const FUJI_PRIVATE_KEY = "0150a0b8b50946e78e7d7056ba02ba27";
const PRIVATE_KEY = "bbc35d2d48bad7bf4bfd76c29c068515a5ae7997197315a5c616db65c42934e4";
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.4.17",
  // paths: {
  //   artifacts: './src/artifacts',
  // },
  etherscan: {
    apiKey: {
      snowtrace: "snowtrace", // apiKey is not required, just set a placeholder
    },
    customChains: [
      {
        network: "snowtrace",
        chainId: 43113,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/testnet/evm/43113/etherscan",
          browserURL: "https://avalanche.testnet.routescan.io"
        }
      }
    ]
  },
  networks: {
    fuji: {
      url: `https://avalanche-fuji.infura.io/v3/${FUJI_PRIVATE_KEY}`,
      chainId: 43113,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
// module.exports = {
//   networks: {
//     sepolia: {
//       url: `https://sepolia.infura.io/v3/${INFURA_API_KEY}`,
//     },
//   },
// };

// 0xAb77bC8051a9b335D44F93B829B3a456755fd505 - proxy contract
// 0x323CD279f36f40629EF74EF031E490e8F7cBD887 - implimentation contract
// 0x21a97dcffe30c82c5fb09df0a0b75446e2fcf4df1a2faff7e2741f49b6781c33 - trsxn hash
