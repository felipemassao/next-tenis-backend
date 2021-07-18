const express = require('express');
const controller = require('../controllers/cores')

const router = express.Router();

router.get('/', controller.listarCores);

module.exports = router;