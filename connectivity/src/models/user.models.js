import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    reg_no:{
        type:String,
        require:true
    },
    year:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true
    }
})
const User=mongoose.model("user",userSchema);
export default User;