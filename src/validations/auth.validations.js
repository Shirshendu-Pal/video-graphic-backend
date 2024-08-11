const Joi = require("joi");

module.exports.registerUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required(),
        last_name: Joi.string().required(),
        email: Joi.string().email(),
        phone: Joi.string().required(),
        file: Joi.string().optional().allow(null, "")
    })
};

module.exports.loginUser = {
    body: Joi.object().keys({
        first_name: Joi.string().required(),
        password: Joi.string().required()
    })
};