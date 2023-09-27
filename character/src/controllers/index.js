const { catchAsycn } = require('../utils');

module.exports = {
  getCharacters: catchAsycn(require('./getCharacters')),
}