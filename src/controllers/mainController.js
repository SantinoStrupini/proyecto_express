//los controllers son una funcion que toma por parametros req y res, recibe lo que el cliente solicita y devuelve lo que encuentra en la base de datos o json. 

const controller = {
    index: (req, res) =>{
        res.send('hola');
    }
}

module.exports = controller;