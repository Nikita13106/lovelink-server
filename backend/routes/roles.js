const express = require("express");
const client = require("../bot/client.js"); 

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    console.log("Fetching filtered roles...");

    const guildId = process.env.GUILD_ID;
    const guild = await client.guilds.fetch(guildId);

    if (!guild) {
      return res.status(404).json({ error: "Guild not found" });
    }

    const ROLE_IDS = [
      process.env.FOUNDER_ROLE_ID,
      process.env.OWNERS_ROLE_ID,
      process.env.GIRL_OWNERS_ROLE_ID,
      process.env.CO_OWNERS_ROLE_ID,
    ];

    const rolesData = ROLE_IDS.map((id) => guild.roles.cache.get(id))
      .filter(Boolean)
      .map((role) => ({
        id: role.id,
        title: role.name,
        members: role.members.map((m) => ({
          id: m.id,
          username: m.user.username,
          avatar: m.user.displayAvatarURL({ dynamic: true }),
        })),
      }));

    res.json(rolesData);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch roles" });
  }
});

module.exports = router;
