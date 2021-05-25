const { Usuario } = require('../db/models');
const bcrypt = require("bcryptjs");

const cadastrar = async (username, email, password) => {
    const usuarioCadastrado = await Usuario.create({
        username,
        email,
        role: 'usuario',
        password: bcrypt.hashSync(password, 8),
    });
    return usuarioCadastrado;
};

const procurar = async (username) => {
    const usuario = await Usuario.findOne({ 
        where: { username },
        raw: true
    });
    console.log(usuario);
    return usuario;
};

module.exports = {
    cadastrar,
    procurar
}