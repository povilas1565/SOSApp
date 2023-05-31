const ClientsModel = require("../models/Clients");

const clientsController = {
    async listClients(req, res) {
        try {
            const clients = await ClientsModel.findAll();

            return res.status(200).json(clients);
        } catch (error) {
            return res.status(500).json("Error listing clients.");
        }
    },

    async findOneClient(req, res) {
        try {
            const { id } = req.params;
            const uniqueClient = await ClientsModel.findOne({
                where: {
                    id: id,
                },
            });

            if (!uniqueClient) {
                error;
            }

            return res.status(200).json(uniqueClient);
        } catch (error) {
            return res.status(404).json("Id not found");
        }
    },

    async createClient(req, res) {
        try {
            const { nameClient, emailClient, age } = req.body;

            if (!nameClient || !emailClient || !age) {
                return res
                    .status(400)
                    .json("Incomplete information. Validate and try again");
            }

            const newClient = await ClientsModel.create({
                nameClient,
                emailClient,
                age,
            });

            return res.status(201).json(newClient);
        } catch (error) {
            return res.status(400).json("Request error");
        }
    },

    async updateClient(req, res) {
        try {
            const { nameClient, emailClient, age } = req.body;
            const { id } = req.params;

            const uniqueClient = await ClientsModel.findOne({
                where: {
                    id: id,
                },
            });

            if (!uniqueClient) {
                error;
            } else {
                await ClientsModel.update(
                    {
                        nameClient,
                        emailClient,
                        age,
                    },
                    {
                        where: {
                            id: id,
                        },
                    }
                );

                res.status(201).json(uniqueClient);
            }
        } catch (error) {
            return res.status(404).json("Id not found");
        }
    },

    async deleteClient(req, res) {
        try {
            const { id } = req.params;

            const uniqueClient = await ClientsModel.findOne({
                where: {
                    id: id,
                },
            });

            if (!uniqueClient) {
                error;
            } else {
                ClientsModel.destroy({
                    where: {
                        id: id,
                    },
                });

                res.sendStatus(204);
            }
        } catch (error) {
            return res.status(404).json("Id not found");
        }
    },
};

module.exports = clientsController;