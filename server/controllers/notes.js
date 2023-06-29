import Notes from "../models/Notes.js";

const getNotes = async (req,res)=>{
    try {
        const notes = await Notes.find();
        res.send(notes);
    } catch (error) {
       res.send(404).json({message:error.message});
    }
}
export default getNotes;