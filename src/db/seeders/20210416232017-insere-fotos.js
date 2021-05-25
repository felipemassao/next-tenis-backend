'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Fotos', [
      {
        nome_arquivo: '1',
        produto_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '1_1',
        produto_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Fotos', null, {});

  }
};
