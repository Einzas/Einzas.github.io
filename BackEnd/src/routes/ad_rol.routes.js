const {Router} = require('express');
const { getRoles, getRolById, createRol, updateRol, deleteRol  } = require('../services/ad_rol.services');
const router = Router();
const {verifyToken, isModerator, isAdmin} = require('../middlewares/index');

//Se crea el servicio para obtener todos los registros de la tabla ad_rol
router.get('/',[verifyToken, isAdmin], getRoles);
router.post('/',[verifyToken, isAdmin], createRol);
router.get('/:id',[verifyToken, isAdmin], getRolById);
router.delete('/:id',[verifyToken, isAdmin], deleteRol);
router.put('/:id',[verifyToken, isAdmin], updateRol);

module.exports = router;