//Router code to get the id of the user from cookies after successful login
const express=require('express');
const taskMain=express.Router();
require('../db/connection');

const User=require('../models/userSchema');
const Task=require('../models/task');

taskMain.post('/add',async (req,res)=>{
    const task=req.body;
    const newTask=new Task(task);
    console.log(newTask);
    try{
        const savedTask=await newTask.save();
        if(savedTask){
            res.status(201).json({message:'Task saved'});
        }
        else{
            res.status(500).json({error:'Task not saved'})
        }
    }catch(error){
        res.json(error);
    }
});

module.exports=taskMain;