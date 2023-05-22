'use strict';

const bcrypt = require('bcrypt');
const Volunteers = require('../../models/Volunteers');
const SALT_ROUNDS = 10;

module.exports = {
    up: async (queryInterface, Sequelize) => {
        const passwordHash = await bcrypt.hash('mysecretpassword', SALT_ROUNDS);

        await Volunteers.bulkCreate([
            {
                name: 'John Doe',
                email: 'john.doe@example.com',
                password: passwordHash,
                introduction: 'Hello, I am a volunteer',
            },
            {
                name: 'Jane Smith',
                email: 'jane.smith@example.com',
                password: passwordHash,
                introduction: 'Hi, I am a volunteer too',
            },
            {
                name: 'Diogo Scarpa',
                email: 'diogo.scarpa@example.com',
                password: passwordHash,
                introduction: 'Здравствуй, я волонтер',
            },
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await Volunteers.destroy({ where: {} });
    }
};