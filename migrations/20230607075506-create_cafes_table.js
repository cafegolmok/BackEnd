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
        type: Sequelize.STRING,
      },
      starRating: {
        type: Sequelize.DECIMAL,
      },
      location: {
        type: Sequelize.STRING,
      },
      tags: {
        type: Sequelize.STRING,
      },
      imgToUrl: {
        type: Sequelize.STRING,
      },
      phoneNumber: {
        type: Sequelize.STRING,
      },
      information: {
        type: Sequelize.STRING,
      },
      homepageUrl: {
        type: Sequelize.STRING,
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
