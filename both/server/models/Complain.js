import mongoose from "mongoose";

const complainSchema = new mongoose.Schema({
    roll :{
        type: String,
        required: true,
        min:5,
       
    },
    name:{
        type:String,
        required:true,
        
    },
    subject :{
        type: String,
        required: true,
        min:5,
       
    },
    complain :{
        type: String,
        required: true,
        min:10
      
       
    },
    email:{
        type:String,
        required:true,
        
    }
},
    {timestamps:true}
    );

    const Complains = mongoose.model("Complain",complainSchema);
    export default Complains;