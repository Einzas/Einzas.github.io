const express = require("express");
const projectsRouter = require("./projects.routes");
const ad_permisoRouter = require("./ad_permiso.routes");
const ad_rolRouter = require("./ad_rol.routes");
const ad_rol_permisoRouter = require("./ad_rol_permiso.routes");
const ad_usuarioRouter = require("./ad_usuario.routes");
const ad_loginRouter = require("./ad_login.routes");
function routerApi(app){
    const router = express.Router();
    app.use("/api/v1", router);
    router.use('/projects', projectsRouter);
    router.use('/ad_permiso', ad_permisoRouter);
    router.use('/ad_rol', ad_rolRouter);
    router.use('/ad_rol_permiso', ad_rol_permisoRouter);
    router.use('/ad_usuario', ad_usuarioRouter);
    router.use('/ad_login', ad_loginRouter);
    

}

module.exports = routerApi;