var express = require('express');
var router = express.Router();
/* Importo el controlador para utilizar la funcion contenida en el */
var insertController = require('../controllers/insertController');

/* GET home page. */

router.post('/insertUsingBody',insertController.insertUsingBody)


module.exports = router;
