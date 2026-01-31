const axios = require("axios");
const Vouch = require("../../models/Vouch");

module.exports = async (message) => {
  try {
    // 1️⃣ Filters
    if (message.channelId !== process.env.VOUCH_CHANNEL_ID) return;
    if (message.author.bot) return;

    // 2️⃣ Prevent duplicates
    const exists = await Vouch.findOne({ messageId: message.id });
    if (exists) return;

    // 3️⃣ Replace mentions
    let content = message.content;
    message.mentions.users.forEach((user) => {
      const regex = new RegExp(`<@!?${user.id}>`, "g");
      content = content.replace(regex, `@${user.username}`);
    });

    // 4️⃣ Save to DB
    await Vouch.create({
      messageId: message.id,
      author: message.author.username,
      avatar: message.author.displayAvatarURL({
        extension: "png",
        size: 128,
      }),
      content,
      createdAt: message.createdAt,
    });

    // 5️⃣ 🔥 WEBHOOK (STEP 6)
    await axios.post(
      `${process.env.BACKEND_URL}/api/webhook/vouch-updated`
    );

    console.log("✅ Vouch saved & cache cleared");
  } catch (err) {
    console.error("❌ Vouch handler error:", err);
  }
};
