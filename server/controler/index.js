const http = require("http");
const fs = require("fs");

// Chargement du fichier FRONT affiché au client
const server = http.createServer(function(req, res) {
  fs.readFile("./...", function(error, content) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(content);
  });
});

// Chargement de socket.io
const io = require("socket.io").listen(server);

// Quand un client se connecte, on le note dans la console
io.sockets.on("connection", function(socket) {
  console.log("Un client est connecté !");
});

server.listen(8080);
