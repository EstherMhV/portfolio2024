const express = require('express');
const router = express.Router();

const aboutController = require('../controllers/AboutController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/create')
    .post(experienceController.createAnAbout)


router
    .route('/')
    .get(experienceController.listAllExperiences)

router
    .route('/:id_experience')
    .put(jwtMiddleware.verifyToken,experienceController.updateAnExperience)
    .delete(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,experienceController.deleteAnExperience)
    .get(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,experienceController.getAnExperience)


module.exports = router;
