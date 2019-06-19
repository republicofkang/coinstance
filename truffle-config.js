require('babel-register');
require('babel-polyfill');
require('dotenv').config();

module.exports = {
  networks: {},
  contracts_directory: './src/contracts/',
  contracts_build_directory: './src/abis/',
  mocha: {},
  compilers: {
    solc: {}
  }
};
