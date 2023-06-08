// models/Cafe.js

"use strict";
const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Cafe extends Model {
    static associate(models) {
      // Define associations here
    }
  }
  Cafe.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      cafeName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      starRating: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: false,
      },
      location: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      tags: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      imgToUrl: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      phoneNumber: DataTypes.STRING(15),
      information: DataTypes.STRING(255),
      homepageUrl: DataTypes.STRING(255),
    },
    {
      sequelize,
      modelName: "Cafe",
      tableName: "cafes",
      timestamps: true, 
      createdAt: "createdAt",
      updatedAt: "updatedAt",    }
  );
  return Cafe;
};
