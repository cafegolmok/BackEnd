// models/cafeTag.js

"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  class CafeTag extends Model {
    static associate(models) {
      CafeTag.belongsTo(models.Cafe, {
        foreignKey: "cafeId",
        as: "cafe",
      });
      CafeTag.belongsTo(models.Tag, {
        foreignKey: "tagId",
        as: "tag",
      });
    }
  }

  CafeTag.init(
    {
      cafeId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cafe",
          key: "id",
        },
      },
      tagId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Tag",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "CafeTag",
      tableName: "CafeTags",
      timestamps: false,
    }
  );
  return CafeTag;
};
