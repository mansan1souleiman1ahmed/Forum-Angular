const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");

app.use(cors());
http.listen(3600, function() {
  console.log("listening on 3600");
});
io.on("connection", () => {
  console.log("user connected");
});
io.on("connection", function(socket) {
  console.log("user is logged");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("new-message-africa", messageAfrica => {
    console.log("Message Received: " + messageAfrica);
    io.emit("message-africa", { type: "new-message", text: messageAfrica });
  });
  socket.on("new-name-africa", nameAfrica => {
    console.log("Message Received: " + nameAfrica);
    io.emit("name-africa", { type: "new-name", text: nameAfrica });
  });
});
