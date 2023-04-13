import {DataTypes} from "sequelize";
import db from "../database"
const Clients = require("./Clients");
const Volunteers = require("./Volunteers");

const Appointments = db.connection.define(
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
                model: Volunteers,
                key: "idVolunteers",
            },
        },
        clientId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Clients,
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

module.exports = Appointments;