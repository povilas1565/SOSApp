'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, DataTypes) {
    await queryInterface.createTable('appointments', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      volunteerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'volunteers', key: 'id' },
      },
      clientId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: { model: 'clients', key: 'id' },
      },
      appointmentDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      note: {
        type: DataTypes.STRING,
      },
    });
  },

  async down (queryInterface, DataTypes) {
    await queryInterface.dropTable('volunteers');
  }
};
