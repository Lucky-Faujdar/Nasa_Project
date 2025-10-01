import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import { connectDB } from "./utils/db.js";
import searchRoute from "./routes/search.js";
import deepaiRoute from "./routes/deepai.js"; // ⬅️ UPDATED: Import deepai.js
import NasaData from "./models/NasaData.js";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

app.use(express.json());
app.use(
  cors({
    origin: process.env.CORS_ORIGIN || "*",
  })
);

app.get("/api/health", (req, res) => res.json({ ok: true }));

// --- API Routes ---
app.use("/api/search", searchRoute);
app.use("/api/deepai", deepaiRoute); // ⬅️ UPDATED: Use the deepai route

// Start server after connecting to DB
async function start() {
  await connectDB(process.env.MONGO_URI);
  try {
    await NasaData.init();
    console.log("Indexes ensured");
  } catch (err) {
    console.warn("Index init warning:", err.message);
  }
  app.listen(PORT, HOST, () =>
    console.log(`🚀 Server running at http://${HOST}:${PORT}`)
  );
}

start();