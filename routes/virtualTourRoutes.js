import express from 'express';

const router = express.Router();

import {
    createBulkVirtualTour, getVirtualTour, deleteVirtualTour,
    updatedVirtualTour, createVirualTour,getVirtualTourByCategory
} from '../controllers/virtualTourController.js';

router.post("/", createVirualTour);
router.get("/category",getVirtualTourByCategory);
router.post("/bulk", createBulkVirtualTour);

router.get("/", getVirtualTour);
router.put("/:id", updatedVirtualTour);
router.delete("/:id", deleteVirtualTour);


export default router;
