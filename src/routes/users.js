const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.get('/login', controller.entrar);
router.post('/cadastrar', controller.checkDupNameEmail, controller.novoCadastro);

module.exports = router;
