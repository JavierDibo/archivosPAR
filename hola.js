const http = require('http'); // Cargar el paquete http para aceptar solicitudes HTTP
const puerto = 1234; // Puerto TCP en el que el servidor esperará peticiones
const servidor = 'localhost'; // Nombre o IP del servidor
http.createServer( (request, response) => { // Creamos un servidor con una función
response.writeHead(200, { 'Content-Type': 'text/html'} ); // que responde enviando una cabecera
response.end('<h1>Hola Node.js</h1>'); // con código 200 y el tipo MIME
}).listen(puerto, servidor, () => { // La aplicación queda a la espera de
console.log(`Aplicación a la escucha en el puerto ${puerto}`);// peticiones
});