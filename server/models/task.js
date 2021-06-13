const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
    Name:String,
    UserName:String,
    Email:String,
    Phone:Number
});

const task=mongoose.model('Task',taskSchema);

module.exports=task;