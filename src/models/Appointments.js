const db = require ("../database");
const {DataTypes} = require("sequelize");
const Client = require("./Clients");
const Volunteer = require("./Volunteers");

const Appointment = db.connection.define(
    "Appointments",
    {
        idAppointments: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        volunteerId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Volunteer,
                key: "idVolunteers",
            },
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Client,
                key: "idClients",
            },
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
    {
        tableName: "appointments",
        timestamps: false,
    }
);

module.exports = Appointment;