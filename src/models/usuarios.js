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

const buscaUsuario = async (id) => {
    const usuarios = await Usuario.findOne({
        where: { id },
        raw: true,
    });
    if (!usuarios) {
        throw new Error(`Usuário não existe`);
    }
    return usuarios;
}

const atualizarUsuario = async (usuario_alterado, id) => {
    console.log(usuario_alterado)
    return await Usuario.update(usuario_alterado, {
        where: {
            id
        }
    });
};

const deletarUsuario = async (id) => {
    return await Usuario.destroy({
        where: { id }
    });
};

module.exports = {
    cadastrar,
    procurar,
    procurarEmail,
    listarUsuarios,
    buscaUsuario,
    atualizarUsuario,
    deletarUsuario
}