'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produtos extends Model {
    static associate(models) {
      Produtos.belongsTo(models.Marcas, { foreignKey:'marca_id'})
      Produtos.belongsTo(models.Estilos, {foreignKey: 'estilo_id'})
      Produtos.belongsTo(models.Cores, {foreignKey: 'cor_id'})
      Produtos.hasMany(models.Fotos, {foreignKey: 'produto_id'})
    }
  };
  Produtos.init({
    descricao: DataTypes.STRING,
    marca_id: DataTypes.INTEGER,
    modelo: DataTypes.STRING,
    cor_id: DataTypes.INTEGER,
    tamanho: DataTypes.STRING,
    genero: DataTypes.STRING,
    estilo_id: DataTypes.INTEGER,
    preco: DataTypes.DECIMAL
  }, {
    sequelize,
    modelName: 'Produtos',
  });
  return Produtos;
};