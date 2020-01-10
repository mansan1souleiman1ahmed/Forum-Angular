const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const recipeSchema = new Schema({
  europe: Boolean,
  vegeterian: Boolean,
  vegan: Boolean,
  normal: Boolean,
  recipeTitle: String,
  steps: String
});
module.exports = mongoose.model("recipes", recipeSchema, "recipe");
//recipes = name of the schame, userSchema is the userSchema, users is the name of the collection
//now I have a mongoose model that can be used to read update delete and create data in the database.

//Next step you need to connect to the database that has been created.
//All the database request are going to managed in the API routes, in the API.JS file.
