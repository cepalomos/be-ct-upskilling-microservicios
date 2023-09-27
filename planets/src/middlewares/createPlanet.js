//Ejemplo de error

const {errors:{ClientError}} = require('../utils');

const verifiPlanet = (req,res,next) => {
  if(false){
    return next()
  }else{
    throw new ClientError(400,"faltan datos para completar");
  }
}