'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('chats', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      volunteerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "volunteers", key: "id" },
      },
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: "clients", key: "id" },
      },
      chatDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      message: {
        type: DataTypes.STRING,
      },
    });
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.dropTable('chats');
  }
};
