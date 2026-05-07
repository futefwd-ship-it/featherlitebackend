import Inventory from "../models/inventory.js";

// CREATE
export const createInventory = async (req, res) => {
  try {
    const inventory = new Inventory(req.body);
    const savedInventory = await inventory.save();

    res.status(201).json({
      message: "Inventory Created Successfully",
      data: savedInventory,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET ALL
export const getInventory = async (req, res) => {
  try {
    const data = await Inventory.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



export const updateInventory=async (req,res)=>{
  try{
    const updatedInventory=await Inventory.findByIdAndUpdate(
      req.params.id,
      req.bady,
      {new:true}
    );


    res.status(200).json({
      message:"Inventory Updated Successfully",
      data:updatedInventory,
    })
  }catch(err){
    res.status(500).json({error:err.message});
  }
}

export const deleteInventory=async(req,res)=>{
  try{
    await Inventory.findByIdAndDelete(req.params.id);
    res.status(200).json({
      message:"Inventory Deleted Successfully",
    });
  }catch(err){
    res.status(500).json({error:err.message});
  }
}


// BULK CREATE
export const createBulkInventory = async (req, res) => {
  try {
    const inventories = req.body; // expecting array

    const savedData = await Inventory.insertMany(inventories);

    res.status(201).json({
      message: "Bulk Inventory Created Successfully",
      count: savedData.length,
      data: savedData,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};