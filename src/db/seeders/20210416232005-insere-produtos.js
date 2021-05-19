'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {

      await queryInterface.bulkInsert('Produtos', [
        
        {
          descricao: 'Mizuno Wave Sky 3 Masculino Corrida',
          marca_id: 1,
          modelo: 'Wave Sky 3',
          cor_id: 1,
          tamanho: '40',
          genero: 'Masculino',
          estilo_id: 1,
          preco: 240.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descricao: 'Asics Raiden 2 Masculino Caminhada',
          marca_id: 2,
          modelo: 'Raiden 2',
          cor_id: 2,
          tamanho: '42',
          genero: 'Masculino',
          estilo_id: 2,
          preco: 199.90,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descricao: 'Tênis Fila Interceptor Feminino Academia',
          marca_id: 3,
          modelo: 'Interceptor',
          cor_id: 3,
          tamanho: '36',
          genero: 'Feminino',
          estilo_id: 3,
          preco: 159.99,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descricao: 'Under Armour Sc 3zero Iv Masculino Basquete',
          marca_id: 4,
          modelo: 'Sc 3zero Iv',
          cor_id: 4,
          tamanho: '44',
          genero: 'Masculino',
          estilo_id: 4,
          preco: 650.00,
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          descricao: 'Puma St Runner V2 Nl Feminino Casual',
          marca_id: 5,
          modelo: 'St Runner V2 Nl',
          cor_id: 5,
          tamanho: '34',
          genero: 'Feminino',
          estilo_id: 5,
          preco: 279.90,
          createdAt: new Date(),
          updatedAt: new Date()
        }


  ], {});
    
  },

  down: async (queryInterface, Sequelize) => {

      await queryInterface.bulkDelete('Produtos', null, {});
     
  }
};
