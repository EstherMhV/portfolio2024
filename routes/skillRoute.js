const express = require('express');
const router = express.Router();

const skillController = require('../controllers/skillController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/create')
    .post(skillController.createASkill)


router
    .route('/')
    .get(skillController.listAllSkills)

router
    .route('/:id_skill')
    .put(jwtMiddleware.verifyToken,skillController.updateASkill)
    .delete(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,skillController.deleteASkill)
    .get(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,skillController.getASkill)


module.exports = router;
