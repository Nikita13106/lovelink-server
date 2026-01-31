const express = require("express");
const Role = require("../models/Role");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const roles = await Role.find().sort({ position: -1 });
    console.log("ROLES SENT:", JSON.stringify(roles, null, 2));
    res.json(roles);
  } catch (err) {
    console.error("Roles fetch failed:", err.message);
    res.status(500).json({ error: "Failed to fetch roles" });
  }
});

module.exports = router;
