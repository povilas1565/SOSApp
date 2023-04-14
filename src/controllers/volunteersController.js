const VolunteersModel = require("../models/Volunteers");
const bcrypt = require("bcryptjs");

const volunteersController = {
    listAllVolunteers: async (req, res) => {
        const volunteerList = await VolunteersModel.findAll();
        res.json(volunteerList);
    },

    listOneVolunteer: async (req, res) => {
        try {
            const { id } = req.params;
            const volunteer = await VolunteersModel.findOne({
                where: {
                    idVolunteers: id,
                },
            });

            if (!volunteer) {
                error;
            }
            res.status(200).json(volunteer);
        } catch (error) {
            return res.status(404).json("Id not found");
        }
    },

    createVolunteer: async (req, res) => {
        const { name, email, password, introduction } = req.body;

        const newHashedPassword = bcrypt.hashSync(password, 10);

        const createdVolunteer = await VolunteersModel.create({
            name,
            email,
            password: newHashedPassword,
            introduction,
        });
        res.status(201).json(createdVolunteer);
    },

    updateVolunteer: async (req, res) => {
        const { name, email, password, introduction } = req.body;
        const { id } = req.params;

        try {
            const volunteer = await VolunteersModel.findOne({
                where: {
                    idVolunteers: id,
                },
            });

            if (!volunteer) {
                error;
            }

            const newHashedPassword = bcrypt.hashSync(password, 10);

            await Volunteers.update(
                {
                    name,
                    email,
                    password: newHashedPassword,
                    introduction,
                },
                {
                    where: {
                        idVolunteers: id,
                    },
                }
            );
            res.status(201).json(volunteer);
        } catch (error) {
            return res.status(404).json("Id not found");
        }
    },

    deleteVolunteer: async (req, res) => {
        try {
            const { id } = req.params;

            const volunteer = await VolunteersModel.findOne({
                where: {
                    idVolunteers: id,
                },
            });

            if (!volunteer) {
                error;
            } else {
                VolunteersModel.destroy({
                    where: {
                        idVolunteers: id,
                    },
                });
                res.sendStatus(204);
            }
        } catch (error) {
            return res.status(404).json("Id not found");
        }
    },
};

module.exports = volunteersController;