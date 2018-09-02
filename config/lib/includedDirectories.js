const { include } = require('path');

module.exports = [
  include(__dirname, '../../src/public'),
  include(__dirname, '../../src/common'),
  include(__dirname, '../../node_modules/swiper'),
];
