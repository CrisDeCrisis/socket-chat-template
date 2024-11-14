import { userModel } from '../models/user.model.js';

export const userOnline = async (_id) => {
    try {
        const user = await userModel.findById(_id);
        user.online = true;
        await user.save();

        return user;
    } catch (error) {
        console.log(error);
    };
};

export const userOffline = async (_id) => {
    try {
        const user = await userModel.findById(_id);
        user.online = false;
        await user.save();

        return user;
    } catch (error) {
        console.log(error);
    };
};