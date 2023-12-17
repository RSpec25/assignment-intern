// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
const { ethers, upgrades } = require('hardhat');

async function main() {
  // Compile the contracts
  const TetherToken = await ethers.getContractFactory('usdt_stable');

  const basisPointsRate = 0;
  const maximumFee = 0;
  const paused = false;
  // Deploy the contracts
  console.log('Deploying contract...');
  const tetherToken = await upgrades.deployProxy(TetherToken, [basisPointsRate, maximumFee, paused], { initializer: false });

  await tetherToken.waitForDeployment();
  // deployed();

  console.log('TetherToken deployed to:', tetherToken.target);
}

// main()
//   .then(() => process.exit(0))
//   .catch(error => {
//     console.error(error);
//     process.exit(1);
//   });


// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
