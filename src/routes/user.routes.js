const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const { authCheck } = require("../middlewares/auth");
const multer = require('multer');
const { storage } = require("../configuration/storage");
const upload = multer({ storage: storage });


router.get("/getuser", userController.getUser);
router.post("/user-details",validate(userValidation.userDetails), userController.userDetails)
router.post("/edit-user",upload.single('file'),validate(userValidation.editUser), userController.editUser)

router.post("/upload-bulk-questions",upload.single('file'), userController.addBulkQuestion)





module.exports = router;