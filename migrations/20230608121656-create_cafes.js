"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("cafes", {
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
      starRating: {
        type: Sequelize.DECIMAL(3, 2),
        allowNull: false,
      },
      location: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      tags: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      imgToUrl: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      phoneNumber: {
        type: Sequelize.STRING(15),
        allowNull: true,
      },
      information: {
        type: Sequelize.STRING(255),
        allowNull: true,
      },
      homepageUrl: {
        type: Sequelize.STRING(255),
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
    await queryInterface.dropTable("cafes");
  },
};