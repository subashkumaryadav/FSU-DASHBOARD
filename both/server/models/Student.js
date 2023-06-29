import mongoose from "mongoose";

const studentSchema = new mongoose.Schema(
  {
    id: {
        type: Number,
        required: true,
        unique:true,
       
        
      },
    name: {
      type: String,
      required: true,
      min: 3,
      max: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone: {
      type: Number,
      required: true,
      unique: true,
      min: 10,
      
    }, 
     password: {
      type: String,
      required: true,
      min: 6,  
    },
  },
  { timestamps: true }
);

const Student = mongoose.model("Student", studentSchema);
export default Student;
