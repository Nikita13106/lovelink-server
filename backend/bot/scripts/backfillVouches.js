require("dotenv").config();
const client = require("../client");
const mongoose = require("mongoose");
const Vouch = require("../../models/Vouch");

async function backfill() {
  await mongoose.connect(process.env.MONGO_URI);
  console.log("MongoDB connected");

  await client.login(process.env.DISCORD_TOKEN);

  client.once("ready", async () => {
    console.log("Bot ready, fetching old vouches...");

    const channel = await client.channels.fetch(
      process.env.VOUCH_CHANNEL_ID
    );

    const messages = await channel.messages.fetch({ limit: 100 });

    for (const msg of messages.values()) {
      if (msg.author.bot) continue;

      const exists = await Vouch.findOne({ messageId: msg.id });
      if (exists) continue;

      let content = msg.content;

      msg.mentions.users.forEach((user) => {
        const regex = new RegExp(`<@!?${user.id}>`, "g");
        content = content.replace(regex, `@${user.username}`);
      });

      await Vouch.create({
        messageId: msg.id,
        author: msg.author.username,
        avatar: msg.author.displayAvatarURL({
          extension: "png",
          size: 128,
        }),
        content,
        createdAt: msg.createdAt,
      });
    }

    console.log("Backfill complete ✅");
    process.exit(0);
  });
}

backfill();
