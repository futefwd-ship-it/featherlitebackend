import mongoose from 'mongoose';



const amenitySchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },

    label: {
      type: [String],
      required: true,
    },

    cx: {
      type: Number,
      required: true,
    },

    cy: {
      type: Number,
      required: true,
    },

    linePts: {
      type: String,
      default: "",
    },

    lineSvg: {
      type: String,
      default: "",
    },

    lineSvgProps: {
      x: {
        type: Number,
        default: 0,
      },
      y: {
        type: Number,
        default: 0,
      },
      w: {
        type: Number,
        default: 0,
      },
      h: {
        type: Number,
        default: 0,
      },
    },

    labelPos: {
      type: String,
      enum: ["top", "left", "right", "bottom"],
      default: "top",
    },

    thumbnailPos: {
      type: String,
      enum: ["top", "left", "right", "bottom"],
      default: "top",
    },

    customIcon: {
      type: String,
      default: "",
    },

    delay: {
      type: Number,
      default: 0,
    },

    polygon: {
      type: String,
      default: "",
    },

    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Amenity", amenitySchema);
