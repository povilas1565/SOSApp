require('dotenv').config();

const config = {
  db: {
    name: process.env.DB_NAME || 'database.name',
    user: process.env.DB_USER || 'user',
    pass: process.env.DB_PASS || 'password',
    config: {
      dialect: process.env.DB_DIALECT || 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306
    }
  },
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 3000,
  },
  key: process.env.SECRET || 'you secret key'
};

module.exports = config;
