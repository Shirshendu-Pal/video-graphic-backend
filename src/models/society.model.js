const mongoose = require("mongoose");

const societySchema = new mongoose.Schema({

    societyName: {
        type: String,
        required: true
    },
    societyCountry: {
        type: String,
        required: true
    },
    societyCity: {
        type: String,
        required: true
    },
    societyState: {
        type: String,
        required: true
    },
    socityGates: {
        type: String
    },

})
module.exports = mongoose.model("Society", societySchema)