const { Router } = require("express");
const {getCharacters} = require('../controllers');

const characterRouter = Router();

characterRouter.route('/').get(getCharacters);

module.exports = characterRouter;
