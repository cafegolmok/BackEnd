// models/user.js

"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
 
    static associate(models) {
    }
  }
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nickname: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      profileImage: DataTypes.STRING,
      createdAt: DataTypes.DATE,
      updatedAt: DataTypes.DATE,
      userType: {
        type: DataTypes.ENUM,
        values: ["admin", "user"],
        defaultValue: "user",
      },
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
    }
  );
  return User;
};
