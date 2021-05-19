'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
     await queryInterface.bulkInsert('Estilos', [

      {
        descricao: 'Corrida',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Caminhada',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Academia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        descricao: 'Basquete',
        createdAt: new Date(),
        updatedAt: new Date()
      },            
      {
        descricao: 'Casual',
        createdAt: new Date(),
        updatedAt: new Date()
      }
       
      
      
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkDelete('Estilos', null, {});
     
  }
};
