const ChatsModel = require("../models/Chats");

const chatController = {
    listChats: async (req, res) => {
        const chats = await ChatsModel.findAll();
        res.json(chats);
    },

    findChat: async (req, res) => {
        try {
            const { id } = req.params;
            const chat = await ChatsModel.findOne({
                where: {
                    id: id,
                },
            });
            if (!chat) {
                error;
            }
            res.status(200).json(chat);

        } catch (error) {
            return res.status(404).json("Id not found");
        }
    },

    createChat: async (req, res) => {
        try  {
            const {chatDate, messages} = req.body;
            console.log(req.auth);
            const client = req.auth;
            const volunteer = req.auth;

            const newChat = await ChatsModel.create({
                volunteerId: volunteer.id,
                clientId: client.id,
                chatDate,
                messages
            });
            res.json(newChat);
        } catch (error) {
            res.json(error);
        }
    },
};

module.exports = chatController;
