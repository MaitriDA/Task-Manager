//Router code to get the id of the user from cookies after successful login

const express=require('express');
const taskMain=express.Router();
require('../db/connection');

const User=require('../models/userSchema');
const Task=require('../models/taskSchema');

taskMain.post('/add/:id',async (req,res)=>{
    const {title,description,status}=req.body;
    const owner=req.params.id;
    try{     
        const task=new Task({
            owner,title,description,status
        })
        const addedTask=await task.save();
        if(addedTask){
            res.status(201).send('Data pushed successfully');
        }
    }catch(error){
        res.json(error);
    }
});

taskMain.get('/see/:id',async (req,res)=>{
    const id=req.params.id;
    try{     
        const task=await Task.find({owner:id});
        res.send(task);
    }catch(error){
        res.json(error);
    }
});

taskMain.get('/:id1/get/:id2',async (req,res)=>{
    const id1=req.params.id1;
    const id2=req.params.id2;
    try{
        const task=await Task.find({_id:id2})
        console.log(task);
        res.send(task);
        
    }
    catch(error){
        res.json(error);
    }
});


taskMain.delete('/:id1/delete/:id2',async (req,res)=>{
    const id1=req.params.id1;
    const id2=req.params.id2;
    const task=req.body;
    const del=new Task(task);
    try{
        await Task.deleteOne({_id:id2},del)
        res.json(task);
    }
    catch(error){
        res.json(error);
    }
});

module.exports=taskMain;