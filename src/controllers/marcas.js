const Marcas = require('../models/marcas');

const listarMarcas = async (req, res, next) => {
    try {
        const marcas = await Marcas.listarMarcas();
        res.json(marcas);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    listarMarcas
}