const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Mini Project API - Anime",
      version: "1.0.0",
      description:
        "REST API sederhana untuk mengelola koleksi data anime menggunakan Express.js dan MongoDB",
      contact: {
        name: "Developer",
      },
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
    components: {
      schemas: {
        Anime: {
          type: "object",
          required: ["title"],
          properties: {
            _id: {
              type: "string",
              description: "ID unik anime (auto-generated oleh MongoDB)",
              example: "507f1f77bcf86cd799439011",
            },
            title: {
              type: "string",
              description: "Judul anime",
              example: "Naruto",
            },
            studio: {
              type: "string",
              description: "Studio produksi anime",
              example: "Pierrot",
            },
            genre: {
              type: "string",
              description: "Genre anime",
              example: "Shounen",
            },
            episodes: {
              type: "integer",
              description: "Jumlah episode",
              example: 220,
            },
          },
        },
        AnimeInput: {
          type: "object",
          required: ["title"],
          properties: {
            title: {
              type: "string",
              description: "Judul anime",
              example: "Attack on Titan",
            },
            studio: {
              type: "string",
              description: "Studio produksi anime",
              example: "MAPPA",
            },
            genre: {
              type: "string",
              description: "Genre anime",
              example: "Action",
            },
            episodes: {
              type: "integer",
              description: "Jumlah episode",
              example: 87,
            },
          },
        },
        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Pesan error",
              example: "Anime not found",
            },
          },
        },
        DeleteSuccess: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Pesan sukses",
              example: "Anime deleted successfully",
            },
          },
        },
      },
    },
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(options);

const setupSwagger = (app) => {
  // Swagger UI
  app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec, {
      customCss: ".swagger-ui .topbar { display: none }",
      customSiteTitle: "Mini Project API - Dokumentasi",
    }),
  );

  // Endpoint JSON spec
  app.get("/api-docs.json", (req, res) => {
    res.setHeader("Content-Type", "application/json");
    res.send(swaggerSpec);
  });
};

module.exports = setupSwagger;
