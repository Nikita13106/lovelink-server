require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");

app.use(cors());
app.use(express.json());

app.use("/api/users", require("./routes/users"));
app.use("/api/roles", require("./routes/roles"));
app.use("/api/vouches", require("./routes/vouches"));

app.listen(5000, () => {
  console.log("Backend running on http://localhost:5000");
});
