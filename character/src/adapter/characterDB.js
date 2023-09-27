const characters = require("../data");

const characterDB = () => {
  return characters.list()
};

module.exports = characterDB;