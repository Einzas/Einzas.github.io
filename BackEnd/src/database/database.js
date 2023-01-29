const Sequelize = require('sequelize');
const config  = require('../config/config');
//Se crea la conexion a la base de datos con los datos de config.js
const sequelize = new Sequelize(config.dbName,config.dbUser,config.dbPassword,{
    host: config.dbHost,
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    }

}); 

module.exports = { sequelize }; 