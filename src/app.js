require('dotenv').config();
const express = require('express');
const path = require('path');//path es una libreria de express que se basa en la creacion de rutas
const mainRoutes = require('./routes/main');
const authRoutes = require('./routes/auth');


const app = express();



app.use(express.static(path.join(__dirname, '../public')));//aca estoy usando el .join y el dirname para armar la ruta de un archivo y no solo llegar de una manera mas facil si no que si despues cuando lo suba a un servidor tambien arme la ruta que necesites.
app.use(express.json());//este middleware sirve para parsear los json que nos llegan desde el postman y poder leerlos.


const port = process.env.PORT || 3000;

//rutas

app.use('/main', mainRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
    console.log(`Server running on http://loclahost:${port}`);
    
});


