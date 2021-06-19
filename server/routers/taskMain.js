//Router code to get the id of the user from cookies after successful login

const express=require('express');
const taskMain=express.Router();
require('../db/connection');

const User=require('../models/userSchema');
const Task=require('../models/taskSchema');

taskMain.post('/add/:id',async (req,res)=>{
    const task=req.body;
    const id=req.params.id;
    try{     
        const user=await User.findOneAndUpdate({
            _id:id
        },{
            $push:{
                tasks:[{
                    title:task.title,
                    description:task.description,
                    status:task.status
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

taskMain.get('/see/:id',async (req,res)=>{
    const id=req.params.id;
    try{     
        const task=await User.find({_id:id},{_id:0,tasks:1});
        res.send(task);
    }catch(error){
        res.json(error);
    }
});

taskMain.get('/:id1/get/:id2',async (req,res)=>{
    const id1=req.params.id1;
    const id2=req.params.id2;
    console.log("ID1",id1,"ID2",id2);
    try{
        const task=await User.find({_id:id1},{tasks:{_id:id2}})
        console.log(task);
        res.send(task);
        
    }
    catch(error){
        res.json(error);
    }
});


module.exports=taskMain;