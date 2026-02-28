const Anime = require("../models/animeModel");

// dapetin semua data
exports.getAllAnimes = async (req, res) => {
  try {
    const animes = await Anime.find();
    res.status(200).json(animes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// dapetin daya by id
exports.getAnimeById = async (req, res, next) => {
  try {
    const anime = await Anime.findById(req.params.id);
    if (!anime) return res.status(404).json({ message: "Anime not found" });
    res.status(200).json(anime);
  } catch (error) {
    next(error);
  }
};

// created data anime
exports.createAnime = async (req, res, next) => {
  try {
    const anime = await Anime.create(req.body);
    res.status(201).json(anime);
  } catch (error) {
    next(error);
  }
};

// update data anime
exports.updateAnime = async (req, res, next) => {
  try {
    const anime = await Anime.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!anime) return res.status(404).json({ message: "Anime not found" });
    res.status(200).json(anime);
  } catch (error) {
    next(error);
  }
};

// delete data anime
exports.deleteAnime = async (req, res, next) => {
  try {
    const anime = await Anime.findByIdAndDelete(req.params.id);
    if (!anime) return res.status(404).json({ message: "Anime not found" });
    res.status(200).json({ message: "Anime deleted successfully" });
  } catch (error) {
    next(error);
  }
};
