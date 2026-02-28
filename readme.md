# Mini Project API

REST API sederhana untuk mengelola koleksi data anime menggunakan Express.js dan MongoDB. Dilengkapi dengan dokumentasi Swagger UI.

---

## 🔧 Prasyarat

- Node.js (direkomendasikan v14 ke atas)
- npm (termasuk dalam instalasi Node.js)
- Instance MongoDB yang berjalan (lokal atau cloud seperti MongoDB Atlas)

---

## 🚀 Cara Menjalankan

1. **Clone repositori** atau unduh file workspace.
2. **Instal dependensi**:
   ```bash
   npm install
   ```
3. **Buat file `.env`** di root proyek dan isi variabel berikut:
   ```env
   MONGODB_URI=mongodb://<username>:<password>@<host>:<port>/<database>
   PORT=3000 # opsional, default 3000
   ```
4. **Jalankan server**:
   ```bash
   npm start
   ```
   Aplikasi akan menampilkan `Server running on port <PORT>` dan `Connected to MongoDB` jika konfigurasi benar.

---

## 📚 Dokumentasi API (Swagger)

Setelah server berjalan, akses dokumentasi interaktif di:

```
http://localhost:3000/api-docs
```

Swagger UI memungkinkan kamu untuk:

- Melihat semua endpoint yang tersedia
- Mencoba request langsung dari browser
- Melihat contoh request/response

---

## 📁 Struktur Proyek

```
mini-project-api/
├── app.js                 # Entry point aplikasi
├── swagger.js             # Konfigurasi Swagger
├── package.json
├── .env                   # Environment variables
├── controllers/
│   └── animeController.js # Logic handler untuk setiap route
├── models/
│   └── animeModel.js      # Schema Mongoose untuk Anime
└── routes/
    └── animeRoutes.js     # Definisi routes dengan dokumentasi Swagger
```

---

## 📡 Endpoints API

Base URL: `http://localhost:3000`

| Metode   | Endpoint     | Deskripsi                  |
| -------- | ------------ | -------------------------- |
| `GET`    | `/anime`     | Ambil semua anime          |
| `GET`    | `/anime/:id` | Ambil anime berdasarkan ID |
| `POST`   | `/anime`     | Tambah anime baru          |
| `PUT`    | `/anime/:id` | Perbarui data anime        |
| `DELETE` | `/anime/:id` | Hapus anime                |

---

## 📝 Contoh Request

### 1. Ambil semua anime

```bash
curl -X GET http://localhost:3000/anime
```

### 2. Ambil anime berdasarkan ID

```bash
curl -X GET http://localhost:3000/anime/<mongo-object-id>
```

### 3. Tambah anime baru

```bash
curl -X POST http://localhost:3000/anime \
  -H "Content-Type: application/json" \
  -d '{
    "title": "Naruto",
    "studio": "Pierrot",
    "genre": "Shounen",
    "episodes": 220
  }'
```

### 4. Perbarui data anime

```bash
curl -X PUT http://localhost:3000/anime/<mongo-object-id> \
  -H "Content-Type: application/json" \
  -d '{"episodes": 500}'
```

### 5. Hapus anime

```bash
curl -X DELETE http://localhost:3000/anime/<mongo-object-id>
```

---

## 📦 Model Data

### Anime Schema

| Field      | Tipe     | Required | Deskripsi         |
| ---------- | -------- | -------- | ----------------- |
| `_id`      | ObjectId | Auto     | ID unik (MongoDB) |
| `title`    | String   | ✅ Ya    | Judul anime       |
| `studio`   | String   | ❌ Tidak | Studio produksi   |
| `genre`    | String   | ❌ Tidak | Genre anime       |
| `episodes` | Number   | ❌ Tidak | Jumlah episode    |

---

## 🛠️ Teknologi

- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM untuk MongoDB
- **Swagger UI** - Dokumentasi API interaktif
- **dotenv** - Environment variables

---

## ✅ Ringkasan

API ini menyediakan operasi CRUD lengkap untuk model Anime dengan dokumentasi Swagger yang interaktif. Akses `/api-docs` untuk mencoba semua endpoint langsung dari browser!

Selamat berkoding! 👾
