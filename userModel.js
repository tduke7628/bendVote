let mongoose = require("mongoose");
const User = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  image: { type: String },
  voteCast: { type: String },
  voteToWin: { type: String },
  voteTotal: { type: String },
  timestamps: { type: Date, createdAt: "created_at", updatedAt: "updated_at" },
});
module.exports = mongoose.model("votng-users", User);
