const express = require('express');
const  { body, validationResult } = require('express-validator')
const { authRegisterValidation } = require('../validations/authRegisterValidations');
const authController = require('../controllers/authController');
const { authLoginValidation } = require('../validations/authLoginValidations');


const router = express.Router();
router.post('/register', authRegisterValidation, authController.register);
router.post('/login' , authLoginValidation,  authController.login);
/* router.post('/register', body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener 8 caracteres'), (req, res)=>{

    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send(errors);
    }

    res.send('regisro exitoso');
    
}); */

module.exports = router;