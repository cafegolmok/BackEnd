// models/user.js

"use strict";
// Sequelize 및 DataTypes 불러오기
const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // User 클래스 선언
  // Sequelize Model을 상속 받는 User 클래스는 DB의 Users 테이블과 매핑
  class User extends Model {
    // associate static 메서드 정의
    // 다른 모델과의 관계를 선언하는 메서드
    static associate(models) {
      // User 모델은 여러 개의 Bookmark 모델을 가질 수 있다.
      User.hasMany(models.Bookmark, { foreignKey: "userId", as: "bookmarks" });

      // User 모델은 여러 개의 Review 모델을 가질 수 있다.
      User.hasMany(models.Review, { foreignKey: "userId", as: "reviews" });

      // User 모델은 여러 개의 UserAuth 모델을 가질 수 있다.
      User.hasMany(models.UserAuth, { foreignKey: "userId", as: "userAuths" });

      // User 모델은 여러 개의 Token 모델을 가질 수 있다.
      User.hasMany(models.Token, { foreignKey: "userId", as: "tokens" });
    }
  }

  // User 클래스 초기화
  // DB의 Users 테이블에 매핑되는 필드와 데이터 타입 정의
  User.init(
    {
      // 사용자의 ID
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },

      // 사용자의 닉네임
      nickname: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      // 사용자의 이메일
      email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
      },

      // 사용자의 비밀번호
      password: {
        type: DataTypes.STRING(255),
        allowNull: false,
      },

      // 사용자의 프로필 이미지 URL
      profileImage: DataTypes.TEXT,

      // 사용자의 타입 (관리자 / 일반 사용자)
      userType: {
        type: DataTypes.ENUM,
        values: ["admin", "user"],
        defaultValue: "user",
      },

      // 사용자의 상태 (활성 / 비활성 / 삭제)
      userStatus: {
        type: DataTypes.ENUM,
        values: ["active", "inactive", "deleted"],
        defaultValue: "active",
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "Users",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      charset: "utf8mb4",
      collate: "utf8mb4_general_ci",
    }
  );
  return User;
};
