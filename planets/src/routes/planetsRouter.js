const { Router } = require("express");
const {planetsAll} = require('../controllers');

const planetsRouter = Router();

planetsRouter.route("/").get(planetsAll);

module.exports = planetsRouter;
