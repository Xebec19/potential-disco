import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

export default buildModule("MyNFTModule", (m) => {
  const myNft = m.contract("MyNFT");

  return { myNft };
});
