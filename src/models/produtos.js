const { Produtos, Cores, Estilos, Fotos, Marcas } = require('../db/models');

const listarProdutos = async (req, res) => {

    const produtos = await Produtos.findAll({
        raw: true,
        include: [Cores, Estilos, Marcas]
    });
    for (let i = 0; i < produtos.length; i++) {
        const fotos = await Fotos.findAll({
            where: {
                produto_id: produtos[i].id
            },
            raw: true
        });
        produtos[i].fotos = fotos
    }
    return produtos;
}

const buscaProduto = async (id) => {
    const produtos = await Produtos.findOne({
        where: { id },
        raw: true,
        include: [Cores, Estilos, Marcas]
    });
    if (!produtos) {
        throw new Error(`Produto não existe`);
    }
    const fotos = await Fotos.findAll({
        where: {
            produto_id: produtos.id
        },
        raw: true
    });
    produtos.fotos = fotos
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
