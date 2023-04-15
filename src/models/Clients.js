const db = require("../database");
const {DataTypes} = require("sequelize");

const Clients = db.connection.define("Clients", {
    idClients: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nameClient: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Name is required",
            },
        },
    },
    emailClient: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: {
                msg: "Email is not valid",
            },
            notEmpty: {
                msg: "Email is required",
            },
        },
    },
    age: {
        type: DataTypes.DATE,
        allowNull: false,
        validate: {
            isDate: {
                msg: "Age must be a valid date"
            },
            notEmpty: {
                msg: "Age is required",
            },
        },
    },
},
    {
        tableName: "clients",
        timestamps: false,
});

module.exports = Clients;
