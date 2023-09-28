const mongoose = require('mongoose');
const { MONGO_URI } = require('../config/envs');

const conn = mongoose.createConnection(MONGO_URI);

module.exports = {
  character: conn.model("Character", require('./Schema/characterSchema')),
  film: conn.model("Film", require('./Schema/filmSchema')),
  planet: conn.model("Planet", require('./Schema/planetSchema')),
}