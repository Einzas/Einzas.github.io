
require('dotenv').config();

const config = {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    dbUser: process.env.DB_USER || 'postgres',
    dbPassword: process.env.DB_PASSWORD || 'Ahrj45@21',
    dbHost: process.env.DB_HOST || 'localhost',
    dbPort: process.env.DB_PORT || 5432,
    dbName: process.env.DB_NAME || 'testings',
    secret: process.env.SECRET
};

module.exports = config;