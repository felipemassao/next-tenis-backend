'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marcas extends Model {
    static associate(models) {
      Marcas.hasMany(models.Produtos, {foreignKey: 'marca_id'})
    }
  };
  Marcas.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Marcas',
  });
  return Marcas;
};