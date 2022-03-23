const httpStatus = require("http-status");
const { User, Society } = require("../models");
const ApiError = require("../utils/ApiError");


const populateSociety = async (society) => {
    return new Promise(async (resolve) => {
        society = await Society.populate(society, "societies");
        resolve(society);
    })
}



const addSociety = async (reqBody) => {

    const user = await User.findById(reqBody.userId);
    if (!user) {
        throw new ApiError(httpStatus.NOT_FOUND, "User not found");
    }

    const society = await Society.create({
        societyName: reqBody.societyName,
        societyCountry: reqBody.societyCountry,
        societyState: reqBody.societyState,
        societyCity: reqBody.societyCity,
        socityGates: reqBody.socityGates
    });


    user.society.push(society);


    await user.save();


    return society;
};

const editSociety = async (reqBody) => {

    // console.log(reqBody.remoteDeviceId);
    let society = await Society.findById(reqBody.societyId);
    if (!society) throw new ApiError(httpStatus.NOT_FOUND, "No Society found.");


    Object.assign(society, reqBody);
    await society.save();
    //remoteDevice = await populateHouse(remoteDevice);

    return society;
};

const deleteSociety = async (reqBody) => {

    let society = await Society.findById(reqBody.societyId);
    if (!society) throw new ApiError(httpStatus.NOT_FOUND, "No society found.");

    await society.deleteOne({ _id: reqBody.societyId })


}

module.exports = {
    addSociety,
    editSociety,
    deleteSociety,
    populateSociety

}