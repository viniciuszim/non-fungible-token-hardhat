import { ethers } from "hardhat";

async function main() {

  const Spacebear = await hre.ethers.getContractFactory("Spacebear")
  
  const spacebearInstance = await Spacebear.deploy();

  await spacebearInstance.deployed();

  console.log(
    `Deploy contract at ${spacebearInstance.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
