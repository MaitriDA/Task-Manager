const express=require('express');
const taskRouter=express.Router();
const authenticate=require('../middlewear/authenticate');


require('../db/connection');
const User=require('../models/userSchema');

taskRouter.get('/task',authenticate,(req,res)=>{
    console.log('Hello from task page');
    res.send(req.rootUser);
});

module.exports=taskRouter;