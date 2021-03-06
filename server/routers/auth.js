//auth code for login and signup

const express=require('express');
const auth=express.Router();
const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');


require('../db/connection');
const User=require('../models/userSchema');

auth.get('/',(req,res)=>{
    res.send('hello world from auth.js');
});

auth.post('/signUp', async (req,res)=>{

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
        
        if(password!=cPassword){
            return res.status(422).json({error:'Password not matching'});
        }

        const user=new User({
            name,email,phone,password,cPassword
        })
        
        //Hashing Password


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

auth.post('/login',async (req,res)=>{
    try{
        const {email,password}=req.body;

        if(!email || !password){
            return res.status(422).json({error:"Field Required!"})
        }

        const loginUser=await User.findOne({email:email});

        if(loginUser){
            const isMatch=await bcrypt.compare(password,loginUser.password);
            if(!isMatch){
                return res.status(422).json({error:"Invalid Credential"});
            }
            const token=await loginUser.generateAuthToken();

            res.cookie('token',token);
            
            res.json({message:"Login Successful"});
        }
        else{
            return res.status(422).json({error:"Invalid Credentials"});
        }
    }
    catch(err){
        console.log(err);
    }
});

module.exports=auth;