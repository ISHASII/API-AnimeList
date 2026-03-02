const Anime = require("../models/animeModel");

// GET semua data
exports.getAllAnimes = async (req, res, next) => {
  try {
    const animes = await Anime.find();
    res.status(200).json(animes);
  } catch (error) {
    next(error);
  }
};

// GET by ID
exports.getAnimeById = async (req, res, next) => {
  try {
    const anime = await Anime.findById(req.params.id);

    if (!anime) {
      const err = new Error("Anime not found");
      err.status = 404;
      return next(err);
    }

    res.status(200).json(anime);
  } catch (error) {
    next(error);
  }
};

// CREATE anime
exports.createAnime = async (req, res, next) => {
  try {
    const anime = await Anime.create(req.body);
    res.status(201).json(anime);
  } catch (error) {
    next(error);
  }
};

// UPDATE anime
exports.updateAnime = async (req, res, next) => {
  try {
    const anime = await Anime.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!anime) {
      const err = new Error("Anime not found");
      err.status = 404;
      return next(err);
    }

    res.status(200).json(anime);
  } catch (error) {
    next(error);
  }
};

// DELETE anime
exports.deleteAnime = async (req, res, next) => {
  try {
    const anime = await Anime.findByIdAndDelete(req.params.id);

    if (!anime) {
      const err = new Error("Anime not found");
      err.status = 404;
      return next(err);
    }

    res.status(200).json({ message: "Anime deleted successfully" });
  } catch (error) {
    next(error);
  }
};
