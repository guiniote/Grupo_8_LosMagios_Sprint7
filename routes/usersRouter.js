const express = require('express');
const router = express.Router();
const usersController = require('../controller/usersController');

// Middlewares
const uploadFile = require('../middlewares/multerMiddleware');
const validations = require('../middlewares/validateRegisterMiddleware');
const userGuestMiddleware = require('../middlewares/userGuestMiddleware');
const userLoggedMiddleware = require('../middlewares/userLoggedMiddleware');



// Formulario de registro
router.get('/register', userGuestMiddleware, usersController.register);

router.post('/register', uploadFile.single('avatar'), validations, usersController.processRegister);

// Formulario de login
router.get('/login', userGuestMiddleware, usersController.login);

router.post('/login', usersController.loginProcess);

// Página de perfil
router.get('/profile', userLoggedMiddleware, usersController.profile);    



module.exports = router;