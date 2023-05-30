'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('volunteers', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
      },
      introduction: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    });
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.dropTable('volunteers');
  }
};
