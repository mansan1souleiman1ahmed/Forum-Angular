const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");

app.use(cors());
http.listen(3500, function() {
  console.log("listening on 3500");
});
io.on("connection", () => {
  console.log("user connected");
});
io.on("connection", function(socket) {
  console.log("user is logged");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("new-message-europe", messageEurope => {
    console.log("Message Received: " + messageEurope);
    io.emit("message-europe", {
      type: "new-message",
      text: messageEurope
    });
  });
  socket.on("new-name-europe", nameEurope => {
    console.log("Message Received: " + nameEurope);
    io.emit("name-europe", { type: "new-name", text: nameEurope });
  });
});
