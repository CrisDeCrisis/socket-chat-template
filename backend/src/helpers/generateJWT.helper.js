import jwt from 'jsonwebtoken';
import { JWT_KEY } from '../configs/env.config.js';

export const generateJWT = (user) => {
    return new Promise((resolve, reject) => {
        try {
            const payload = { user };
            jwt.sign(payload, JWT_KEY, {
                expiresIn: '1h'
            }, (err, token) => {
                if (err) {
                    console.log(err);
                    reject('No se pudo generar el token');
                } else {
                    resolve(token);
                }
            });
        } catch (error) {
            console.log(error);
            reject('Error al generar el token');
        }
    });
};