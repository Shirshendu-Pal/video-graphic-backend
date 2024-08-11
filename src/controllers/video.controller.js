const httpStatus = require("http-status");
const { catchAsync } = require("../utils/catchAsync");
const { videoService, tokenService } = require("../services");

const handleRequest = (serviceFunction, reqQuery , reqFile, reqParam) => {
    return catchAsync(async (req, res) => {
      try {
        
        const requestField = reqQuery?req.query:reqFile?{file:req.file,body:req.body}:reqParam?req.params:req.body
        const result = await serviceFunction(requestField);
        res.status(httpStatus.OK).json({success:true,result});
      } catch (error) {
        res.status(httpStatus.BAD_REQUEST).json({success:false,error: error.message});
      }
    });
  };

  module.exports.addVideo = handleRequest(videoService.addVideo,false, true);
  module.exports.getAllUserVideos = handleRequest(videoService.getAllUserVideos);
  module.exports.getAllVideos = handleRequest(videoService.getAllVideos);