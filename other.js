const http= require("http")

function requestController()
{
// Logica de la función
// console.log({global})
console.log("Request xxx pruebita total!")
}

//Configuro el servidor

const server = http.createServer(requestController)
server.listen(4005)