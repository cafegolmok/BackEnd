// models/reviewCategory.js

"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // ReviewCategory 클래스 선언
  class ReviewCategory extends Model {
    static associate(models) {
      // ReviewCategory 모델은 Review 모델에 속한다.
      // foreignKey는 Review 모델이 ReviewCategory 모델을 참조하는 데 사용되는 키를 지정
      ReviewCategory.belongsTo(models.Review, {
        foreignKey: "reviewId",
        as: "review",
      });
      // ReviewCategory 모델은 Category 모델에 속한다.
      // foreignKey는 Category 모델이 ReviewCategory 모델을 참조하는 데 사용되는 키를 지정
      ReviewCategory.belongsTo(models.Category, {
        foreignKey: "categoryId",
        as: "category",
      });
    }
  }

  ReviewCategory.init(
    {
      // 리뷰 ID
      reviewId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Review",
          key: "id",
        },
      },
      // 카테고리 ID
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
      modelName: "ReviewCategory",
      tableName: "ReviewCategories",
      timestamps: false,
    }
  );

  return ReviewCategory;
};
