import mongoose from "mongoose";

const addUserSchema = mongoose.Schema({
        name:{
            type:String,
            required:true,
            min:5,
            unique:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type:String,
            required:true,
        }
})

const addUser = mongoose.model("User",addUserSchema);
export default addUser;
