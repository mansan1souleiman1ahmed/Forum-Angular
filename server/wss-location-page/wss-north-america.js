const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");

app.use(cors());
http.listen(3700, function() {
  console.log("listening on 3700");
});
io.on("connection", () => {
  console.log("user connected");
});
io.on("connection", function(socket) {
  console.log("user is logged");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("new-message-north-america", messageNorthAmerica => {
    console.log("Message Received: " + messageNorthAmerica);
    io.emit("message-north-america", {
      type: "new-message",
      text: messageNorthAmerica
    });
  });
  socket.on("new-name-north-america", nameNorthAmerica => {
    console.log("Message Received: " + nameNorthAmerica);
    io.emit("name-north-america", { type: "new-name", text: nameNorthAmerica });
  });
});
