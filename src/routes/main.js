const express = require('express');//aca eestoy trayendo express completo.

const router = express.Router();//aca le especifico que parte de express utilizar con el metoodo Router.

const mainController = require('../controllers/mainController');

router.get('/', mainController.index);

module.exports = router;