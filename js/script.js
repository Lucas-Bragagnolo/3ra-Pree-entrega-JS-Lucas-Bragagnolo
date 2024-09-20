const fs = require('fs')

/* fs.writeFile('./archivo.txt','Soy homero el malo', ()=> {
    try {
        console.log("exito");
        
    } catch (error) {
        console.log(error);
    }
}); */


const http = require('http');
http.createServer((req, res) => {
    res.write("<h1>Hola desde Node </h1>");
    res.end();
}).listen(8080);