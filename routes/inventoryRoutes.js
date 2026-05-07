import express from "express";
import { createInventory, getInventory,createBulkInventory,updateInventory,deleteInventory

 } from "../controllers/inventoryController.js";

const router = express.Router();

// POST - Create Inventory
router.post("/", createInventory);

// GET - Get All Inventory
router.get("/", getInventory);
router.put("/:id",updateInventory);
router.delete("/:id",deleteInventory);

router.post("/bulk",createBulkInventory);

export default router;