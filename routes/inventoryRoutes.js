import express from "express";
import { createInventory, getInventory } from "../controllers/inventoryController.js";

const router = express.Router();

// POST - Create Inventory
router.post("/", createInventory);

// GET - Get All Inventory
router.get("/", getInventory);

export default router;