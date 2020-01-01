const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");

app.use(cors());
http.listen(3800, function() {
  console.log("listening on 3800");
});
io.on("connection", () => {
  console.log("user connected");
});
io.on("connection", function(socket) {
  console.log("user is logged");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("new-message-south-america", messageSouthAmerica => {
    console.log("Message Received: " + messageSouthAmerica);
    io.emit("message-south-america", {
      type: "new-message",
      text: messageSouthAmerica
    });
  });
  socket.on("new-name-south-america", nameSouthAmerica => {
    console.log("Message Received: " + nameSouthAmerica);
    io.emit("name-south-america", { type: "new-name", text: nameSouthAmerica });
  });
});
