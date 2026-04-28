import express from "express";
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import galleryRoutes from './routes/galleryRoutes.js'

dotenv.config();

// connect DB
connectDB();

const app = express();

// middleware
app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
    res.send("Api is running.......");
})

app.use("/api/gallery",galleryRoutes);


// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});