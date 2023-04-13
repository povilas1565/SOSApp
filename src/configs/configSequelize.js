const config = require("./config");

module.exports = {
  "development": {
    "username": config.db.user,
    "password": config.db.pass,
    "database": config.db.name,
    "host": config.db.config.host,
    "port": config.db.config.port,
    "dialect": config.db.config.dialect
  },
  "test": {
    "username": config.db.user,
    "password": config.db.pass,
    "database": config.db.name,
    "host": config.db.config.host,
    "port": config.db.config.port,
    "dialect": config.db.config.dialect
  },
  "production": {
    "username": config.db.user,
    "password": config.db.pass,
    "database": config.db.name,
    "host": config.db.config.host,
    "port": config.db.config.port,
    "dialect": config.db.config.dialect
  }
}