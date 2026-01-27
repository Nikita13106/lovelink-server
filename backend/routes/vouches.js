const express = require("express");
const router = express.Router();
const client = require("../bot/client");
const cache = require("../cache/cache");

router.get("/", async (req, res) => {
  try {
    const cached = cache.get("vouches");
    if (cached) return res.json(cached);

    const channel = await client.channels.fetch(
      process.env.VOUCH_CHANNEL_ID
    );

    const messages = await channel.messages.fetch({ limit: 50 });

    const vouches = messages.map((msg) => {
      let content = msg.content;

      msg.mentions.users.forEach((user) => {
        const regex = new RegExp(`<@!?${user.id}>`, "g");
        content = content.replace(regex, `@${user.username}`);
      });

      return {
        author: msg.author.username,
        avatar: msg.author.displayAvatarURL({
          extension: "png",
          size: 128,
          forceStatic: false,
        }),
        content,
        createdAt: msg.createdAt,
      };
    });

    cache.set("vouches", vouches);
    res.json(vouches);
  } catch (err) {
    console.error("Vouches error:", err);
    res.status(500).json({ error: "Failed to fetch vouches" });
  }
});

module.exports = router;
