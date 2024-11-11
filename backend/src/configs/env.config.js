import dotenv from 'dotenv';

dotenv.config();

export const PORT = process.env.PORT;
export const URI = process.env.MONGODB_URI;
export const JWT_KEY = process.env.JWT_SECRET_KEY;