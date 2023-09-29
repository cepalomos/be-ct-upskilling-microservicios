const axios = require('axios');

module.exports = {
  list: async () => {
    return axios('http://database:8004/character')
    .then(res=>res.data);
  }
}