const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");
const User = require("./model/user");
const db =
  "mongodb+srv://mansan:mansan@cluster0-xubta.mongodb.net/angular-forum?retryWrites=true&w=majority";
//Connection to database
mongoose.connect(db, err => {
  if (err) {
    //Test to connection
    console.log("no connxion");
  } else {
    console.log("Succes XXXXXX");
  }
});
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
    /* let messageObject = { text: message };
    let user = new User(messageObject);
    user.save((error, registering) => {
      if (error) {
        console.log(error);
      } else {
        console.log("success");
      }
    }); */
  });
  socket.on("new-name", name => {
    console.log("Message Received: " + name);
    io.emit("name", { type: "new-name", text: name });
    /* let messageObject = { text: message };
    let user = new User(messageObject);
    user.save((error, registering) => {
      if (error) {
        console.log(error);
      } else {
        console.log("success");
      }
    }); */
  });

  socket.on("new-name", name => {
    console.log(name);
  });
});
