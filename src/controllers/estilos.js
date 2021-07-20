const Estilos = require('../models/estilos');

const listarEstilos = async (req, res, next) => {
    try {
        const estilos = await Estilos.listarEstilos();
        res.json(estilos);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    listarEstilos
}