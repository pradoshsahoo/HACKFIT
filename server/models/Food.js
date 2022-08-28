const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const foodSchema = new Schema(
  {
    foodName: {
      type: String,
      required: true,
    },
    foodPortion: {
      type: Number,
      required: true,
    },
    foodEnergy: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

exports.Food = mongoose.model("food", foodSchema);
