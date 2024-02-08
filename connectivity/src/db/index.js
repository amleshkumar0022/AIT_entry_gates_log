import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connection=async()=>{
    const conn=await mongoose.connect("mongodb+srv://amlesh:Amlesh123@cluster0.b50k9k9.mongodb.net/test?retryWrites=true&w=majority").then(()=>{
        console.log("connected");
    }).catch((err)=>{
        console.log("error123")
    })
}
export default connection