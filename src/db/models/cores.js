'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cores extends Model {
    static associate(models) {
      Cores.hasMany(models.Produtos, {foreignKey: 'cor_id'})
    }
  };
  Cores.init({
    descricao: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cores',
  });
  return Cores;
};