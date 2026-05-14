import Amenity from '../models/amenities.js';

// GET ALL
export const getAmenities = async (req, res) => {
  try {
    const amenities = await Amenity.find();

    res.status(200).json({
      success: true,
      count: amenities.length,
      data: amenities,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// GET SINGLE
export const getAmenityById = async (req, res) => {
  try {
    const amenity = await Amenity.findOne({
      id: req.params.id,
    });

    if (!amenity) {
      return res.status(404).json({
        success: false,
        message: "Amenity not found",
      });
    }

    res.status(200).json({
      success: true,
      data: amenity,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// CREATE SINGLE
export const createAmenity = async (req, res) => {
  try {
    const amenity = await Amenity.create(req.body);

    res.status(201).json({
      success: true,
      data: amenity,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// BULK UPSERT
export const createBulkAmenities = async (req, res) => {
  try {
    const amenities = req.body;

    const bulkOps = amenities.map((item) => ({
      updateOne: {
        filter: { id: item.id },
        update: { $set: item },
        upsert: true,
      },
    }));

    await Amenity.bulkWrite(bulkOps);

    res.status(200).json({
      success: true,
      message: "Amenities bulk uploaded successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// UPDATE
export const updateAmenity = async (req, res) => {
  try {
    const amenity = await Amenity.findOneAndUpdate(
      { id: req.params.id },
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: amenity,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};


// DELETE
export const deleteAmenity = async (req, res) => {
  try {
    await Amenity.findOneAndDelete({
      id: req.params.id,
    });

    res.status(200).json({
      success: true,
      message: "Amenity deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};