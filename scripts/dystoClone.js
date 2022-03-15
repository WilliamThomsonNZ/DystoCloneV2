const hre = require("hardhat");
async function main() {
    const DystoClone = await hre.ethers.getContractFactory("DystoClone"); 
    const dystoClone = await DystoClone.deploy();
    await dystoClone.deployed();
    console.log("contract deployed to: " ,dystoClone.address);

    const DystoCloneTokenContract = await hre.ethers.getContractFactory("DystoCloneToken");
    const dystoCloneTokenContract = await DystoCloneTokenContract.deploy(dystoClone.address);
    await dystoCloneTokenContract.deployed();

    console.log("token contract deployed to: ", dystoCloneTokenContract.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
