const {validate, Joi} = require("express-validation");
module.exports = validate({
    body: Joi.object({
        email: Joi.string().email().required(),
        name: Joi.string().required(),
        password: Joi.string().min(6).required(),
        introduction: Joi.string().required()
    })
});
