// src/routes/search.js
import express from "express";
import NasaData from "../models/NasaData.js";

const router = express.Router();

// GET /api/search?q=...&page=1&limit=12
router.get("/", async (req, res) => {
  try {
    const q = (req.query.q || "").trim();
    const page = Math.max(1, parseInt(req.query.page || "1"));
    const limit = Math.min(100, parseInt(req.query.limit || "12"));
    const skip = (page - 1) * limit;

    if (q) {
      // prefer text search (requires text index)
      const findQuery = { $text: { $search: q } };
      const results = await NasaData.find(findQuery, { score: { $meta: "textScore" } })
        .sort({ score: { $meta: "textScore" } })
        .skip(skip)
        .limit(limit)
        .lean();
      const total = await NasaData.countDocuments(findQuery);
      // fallback: if no text results, try regex (less efficient)
      if (results.length === 0) {
        const regex = new RegExp(q.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
        const fallbackQuery = { $or: [{ title: regex }, { explanation: regex }] };
        const fallbackResults = await NasaData.find(fallbackQuery).skip(skip).limit(limit).lean();
        const fallbackTotal = await NasaData.countDocuments(fallbackQuery);
        return res.json({ total: fallbackTotal, page, limit, results: fallbackResults });
      }
      return res.json({ total, page, limit, results });
    } else {
      // no query: return latest items
      const results = await NasaData.find().sort({ date: -1 }).skip(skip).limit(limit).lean();
      const total = await NasaData.countDocuments();
      return res.json({ total, page, limit, results });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: "Server error" });
  }
});

export default router;
