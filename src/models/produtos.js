const { Produtos } = require('../db/models');

const listarProdutos = async (req, res) => {
    const produtos = await Produtos.findAll({ raw: true });
    return produtos;
}

const buscaProduto = async (id) => {
    const produtos = await Produtos.findOne({
        where: { id },
        raw: true
    });
    if (!produtos) {
        throw new Error(`Produto não existe`);
    }
    return produtos;
}

module.exports = {
    listarProdutos,
    buscaProduto
}
