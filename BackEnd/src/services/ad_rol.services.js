const Ad_Rol = require("../schemas/ad_rol");
const Ad_Permiso = require("../schemas/ad_permiso");
const Ad_Rol_Permiso = require("../schemas/ad_rol_permiso");

const getRolById = async (req, res) => {
  try {
    const { id } = req.params;
    const rol = await Ad_Rol.findByPk(id);
    if (rol) {
      res.json({ rol });
    } else {
      res.status(404).json({ message: "Rol no encontrado" });
    }
  } catch (error) {
    console.log(error);
  }
};

const getRoles = async (req, res) => {
  try {
    const roles = await Ad_Rol.findAll();
    res.json({ roles });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createRol = async (req, res) => {
  const { rol_nombre, rol_detalle, rol_estado } = req.body;
  try {
    const newRol = await Ad_Rol.create({
      rol_nombre,
      rol_detalle,
      rol_estado,
    });
    res.status(201).json({ message: "Rol creado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateRol = async (req, res) => {
  const { id } = req.params;
  const { rol_nombre, rol_detalle, rol_estado } = req.body;
  try {
    const rol = await Ad_Rol.findOne({ where: { rol_id: id } });
    if (rol) {
      const rolUpdated = await Ad_Rol.update(
        {
          rol_nombre,
          rol_detalle,
          rol_estado,
        },
        {
          where: {
            rol_id: id,
          },
        }
      );
      res.status(200).json({ message: "Rol actualizado con éxito" });
    } else {
      res.status(404).json({ message: "Rol no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteRol = async (req, res) => {
  const { id } = req.params;
  try {
    const rolDeleted = await Ad_Rol.destroy({
      where: {
        rol_id : id,
      },
    });
    res.status(200).json({ message: "Rol eliminado con éxito" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getRolById, getRoles, createRol, updateRol, deleteRol };
