import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    image: String,
    title: String,
    name: String,
});


const vitualTourSchema = new mongoose.Schema({
    category: {
        type: String,
        enum: ["interior", "exterior"],
        required: true
    },
    images: [imageSchema]
}, { timestamps: true }
);

export default mongoose.model("virtualTour", vitualTourSchema);