const {Router} = require('express');
const {getProjects, createProject, getProject, deleteProject, updateProject} = require('../services/projects.services');
const {verifyToken} = require('../middlewares/index');
const router = Router();

router.get('/',verifyToken, getProjects);
router.post('/',verifyToken, createProject);
router.get('/:id',verifyToken, getProject);
router.delete('/:id',verifyToken, deleteProject);
router.put('/:id',verifyToken, updateProject);

module.exports = router;