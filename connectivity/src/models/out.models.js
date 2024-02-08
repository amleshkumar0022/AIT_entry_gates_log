import mongoose from "mongoose";
const outschema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },
    reg_no:{
        type:String,
        required:true,
    },
    year:{
        type:String,
        required:true,
    },
    branch:{
        type:String,
        required:true,
    },
    timeOut:{
        type:String,
        required:true,
    },
    timein:{
        type:String,
    }

})

const Out=mongoose.model("out",outschema);
export default Out;