const db = require ("../database");
const {DataTypes} = require("sequelize");
const Client = require("./Clients");
const Volunteer = require("./Volunteers");

const Appointment = db.connection.define(
    "appointments",
    {
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
        appointmentDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Appointment date is required",
                },
            },
        },
        note: {
            type: DataTypes.STRING,
        },
    },
    { timestamps: false }
);

module.exports = Appointment;