const express = require("express");
const router = express.Router();

//Connnection to the database
const mongoose = require("mongoose");
//Connection string
//Import model so you can use it request
const User = require("../model/user");
const db =
  "mongodb+srv://angular:angular@cluster0-xubta.mongodb.net/test?retryWrites=true&w=majority";
//Connection to database
mongoose.connect(db, err => {
  if (err) {
    //Test to connection
    console.log("no connxion");
  } else {
    console.log("Succes XXXXXX");
  }
});

router.get("/", function(req, res) {
  res.send("From Api");
});
//Handling the registering, post => form sent, /register event to listen, function(req, res){} = function that is triggerred when /register happens in url.

router.post("/register", (req, res) => {
  let userData = req.body;
  let user = new User(userData); //You  use the model you create so mongoose can understand the structure, of the request. => YOu get the User object or the user model.
  user.save((error, registerdUser) => {
    //Now you can save by applying the save method on the model created.
    if (error) {
      console.log("ERROR" + error);
    } else {
      res.status(200).send(registerdUser);
    }
  });
}); //This is a registration Api.

module.exports = router;
