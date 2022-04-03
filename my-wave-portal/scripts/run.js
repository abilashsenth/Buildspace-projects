const main = async () => {
  const WaveContractFactory = await hre.ethers.getContractFactory("WavePortal");
  const WaveContract = await WaveContractFactory.deploy();
  await WaveContract.deployed();
  console.log("Contract deployed to :", WaveContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();
