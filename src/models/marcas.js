const { Marcas } = require('../db/models');

const listarMarcas = async (req, res) => {
    const marcas = await Marcas.findAll({
        raw: true
    });
    return marcas;
}

module.exports = {
    listarMarcas
}
