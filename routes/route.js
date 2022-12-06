const express = require('express');
const router = express.Router();
const {controller,producer,consumer} = require('../controller/controller')

router.get('/get',controller)

router.post('/producer',producer);
router.post('/consumer',consumer);











module.exports = router;