const { validationResult } = require('express-validator');

const novoCadastro = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      throw new Error('Erro de validação');
    }

    const usuarioDoFormulario = {
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body['confirm-password']
    };

    const usuarioCadastrado = model.cadastrarUsuario(usuarioDoFormulario);
    res.status(201).json(usuarioCadastrado);
  } catch (error) {
    next(error);
  }
};

const entrar = (req, res, next) => {
  try {
    const usuarioDoFormulario = {
      email: req.body.email,
      password: req.body.password
    };

    if (model.validarEntrada(usuarioDoFormulario)) {
      // res.render('login/entrar');
    }
  } catch (error) {
    next(error);
  }
};

module.exports = {
  entrar,
  novoCadastro,
};