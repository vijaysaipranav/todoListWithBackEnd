const mongoose =require('mongoose');

// creating schema
const taskSchema= new mongoose.Schema({
    checkBoxx:{
        type:Boolean,
        default:false,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
    },
    date:{
        type:String,
        default:'No deadline',      
    }
},{timestamps:true});

module.exports =mongoose.model('Task',taskSchema) 