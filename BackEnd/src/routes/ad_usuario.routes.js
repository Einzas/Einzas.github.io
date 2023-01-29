const {Router} = require('express');
const { getUsuarios, getUsuarioById, createUsuario, updateUsuario, deleteUsuario  } = require('../services/ad_usuario.services');
const router = Router();
const {verifyToken} = require('../middlewares/index');
//Se crea el servicio para obtener todos los registros de la tabla ad_usuario
router.get('/',verifyToken, getUsuarios);
router.post('/',verifyToken, createUsuario);
router.get('/:id',verifyToken, getUsuarioById);
router.delete('/:id',verifyToken, deleteUsuario);
router.put('/:id',verifyToken, updateUsuario);

module.exports = router;