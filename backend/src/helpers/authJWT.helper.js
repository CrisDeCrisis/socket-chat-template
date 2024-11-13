import jwt from 'jsonwebtoken';
import { JWT_KEY } from "../configs/env.config.js";

//!Revisar si se puede reemplazar por el middleware vadalidateJWT
export const authJWT = (token = '') => {
    try {
        const { _id } = jwt.verify(token, JWT_KEY);

        return [true, _id];
    } catch (error) {
        return [false, null];
    };
};