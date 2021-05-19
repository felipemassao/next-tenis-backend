const Produtos = require('../models/produtos');

const listarProdutos = async (req, res, next) => {
    try {
        const produtos = await Produtos.listarProdutos();
        res.json(produtos);
    } catch (error) {
        next(error);
    }
}

const buscaProduto = async (req, res, next) => {
    try {
        const { id } = req.params
        const produtos = await Produtos.buscaProduto(id);
        res.json(produtos);
    } catch (error) {
        next(error);
    }
}

const inserirProdutos = async (req, res, next) => {
    try {
        const novo_produto = {
            descricao: 'Nike Blaster',
            marca_id: 1,
            modelo: 'Blaster',
            cor_id: 1,
            tamanho: '38',
            genero: 'Masculino',
            estilo_id: 1,
            preco: 150.00,
            createdAt: new Date(),
            updatedAt: new Date()
    
        }
        const produtos = await Produtos.create(novo_produto);
        res.status(201).json(produtos);
    } catch (error) {
        next(error);
    }
}

const inserirProdutosForms = async (req, res, next) => {
    try {
        const { descricao, marca_id, cor_id, modelo, tamanho, genero, estilo_id, preco } = req.body;
    
        const novo_produto = {
            descricao,
            marca_id,
            modelo,
            cor_id,
            tamanho,
            genero,
            estilo_id,
            preco,
            createdAt: new Date(),
            updatedAt: new Date()    
        }
        const produtos = await Produtos.create(novo_produto);
        res.status(201).json(produtos);
    } catch (error) {
        next(error);
    }
}

const atualizarProduto = async (req, res, next) => {
    try {
        const { descricao, marca_id, cor_id, modelo, tamanho, genero, estilo_id, preco } = req.body;
        const { id } = req.params
    
        const produto_alterado = {
            descricao,
            marca_id,
            modelo,
            cor_id,
            tamanho,
            genero,
            estilo_id,
            preco,
            updatedAt: new Date()
        }
        const produtos = await Produtos.update(produto_alterado, {
            where: {
                id: id
            }
        });
        res.json(produtos);
    } catch (error) {
        next(error);
    }
}

const deletarProduto = async (req, res, next) => {
    try {
        const { id } = req.params
    
        const produtos = await Produtos.destroy({
            where: { id }
        });
        res.json(produtos);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    listarProdutos,
    buscaProduto,
    inserirProdutos,
    inserirProdutosForms,
    atualizarProduto,
    deletarProduto
}