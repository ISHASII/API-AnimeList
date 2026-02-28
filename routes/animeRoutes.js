const express = require("express");
const router = express.Router();
const animeController = require("../controllers/animeController");

/**
 * @swagger
 * tags:
 *   name: Anime
 *   description: API untuk mengelola data anime
 */

/**
 * @swagger
 * /anime:
 *   get:
 *     summary: Ambil semua anime
 *     tags: [Anime]
 *     description: Mengembalikan daftar semua anime yang tersimpan di database
 *     responses:
 *       200:
 *         description: Berhasil mengambil daftar anime
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Anime'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/", animeController.getAllAnimes);

/**
 * @swagger
 * /anime/{id}:
 *   get:
 *     summary: Ambil anime berdasarkan ID
 *     tags: [Anime]
 *     description: Mengembalikan satu anime berdasarkan MongoDB ObjectId
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId dari anime
 *         example: 507f1f77bcf86cd799439011
 *     responses:
 *       200:
 *         description: Berhasil mengambil anime
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Anime'
 *       404:
 *         description: Anime tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/:id", animeController.getAnimeById);

/**
 * @swagger
 * /anime:
 *   post:
 *     summary: Tambah anime baru
 *     tags: [Anime]
 *     description: Membuat entri anime baru di database
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnimeInput'
 *           examples:
 *             naruto:
 *               summary: Contoh Naruto
 *               value:
 *                 title: Naruto
 *                 studio: Pierrot
 *                 genre: Shounen
 *                 episodes: 220
 *             aot:
 *               summary: Contoh Attack on Titan
 *               value:
 *                 title: Attack on Titan
 *                 studio: MAPPA
 *                 genre: Action
 *                 episodes: 87
 *     responses:
 *       201:
 *         description: Anime berhasil dibuat
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Anime'
 *       400:
 *         description: Validasi gagal (field required tidak ada)
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/", animeController.createAnime);

/**
 * @swagger
 * /anime/{id}:
 *   put:
 *     summary: Perbarui data anime
 *     tags: [Anime]
 *     description: Memperbarui data anime yang sudah ada berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId dari anime
 *         example: 507f1f77bcf86cd799439011
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/AnimeInput'
 *           examples:
 *             updateEpisodes:
 *               summary: Update jumlah episode
 *               value:
 *                 episodes: 500
 *             updateStudio:
 *               summary: Update studio
 *               value:
 *                 studio: Studio Ghibli
 *     responses:
 *       200:
 *         description: Anime berhasil diperbarui
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Anime'
 *       404:
 *         description: Anime tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.put("/:id", animeController.updateAnime);

/**
 * @swagger
 * /anime/{id}:
 *   delete:
 *     summary: Hapus anime
 *     tags: [Anime]
 *     description: Menghapus anime dari database berdasarkan ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: MongoDB ObjectId dari anime
 *         example: 507f1f77bcf86cd799439011
 *     responses:
 *       200:
 *         description: Anime berhasil dihapus
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/DeleteSuccess'
 *       404:
 *         description: Anime tidak ditemukan
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Internal server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.delete("/:id", animeController.deleteAnime);

module.exports = router;
