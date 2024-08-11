const Joi = require("joi");

module.exports.userDetails = {
    body: Joi.object().keys({
        userId: Joi.string().required(),   
    }),
};
module.exports.editUser = {
    body: Joi.object().keys({
        userId: Joi.string().required(), 
        bio: Joi.string().required(),
        profilePicIsDeleted: Joi.boolean().required()
    }),
};