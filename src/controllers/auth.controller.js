const httpStatus = require("http-status");
const { catchAsync } = require("../utils/catchAsync");
const { authService } = require("../services");

module.exports.register = catchAsync(async (req, res) => {
    const createUser = await authService.addCustomer(req.body);
    res.status(httpStatus.OK).json({ success: true , createUser});
});

module.exports.login = catchAsync(async (req, res) => {
    const findUser = await authService.login(req.body);
    res.status(httpStatus.OK).json({ success: true, findUser });
});