'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estilos extends Model {
    static associate(models) {
      Estilos.hasMany(models.Produtos, {foreignKey: 'estilo_id'})
    }
  };
  Estilos.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Estilos',
  });
  return Estilos;
};