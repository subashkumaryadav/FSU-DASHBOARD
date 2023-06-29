import addUsers from "../models/AddUser.js";

export const addUser = async (req,res)=>{
    try {
       
        let user = new addUsers(req.body);
        let result = await user.save();
        res.send(result);
       
    } catch (error) {
        if(error.code ==='ERR_HTTP_HEADERS_SENT'){
            res.status(500).send("Internal server error !");
        }
     
    }
 }
