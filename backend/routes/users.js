const express = require("express");
const router = express.Router();
const client = require("../bot/client");

router.get("/:id", async (req, res) => {
  try {
    const user = await client.users.fetch(req.params.id);

    res.json({
      id: user.id,
      username: user.username,
      avatar: user.displayAvatarURL({ dynamic: true }),
      banner: user.bannerURL({ dynamic: true }),
    });
  } catch (err) {
    res.status(404).json({ error: "User not found" });
  }
});

module.exports = router;
