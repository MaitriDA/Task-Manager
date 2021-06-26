const mongoose=require('mongoose');

const noteSchema=mongoose.Schema({
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    },
    title:{
        type:String
    },
    description:{
        type:String
    }
});

const Note=mongoose.model('Note',noteSchema);
module.exports=Note;
