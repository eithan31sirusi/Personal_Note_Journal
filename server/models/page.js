const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const pageSchema = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  pageSymbol: { type: String, required: true },
  creator: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
});

module.exports = mongoose.model("Page", pageSchema);
