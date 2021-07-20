const express = require('express');
const controller = require('../controllers/estilos')

const router = express.Router();

router.get('/', controller.listarEstilos);

module.exports = router;