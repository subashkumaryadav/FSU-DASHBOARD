import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name :{
        type: String,
        required: true,
        min:3,
        max:50,
    },
    code :{
        type: String,
        required: true,
        max:50,
        unique : true,
    },
     year :{
        type: String,
        required: true,
        max:50,
        unique : true,
    }, 
    part :{
        type: String,
        required: true,
        max:50,
    },
    Link :{
        type: String,
        required: true,
      
    },
},
    {timestamps:true}
    );

    const Book = mongoose.model("Book",bookSchema);
    export default Book;