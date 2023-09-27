const {catchAsycn} = require('../utils');

module.exports = {
  planetsAll: catchAsycn(require('./planets')),
}