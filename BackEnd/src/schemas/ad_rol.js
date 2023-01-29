const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");

//Se crea el modelo de la tabla ad_rol con sus respectivos campos
const Ad_Rol = sequelize.define(
  "ad_rol",
  {
    rol_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    rol_nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol_detalle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    rol_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    schema: "administracion",
    timestamps: false, 
  }
);

module.exports = Ad_Rol;