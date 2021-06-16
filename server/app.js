const express=require('express');
const mongoose=require('mongoose');
const dotenv=require('dotenv');
const cors=require('cors');
const cookieParser=require('cookie-parser');
const app=express();
dotenv.config({path:'./config.env'});
require('./db/connection');
const PORT=process.env.PORT;
const User=require('./models/userSchema');


app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(require('./routers/auth'));
app.use(require('./routers/getUser'));


app.listen(PORT,()=>{
    console.log(`Server running on port number ${PORT}`);
})

