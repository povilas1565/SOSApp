const Express = require("express");
const routes = require("../routes");
const dotenv = require('dotenv');
dotenv.config();
const handleError = require("../middlewares/handleError")
const swaggerUi = require('swagger-ui-express')
const db = require("../database");
const config = require('../configs/config');
const cors = require('cors')
const swaggerDocument = require('../api-docs/swagger.json');

class App {
  instance;
  defaultPort = config.app.port;

  constructor() {
    this.instance = Express();
  }

  setup(options) {
    db.hasConnection();
    const selectedPort = options.port ? options.port : this.defaultPort;
    this.instance.use(Express.json());
    this.instance.use(cors());
    this.instance.use(routes);
    this.instance.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
    this.instance.use(handleError);

    if (options.isTest) return;

    this.instance.listen(selectedPort, () =>
      console.info(`Server listening on Port: ${selectedPort}`)
    );
  }
}

module.exports = App;