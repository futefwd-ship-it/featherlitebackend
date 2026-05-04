import Inventory from "../models/inventory.js";

// CREATE
export const createInventory = async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    const savedInventory = await inventory.save();

    res.status(201).json({
      message: "Inventory Created Successfully",
      data: savedInventory,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
export const getInventory = async (req, res) => {
  try {
    const data = await Inventory.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};