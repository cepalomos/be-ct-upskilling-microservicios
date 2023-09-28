const store = require('../database');

module.exports = (model) => {
  return store[model].list();
}