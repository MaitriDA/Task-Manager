const mongoose=require('mongoose');

const taskSchema=mongoose.Schema({
   title:{
       type:String
   },
   description:{
       type:String
   }
});

module.exports=taskSchema;
