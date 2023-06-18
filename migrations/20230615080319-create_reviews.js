"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Reviews", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: "id",
        },
        allowNull: false,
      },
      cafeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cafes",
          key: "id",
        },
        allowNull: false,
      },
      comment: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      tastyCoffee: {
        type: Sequelize.FLOAT,
      },
      tastyDrinks: {
        type: Sequelize.FLOAT,
      },
      tastyDesserts: {
        type: Sequelize.FLOAT,
      },
      goodForConversations: {
        type: Sequelize.FLOAT,
      },
      comfortableSeats: {
        type: Sequelize.FLOAT,
      },
      manyOutlets: {
        type: Sequelize.FLOAT,
      },
      goodForFocus: {
        type: Sequelize.FLOAT,
      },
      goodValueForMoney: {
        type: Sequelize.FLOAT,
      },
      goodView: {
        type: Sequelize.FLOAT,
      },
      greatAtmosphere: {
        type: Sequelize.FLOAT,
      },
      goodForMeetings: {
        type: Sequelize.FLOAT,
      },
      body: {
        type: Sequelize.TEXT,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("Reviews");
  },
};
