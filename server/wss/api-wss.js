/* const mongoose = require("mongoose");
const User = require("./model/user");
const router = express.Router();
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

io.on("connection", function(socket) {
  console.log("user is logged");
  socket.on("disconnect", function() {
    console.log("user disconnected");
  });

  socket.on("new-message", message => {
    console.log("Message Received: " + message);
    io.emit("message", { type: "new-message", text: message });




    let messageObject = { text: message };
    /*  let user = new User(messageObject);
    user.save((error, registering) => {
      if (error) {
        console.log(error);
      } else {
        console.log("success");
      }
    });

  });

  socket.on("new-name", name => {
    console.log(name);
  });
}); */
