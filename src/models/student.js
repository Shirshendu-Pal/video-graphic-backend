const mongoose = require("mongoose");
const validator = require("validator");



const studentSchema = new mongoose.Schema({
  
    
    email : {
        type:String,
        required:true,
        unique:[true,"Email is already exist"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },

    name:{
        type: String,
        required: true,
        unique: false
    },
    
    phone : {
        type:String,
        required:true,
        unique:true
    },
    address : {
        type:String,
        required:true,
        
    },
    
    
   

}) 


//creating a new collection
const Student = new mongoose.model('Student',studentSchema);
module.exports = Student; //export this collection