const { Estilos } = require('../db/models');

const listarEstilos = async (req, res) => {
    const estilos = await Estilos.findAll({
        raw: true
    });
    return estilos;
}

module.exports = {
    listarEstilos
}
