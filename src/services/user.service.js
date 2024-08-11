const httpStatus = require("http-status");
const { User, Token} = require("../models");
const ApiError = require("../utils/ApiError");
const csv = require("csv-parser");
const fs = require("fs");


const getUser = async ({token}) =>{

    const tokenDoc = await Token.findOne({token})
    const user = await User.findById(tokenDoc.user)

    return user;
}
const userDetails = async ({userId}) =>{
    const user = await User.findById(userId)

    return user;
}

const editUser = async (reqFile) =>{

    const body = reqFile.body;
    let user = await User.findById(body.userId)
    let uploadString = body.profilePicIsDeleted? "" : user.profilePic
    if(reqFile.file){
        uploadString = reqFile.file.filename
    }
    user.profilePic = uploadString
    user.bio = body.bio && body.bio !== "" ? body.bio : user.bio
    await user.save()

    return user;
}



module.exports = {
    getUser,
    userDetails,
    editUser,

}