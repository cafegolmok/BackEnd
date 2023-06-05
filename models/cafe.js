'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cafe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Cafe.init({
    id: DataTypes.INTEGER,
    cafeName: DataTypes.STRING,
    starRating: DataTypes.DECIMAL,
    location: DataTypes.STRING,
    tags: DataTypes.STRING,
    imgToUrl: DataTypes.STRING,
    phoneNumber: DataTypes.STRING,
    information: DataTypes.STRING,
    homepageUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Cafe',
  });
  return Cafe;
};