const Cores = require('../models/cores');

const listarCores = async (req, res, next) => {
    try {
        const cores = await Cores.listarCores();
        res.json(cores);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    listarCores
}