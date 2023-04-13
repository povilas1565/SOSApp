import {DataTypes} from "sequelize";
import db from "../database"
const Clients = require("./Clients");
const Volunteers = require("./Volunteers");

const Chats = db.connection.define(
    "Chats",
    {
        idChats: {
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
        chatDate: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Chat date is required",
                },
            },
        },
        message: {
            type: DataTypes.STRING,
        },
    },
    {
        tableName: "chats",
        timestamps: false,
    }
);

module.exports = Chats;