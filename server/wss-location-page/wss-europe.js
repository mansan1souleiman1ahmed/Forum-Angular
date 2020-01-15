const app = require("express")();
const cors = require("cors");
const http = require("http").Server(app);
const io = require("socket.io")(http);
let messageVar;
let nameVar;

const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require("mongoose");
const Message = require("../model/wss-chat-location/chat-europe");

app.use(cors());
http.listen(3500, function() {
  console.log("listening on 3500");
});
const db =
  "mongodb+srv://mansan:mansan@cluster0-xubta.mongodb.net/angular-forum?retryWrites=true&w=majority";
mongoose.connect(db, err => {
  if (err) {
    //Test to connection
    console.log("no connexion");
  } else {
    console.log("Succes XXXXXX");
  }
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
    messageVar = messageEurope;
    console.log("Message Received: " + messageEurope);

    io.emit("message-europe", {
      type: "new-message",
      text: messageEurope
    });
  });
  socket.on("new-name-europe", nameEurope => {
    nameVar = nameEurope;
    console.log("name Received: " + nameEurope);
    (async () => {
      try {
        var userRecipe = await new Message({
          name: nameVar,
          message: messageVar
        }).save();

        var sendBack = await io.emit("name-europe", {
          type: "new-name",
          text: nameEurope
        });
      } finally {
        console.log("test success");
      }
    })().catch(err => console.error(err));
  });
});
