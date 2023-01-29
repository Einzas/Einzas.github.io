const Ad_Permiso = require("../schemas/ad_permiso");

//Se obtienen todos los permisos de la tabla ad_permiso
const getPermisos = async (req, res) => {
  try {
    const permisos = await Ad_Permiso.findAll();
    res.json({ permisos });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Se obtiene un permiso por su id
const getPermisoById = async (req, res) => {
  const { id } = req.params;
  try {
    const permisos = await Ad_Permiso.findByPk(id);
    if (permisos) {
      res.json({ permisos });
    } else {
      res.status(404).json({ message: "Permiso no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Se crea un nuevo permiso
const createPermiso = async (req, res) => {
  const { permiso_nombre, permiso_detalle, permiso_estado } = req.body;
  try {
    const newPermiso = await Ad_Permiso.create({
      permiso_nombre,
      permiso_detalle,
      permiso_estado,
    });
    res.status(201).json({ message: "Permiso creado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Se actualiza un permiso por su id
const updatePermiso = async (req, res) => {
  const { permiso_nombre, permiso_detalle, permiso_estado } = req.body;
  const { id } = req.params;
  try {
    const permisos = await Ad_Permiso.findOne({ where: { permiso_id: id } });
    if (permisos) {
      const permisosUpdated = await Ad_Permiso.update(
        {
          permiso_nombre,
          permiso_detalle,
          permiso_estado,
        },
        {
          where: {
            permiso_id: id,
          },
        }
      );
      res.status(200).json({ message: "Permiso actualizado con éxito" });
    } else {
      res.status(404).json({ message: "Permiso no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Se elimina un permiso por su id
const deletePermiso = async (req, res) => {
  const { id } = req.params;
  try {
    const permisos = await Ad_Permiso.findOne({ where: { permiso_id: id } });
    if (permisos) {
      const permisosDeleted = await Ad_Permiso.destroy({
        where: {
          permiso_id: id,
        },
      });
      res.status(200).json({ message: "Permiso eliminado con éxito" });
    } else {
      res.status(404).json({ message: "Permiso no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getPermisos,
  getPermisoById,
  createPermiso,
  updatePermiso,
  deletePermiso,
};
