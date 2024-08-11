const httpStatus = require("http-status");
const { User, Token, Video } = require("../models");
const ApiError = require("../utils/ApiError");
const { videoSizeError } = require("./reusable.service");
// const { mongoose } = require("../configuration/config");
const mongoose = require("mongoose");

const addVideo = async (reqFile) => {
  let uploadString = "";
  const body = reqFile.body;
  if (reqFile.file) {
    await videoSizeError(reqFile.file);
    uploadString = reqFile.file.filename;
  }

  const video = await Video.create({
    ...body,
    video: uploadString,
  });

  return video;
};
const getAllUserVideos = async ({ filters , page , limit }) => {
  for (let [key, value] of Object.entries(filters)) {
    if (value === "") delete filters[key];
  }
  filters["isDeleted"] = false;
  const aggregate = User.aggregate([
    { $match: filters },

    {
      $lookup: {
        from: "videos",
        let: { id: "$_id" },
        pipeline: [
          {
            $match: {
              $expr: {
                $and: [
                  { $eq: ["$userId", "$$id"] },
                  { $eq: ["$isDeleted", false] },
                ],
              },
            },
          },
          { $limit: 5 },
          { $project: { title: 1 , video: 1, description : 1 } },
        ],
        as: "videos",
      },
    },
  ]);

  const options = {
    page,
    limit 
  }

  const users = await User.aggregatePaginate(aggregate, options);


  return users;
};

const getAllVideos = async ({ userId , page , limit }) => {
    let filters = {}
    filters["userId"] = mongoose.Types.ObjectId(userId)
    filters["isDeleted"] = false
    const aggregate = Video.aggregate([
        { $match: filters },
        {
          $lookup: {
            from: "users",
            let: { id: "$userId" },
            pipeline: [
              {
                $match: {
                  $expr: {
                    $and: [
                      { $eq: ["$_id", "$$id"] },
                      { $eq: ["$isDeleted", false] },
                    ],
                  },
                },
              },
              { $project: { first_name: 1 , last_name: 1, profilePic : 1 } },
            ],
            as: "user",
          },
        },
        {$unwind : '$user'}
      ]);
    
      const options = {
        page,
        limit 
      }
    
      const videos = await Video.aggregatePaginate(aggregate, options);

      return videos
};

module.exports = {
  addVideo,
  getAllUserVideos,
  getAllVideos,
};
