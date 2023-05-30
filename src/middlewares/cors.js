const cors = require('cors')

const corsMiddleware = cors({
  origin: ['*', /http(s{0,1}):\/\/localhost:\d{4}$/],
  methods: ['GET','POST','DELETE','UPDATE','PUT','PATCH'],
  preflightContinue: false,
  optionsSuccessStatus: 204,
});

module.exports = corsMiddleware
