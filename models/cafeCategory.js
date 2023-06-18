// models/cafeCategory.js

"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class CafeCategory extends Model {
    static associate(models) {
      CafeCategory.belongsTo(models.Cafe, {
        foreignKey: "cafeId",
        as: "cafe",
      });
      CafeCategory.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }

  CafeCategory.init(
    {
      cafeId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cafe",
          key: "id",
        },
      },
      categoryId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Category",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "CafeCategory",
      tableName: "CafeCategories",
      timestamps: false,
    }
  );
  return CafeCategory;
};
