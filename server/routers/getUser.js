//Router code to get the id of the user from cookies after successful login

const express=require('express');
const getUserDetail=express.Router();
const authenticate=require('../middlewear/authenticate');


require('../db/connection');
const User=require('../models/userSchema');

getUserDetail.get('/getID',authenticate,(req,res)=>{
    return res.send(req.rootUser._id);
});

getUserDetail.get('/getName',authenticate,(req,res)=>{
    return res.send(req.rootUser);
});

module.exports=getUserDetail;