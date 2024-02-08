import express from "express"
const router =express.Router();
import User from "../models/user.models.js";
import connection from "../db/index.js";

connection();

router.post('/api/register',async (req,res)=>{
    const user=new User(req.body);
    const resp = await user.save();
    if(resp)
    {
        return res.status(201).json({message:"data send"})
    }
    else
    {
        return res.status(422).json({message:"data not send"})
    }
   
})

router.post('/api/entry' , async (req,res)=>{
    //console.log(req.body.reg_no);
    const reg_no  = `${req.body.reg_no}`
    //console.log(reg_no);
    const find=await User.findOne({reg_no:reg_no});
    if(find)
    {
        return res.json(find);
    }
    else
    {
        return res.status(422).json({message:`${reg_no} not found`});
    }


})



export default router;