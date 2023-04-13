const Appointments = require("./Appointments");
const Chats = require("./Chats")
const Clients = require("./Clients");
const Volunteers = require("./Volunteers");

// Indicate all the relationships between entities
Volunteers.hasMany(Appointments, {
    foreignKey: "idVolunteers",
});

Clients.hasMany(Appointments, {
    foreignKey: "idClients",
});

Volunteers.hasMany(Chats, {
    foreignKey: "idVolunteers",
});

Clients.hasMany(Chats, {
    foreignKey: "idClients",
});

Appointments.belongsTo(Volunteers, {
    foreignKey: "idVolunteers",
});

Appointments.belongsTo(Clients, {
    foreignKey: "idClients",
});

Chats.belongsTo(Volunteers, {
    foreignKey: "idVolunteers",
});

Chats.belongsTo(Clients, {
    foreignKey: "idClients",
});


module.exports = {
    Appointments,
    Chats,
    Clients,
    Volunteers,
};