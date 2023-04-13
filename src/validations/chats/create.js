const {validate, Joi} = require("express-validation");
module.exports = validate({
    body: Joi.object({
        volunteerId: Joi.number().required(),
        clientId: Joi.number().required(),
        chatDate: Joi.date().required(),
        message: Joi.string().required(),
    })
});