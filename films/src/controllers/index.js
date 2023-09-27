const { catchAsycn } = require('../utils');

module.exports = {
  getFilms: catchAsycn(require('./getAllFilms')),
}