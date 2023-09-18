const mongoose=require("mongoose");

//signup schema
const clientSchema=new mongoose.Schema({
    
    name: {
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phnumber:{
        type:Number,
        required:true,
        unique:true
    },
    religion: {
        type:String,
        required:true
    },
    age: {
        type:Number,
        required:true
    },
    image: {
        type: String, // Assuming you will store the image path or URL as a string
        required: true
    },
    gender: {
        type: String,
        enum: ['Male', 'Female', 'Prefer not to say'],
        required: true
    }


})


//creating collection
const client= new mongoose.model("client", clientSchema);

module.exports=client;