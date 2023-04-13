module.exports = (req, res, next)=>{
    console.log(`IP: ${req.ip} acessed route: ${req.originalUrl}`);
    next();
};