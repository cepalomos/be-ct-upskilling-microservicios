const {getFilms} = require('../adapter');

const getAllFilms = (req,res,next) => {
  return getFilms()
  .then(data => res.json(data));
}

module.exports = getAllFilms;