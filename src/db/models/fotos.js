'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fotos extends Model {
    static associate(models) {
      Fotos.belongsTo(models.Produtos, {foreignKey: 'produto_id'})
    }
  };
  Fotos.init({
    nome_arquivo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Fotos',
  });
  return Fotos;
};