let mongoose = require("mongoose");
const detailsSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  ip: { type: String, required: true },
  country: { type: String, required: true },
  city: { type: String, required: true },
  loc: { type: String, required: true },
  date: { type: String, required: true },
  region: { type: String, required: true },
  timezone: { type: String, required: true },
  org: { type: String, required: true },
  timestamps: { type: Date, createdAt: "created_at", updatedAt: "updated_at" },
});
module.exports = mongoose.model("votng-details", detailsSchema);
