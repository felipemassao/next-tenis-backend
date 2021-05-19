'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      descricao: {
        type: Sequelize.STRING
      },
 
      modelo: {
        type: Sequelize.STRING
      },
    
      tamanho: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.STRING
      },
    
      preco: {
        type: Sequelize.DECIMAL
      },
      marca_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Marcas',
          key: 'id'
        }
      },
      estilo_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Estilos',
          key: 'id'
        }
      },
      cor_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cores',
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Produtos');
  }
};