var mongoose = require("mongoose");
const User = require("../models/user");
var recommendSchema = new mongoose.Schema(
  {
    userid: {
      type: mongoose.Schema.Types.ObjectId,
      ref: User,
    },
    name: {
      type: String,
      maxlength: 50,
      require: true,
    },
    domain: {
      type: String,
      require: true,
    },
    predicted_rating: {
      type: Number,
      require: true,
      max: 10,
      min: 0,
    },
    offered_by: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);
const Recommended = mongoose.model("recommended", recommendSchema);
module.exports = Recommended;
