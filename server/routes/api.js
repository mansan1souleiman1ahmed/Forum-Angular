const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

//Connnection to the database
const mongoose = require("mongoose");
//Connection string
//Import model so you can use it request
const User = require("../model/user");
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
function verifyToken(req, res, next) {
  if (!req.headers.authorization) {
    console.log(req.headers.authorization);
    return res.status(401).send("Unauthorized request A");
  }
  let token = req.headers.authorization.split(" ")[1];
  if (token === "null") {
    return res.status(401).send("Unauthorized request B");
  }
  let payload = jwt.verify(token, "secret");
  if (!payload) {
    return res.status(401).send("Unauthorized request C");
  }
  req.userId = payload.subject;
  next();
}
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
      let payload = { subject: registerdUser._id };
      let token = jwt.sign(payload, "secret");
      res.status(200).send({ token });
    }
  });
}); //This is a registration Api.

router.post("/login", (req, res) => {
  let userData = req.body;
  User.findOne({ email: userData.email }, (error, user) => {
    if (error) {
      console.log("error");
    } else {
      if (!user) {
        res.statut(401).send("Invalid email.");
      } else {
        if (user.password !== userData.password) {
          res.status(401).send("Invalid password.");
        } else {
          let payload = { subject: user._id };
          let token = jwt.sign(payload, "secret");
          res.status(200).send({ token });
        }
      }
    }
  });
});

//Events

router.get("/events", (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "2",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "3",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "4",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "5",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "6",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    }
  ];
  res.json(events);
});
router.get("/members", verifyToken, (req, res) => {
  let specialEvents = [
    {
      _id: "1",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "2",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "3",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "4",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "5",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    },
    {
      _id: "6",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z"
    }
  ];
  res.json(specialEvents);
});

module.exports = router;
