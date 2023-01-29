const Ad_Usuario = require("../schemas/ad_usuario"); 
const Ad_Rol = require("../schemas/ad_rol");
const Ad_Permiso = require("../schemas/ad_permiso");
const Ad_Rol_Permiso = require("../schemas/ad_rol_permiso");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
//Se obtienen todos los usuarios de la tabla ad_usuario
const getUsuarios = async (req, res) => {
  try {
    const usuarios = await Ad_Usuario.findAll();
    res.json({ usuarios });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
 
//Se obtiene un usuario por su id de usuario de la tabla ad_usuario
const getUsuarioById = async (req, res) => {
  const { id } = req.params;

  try {
    const usuario = await Ad_Usuario.findByPk(id);
    if (usuario) {
      res.json({ usuario });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Se crea un usuario en la tabla ad_usuario y se le asigna un rol
const createUsuario = async (req, res) => {
  const {
    rol_id,
    usuario_login,
    usuario_clave,
    usuario_cedula,
    usuario_apellidos,
    usuario_nombres,
    usuario_mail,
    usuario_direccion,
    usuario_telefono,
    usuario_estado,
  } = req.body;
  let nueva_clave;

  bcrypt.hash(usuario_clave, 10, async (err, hash) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      nueva_clave = hash;
      try {
        const newUsuario = await Ad_Usuario.create({
          rol_id,
          usuario_login,
          usuario_clave: nueva_clave,
          usuario_cedula,
          usuario_apellidos,
          usuario_nombres,
          usuario_mail,
          usuario_direccion,
          usuario_telefono,
          usuario_estado,
        });
        const token = jwt.sign({usuario: usuario_login},config.secret,{
          expiresIn: 60 * 60 * 24
        } );
        res.status(201).json({ message: "Usuario creado con éxito", token: token });
      } catch (error) {
        res.status(500).json({ message: error.message });
      }
    }
  });
};

//Se actualiza un usuario en la tabla ad_usuario
const updateUsuario = async (req, res) => {
  const {
    rol_id,
    usuario_login,
    usuario_clave,
    usuario_cedula,
    usuario_apellidos,
    usuario_nombres,
    usuario_mail,
    usuario_direccion,
    usuario_telefono,
    usuario_estado,
  } = req.body;
  const { id } = req.params;
  try {
    const usuario = await Ad_Usuario.findByPk(id);
    let nueva_clave;
    if (usuario) {
      bcrypt.hash(usuario_clave, 10, async (err, hash) => {
        if (err) {
          return res.status(500).json({ error: err });
        } else {
          nueva_clave = hash;

          await usuario.update({
            rol_id,
            usuario_login,
            usuario_clave: nueva_clave,
            usuario_cedula,
            usuario_apellidos,
            usuario_nombres,
            usuario_mail,
            usuario_direccion,
            usuario_telefono,
            usuario_estado,
          });
          res.json({ message: "Usuario actualizado con éxito" });
        }
      });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Se elimina un usuario en la tabla ad_usuario
const deleteUsuario = async (req, res) => {
  const { id } = req.params;
  try {
    const usuario = await Ad_Usuario.findByPk(id);
    if (usuario) {
      await usuario.destroy();
      res.json({ message: "Usuario eliminado con éxito" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getUsuarios,
  getUsuarioById,
  createUsuario,
  updateUsuario,
  deleteUsuario,
};
