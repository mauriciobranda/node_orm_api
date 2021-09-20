'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Matriculas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Matriculas.init({
    status: DataTypes.STRING,
    id_aluno: DataTypes.INTEGER,
    id_turma: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Matriculas',
  });
  return Matriculas;
};