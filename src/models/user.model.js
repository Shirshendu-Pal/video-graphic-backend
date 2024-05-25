const mongoose = require("mongoose");
const validator = require("validator");
const jwt = require("jsonwebtoken");

const dotenv = require('dotenv');

const path = require('path');
const bcrypt = require("bcryptjs");
dotenv.config({ path: path.join(__dirname, '../.env') });


const userSchema = new mongoose.Schema({


    email: {
        type: String,
        required: true,
        unique: [true, "Email is already exist"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid Email")
            }
        }
    },

    name: {
        type: String,
        required: true,
        unique: false
    },

    phone: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,

    },
    profilePic: String

})

userSchema.pre("save", async function (next) {
    if (this.isModified("password")) {
        this.password = await bcrypt.hash(this.password, 10)
        console.log(this.password);
    }
    next()
})






module.exports = mongoose.model("User", userSchema);