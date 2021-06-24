const Usuarios = require('../models/usuarios');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const novoCadastro = async (req, res, next) => {
  const { username, email, password } = req.body;
  try {
    const usuario = await Usuarios.cadastrar(username, email, password);
    res.status(201).json({ usuario, message: "Usuario cadastrado" });
  } catch (error) {
    next(error);
  }
};

const entrar = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const usuario = await Usuarios.procurar(username);
    if (!usuario) {
      throw Error("Usuário não encontrado!");
    }

    const passwordIsValid = bcrypt.compareSync(password, usuario.password);
    if (!passwordIsValid) {
      throw Error("Senha incorreta!")
    }

    const token = jwt.sign(
      { id: usuario.id },
      process.env.JWT_SECRET,
      { expiresIn: 86400 } //24hrs
    );

    res.json({
      id: usuario.id,
      username: usuario.username,
      email: usuario.email,
      accessToken: token
    });

  } catch (error) {
    next(error);
  }
};


const checkDupNameEmail = async (req, res, next) => {
  try {
    const { username, email } = req.body;

    const usuario = await Usuarios.procurar(username);
    if (usuario) {
      throw Error("Username já está em uso!");
    }

    const mail = await Usuarios.procurarEmail(email);
    if (mail) {
      throw Error("E-mail já está em uso!");
    }

    next();

  } catch (error) {
    next(error);
  }
};

const listarUsuarios = async (req, res, next) => {
  try {
      const usuarios = await Usuarios.listarUsuarios();
      res.json(usuarios);
  } catch (error) {
      next(error);
  }
};

module.exports = {
  entrar,
  novoCadastro,
  checkDupNameEmail,
  listarUsuarios
};