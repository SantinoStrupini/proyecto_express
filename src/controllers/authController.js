const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator')

const users = {
    userName: 'santino',
    password: '$2b$10$OnnS0RZiUuv9JsgjzA1sA.Y589whK8tLOWEk2TYdSHMIK9YkEwOIi'
}

const authController = {
    
    login: async(req, res)=>{
        const { userName, password } = req.body;
        //buscar el usuario por nombre de usario 
        const user = users.userName === userName ? users : null;
        console.log(user);
        
        if (!user) {
            return res.send('usuario no encontrado');
        }
        const comparePassword = await bcrypt.compare(password, user.password);
        if (!comparePassword) {
            return res.send('contraseña no valida');
        }
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).send(errors);
    }
        res.send(user);
    },
    register: (req, res)=>{
        //verificacion de erorres en la validacion
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors : errors.array()})
        }

        //si no hay errores, procesamos el registro
        const { userName,email, password } = req.body;
        res.json({
            message: 'Usuario registrado con exito',
            userName,
            email,
            password,
        })
        res.send('register');
    }

}

module.exports = authController;