const jwt = require("jsonwebtoken");
const config = require("../config/config");
const Ad_Usuario = require("../schemas/ad_usuario");
const Ad_Rol = require("../schemas/ad_rol");

const verifyToken = (req, res, next) => {
  const token = req.headers["x-access-token"];
  if (!token) {
    return res.status(403).json({ message: "No token provided" });
  }
  jwt.verify(token, config.secret, async (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const usuario = await Ad_Usuario.findOne({
      where: { usuario_login: decoded.usuario },
    });
    if (!usuario) {
      return res.status(404).json({ message: "No user found" });
    } else {
      req.usuario = decoded.usuario;
      next();
    }
  });
};

const isAdmin = async (req, res, next) => {
    const usuario = await Ad_Usuario.findOne({
        where: { usuario_login: req.usuario },
      });
      if (usuario) {
        const rol = await Ad_Rol.findOne({ where: { rol_id: usuario.rol_id } });
        if (rol.rol_nombre === "ADMIN") {
          next();
          return;
        } else {
            res.status(403).json({ message: "Require Admin Role" });
        }
      }
};

const isModerator = async (req, res, next) => {
  const usuario = await Ad_Usuario.findOne({
    where: { usuario_login: req.usuario },
  });
  if (usuario) {
    const rol = await Ad_Rol.findOne({ where: { rol_id: usuario.rol_id } });
    if (rol.rol_nombre === "MODERATOR" || rol.rol_nombre === "ADMIN") {
      next();
      return;
    } else {
      res.status(403).json({ message: "Require Moderator Role" });
    }
  }
};

module.exports = { verifyToken, isAdmin, isModerator };
