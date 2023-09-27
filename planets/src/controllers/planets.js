const {planetsAll} =require('../adapter');

const planets = (req,res,next) => {
  return planetsAll()
  .then(data => res.json(data));
};

module.exports = planets