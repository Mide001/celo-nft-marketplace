const { ethers } = require("hardhat");


async function main(){
  const CeloNFTFactory = await ethers.getContractFactory("CeloNFT");
  const celoNftContract = await CeloNFTFactory.deploy();
  await celoNftContract.deployed();

  console.log("Celo Nft deployed to: ", celoNftContract.address);

  const NFTMarketplaceFactory = await ethers.getContractFactory("NFTMarketplace");
  const nftMarketplaceFactory = await NFTMarketplaceFactory.deploy();
  await nftMarketplaceFactory.deployed();

  console.log("Nft Marketplace deployed to: ", nftMarketplaceFactory.address);
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
})