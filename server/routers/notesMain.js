const express=require('express');
const notesMain=express.Router();
require('../db/connection');

const User=require('../models/userSchema');
const Task=require('../models/taskSchema');
const Channel=require('../models/channelSchema');



module.exports=notesMain;