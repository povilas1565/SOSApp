const { validate, Joi } = require("express-validation");

module.exports = validate({
    body: Joi.object({
        nameClient: Joi.string().required(),
        emailClient: Joi.string().required(),
        age: Joi.date().required(),
    })
});