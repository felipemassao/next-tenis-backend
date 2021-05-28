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

const inserirProduto = async (novo_produto) => {
    return await Produtos.create(novo_produto);
};

const atualizarProduto = async (produto_alterado, id) => {

    return await Produtos.update(produto_alterado, {
        where: {
            id
        }
    });
};

const deletarProduto = async (id) => {
    return await Produtos.destroy({
        where: { id }
    });
};

module.exports = {
    listarProdutos,
    buscaProduto,
    inserirProduto,
    atualizarProduto,
    deletarProduto
}
