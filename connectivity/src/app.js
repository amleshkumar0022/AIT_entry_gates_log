// configiraton

import express, { request } from "express"
import cors from "cors"
import connection from "./db/index.js";
import usercon from './routes/user.route.js'
import outcon from './routes/out.route.js'
const port=3000;
const app=express();
app.use(cors());
app.use(express.json());
connection();
app.get('/jokes',(req,res)=>{
    res.send("helooe")
})
app.use('/users',usercon);
app.use('/out',outcon);
app.listen(3000,()=>{
    console.log("connected to host");
})
export default app;