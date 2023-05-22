'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('clients', [
            {
                nameClient: 'John Doe',
                emailClient: 'johndoe@example.com',
                age: '1990-01-01'
            },
            {
                nameClient: 'Jane Doe',
                emailClient: 'janedoe@example.com',
                age: '1995-06-15'
            },
            {
                nameClient: 'Bob Smith',
                emailClient: 'bobsmith@example.com',
                age: '1985-12-30'
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('clients', null, {});
    }
};