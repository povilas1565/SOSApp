const VolunteersModel = require('../models/Volunteers');
const jwt = require('jsonwebtoken');
const config = require('../configs/config');
const bcrypt = require('bcryptjs');

const AuthController = {

    async register(req, res) {
        const {name, email, password, introduction} = req.body;

        const newHashedPassword = bcrypt.hashSync(password, 10);
        const volunteer = await VolunteersModel.create({
            name,
            email,
            password: newHashedPassword,
            introduction,
        });
        res.status(201).json(volunteer);
    },

    async login(req, res) {
        const { email , password } = req.body;

        const volunteer = await VolunteersModel.findOne({where: {email: email}});

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
