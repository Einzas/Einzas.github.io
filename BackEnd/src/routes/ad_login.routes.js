const {Router} = require('express');

const { login } = require('../services/ad_login.services');

const router = Router();

//Se crea el servicio para obtener todos los registros de la tabla ad_permiso
router.post('/auth', login);

module.exports = router;