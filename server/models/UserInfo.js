const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const signinfo = new Schema(
  {
    userCalorieBurnt: {
      type: Number,
      required: true,
    },
    userCalorieIntake: {
      type: Number,
      required: true,
    },
    userBaseGoal: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const info = new Schema(
  {
    userAge: {
      type: String,
      required: true,
    },
    userGender: {
      type: String,
      required: true,
    },
    userWeight: {
      type: Number,
      required: true,
    },
    userHeight: {
      type: Number,
      required: true,
    },
    userBMI: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);
const userSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    userEmail: {
      type: String,
      required: true,
    },
    userPassword: {
      type: String,
      required: true,
    },
    userPhone: {
      type: Number,
      required: true,
    },
    calorie: [calorieInfo],
    user_info: [info],
  },
  { timestamps: true }
);

exports.UserInfo = mongoose.model("user", userSchema);
