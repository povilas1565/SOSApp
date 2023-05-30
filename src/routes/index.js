const express = require('express');

// Controllers
const appointmentsController = require("../controllers/appointmentsController.js");
const clientsController = require("../controllers/clientsController");
const volunteersController = require("../controllers/volunteersController");
const authController = require("../controllers/authController");
const chatsController = require("../controllers/chatsController")

// Middlewares and validations
const auth = require('../middlewares/auth');
const requestLog = require('../middlewares/requestLog');
const handleError = require('../middlewares/handleError');
const authLoginValidation = require('../validations/auth/login');
const authRegisterValidation = require('../validations/auth/register')
const volCreateValidation = require('../validations/volunteers/create');
const appointCreateValidation = require('../validations/appointments/create');
const clientCreateValidation = require("../validations/clients/create");
const chatCreateValidation = require("../validations/chats/create")

// Routes
const routes = express.Router();

// Volunteers routes
routes.get("/volunteers", volunteersController.listAllVolunteers);
routes.get("/volunteers/:id", requestLog, volunteersController.listOneVolunteer);
routes.post("/volunteers", volCreateValidation, volunteersController.createVolunteer);
routes.put("/volunteers/:id", volCreateValidation, volunteersController.updateVolunteer);
routes.delete("/volunteers/:id", requestLog, volunteersController.deleteVolunteer);

// Client routes
routes.get("/clients", clientsController.listClients);
routes.get("/clients/:id", clientsController.findOneClient);
routes.post("/clients", clientCreateValidation, clientsController.createClient);
routes.put("/clients/:id", clientCreateValidation, clientsController.updateClient);
routes.delete("/clients/:id", clientsController.deleteClient);

// Appointments routes
routes.get("/appointments", appointmentsController.listAppointments);
routes.get("/appointments/:id", appointmentsController.findAppointment);
routes.post("/appointments", auth, handleError, appointCreateValidation, appointmentsController.createAppointment);

// Chats routes
routes.get("/chat", chatsController.listChats);
routes.get("/chat/:id", chatsController.findChat);
routes.post("/chat", auth, handleError, chatCreateValidation, chatsController.createChat);


// Login
routes.post("/login", authLoginValidation, authController.login);

// Register
routes.post("/register", authRegisterValidation, authController.register);

module.exports = routes;
