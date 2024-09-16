const { body } = require('express-validator');

//validaciones para el registro de usuario

const authRegisterValidation = [
    body('userName').isLength({ min: 5 }).withMessage('El nombre debe tener al menos 8 caracteres'),
    body('email').isEmail().withMessage('Debe ser una email valido'),
    body('password').isLength({ min: 8 }).withMessage('La contraseña debe tener al menos 8 caracteres')
];

module.exports = { authRegisterValidation };