import mongoose from "mongoose";
import {DB_NAME} from "../constants.js"

const connection=async()=>{
    const conn=await mongoose.connect(" ").then(()=>{
        console.log("connected");
    }).catch((err)=>{
        console.log("error123")
    })
}
export default connection
