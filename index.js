require("dotenv").config()
const http= require("http")

function requestController()
{
// Logica de la función
console.log("Llegó 1 Request !")
}

//Configuro el servidor

const server = http.createServer(requestController)
const PORT=process.env.PORT

server.listen(PORT, function(){
    console.log("La App corre en el puerto: " + PORT)
})