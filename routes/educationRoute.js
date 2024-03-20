const express = require('express');
const router = express.Router();

const EducationController = require('../controllers/educationController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/create')
    .post(EducationController.createEducation)


router
    .route('/')
    .get(EducationController.listAllEducation)

router
    .route('/:id_Education')
    .put(jwtMiddleware.verifyToken,EducationController.updateAnEducation)
    .delete(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,EducationController.deleteAnEducation)
    .get(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,EducationController.getAnEducation)


module.exports = router;
