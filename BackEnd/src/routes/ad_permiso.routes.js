const {Router} = require('express');
const {  getPermisos, getPermisoById, createPermiso, updatePermiso, deletePermiso  } = require('../services/ad_permiso.services');
const {verifyToken} = require('../middlewares/index');
const router = Router();

//Se crea el servicio para obtener todos los registros de la tabla ad_permiso
router.get('/',verifyToken, getPermisos);
router.post('/',verifyToken, createPermiso);
router.get('/:id',verifyToken, getPermisoById);
router.delete('/:id',verifyToken, deletePermiso);
router.put('/:id',verifyToken, updatePermiso);

module.exports = router;