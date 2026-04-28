import express from 'express'
const router = express.Router();

// const {
//   createGallery,
//   getGallery,
//   getByCategory,
//   addImage,
//   deleteImage,
//   deleteGallery
// } = require("../controllers/galleryControllers");

import {
    createGallery,
  getGallery,
  getByCategory,
  addImage,
  deleteImage,
  deleteGallery

} from '../controllers/galleryController.js';

router.post("/", createGallery);
router.get("/", getGallery);
router.get("/:category", getByCategory);

router.put("/:id/add-image", addImage);
router.put("/:id/delete-image/:imageId", deleteImage);

router.delete("/:id", deleteGallery);

export default router;