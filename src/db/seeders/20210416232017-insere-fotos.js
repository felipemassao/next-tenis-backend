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
      },
      {
        nome_arquivo: '2',
        produto_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '2_1',
        produto_id: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '3',
        produto_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '3_1',
        produto_id: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '4',
        produto_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '4_1',
        produto_id: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '5',
        produto_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '5_1',
        produto_id: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '6',
        produto_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '6_1',
        produto_id: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '7',
        produto_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '7_1',
        produto_id: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '8',
        produto_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '8_1',
        produto_id: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '9',
        produto_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome_arquivo: '9_1',
        produto_id: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {

    await queryInterface.bulkDelete('Fotos', null, {});

  }
};
