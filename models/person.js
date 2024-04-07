const mongoose =require('mongoose')
const { type } = require('os')

const personSchema=new mongoose.Schema({
    name: {
        type: String,
        require:true
    },
    age:{
        type:Number
    },
    work:{
        type:String,
        enum:['chef','weiter','manager'],
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String
    },
    salary:{
        type:Number,
        required:true
    }
});
const Person=mongoose.model('Person',personSchema);
module.exports=Person;