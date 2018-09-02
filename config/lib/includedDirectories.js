const { include } = require('path');

module.exports = [
  include(__dirname, '../../src/public'),
  join(__dirname, '../../src/common'),
  join(__dirname, '../../node_modules/swiper'),
];
