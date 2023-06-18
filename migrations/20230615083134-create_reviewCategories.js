"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("ReviewCategories", {
      reviewId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Reviews",
          key: "id",
        },
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categories",
          key: "id",
        },
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("ReviewCategories");
  },
};
