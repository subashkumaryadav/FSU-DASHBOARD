import Notice from "../models/Notice.js";

export const getNotices = async (req,res)=>{
    try {
        const notice = await Notice.find();
        res.send(notice);
    } catch (error) {
       res.send(404).json({message:error.message});
    }
}