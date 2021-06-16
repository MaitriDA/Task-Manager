//Router code to get the id of the user from cookies after successful login

const express=require('express');
const taskMain=express.Router();
require('../db/connection');

const User=require('../models/userSchema');
const Task=require('../models/taskSchema');

taskMain.post('/add/:id',async (req,res)=>{
    const task=req.body;
    const id=req.params.id;
    console.log(id);
    try{
        console.log('inside try block');        
        const user=await User.findOneAndUpdate({
            _id:id
        },{
            $push:{
                tasks:[{
                    title:task.title,
                    description:task.description
                }]
            }
        })
        if(user){
            res.status(201).send('Data pushed successfully');
        }
    }catch(error){
        res.json(error);
    }
});

module.exports=taskMain;