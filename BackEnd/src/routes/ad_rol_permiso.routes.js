const {Router} = require('express');
const {  getRol_Permisos, getRol_PermisoById, createRol_Permiso, updateRol_Permiso, deleteRol_Permiso  } = require('../services/ad_rol_permiso.services');
const router = Router();
const {verifyToken} = require('../middlewares/index');
//Se crea el servicio para obtener todos los registros de la tabla ad_rol_permiso
router.get('/',verifyToken, getRol_Permisos);
router.post('/',verifyToken, createRol_Permiso);
router.get('/:id',verifyToken, getRol_PermisoById);
router.delete('/:id',verifyToken, deleteRol_Permiso);
router.put('/:id',verifyToken, updateRol_Permiso);

module.exports = router;