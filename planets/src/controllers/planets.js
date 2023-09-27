const { planetsAll } = require('../adapter');
const { response } = require('../utils');

const planets = (req, res) => {
  return planetsAll()
    .then(data => response(res, 200, data));
};

module.exports = planets