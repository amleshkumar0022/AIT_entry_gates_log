import express from 'express'
const router=express.Router();
import Out from '../models/out.models.js';
import connection from '../db/index.js';

connection();

router.post('/api/outdetails',async (req,res)=>{
    const outdetails=new Out(req.body);
     console.log(req.body);
    const resp= await outdetails.save();
    if(resp)
    {
        return res.status(201).json({message:"data send to out data base"});
    }
    else
    {
        return res.status(422).json({message:"data not send to out data base"});
    }

})

router.post('/api/indetails',async (req,res)=>{
    const reg_no=`${req.body.reg_no}`;
    const find=await Out.findOne({reg_no:reg_no})
    if(find)
    {
        find.timein=`${req.body.timein}`;
        await find.save();
        return res.status(201).json({message:"in time updated"});
    }
    else
    {
        return res.status(422).json({message:"in valid !!! not allowed"})
    }
})

export default router