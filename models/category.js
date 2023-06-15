// models/category.js

"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Category 클래스 선언
  class Category extends Model {
    static associate(models) {
      // Category 모델은 여러 개의 Cafe 모델을 가질 수 있다.
      Category.belongsToMany(models.Cafe, {
        //연결 테이블인 CafeCategory를 지정
        through: "CafeCategory",
        foreignKey: "categoryId",
        as: "cafes",
      });
    }
  }

  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      // 카테고리 이름
      name: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "Categories",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );

  return Category;
};
