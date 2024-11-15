import { messageModel } from '../models/message.model.js';

export const messagesCtrl = {};

messagesCtrl.getMessages = async (req, res) => {
    try {
        const id = req._id;
        const messageFor = req.params.for;

        const messages = await messageModel.find({
            $or: [
                { for: id, to: messageFor },
                { for: messageFor, to: id },
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