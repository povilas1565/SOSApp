const AppointmentsModel = require("../models/Appointments");

const appointmentController = {
    listAppointments: async (req, res) => {
        const appointments = await AppointmentsModel.findAll();
        res.json(appointments);
    },

    findAppointment: async (req, res) => {
        try {
            const { id } = req.params;
            const appointment = await AppointmentsModel.findOne({
                where: {
                    id: id,
                },
            });
            if (!appointment) {
                throw error;
            };
            res.status(200).json(appointment);

        } catch (error) {
            return res.status(404).json("Id not found");
        };
    },

    createAppointment: async (req, res) => {
        try  {
            const { clientId, appointmentDate, note } = req.body;
            console.log(req.auth);
            const volunteer = req.auth;

            const newAppointment = await AppointmentsModel.create({
                volunteerId: volunteer.id,
                clientId,
                appointmentDate,
                note
            });
            res.json(newAppointment);
        } catch (error) {
            res.json(error);
        };
    },
};

module.exports = appointmentController;