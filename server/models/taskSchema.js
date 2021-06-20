const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
   title:{
       type:String
   },
   description:{
       type:String
   },
   status:{
       type:String
   }
});

const Task=mongoose.model('Task',taskSchema);
module.exports=Task;
