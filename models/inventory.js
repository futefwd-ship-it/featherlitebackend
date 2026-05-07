import mongoose from "mongoose";

const inventorySchema = new mongoose.Schema(
  {
    level: String,
    level1:String,
    floorType:String,
    floorType1:String,
    area: String,
    title: String,
    title1:String,
    title2:String,
    carpet_area:String,
    leasable_area:String,
    efficiency:String,
    polygon: String,

    image2D: String,
    image3D: String,
    sideImage: String,

    sideContent: [
      {
        id: String,
        name: String,
        polygon:[
          { poly_Id:String,polygon:String,title:String, color:String}
        ],
        hoveredColor: String,
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Inventory", inventorySchema);