// models/UserAuth.js

"use strict";
// Sequelize 및 DataTypes 불러오기
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // UserAuth 클래스 선언
  // Sequelize Model을 상속 받는 UserAuth 클래스는 DB의 UserAuths 테이블과 매핑
  class UserAuth extends Model {
    // associate static 메서드 정의
    // 다른 모델과의 관계를 선언하는 메서드
    static associate(models) {
      // UserAuths 모델은 Users 모델에 속한다.
      // foreignKey는 UserAuths 모델이 Users 모델을 참조하는데 사용되는 키를 지정
      UserAuth.belongsTo(models.User, { foreignKey: "userId", as: "user" });
    }
  }

  // UserAuth 클래스 초기화
  // DB의 UserAuths 테이블에 매핑되는 필드와 데이터 타입 정의
  UserAuth.init(
    {
      // 인증 ID
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
      // 인증 제공자 (예: 'local', 'kakao')
      provider: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      // 인증 제공자 ID
      providerId: {
        type: DataTypes.STRING(255),
        allowNull: true, 
      },
    },
    {
      sequelize,
      modelName: "UserAuth",
      tableName: "UserAuths",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt",
    }
  );
  return UserAuth;
};
