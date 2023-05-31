
const db = require("../database");
const {DataTypes} = require("sequelize");
const Client = require("./Clients");
const Volunteer = require("./Volunteers");

const Chat = db.connection.define(
    "chats",
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
    { timestamps: false }
);

module.exports = Chat;
