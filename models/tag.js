// models/tag.js

"use strict";

const { Model, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // Tag 클래스 선언
  class Tag extends Model {
    static associate(models) {
      // Tag 모델은 여러 개의 Cafe 모델을 가질 수 있다.
      // foreignKey는 Cafe 모델이 Tag 모델을 참조하는 데 사용되는 키를 지정
      Tag.belongsToMany(models.Cafe, {
        through: "CafeTags",
        foreignKey: "tagId",
        as: "cafes",
      });
    }
  }

  // Tag 클래스 초기화
  // DB의 Tags 테이블에 매핑되는 필드와 데이터 타입을 정의
  Tag.init(
    {
      // 태그의 ID
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      // 태그의 이름
      tagName: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
    },
    // Sequelize 객체와 모델 이름을 옵션으로 전달
    {
      sequelize,
      modelName: "Tag",
      tableName: "Tags",
      timestamps: false,
    }
  );

  return Tag;
};
