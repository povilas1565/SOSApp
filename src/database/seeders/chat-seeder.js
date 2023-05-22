const chats = [
    {
        volunteerId: 1,
        clientId: 1,
        chatDate: new Date(),
        message: 'Chat messages 1',
    },
    {
        volunteerId: 2,
        clientId: 2,
        chatDate: new Date(),
        message: 'Chat messages 2',
    },
    {
        volunteerId: 3,
        clientId: 3,
        chatDate: new Date(),
        message: 'Chat messages 3',
    },
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('chats', chats);
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('chats', null, {});
    },
};