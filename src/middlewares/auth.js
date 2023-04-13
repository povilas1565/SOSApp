const { expressjwt: jwt } = require("express-jwt");
const config = require("../configs/config");


module.exports = jwt({
    secret: config.key,
    algorithms: ["HS256"],
});