const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(cors());
io.on("connection", () => {
  console.log("user connected");
});

http.listen(3500, function() {
  console.log("listening on 3500");
});
io.on("connection", function(socket) {
  console.log("user is logged");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });
  socket.on("new-message", message => {
    console.log("Message Received: " + message);
    io.emit("message", { type: "new-message", text: message });
  });
  socket.on("new-name", name => {
    console.log(name);
  });
});
