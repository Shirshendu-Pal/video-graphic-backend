const { User, Token } = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");
const jwt = require("jsonwebtoken");
const { generateAuthToken } = require("./token.service");
const bcrypt = require("bcryptjs");
const { generatePassword, getUser } = require("./reusable.service");
const { sendEmail } = require("./email.service");
// const  generateAuthToken = require("./token.service");
// const { uploadSingle } = require("./upload.service");

const registerUser = async (reqFile) => {
  // console.log("called")
  try {

    console.log(reqFile.file , reqFile.body)
    let uploadString = "";
    const body = reqFile.body;
    const existingUser = await User.findOne({
      $or: [{ email: body.email }, { phone: body.phone }],
    });

    if (existingUser)
      throw new ApiError(httpStatus.UNAUTHORIZED, "user already registered");

    if (reqFile.file) uploadString = reqFile.file.filename;

    const sameNameUsers = await User.find({
      first_name: body.first_name,
      isDeleted: false,
    });
    const passwords = sameNameUsers.map((suser) => suser.password);
    body["password"] = await generatePassword(
      body.first_name,
      body.last_name,
      body.phone,
      passwords
    );

   

    const user = await User.create({
      ...body,
      profilePic: uploadString,
    });
    await sendEmail(user.email, "Registration Successfull", "your password is "+body.password)

    return user;
  } catch (error) {
    throw new ApiError(httpStatus.BAD_REQUEST, error.message);
  }
};

const loginUser = async (reqBody) => {
  try {
    const users = await User.find({
      first_name: reqBody.first_name,
      isDeleted: false,
    });
    let user = await getUser(users, reqBody.password);
    if (user) {
      const tokens = await generateAuthToken(user);
      return { user, tokens };
    } else {
      throw new ApiError(httpStatus.NOT_FOUND, "Incorrect password.");
    }
  } catch (error) {
    throw new ApiError(httpStatus.NOT_FOUND, "user does not exist");
  }
};

module.exports = {
  registerUser,
  loginUser,
};
