const {DataTypes} = require('sequelize');
const {sequelize} = require('../database/database');
const Ad_Rol = require('./ad_rol');

//Se crea el modelo de la tabla ad_usuario con sus respectivos campos
const Ad_Usuario = sequelize.define('ad_usuario', {
    usuario_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    rol_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    usuario_login: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_clave: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_cedula: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_apellidos: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_nombres: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_mail: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    usuario_telefono: { 
        type: DataTypes.STRING, 
        allowNull: false
    },
    usuario_estado: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    schema: 'administracion',
    timestamps: false
});

Ad_Usuario.belongsTo(Ad_Rol, {
    foreignKey: 'rol_id',
    as: 'rol'
});

module.exports = Ad_Usuario;