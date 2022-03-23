const { User,Token } = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const {generateAuthToken} = require("./token.service");
const bcrypt = require("bcryptjs");

const addCustomer = async (reqBody) => {

    const user = await User.create({ name: reqBody.name,
        email: reqBody.email,
        phone: reqBody.phone,
        password: reqBody.password });

    await user.save();

    return user;
    
};

const login = async (reqBody) => {
    try{
    const findUser = await User.findOne({email: reqBody.email})
    const isMatch = await bcrypt.compare(reqBody.password, findUser.password)
    
    if(isMatch){
     
      return findUser;
}else{
    throw new ApiError(httpStatus.NOT_FOUND, "Incorrect password.");
}
}catch(error){
    throw new ApiError(httpStatus.NOT_FOUND, "user does not exist");
}
}





module.exports = {
   
    addCustomer,
    login

};