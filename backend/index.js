require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const client = require("./bot/client");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

// Optional but recommended (prevents silent buffering)
mongoose.set("bufferCommands", false);

async function startServer() {
  try {
    // 1️⃣ Connect MongoDB FIRST
    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("✅ MongoDB connected");

    // 2️⃣ Start Discord bot
    await client.login(process.env.DISCORD_TOKEN);

    client.once("ready", () => {
      console.log(`🤖 Bot logged in as ${client.user.tag}`);
    });

    // 3️⃣ Register routes AFTER DB is ready
    app.use("/api/webhook", require("./routes/webhook"));
    app.use("/api/roles", require("./routes/roles"));
    app.use("/api/users", require("./routes/users"));
    app.use("/api/vouches", require("./routes/vouches"));

    // 4️⃣ Start server LAST
    app.listen(PORT, () => {
      console.log(` Backend running on port ${PORT}`);
    });
  } catch (err) {
    console.error(" Startup failed:", err.message);
    process.exit(1);
  }
}

startServer();
