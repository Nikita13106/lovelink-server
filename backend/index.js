require("dotenv").config();
const express = require("express");
const cors = require("cors");

const client = require("./bot/client");

const PORT = process.env.PORT || 5000;

const app = express();
app.use(cors());
app.use(express.json());

client.login(process.env.DISCORD_TOKEN);

client.once("ready", () => {
  console.log(`Bot logged in as ${client.user.tag}`);
});

app.use("/api/roles", require("./routes/roles"));
app.use("/api/users", require("./routes/users"));
app.use("/api/vouches", require("./routes/vouches"));

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
