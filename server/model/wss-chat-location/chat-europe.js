const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const EuropeModel = new Schema({
  name: String,
  message: String
});
module.exports = mongoose.model("europe-model", EuropeModel, "chat-europe");
