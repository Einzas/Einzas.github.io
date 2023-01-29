const Ad_Usuario = require("../schemas/ad_usuario");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/config");
//Funciones para establecer un login
const login = async (req, res) => {
  const { usuario_login, usuario_clave } = req.body;
  try {
    const usuario = await Ad_Usuario.findOne({ where: { usuario_login } });
    if (usuario) {
      bcrypt.compare(
        usuario_clave,
        usuario.usuario_clave,
        async (err, validPassword) => {
          if (err) {
            res.status(500).json({ message: err.message });
          }
          if (validPassword) {
            const token = jwt.sign({usuario: usuario_login},config.secret,{
              expiresIn: 60 * 60 * 24
            } );
            res.status(200).json({ message: "Login correcto", token: token });
          } else {
            res.status(401).json({ message: "Contraseña incorrecta" });
          }
        }
      );
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {login} ;
