// models/cafe.js

"use strict";

const { Model, DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  class Cafe extends Model {
    // associate static 메서드 정의
    // 다른 모델과의 관계를 선언하는 메서드
    static associate(models) {
      // Cafe 모델은 여러 개의 Bookmark 모델을 가질 수 있다.
      // foreignKey는 Bookmark 모델이 Cafe 모델을 참조하는데 사용되는 키를 지정
      Cafe.hasMany(models.Bookmark, { foreignKey: "cafeId", as: "bookmarks" });

      // Cafe 모델은 여러 개의 Review 모델을 가질 수 있다.
      // foreignKey는 Review 모델이 Cafe 모델을 참조하는데 사용되는 키를 지정
      Cafe.hasMany(models.Review, { foreignKey: "cafeId", as: "reviews" });

      // Cafe 모델은 여러 개의 Tag 모델을 가질 수 있다.
      // foreignKey는 Tag 모델이 Cafe 모델을 참조하는 데 사용되는 키를 지정
      Cafe.belongsToMany(models.Tag, {
        through: models.CafeTag,
        foreignKey: "cafeId",
        as: "tags",
      });
    }
  }

  // Cafe 클래스 초기화
  // DB의 Cafes 테이블에 매핑되는 필드와 데이터 타입을 정의
  Cafe.init(
    {
      // 카페의 ID
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      // 카페의 이름
      cafeName: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      // 카페의 총 평점
      // totalRating 필드는 Reviews 테이블의 rating 필드에서 각 카테고리에 대한 평가를 평균하여 계산. 소수점 둘째 자리까지 표현
      totalRating: {
        type: DataTypes.DECIMAL(3, 2),
        allowNull: false,
      },
      // 카페의 위치
      location: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      // 카페의 이미지 URL
      // imgUrl 필드는 여러 개의 이미지를 업로드할 수 있도록 설계
      imgUrl: DataTypes.TEXT,

      // 카페의 섬네일 이미지 URL
      // thumbnailImgUrl 필드는 여러 개의 이미지를 업로드할 수 있도록 설계
      thumbnailImgUrl: DataTypes.TEXT,

      // 카페의 전화번호
      phoneNumber: DataTypes.STRING(15),

      // 카페의 편의정보
      // 포장, 예약, 와이파이, 주차 등의 정보를 JSON 형식으로 저장
      convenienceInformation: {
        type: DataTypes.JSON,
        allowNull: true,
      },

      // 카페의 홈페이지 URL
      homepageUrl: DataTypes.STRING(255),

      // 카페의 위도
      latitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      // 카페의 경도
      longitude: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Cafe",
      tableName: "cafes",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  return Cafe;
};
