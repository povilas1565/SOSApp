const { validate, Joi } = require("express-validation");


module.exports = validate({
    body: Joi.object({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        pass: Joi.string().min(6).required(),
        introduction: Joi.string().required()
    })
});