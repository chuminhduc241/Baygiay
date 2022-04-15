const mongoose = require("mongoose");
const CategorySchema = mongoose.Schema({
  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
  name: { type: String, default: 0 },
});
module.exports = mongoose.model("Category", CategorySchema);
