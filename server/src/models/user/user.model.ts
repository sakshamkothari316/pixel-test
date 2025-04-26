import mongoose from "mongoose";
import axios from "axios";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
  },
  country: {
    type: String,
  },
  postCode: {
    type: String,
  },
  number: {
    type: String,
  },
  latitude: {
    type: Number,
  },
  longitude: {
    type: Number,
  },
  profileImg: {
    type: String,
  },
});

userSchema.index({
  name: "text",
  city: "text",
  state: "text",
  country: "text",
  postCode: "text",
  number: "text",
});

const userModel = mongoose.model("user", userSchema, "user");

export { userModel };
