const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const dotenv = require('dotenv');

const path = require('path');
dotenv.config({ path: path.join(__dirname, '../.env') });


const userSchema = new mongoose.Schema({
  
    
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
    password : {
        type:String,
        required:true,
        
    },
    tokens: [{
        token:{
            type:String,
            required:true,
        }
    }]


   
    
    
   

}) 

userSchema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({_id: this._id}, process.env.SECRET_KEY)
        this.tokens = this.tokens.concat({token:token})
        await this.save();
        return token;
    } catch (error) {
       console.log(error); 
    }
}


//creating a new collection
module.exports = mongoose.model("User", userSchema);