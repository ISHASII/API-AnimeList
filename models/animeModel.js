const e = require("express");
const mongoose = require("mongoose");

const animeSchema = new mongoose.Schema({
  title: { type: String, required: true },
  studio: { type: String },
  genre: { type: String },
  episodes: { type: Number },
});

module.exports = mongoose.model("Anime", animeSchema);
