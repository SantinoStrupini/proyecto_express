const { body } = require('express-validator');

//validaciones para el login de usuario


const authLoginValidation = [
    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener 8 caracteres'), 
]


module.exports = { authLoginValidation };