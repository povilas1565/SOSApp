const db = require("../database");
const {DataTypes} = require("sequelize");

const Volunteers = db.connection.define(
    "Volunteers",
    {
        idVolunteers: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nameVolunteer: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: {
                    msg: "Name is required"
                },
            },
        },
        emailVolunteer: {
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
    {
        tableName: "volunteers",
        timestamps: false,
    }
);

module.exports = Volunteers;
