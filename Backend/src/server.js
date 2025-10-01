import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import path from 'path'; // ⬅️ ADD THIS
import { fileURLToPath } from 'url'; // ⬅️ ADD THIS

import { connectDB } from "./utils/db.js";
import searchRoute from "./routes/search.js";
import deepaiRoute from "./routes/deepai.js";
import NasaData from "./models/NasaData.js";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 5000;
const HOST = '0.0.0.0';

// --- A helper to get the current directory path ---
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


app.use(express.json());
// When serving frontend and backend from the same place, you don't need CORS.
// app.use(
//   cors({
//     origin: process.env.CORS_ORIGIN || "*",
//   })
// );


// --- 1. API ROUTES (Must come first) ---
app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api/search", searchRoute);
app.use("/api/deepai", deepaiRoute);


// --- 2. SERVE STATIC FRONTEND FILES ---
// ⬇️ ADD THIS SECTION ⬇️
// Adjust the path to point to your frontend's build/dist folder
app.use(express.static(path.join(__dirname, '../frontend/dist')));


// --- 3. CATCH-ALL ROUTE (Must come last) ---
// ⬇️ ADD THIS SECTION ⬇️
// This sends the index.html for any request that doesn't match an API route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
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
    console.log(`🚀 Server running at http://${HOST}:${PORT}`)
  );
}

start();