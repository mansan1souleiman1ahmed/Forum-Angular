const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");

app.use(cors());
http.listen(4000, function() {
  console.log("listening on 4000");
});
io.on("connection", () => {
  console.log("user connected");
});
io.on("connection", function(socket) {
  console.log("user is logged");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("new-message-east-asia", messageEastAsia => {
    console.log("Message Received: " + messageEastAsia);
    io.emit("message-east-asia", {
      type: "new-message",
      text: messageEastAsia
    });
  });
  socket.on("new-name-east-asia", nameEastAsia => {
    console.log("Message Received: " + nameEastAsia);
    io.emit("name-east-asia", { type: "new-name", text: nameEastAsia });
  });
});
