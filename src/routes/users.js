const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');

router.get('/', controller.listarUsuarios);
router.get('/:id', controller.buscaUsuario);
router.put('/:id', controller.atualizarUsuario);
router.post('/login', controller.entrar);
router.post('/cadastrar', controller.checkDupNameEmail, controller.novoCadastro);
router.delete('/:id', controller.deletarUsuario);

module.exports = router;
