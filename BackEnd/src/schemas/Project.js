const { DataTypes } = require('sequelize');
const {sequelize} = require('../database/database');

//Se crea el modelo de la tabla ad_permiso con sus respectivos campos
const Project = sequelize.define('comerciante', {
    com_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: true
    },
    tip_ide_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    com_cedula_ruc:{
        type: DataTypes.STRING,
        allowNull: false
        
    }, 
    com_apellidos_razon_social:{
        type: DataTypes.STRING,
        allowNull: false

    }, 
    com_nombres_representante_legal:{
        type: DataTypes.STRING,
        allowNull: false

    }, 
    com_fecha_nacimiento:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    com_edad:{
        type: DataTypes.INTEGER,
        allowNull: false
        
    }, 
    com_lugar_origen:{
        type: DataTypes.STRING,
        allowNull: false

    }, 
    com_telefono_convencional:{
        type: DataTypes.STRING,
        allowNull: false
    }, com_telefono_celular:{
        type: DataTypes.STRING,
        allowNull: false

    }, 
    com_direccion_domicilio:{
        type: DataTypes.STRING,
        allowNull: false
    }, 
    com_ciudad:{
        type: DataTypes.STRING,
        allowNull: false

    }, 
    com_provincia:{
        type: DataTypes.STRING,
        allowNull: false

    }, 
    com_mail: {
        type: DataTypes.STRING,
        allowNull: false

    }

	
},{
    schema: 'administracion',
    timestamps: false

});

module.exports = Project;