'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Marcas', [
      {
        descricao: 'Mizuno',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Asics',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Fila',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Under Armour',
        createdAt: new Date(),
        updatedAt: new Date()
      },            
      {
        descricao: 'Puma',
        createdAt: new Date(),
        updatedAt: new Date()
      },            
      {
        descricao: 'Olympikus',
        createdAt: new Date(),
        updatedAt: new Date()
      }        
    ], {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Marcas', null, {});
  }
};
