var express = require("express");
var contactApi = require("./contact-api");
var submodule = require("./submodule.js");
var app = express();
var port = process.env.PORT || 8080;
const BASE_PATH = "/api";

submodule();
contactApi.register(app,BASE_PATH);

/*conexion mongodb
...
1)contactApi.register(app,BASE_PATH,contacts) donde contacts es la base de datos
la conexion de los tres miembros debe estar metida una dentro de otra y en el ultimo conexion meter el app.listen
2)EL APP.LISTEN TIENE QUE ESTAR DENTRO DE CLIENT CONNECT DE LA CONEXION DE MONGODB
*/
app.get("/",(req,res)=>{
   res.send("Hola Mundo"); 
});

app.listen(port);