import mongoose from 'mongoose'

const imageSchema = new mongoose.Schema({
  image: String, // Cloudinary URL
  title: String
});

const gallerySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      enum: ["interior", "exterior"],
      required: true
    },
    images: [imageSchema]
  },
  { timestamps: true }
);

export default mongoose.model("Gallery", gallerySchema);