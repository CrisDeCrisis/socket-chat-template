import { messageModel } from '../models/message.model.js';

export const messagesCtrl = {};

messagesCtrl.getMessages = async (req, res) => {
    try {
        const id = req._id;
        const messageFor = req.params.de;

        const messages = await messageModel.find({
            $or: [
                { de: id, para: messageFor },
                { de: messageFor, para: id },
            ],
        })
            .sort({ createdAt: 'asc' });


        res.status(200).json({
            id,
            messageFor
        });
    } catch (error) {
        res.status(500).json({
            message: 'Error retrieving messages',
            error,
        });
    }
};