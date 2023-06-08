// models/bookmark.js

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    static associate(models) {}
  }
  Bookmark.init(
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
      modelName: "Bookmark",
      tableName: "bookmarks",
      timestamps: true,
      createdAt: "created_at",
    }
  );
  return Bookmark;
};
