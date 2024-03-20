const express = require('express');
const router = express.Router();

const userController = require('../controllers/skillController');
const jwtMiddleware = require('../middlewares/jwtMiddleware');

router
    .route('/register')
    .post(userController.register)


router
    .route('/login')
    .post(userController.login)

router
    .route('/')
    .get(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,userController.listAllUsers)

router
    .route('/:id_user')
    .put(jwtMiddleware.verifyToken,userController.updateAUser)
    .delete(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,userController.deleteAUser)
    .get(jwtMiddleware.verifyToken,jwtMiddleware.verifyAdmin ,userController.getAUser)

router
    .route('/:id_user/assignment')
    .get(jwtMiddleware.verifyToken, userController.getAssignment)

module.exports = router;
