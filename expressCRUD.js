const express = require('express');
const app = express();
app.route('/tarea') // Ruta común a todas las peticiones
.get((req, res) => { res.send("Petición GET"); } ) // Cada tipo de petición
.post((req, res) => { res.send("Petición POST"); } ) // tiene su respuesta
.put((req, res) => { res.send("Petición PUT"); } ) // a medida
.delete((req, res) => { res.send("Petición DELETE"); } )
app.listen(3000);