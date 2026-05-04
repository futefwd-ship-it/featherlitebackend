import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    level: String,
    area: String,
    title: String,
    polygon: String,

    image2D: String,
    image3D: String,
    sideImage: String,

    sideContent: [
      {
        id: String,
        name: String,
        polygon: String,
        hoveredColor: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Inventory", inventorySchema);