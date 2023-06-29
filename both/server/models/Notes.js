import mongoose from "mongoose";

const notesSchema = mongoose.Schema({
    subcode:{
        type:String,
        required:true,
      },
       subname:{
        type:String,
        required:true,
      },
      author:{
        type:String,
        required:true,
      },
      type:{
        type:String,
        required:true,
      },
       year:{
        type:String,
        required:true,
      },
      part:{
        type:String,
        required:true,
      },
    link:{
        type:String,
        unique:true,
      }
})

const Notes = mongoose.model("Notes",notesSchema);

export default Notes;