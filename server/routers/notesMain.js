const express=require('express');
const notesMain=express.Router();
require('../db/connection');

const User=require('../models/userSchema');
const Task=require('../models/taskSchema');
const Note=require('../models/notes.Schema');


notesMain.post('/addnote/:id',async (req,res)=>{
    const {title,description}=req.body;
    const owner=req.params.id;
    try{     
        const note=new Note({
            owner,title,description
        })
        const addedNote=await note.save();
        if(addedNote){
            console.log('Note added');
            res.status(201).send('Data pushed successfully');
        }
    }catch(error){
        console.log('Something wrong!!');
        res.json(error);
    }
});

notesMain.get('/getNote/:id',async(req,res)=>{
    const id=req.params.id;
    console.log(id);
    try{   
        console.log('Reading notes');  
        const note=await Note.find({owner:id});
        res.send(note);
    }catch(error){
        res.json(error);
    }
})

module.exports=notesMain;