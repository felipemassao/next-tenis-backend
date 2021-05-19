'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
   
      await queryInterface.bulkInsert('Fotos', [
        {
          nome_arquivo: '1',
          produto_id: 1,


        },
       
        {
          nome_arquivo: '1_1',
          produto_id: 1,

        }



        
        
    ], {});
    
  },

  down: async (queryInterface, Sequelize) => {
 
     await queryInterface.bulkDelete('Fotos', null, {});
     
  }
};
