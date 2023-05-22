'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('chats', {
            idChats: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            volunteersId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'volunteers',
                    key: 'idVolunteers',
                },
            },
            clientId: {
                type: Sequelize.INTEGER,
                allowNull: false,
                references: {
                    model: 'clients',
                    key: 'idClients',
                },
            },
            chatDate: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            message: {
                type: Sequelize.STRING,
            },
        });
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.dropTable('chats');
    }
};