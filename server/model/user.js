//Store the module mongoose inside a mongooes const
const mongoose = require("mongoose");

//With mongoose constante create a new Schema for user data in mongodb
const Schema = mongoose.Schema;

const userSchema = new Schema({
  fullName: String,
  name: String,
  email: String,
  password: String,
  mobile: Number,
  city: String,
  gender: String
});
module.exports = mongoose.model("user", userSchema, "users");
//user = name of the schame, userSchema is the userSchema, users is the name of the collection
//now I have a mongoose model that can be used to read update delete and create data in the database.

//Next step you need to connect to the database that has been created.
//All the database request are going to managed in the API routes, in the API.JS file.
