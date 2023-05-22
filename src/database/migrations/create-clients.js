'use strict';

/** @type {import('sequelize-cli').Migration} */

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('clients', {
            idClients: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            nameClient: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            emailClient: {
                type: Sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            age: {
                type: Sequelize.DATE,
                allowNull: false,
            },
        });
    },
    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('clients');
    }
};