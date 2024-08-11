const mongoose = require("mongoose");
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');

const videoSchema = new mongoose.Schema({
   video:String,
   title: String,
   description: String,
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
   },
   isDeleted:{
    type: Boolean,
    default: false
   }
}, {timestamps: true})
videoSchema.plugin(aggregatePaginate);
module.exports = mongoose.model("Video", videoSchema)