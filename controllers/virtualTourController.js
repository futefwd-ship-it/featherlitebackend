import virtualTour from "../models/virtualTour.js";


export const createVirualTour = async (req, res) => {
    try {
        const virtual = new virtualTour(req.body);
        const savedVirtual = await virtual.save();

        res.status(201).json({
            message: "Vitual Created Successfully",
            data: savedVirtual,
        })

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}


export const getVirtualTour = async (req, res) => {
    try {
        const data = await virtualTour.find();
        res.json(data);

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


// get by type
export const getVirtualTourByCategory = async (req, res) => {
    try {

        console.log(req.query);

        const { category } = req.query;

        const data = await virtualTour.find({
            category: category
        });

        res.status(200).json(data);

    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}


export const updatedVirtualTour = async (req, res) => {
    try {
        const updatedVirtual = await virtualTour.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        )
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
}

export const deleteVirtualTour = async (req, res) => {
    try {
        await virtualTour.findByIdAndDelete(req.params.id);
        res.status(200).json({
            message: "Inventory Deleted Successfully....."
        })

    } catch (err) {
        res.status(500).json({ error: err.message })
    }

}

export const createBulkVirtualTour = async (req, res) => {
    try {
        const virtuals = req.body;
        const savedData = await virtualTour.insertMany(virtuals);

        res.status(201).json({
            message: "Bulk Inventory Created Successfully",
            count: savedData.length,
            data: savedData,
        });

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}