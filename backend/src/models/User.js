import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    lowecase: true, // Store email in lowercase for consistency
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("User", userSchema);
