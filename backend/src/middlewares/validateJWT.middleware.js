import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../configs/env.config.js';
import { connectDB } from '../dataBase/dataBase.js';
import { userModel } from '../models/user.model.js';

export const validateJWT = async (req, res, next) => {
    try {
        const token = req.cookies.token;
        if (!token) {
            return res.status(403).json({
                message: 'No token provided'
            });
        }
        const decoded = jwt.verify(token, JWT_KEY);
        await connectDB();
        const user = await userModel.findById(decoded.user._id);
        if (!user) {
            return res.status(401).json({
                message: 'Unauthorized'
            });
        }
        req.user = user;
        next();
    } catch (error) {
        return res.status(500).json({
            message: 'An error occurred. Please try again later.'
        });
    }
};