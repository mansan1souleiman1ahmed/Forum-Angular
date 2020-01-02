const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");

app.use(cors());
http.listen(3900, function() {
  console.log("listening on 3900");
});
io.on("connection", () => {
  console.log("user connected");
});
io.on("connection", function(socket) {
  console.log("user is logged");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("new-message-west-asia", messageWestAsia => {
    console.log("Message Received: " + messageWestAsia);
    io.emit("message-west-asia", {
      type: "new-message",
      text: messageWestAsia
    });
  });
  socket.on("new-name-west-asia", nameWestAsia => {
    console.log("Message Received: " + nameWestAsia);
    io.emit("name-west-asia", { type: "new-name", text: nameWestAsia });
  });
});
