const mongoose = require("mongoose");

const RoleSchema = new mongoose.Schema({
  roleId: {
    type: String,
    required: true,
    unique: true,
  },

  name: {
    type: String,
    required: true,
  },

  color: {
    type: String, // hex or tailwind class
    default: "#ffffff",
  },

  icon: {
    type: String, // lucide icon name / emoji / image URL
  },

  members: [
    {
      userId: String,
      username: String,
      avatar: String,
    },
  ],

  position: {
    type: Number, // role hierarchy
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

RoleSchema.index({ position: 1 });

module.exports = mongoose.model("Role", RoleSchema);
