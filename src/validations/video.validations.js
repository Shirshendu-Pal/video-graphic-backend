const Joi = require('joi');

module.exports.addVideo = {
    body: Joi.object().keys({
        title:Joi.string().required(),
        description:Joi.string().optional().allow(null, ""),
        userId:Joi.string().required(),
    })
}
module.exports.getAllUserVideos = {
    body: Joi.object().keys({
        filters: Joi.object().required()
    })
}
module.exports.getAllVideos = {
    body: Joi.object().keys({
        userId: Joi.string().required()
    })
}