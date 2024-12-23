import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import authRouter from "./auth-router.js";
import dotenv from "dotenv";
import cluster from "cluster";

dotenv.config();

const PORT = 3333;
const app = express();

app.use(express.json());
app.use(cors());

app.use(authRouter);

app.listen(PORT, async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(`Server is running on http://localhost:${PORT}`);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
});
