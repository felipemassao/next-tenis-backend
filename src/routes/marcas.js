const express = require('express');
const controller = require('../controllers/marcas')

const router = express.Router();

router.get('/', controller.listarMarcas);

module.exports = router;