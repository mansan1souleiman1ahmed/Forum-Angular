const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
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
    console.log(message);
    io.emit(message);
  });
  socket.on("new-name", name => {
    console.log(name);
  });
});
