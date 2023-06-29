import Complain from "../models/Complain.js";

export const getComplains = async (req,res)=>{
    try {
        const notes = await Complain.find();
        res.send(notes);
    } catch (error) {
       res.send(404).json({message:error.message});
    }
};

