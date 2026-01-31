const mongoose = require("mongoose");

const VouchSchema = new mongoose.Schema({
  author: String,
  authorId: String,
  avatar: String,
  content: String,
  createdAt: Date,
});

VouchSchema.index({ createdAt: -1 });
module.exports = mongoose.model("Vouch", VouchSchema);
