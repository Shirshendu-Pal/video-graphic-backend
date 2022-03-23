const { userService } = require("../services");
const { catchAsync } = require("../utils/catchAsync");
const httpStatus = require("http-status");

const ApiError = require("../utils/ApiError");

const { User, Society } = require("../models");


module.exports.getUser = catchAsync(async (req, res) => {


    req.user = await User.populate(req.user, "societies");
    console.log(req.user);
    req.user.societies[0] = await userService.populateSociety(req.user.societies[0]);

    res.status(httpStatus.OK).json({ success: true, user: req.user });
});


module.exports.addSociety = catchAsync(async (req, res) => {
    const society = await userService.addSociety(req.body);
    res.status(httpStatus.OK).json({ success: true, society });
});

module.exports.editSociety = catchAsync(async (req, res) => {
    const society = await userService.editSociety(req.body);
    res.status(httpStatus.OK).json({ success: true, society });
});

module.exports.deleteSociety = catchAsync(async (req, res) => {
    await userService.deleteSociety(req.body);
    res.status(httpStatus.OK).json({ success: true });
});