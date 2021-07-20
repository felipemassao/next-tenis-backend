const { Cores } = require('../db/models');

const listarCores = async (req, res) => {
    const cores = await Cores.findAll({
        raw: true
    });
    return cores;
}

module.exports = {
    listarCores
}
