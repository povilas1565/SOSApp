const {validate, Joi} = require("express-validation");
module.exports = validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        pass: Joi.string().min(6).required()
    })
});
