'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
      await queryInterface.bulkInsert('Cores', [
       {
        
          descricao: 'Azul',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descricao: 'Preto/Amarelo',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descricao: 'Rosa Claro',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descricao: 'Preto',
          createdAt: new Date(),
          updatedAt: new Date()
        },            
        {
          descricao: 'Preto/Turquesa',
          createdAt: new Date(),
          updatedAt: new Date()
        },            
        {
          descricao: 'Vermelho Vibrante',
          createdAt: new Date(),
          updatedAt: new Date()
        },            
        {
          descricao: 'Rosa/Branco',
          createdAt: new Date(),
          updatedAt: new Date()
        },            
        {
          descricao: 'Vermelho/Preto',
          createdAt: new Date(),
          updatedAt: new Date()
        }
       
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Cores', null, {});
    
  }
};
