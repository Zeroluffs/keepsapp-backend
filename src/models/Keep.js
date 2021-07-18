const mongoose = require("mongoose");
const { Schema } = mongoose;

const KeepSchema = new Schema(
  {
    title: String,
    description: String,
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Keep", KeepSchema);
