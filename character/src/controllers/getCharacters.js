const {getCharacterDB} = require('../adapter');

const getCharacter = (req,res,next)=>{
  return getCharacterDB()
  .then(data=>res.json(data))
  .catch(err=>next(err));
};

module.exports = getCharacter;