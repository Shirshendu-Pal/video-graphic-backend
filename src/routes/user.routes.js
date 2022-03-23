const express = require("express");
const router = express.Router();
const validate = require("../middlewares/validate");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const { authCheck } = require("../middlewares/auth");


router.post("/add/society", authCheck, validate(userValidation.addSociety), userController.addSociety);
router.put("/edit/society", authCheck, validate(userValidation.editSociety), userController.editSociety);
router.delete("/delete/society", authCheck, validate(userValidation.deleteSociety), userController.deleteSociety);
router.get("/getuser", authCheck, userController.getUser);




module.exports = router;