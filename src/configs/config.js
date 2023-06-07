require('dotenv').config();

const config = {
  db: {
    name: process.env.DB_NAME || 'database_name',
    user: process.env.DB_USER || 'username',
    pass: process.env.DB_PASSD || 'password',
    config: {
      dialect: process.env.DB_DIALECT || 'mysql',
      host: process.env.DB_HOST || 'localhost',
      port: parseInt(process.env.DB_PORT, 10) || 3306
    }
  },
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 3000,
  },
  key: process.env.SECRET || 'your_default_secret_key'
};

module.exports = config;
