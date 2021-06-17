const express = require('express');
const controller = require('../controllers/produtos')
const { verifyToken } = require('../middleware/authJwt');

const router = express.Router();

router.get('/', controller.listarProdutos);
router.get('/:id', controller.buscaProduto);
router.post('/', controller.inserirProduto);
router.put('/:id', controller.atualizarProduto);
router.delete('/:id', controller.deletarProduto);

module.exports = router;