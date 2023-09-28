const {Router} = require('express');
const router = Router();
const {getModel}= require('../controllers');
const { model } = require('../middleware');


router.route('/:model').get(model,getModel);


module.exports = router;