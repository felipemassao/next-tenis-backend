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

const procurarEmail = async (email) => {
    const mail = await Usuario.findOne({ 
        where: { email },
        raw: true
    });
    console.log(mail);
    return mail;
};

const listarUsuarios = async (req, res) => {
    const usuarios = await Usuario.findAll({
        raw: true
    });
    return usuarios;
}

module.exports = {
    cadastrar,
    procurar,
    procurarEmail,
    listarUsuarios
}