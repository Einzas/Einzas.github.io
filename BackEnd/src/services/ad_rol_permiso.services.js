const ad_rol_permiso = require("../schemas/ad_rol_permiso");
const ad_rol = require("../schemas/ad_rol");
const ad_permiso = require("../schemas/ad_permiso");

const Ad_Rol_Permiso_Services = {};
//Se exporta el objeto Ad_Rol_Permiso_Services
//Se crea el servicio para obtener todos los registros de la tabla ad_rol_permiso
const getRol_Permisos = async (req,res) => {
  try {
    const rol_permisos = await ad_rol_permiso.findAll();
    res.json({ rol_permisos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Se crea el servicio para obtener un registro de la tabla ad_rol_permiso por su id
const getRol_PermisoById = async (req,res) => {
  const { id } = req.params;
  try {
    const rol_permisos = await ad_rol_permiso.findByPk(id);
    if (rol_permisos) {
      res.json({ rol_permisos });
    } else {
      res.status(404).json({ message: "Rol_Permiso no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Se crea el servicio para añadir un registro a la tabla ad_rol_permiso
const createRol_Permiso = async (req,res) => {
  const { rol_id, permiso_id, rol_permiso_estado } = req.body;
  try {
    const newRol_Permiso = await ad_rol_permiso.create({
      rol_id,
      permiso_id,
      rol_permiso_estado,
    });
    res.status(201).json({ message: "Rol_Permiso creado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};

//Se crea el servicio para actualizar un registro de la tabla ad_rol_permiso
const updateRol_Permiso = async (req,res) => {
  const { rol_id, permiso_id, rol_permiso_estado } = req.body;
  const { id } = req.params;
  try {
    const rol_permisos = await ad_rol_permiso.findOne({ where: { rol_permiso_id: id } });
    if (rol_permisos) {
      const rol_permisosUpdated = await ad_rol_permiso.update(
        {
          rol_id,
          permiso_id,
          rol_permiso_estado,
        },
        {
          where: {
            rol_permiso_id: id,
          },
        }
      );
      res.status(201).json({ message: "Rol_Permiso actualizado con éxito" });
    } else {
      res.status(404).json({ message: "Rol_Permiso no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Se crea el servicio para eliminar un registro de la tabla ad_rol_permiso
const deleteRol_Permiso = async (req,res) => {
  const { id } = req.params;
  try {
    const rol_permisos = await ad_rol_permiso.findOne({ where: { rol_permiso_id: id } });
    if (rol_permisos) {
      const rol_permisosDeleted = await ad_rol_permiso.destroy({
        where: {
          rol_permiso_id: id,
        },
      });
      res.status(201).json({ message: "Rol_Permiso eliminado con éxito" });
    } else {
      res.status(404).json({ message: "Rol_Permiso no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRol_Permisos, getRol_PermisoById, createRol_Permiso, updateRol_Permiso, deleteRol_Permiso};
