// models/cafe.js

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Cafe extends Model {
    
    static associate(models) {
    }
  }
  Cafe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      cafeName: DataTypes.STRING,
      starRating: DataTypes.DECIMAL,
      location: DataTypes.STRING,
      tags: DataTypes.STRING,
      imgToUrl: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      information: DataTypes.STRING,
      homepageUrl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Cafe",
      tableName: "Cafes",
      timestamps: true,
    }
  );
  return Cafe;
};
