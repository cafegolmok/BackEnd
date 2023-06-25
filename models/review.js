// models/review.js

"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Review 클래스 선언
  class Review extends Model {
    static associate(models) {
      Review.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      Review.belongsTo(models.Cafe, {
        foreignKey: "cafeId",
        as: "cafe",
      });
    }
  }

  Review.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },

      cafeId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cafe",
          key: "id",
        },
      },

      comment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },

      // 커피 맛에 대한 평가
      tastyCoffee: {
        type: DataTypes.FLOAT,
      },

      // 음료 맛에 대한 평가
      tastyDrinks: {
        type: DataTypes.FLOAT,
      },

      // 디저트 맛에 대한 평가
      tastyDesserts: {
        type: DataTypes.FLOAT,
      },

      // 대화하기 좋은지에 대한 평가
      goodForConversations: {
        type: DataTypes.FLOAT,
      },

      // 좌석이 편안한지에 대한 평가
      comfortableSeats: {
        type: DataTypes.FLOAT,
      },

      // 콘센트가 충분한지에 대한 평가
      manyOutlets: {
        type: DataTypes.FLOAT,
      },

      // 집중하기 좋은지에 대한 평가
      goodForFocus: {
        type: DataTypes.FLOAT,
      },

      // 가성비에 대한 평가
      goodValueForMoney: {
        type: DataTypes.FLOAT,
      },

      // 경치가 좋은지에 대한 평가
      goodView: {
        type: DataTypes.FLOAT,
      },

      // 분위기가 좋은지에 대한 평가
      greatAtmosphere: {
        type: DataTypes.FLOAT,
      },

      // 회의하기 좋은지에 대한 평가
      goodForMeetings: {
        type: DataTypes.FLOAT,
      },
    },
    {
      sequelize,
      modelName: "Review",
      tableName: "Reviews",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  return Review;
};
