// models/bookmark.js

"use strict";

const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  // Bookmark 클래스 선언
  // Sequelize Model을 상속 받는 Bookmark 클래스는 DB의 Bookmarks 테이블과 매핑
  class Bookmark extends Model {
    // associate static 메서드 정의
    // 다른 모델과의 관계를 선언하는 메서드
    static associate(models) {
      Bookmark.belongsTo(models.User, {
        foreignKey: "userId",
        as: "user",
      });
      Bookmark.belongsTo(models.Cafe, {
        foreignKey: "cafeId",
        as: "cafe",
      });
    }
  }

  // Bookmark 클래스 초기화
  // DB의 Bookmarks 테이블에 매핑되는 필드와 데이터 타입을 정의
  Bookmark.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      // 사용자 ID
      // 이 필드는 User 테이블의 id 필드를 참조
      userId: {
        type: DataTypes.INTEGER,
        references: {
          model: "User", // 참조하는 테이블의 이름
          key: "id", // 참조하는 테이블의 필드 이름
        },
      },

      // 카페 ID
      // 이 필드는 Cafe 테이블의 id 필드를 참조
      cafeId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Cafe", // 참조하는 테이블의 이름
          key: "id", // 참조하는 테이블의 필드 이름
        },
      },
    },
    // Sequelize 객체와 모델 이름을 옵션으로 전달
    {
      sequelize,
      modelName: "Bookmark",
      tableName: "Bookmarks",
      timestamps: true,
      createdAt: "createdAt",
    }
  );
  return Bookmark;
};
