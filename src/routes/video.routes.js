const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const { videoValidation } = require("../validations");
const { videoController } = require("../controllers");
const multer = require('multer');
const { storage } = require("../configuration/storage");
const upload = multer({ storage: storage });

router.post("/add-video",upload.single('file'), validate(videoValidation.addVideo),  videoController.addVideo);
router.post("/get-all-user-videos", validate(videoValidation.getAllUserVideos),  videoController.getAllUserVideos);
router.post("/get-all-videos", validate(videoValidation.getAllVideos),  videoController.getAllVideos)


module.exports = router;