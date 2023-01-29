const {DataTypes} = require('sequelize');
const {sequelize} = require('../database/database');

//Se crea el modelo de la tabla ad_permiso con sus respectivos campos
const Ad_Permiso = sequelize.define('ad_permiso', {
    permiso_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    permiso_nombre: {   
        type: DataTypes.STRING,
        allowNull: false
    },
    permiso_detalle: {
        type: DataTypes.STRING,
        allowNull: false
    },
    permiso_estado: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    schema: 'administracion',
    timestamps: false
});

module.exports = Ad_Permiso;