// const Gallery = require("../models/Gallery");
import Gallery from "../models/gallery.js";

// CREATE
export const createGallery = async (req, res) => {
  try {
    const { category, images } = req.body;
    //  console.log("BODY:", req.body);

    const gallery = new Gallery({ category, images });
    await gallery.save();

    res.status(201).json(gallery);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
export const getGallery = async (req, res) => {
  try {
    const data = await Gallery.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// FILTER (interior / exterior)
export const getByCategory = async (req, res) => {
  try {
    const data = await Gallery.find({
      category: req.params.category
    });
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// ADD IMAGE to existing category
export const addImage = async (req, res) => {
  try {
    const { image, title } = req.body;

    const updated = await Gallery.findByIdAndUpdate(
      req.params.id,
      { $push: { images: { image, title } } },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE IMAGE
export const deleteImage = async (req, res) => {
  try {
    const { imageId } = req.params;

    const updated = await Gallery.findByIdAndUpdate(
      req.params.id,
      { $pull: { images: { _id: imageId } } },
      { new: true }
    );

    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE CATEGORY
export const deleteGallery = async (req, res) => {
  try {
    await Gallery.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};