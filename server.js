import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";

import galleryRoutes from "./routes/galleryRoutes.js";
import inventoryRoutes from "./routes/inventoryRoutes.js";


dotenv.config();

// DB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Routes
app.use("/api/gallery", galleryRoutes);
app.use("/api/inventory", inventoryRoutes);


// Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});