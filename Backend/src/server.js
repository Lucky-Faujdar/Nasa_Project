import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { connectDB } from "./utils/db.js";
import searchRoute from "./routes/search.js";
import deepaiRoute from "./routes/deepai.js";
import NasaData from "./models/NasaData.js";

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = "0.0.0.0";
// --- A helper to get the current directory path ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.json());

// If frontend & backend are on different domains in dev, enable CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "https://nasa-project-6byr.onrender.com", // Vite default
    credentials: true,
  })
);

// --- 1. API ROUTES (must come BEFORE static/frontend routes) ---
app.get("/api/health", (req, res) => res.json({ ok: true }));

// ✅ Make sure searchRoute actually has a GET "/" handler
app.use("/api/search", searchRoute);
app.use("/api/deepai", deepaiRoute);

// --- 2. SERVE STATIC FRONTEND FILES ---
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

// --- 3. CATCH-ALL ROUTE (must come last) ---
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'dist', 'index.html'));
});

// --- Start server after connecting to DB ---
async function start() {
  await connectDB(process.env.MONGO_URI);

  try {
    await NasaData.init();
    console.log("Indexes ensured");
  } catch (err) {
    console.warn("Index init warning:", err.message);
  }

  app.listen(PORT, HOST, () =>
    console.log(`🚀 Server running at http://localhost:${PORT}`)
  );
}

start();
 