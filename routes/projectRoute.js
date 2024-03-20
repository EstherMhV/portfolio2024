const express = require('express');
const router = express.Router();

const projectController = require('../controllers/projectController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/create')
    .post(projectController.createAProject)


router
    .route('/')
    .get(projectController.listAllProjects)

router
    .route('/:id_project')
    .put(jwtMiddleware.verifyToken,projectController.updateAProject)
    .delete(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,projectController.deleteAProject)
    .get(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,projectController.getAProject)


module.exports = router;
