const express = require("express");
const Role = require("../models/Role");

const router = express.Router();

router.get("/", async (req, res) => {
  const roles = await Role.find().sort({ position: -1 });
  res.json(roles);
});

module.exports = router;
