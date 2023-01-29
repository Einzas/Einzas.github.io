const { DataTypes } = require("sequelize");
const { sequelize } = require("../database/database");
const Ad_Rol = require("./ad_rol");
const Ad_Permiso = require("./ad_permiso");

//Se crea el modelo de la tabla ad_rol_permiso con sus respectivos campos
const Ad_Rol_Permiso = sequelize.define(
  "ad_rol_permiso",
  {
    rol_permiso_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: true,
    },
    rol_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    permiso_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    rol_permiso_estado: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    schema: "administracion",
    timestamps: false,
  }
);

Ad_Rol_Permiso.belongsTo(Ad_Rol, {
  foreignKey: "rol_id",
  sourceKey: "rol_id",
});
Ad_Rol_Permiso.belongsTo(Ad_Permiso, {
  foreignKey: "permiso_id",
  sourceKey: "permiso_id", 
});

module.exports = Ad_Rol_Permiso; 