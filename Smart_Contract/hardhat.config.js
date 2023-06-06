require('@nomiclabs/hardhat-waffle');
require("@nomiclabs/hardhat-etherscan");
require('dotenv').config();

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/xSnW0a7T_wPQoKbhTwqXkHDvBdNOfxuO',
      accounts: ['dafc4775ee09e2c32d399baaac126e90d08c6b0d0d11ce91b704c443379438da'],
    },
  },

  etherscan: {
    apiKey: {
      goerli: ' 0xb491e09d8532E3cD5B1748F5786eC14a8Bc70A1b'
    }
}

}

//    0x12CC020314cA0d2218c33721C437C7BaFeF5CdA6
