module.exports = (err,req,res,next) => {
  res.status(err.statusCode??400).json({
    error:true,
    message:err.message??"Se produjo un error desconocido",
  })
};