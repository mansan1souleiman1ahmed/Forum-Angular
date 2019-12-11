const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const PORT = 3000;
const api = require("./routes/api");
const app = express(); //we create an instance of expresss
app.use(cors());
app.use(bodyParser.json()); //we specify the bodyParser to handle Json data
app.use("/api", api);
app.get("/", function(req, res) {
  res.send("Hello");
});
app.listen(PORT, function() {
  console.log("Server" + PORT);
});
