const db = require("../database");
const {DataTypes} = require("sequelize");
const Client = require("./Clients");
const Volunteer = require("./Volunteers");

const Chat = db.connection.define(
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

module.exports = Chat;