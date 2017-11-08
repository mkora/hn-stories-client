const path = require('path');
const config = require('./webpack.config.js');

config.devServer.port = 8009;

const index = path.resolve(__dirname, 'test/test.js');
config.entry = {
  test: ['babel-polyfill', `mocha-loader!${index}`]
};

config.output.filename = 'test.bundle.js';

module.exports = config;
