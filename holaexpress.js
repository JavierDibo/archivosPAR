const express = require('express'); // Cargamos el paquete express
const app = express(); // Creamos el objeto que actuará como aplicación
app.get('/', (req, res) => { // Respuesta a una solicitud GET con la ruta /
res.send(`
<ul>
<li><a href="tareas/">Lista de tareas</a>
<li><a href="tarea/1234">Tarea 1234</a>
<ul>`);
});
app.get('/tareas', (req, res) => { // Respuesta a una solicitud GET con la ruta /tareas
res.send('Lista de tareas');
});
app.get('/tarea/:id', (req, res) => { // Respuesta a una solicitud GET con la ruta /tarea/identificador
const { id } = req.params; // Obtenemos el parámetro enviado en la solicitud
res.send({id,}); // Enviamos no una cadena, sino un JSON con el identificador
});
app.listen(3000); // Quedamos a la espera de peticiones