const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const app=express();
dotenv.config({path:'./config.env'});
require('./db/connection');
const PORT=process.env.PORT;
const User=require('./models/userSchema');

app.use(express.json());
app.use(require('./routers/auth'));


app.listen(PORT,()=>{
    console.log(`Server running on port number ${PORT}`);
})

