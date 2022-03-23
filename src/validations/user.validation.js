const Joi = require("joi");

module.exports.addSociety = {
    body: Joi.object().keys({
        userId: Joi.string(),
        societyName: Joi.string().required(),
        societyCountry: Joi.string().required(),
        societyCity: Joi.string().required(),
        societyState: Joi.string().required(),
        socityGates: Joi.string()
            .optional()



    }),
};

module.exports.editSociety = {
    body: Joi.object().keys({
        societyId: Joi.string().required(),
        societyName: Joi.string(),
        societyCountry: Joi.string(),
        societyCity: Joi.string(),
        societyState: Joi.string(),
        socityGates: Joi.string()
        
    }),
};

module.exports.deleteSociety = {
    body: Joi.object().keys({
        societyId: Joi.string().required(),
        
    }),
};