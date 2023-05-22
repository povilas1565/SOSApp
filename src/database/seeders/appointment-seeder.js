const appointments = [
    {
        volunteerId: 1,
        clientId: 1,
        appointmentDate: new Date(),
        note: 'Appointment note 1',
    },
    {
        volunteerId: 2,
        clientId: 2,
        appointmentDate: new Date(),
        note: 'Appointment note 2',
    },
    {
        volunteerId: 3,
        clientId: 3,
        appointmentDate: new Date(),
        note: 'Appointment note 3',
    },
];

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('appointments', appointments);
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('appointments', null, {});
    },
};