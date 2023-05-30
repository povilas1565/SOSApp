const Appointments = require("./Appointments");
const Chats = require("./Chats")
const Clients = require("./Clients");
const Volunteers = require("./Volunteers");

// Indicate all the relationships between entities
Volunteers.hasMany(Appointments, {
    foreignKey: "id",
});

Clients.hasMany(Appointments, {
    foreignKey: "id",
});

Volunteers.hasMany(Chats, {
    foreignKey: "id",
});

Clients.hasMany(Chats, {
    foreignKey: "id",
});

Appointments.belongsTo(Volunteers, {
    foreignKey: "id",
});

Appointments.belongsTo(Clients, {
    foreignKey: "id",
});

Chats.belongsTo(Volunteers, {
    foreignKey: "id",
});

Chats.belongsTo(Clients, {
    foreignKey: "id",
});


module.exports = {
    Appointments,
    Chats,
    Clients,
    Volunteers,
};