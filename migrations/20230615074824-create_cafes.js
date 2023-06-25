"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Cafes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      cafeName: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      totalRating: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      imgUrl: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      thumbnailImgUrl: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      phoneNumber: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      convenienceInformation: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      homepageUrl: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Cafes");
  },
};
