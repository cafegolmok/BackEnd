"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("CafeTags", {
      cafeId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Cafes",
          key: "id",
        },
        allowNull: false,
      },
      tagId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Tags",
          key: "id",
        },
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("CafeTags");
  },
};
