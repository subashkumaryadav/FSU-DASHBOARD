import mongoose from "mongoose";

const memberSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
        min:2,
        max:100,
    },
    email :{
        type: String,
        required: true,
        max:50,
        unique : true,
    },
    post :{
        type: String,
        required: true,
        max:50,
        unique : true,
    },
    phoneNumber:{
        type:Number,
        required:true,
        min:10,
        max:10,
        unique:true
    },
    role:{
        type : String,
        enum : ["user", "admin","superadmin"],
        default: "user",
    }},
    {timestamps:true}
    );

    const Member = mongoose.model("Member",memberSchema);
    export default Member;