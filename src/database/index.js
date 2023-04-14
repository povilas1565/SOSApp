const config = require("../configs/config");
const Sequelize = require("sequelize");

let dbConnection = null;

try {
    dbConnection = new Sequelize(
        config.db.name,
        config.db.user,
        config.db.pass,
        config.db.config
    );
} catch (error) {
    console.error("Error attempting to connect to the database");
}

async function hasConnection() {
    try {
        await dbConnection.authenticate();
        console.log("Database connected!");
    } catch (error) {
        console.error("Error attempting to connect to the database");
    }
}

const db = {
    connection: dbConnection,
    hasConnection,
};

module.exports = db;