'use strict';
const bcrypt = require("bcryptjs");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Usuarios', [
      {
        username: 'joaoadmin',
        email: 'admin@nextdigital.com.br',
        role: 'admin',
        password: bcrypt.hashSync('admin', 8),
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        username: 'joaousuario',
        email: 'joao@bol.com.br',
        role: 'usuario',
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
