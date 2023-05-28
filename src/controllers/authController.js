const VolunteersModel = require('../models/Volunteers');
const jwt = require('jsonwebtoken');
const config = require('../configs/config');
const bcrypt = require('bcryptjs');

const AuthController = {

    async login(req, res) {
        const { email , password } = req.body;

        const volunteer = await VolunteersModel.findOne({
            where: {
                email_vol: email,
            },
        });

        if (!volunteer || !bcrypt.compareSync(password, volunteer.password)) {
            return res.status(401).json("Invalid credentials, verify and try again");
        }

        const id = volunteer.id;

        const token = jwt.sign({
                id: id,
                email: volunteer.email,
                name: volunteer.name
            },
                config.key
        );

        return res.json(token);
    },
};

module.exports = AuthController;
