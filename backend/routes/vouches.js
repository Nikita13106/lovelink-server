const express = require("express");
const router = express.Router();
const Vouch = require("../models/Vouch");
const cache = require("../cache/cache");

router.get("/", async (req, res) => {
  try {
    const cached = cache.get("vouches:list");
    if (cached) return res.json(cached);

    const vouches = await Vouch.find().sort({ createdAt: -1 }).limit(50).lean();

    cache.set("vouches:list", vouches, 60); // cache for 60s
    res.json(vouches);
  } catch (err) {
    console.error("Vouches API error:", err);
    res.status(500).json({ error: "Failed to fetch vouches" });
  }
});

module.exports = router;
