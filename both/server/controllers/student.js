import Student from "../models/Student.js";

export const getStudent = async (req,res)=>{
    try {
        const student = await Student.find();
        res.send(student);
    } catch (error) {
       res.send(404).json({message:error.message});
    }
}