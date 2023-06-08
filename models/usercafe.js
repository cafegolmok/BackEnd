// models/userCafe.js

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserCafe extends Model {
    static associate(models) {}
  }
  UserCafe.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Users",
          key: "id",
        },
      },
      cafeId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Cafes",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "UserCafe",
      tableName: "UsersCafes",
      timestamps: true,
      createdAt: "created_at",
    }
  );
  return UserCafe;
};
