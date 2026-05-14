import express from 'express';

const router = express.Router();

import {
  getAmenities,
  getAmenityById,
  createAmenity,
  createBulkAmenities,
  updateAmenity,
  deleteAmenity,
} from "../controllers/amenitiesController.js";

router.get("/", getAmenities);

router.get("/:id", getAmenityById);

router.post("/", createAmenity);

router.post("/bulk", createBulkAmenities);

router.put("/:id", updateAmenity);

router.delete("/:id", deleteAmenity);

export default router;