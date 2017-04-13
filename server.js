// var http = require('http');
//
// var ip = '127.0.0.1';
// var port = 12107;
//
// var server = http.createServer(
//     function(request,response){
//         response.statusCode = 200;
//         response.setHeader('Content-Type','text/plain');
//         response.end('bisous');
//     }
//
// );
//
// server.listen(port,ip,function() {
//   console.log('le serveur tourne bien');
//
// });

var express = require('express');
var serveur = express();

serveur.get("/",function(request,response){
  response.sendFile (__dirname + "/views/index.html");
});
serveur.get("/toto",function(request,response){
  response.send ("Bisous de toto");
});
serveur.listen(12107);
