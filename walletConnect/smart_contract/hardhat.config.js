require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/NBenoSHF_X4jwKk2EV8oRbV4VYPrp36G",
      accounts: ['066781525998cd4f2157ec8e68b19bcd8afe8e170b73e24150bf36031a275069'],
    },
  },
};