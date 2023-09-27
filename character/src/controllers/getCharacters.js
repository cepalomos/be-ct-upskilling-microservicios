const { getCharacterDB } = require('../adapter');
const { response } = require('../utils');

const getCharacter = (req, res) => {
  return getCharacterDB()
    .then(data => response(res, 200, data))
};

module.exports = getCharacter;