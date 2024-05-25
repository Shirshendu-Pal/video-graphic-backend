const Joi = require("joi");

module.exports.userDetails = {
    body: Joi.object().keys({
        userId: Joi.string().required(),   
    }),
};
module.exports.editUser = {
    body: Joi.object().keys({
        userId: Joi.string().required(), 
        name: Joi.string().optional().allow(null, ""),
        name: Joi.string().optional().allow(null, ""),
        email: Joi.string().email().allow(null, ""),
        phone: Joi.string().optional().allow(null, ""),
    }),
};