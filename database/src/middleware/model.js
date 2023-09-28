
module.exports = (req,res,next) => {
  const {model} = req.params;
  console.log("model",model);
  if(["character","film","planet"].includes(model)) return next();
  else throw new Error('modelo no valido')
};