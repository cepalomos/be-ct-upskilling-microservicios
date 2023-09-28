const { getData } = require('../adapter');

module.exports = (req, res, next) => {
  const { model } = req.params;
  return getData(model)
    .then(data => res.status(200).json(data));
}