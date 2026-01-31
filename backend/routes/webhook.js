const express = require("express");
const router = express.Router();
const cache = require("../cache/cache");

router.post("/vouch-updated", (req, res) => {
  cache.del("vouches:list"); // 🔥 STEP 6
  res.json({ success: true });
});

module.exports = router;
     