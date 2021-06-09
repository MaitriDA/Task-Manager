const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();

dotenv.config({path:'./config.env'});

const db=process.env.DATABASE;

mongoose.connect(db,{
    useNewUrlParser: true,
    useCreateIndex:true,
    useUnifiedTopology:true,
    useFindAndModify:false 
}).then(()=>{
    console.log('Connected to database');
}).catch((err)=>{
    console.log('No connection ',err);
})