
const hre = require("hardhat");

async function main() {
  const BuyMeACoffee = await hre.ethers.getContractFactory("BuyMeACoffee");
  const buyMeACoffee = await BuyMeACoffee.deploy();

  await buyMeACoffee.deployed();

  console.log("Transactions address: ", buyMeACoffee.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

// 0x2F664e31C6ae36175b38A5De3168B65bd5825cAD
