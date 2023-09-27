const {getFilms} = require('../adapter');
const {response} = require('../utils');

const getAllFilms = (req,res) => {
  return getFilms()
  .then(data => response(res,200,data));
}

module.exports = getAllFilms;