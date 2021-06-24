'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        username: 'massao',
        email: 'massao@nextdigital.com.br',
        role: 'admin',
        foto: '',
        password: bcrypt.hashSync('admin', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'william',
        email: 'william@nextdigital.com.br',
        role: 'admin',
        foto: '',
        password: bcrypt.hashSync('admin', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'guilherme',
        email: 'guilherme@nextdigital.com.br',
        role: 'admin',
        foto: '',
        password: bcrypt.hashSync('admin', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'joaousuario',
        email: 'joao@bol.com.br',
        role: 'usuario',
        foto: '',
        password: bcrypt.hashSync('123456', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'julia',
        email: 'julia@bol.com.br',
        role: 'usuario',
        foto: 'julia.png',
        password: bcrypt.hashSync('123456', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Usuarios', null, {});
  }
};
