import User from "../models/AddUser.js";

export const getUser = async (req , res)=>{
    try {
        const {id} = req.params;
        const user = await User.findById(id);
        res.send(user);
        
    } catch (error) {
        res.sendStatus(404).json({message:error.message});
        
    }
}

