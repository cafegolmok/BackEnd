// models/token.js

"use strict";
// Sequelize 및 DataTypes 불러오기
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Token 클래스 선언
  // Sequelize Model을 상속 받는 Token 클래스는 DB의 Tokens 테이블과 매핑
  class Token extends Model {
    // associate static 메서드 정의
    // 다른 모델과의 관계를 선언하는 메서드
    static associate(models) {
      // Tokens 모델은 Users 모델에 속한다.
      // foreignKey는 Tokens 모델이 Users 모델을 참조하는데 사용되는 키를 지정
      Token.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }

  // Token 클래스 초기화
  // DB의 Tokens 테이블에 매핑되는 필드와 데이터 타입 정의
  Token.init(
    {
      // 토큰 ID
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      // 사용자 ID
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "User",
          key: "id",
        },
      },
      // 토큰 값 (예: refresh token 또는 access token)
      token: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },
      // 만료일
      expiresAt: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Token",
      tableName: "Tokens",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt",
    }
  );
  return Token;
};
