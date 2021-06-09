const express=require('express');
const router=express.Router();

require('../db/connection');
const User=require('../models/userSchema');

router.get('/',(req,res)=>{
    res.send('hello world from auth.js');
});

router.post('/register', async (req,res)=>{

    const {name,email,phone,password,cPassword}=req.body;
    if(!name || !email || !phone || !password || !cPassword){
        return res.status(422).json({error:'Field Required'});
    }

    try{

        const emailExist=await User.findOne({email:email})
            
        if(emailExist){
            return res.status(422).json({error:'Email Exist'});
        }

        const phoneExist=await User.findOne({phone:phone})
            
        if(phoneExist){
            return res.status(422).json({error:'Phone Exist'});
        }
    
        const user=new User({
            name,email,phone,password,cPassword
        })
        
        const registeredUser=await user.save();
        if(registeredUser){
            res.status(201).json({message:'Registeration Successful'});
        }
        else{
            res.status(500).json({error:'Registeration Failed'})
        }   
    }
    catch(err){
        console.log(err);
    }
});

router.post('/login',async (req,res)=>{
    try{
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(400).json({error:"Please enter the credentials"})
        }

        const loginUser=await User.findOne({email:email});
        console.log(loginUser);
        if(loginUser){
            res.json({message:"Login Successful"});
        }
        else{
            res.status(400).json({error:"Login failed"})
        }
    }
    catch(err){
        console.log(err);
    }
});
module.exports=router;