import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const fs = require("fs");

const mnemonicPhrase = fs.readFileSync(".secret").toString().trim();
const infuraProjectId = fs.readFileSync(".infura").toString().trim();
const etherscanKey = fs.readFileSync(".etherscan").toString().trim();

const config: HardhatUserConfig = {
  networks: {
    goerli: {
      url: "https://goerli.infura.io/v3/" + infuraProjectId, 
      accounts: {
        mnemonic: mnemonicPhrase,
        path: "m/44'/60'/0'/0",
        initialIndex: 0,
        count: 10
      }
    }
  },
  etherscan: {
    apiKey: etherscanKey
  },
  solidity: "0.8.18",
};

export default config;
