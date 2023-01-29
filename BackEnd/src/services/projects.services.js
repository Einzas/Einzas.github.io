const Project = require("../schemas/Project.js");
const getProject = (req, res) => {
  const { id } = req.params;
  try {
    Project.findByPk(id)
      .then((project) => {
        res.json({ project });
      })
      .catch((error) => {
        res.status(500).json({ message: error.message });
      });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}; 

const getProjects = async (req, res) => {
  try {
    const projects = await Project.findAll();
    res.json({ projects });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  const {
    tip_ide_id,
    com_cedula_ruc,
    com_apellidos_razon_social,
    com_nombres_representante_legal,
    com_fecha_nacimiento,
    com_edad,
    com_lugar_origen,
    com_telefono_convencional,
    com_telefono_celular,
    com_direccion_domicilio,
    com_ciudad,
    com_provincia,
    com_mail,
  } = req.body;
  try {
    const newProject = await Project.create({
      tip_ide_id,
      com_cedula_ruc,
      com_apellidos_razon_social,
      com_nombres_representante_legal,
      com_fecha_nacimiento,
      com_edad,
      com_lugar_origen,
      com_telefono_convencional,
      com_telefono_celular,
      com_direccion_domicilio,
      com_ciudad,
      com_provincia,
      com_mail,
    });

    res.json(newProject);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateProject = async (req, res) => {
  const { id } = req.params;
  const {
    tip_ide_id,
    com_cedula_ruc,
    com_apellidos_razon_social,
    com_nombres_representante_legal,
    com_fecha_nacimiento,
    com_edad,
    com_lugar_origen,
    com_telefono_convencional,
    com_telefono_celular,
    com_direccion_domicilio,
    com_ciudad,
    com_provincia,
    com_mail,
  } = req.body;

  try {
    const project = await Project.findOne({
      where: {
        com_id: id,
      },
    });

    if (!project) {
      res.status(404).json({ message: "Merchant not found" });
    } else {
      await Project.update(
        {
          tip_ide_id,
          com_cedula_ruc,
          com_apellidos_razon_social,
          com_nombres_representante_legal,
          com_fecha_nacimiento,
          com_edad,
          com_lugar_origen,
          com_telefono_convencional,
          com_telefono_celular,
          com_direccion_domicilio,
          com_ciudad,
          com_provincia,
          com_mail,
        },
        {
          where: {
            com_id: id,
          },
        }
      );
      res.json({ message: "Project updated" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteProject = async (req, res) => {
  try {
    await Project.destroy({
      where: {
        com_id: req.params.id,
      },
    });
    res.sendStatus(204);
  } catch (error) {
    console.log(req.params);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProject,
  createProject,
  updateProject,
  deleteProject,
  getProjects,
};
