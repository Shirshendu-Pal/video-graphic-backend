const { User } = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");

const addCustomer = async (reqBody) => {

    const user = await User.create({ name: reqBody.name,
        email: reqBody.email,
        phone: reqBody.phone,
        password: reqBody.password });

    await user.save();

    return user;
    
};

const login = async (reqBody) => {
    const findUser = await User.findOne({email: reqBody.email})
    if(reqBody.email == findUser.email && reqBody.password == findUser.password){
      const token = await findUser.generateAuthToken();
      console.log(token);
      return findUser;
}
}





module.exports = {
   
    addCustomer,
    login

};