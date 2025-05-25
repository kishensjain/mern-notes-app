import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config.js/mongoose.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on port: ", PORT);
  });
});
