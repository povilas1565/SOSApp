const db = require("../database");
const {DataTypes} = require("sequelize");

const Volunteers = db.connection.define(
    "volunteers",
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Name is required"
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Email is not valid",
                },
                notEmpty: {
                    msg: "Email is required"
                },
            },
        },
        introduction: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Introduction is required"
                },
            },
        },
    },
    { timestamps: false }
);

module.exports = Volunteers;