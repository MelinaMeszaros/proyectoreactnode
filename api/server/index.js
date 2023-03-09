//importamos el paquete express
const express = require('express');
const axios = require('axios');
//importamos cors para permitir a nuestro dominio recibir solicitudes de otro dominio.
const cors = require('cors');
const moviesRouter = require('./routers/movies');
const popularRouter = require('./routers/popular');
const infoMovieRouter = require('./routers/infoMovie');

//llamamos a la funcion express para inicializar la app
const app = express();

app.use(express.json());
app.use(cors());
app.use(moviesRouter);
app.use(popularRouter);
app.use(infoMovieRouter);


app.get('/', (req, res) => { 
 res.send("<h1>Home page</h1>");
});



const PUERTO = 8080;

//inicializamos el servidor de Express en puerto 3000
app.listen(PUERTO, () => {
 console.log(`Server started on port ${PUERTO}`);
});