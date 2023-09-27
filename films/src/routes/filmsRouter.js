const { Router } = require("express");
const {getFilms}= require('../controllers');

const filmsRouter = Router();

filmsRouter.route('/').get(getFilms)

module.exports = filmsRouter;
