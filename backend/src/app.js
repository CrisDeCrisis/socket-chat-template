import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import path from 'node:path';
import cookieParser from 'cookie-parser';
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { PORT } from './configs/env.config.js';
import { connectDB } from './database/database.js';
import { authRouter } from './router/auth.routes.js';
import { messageRouter } from './router/message.routes.js';

const app = express();
const server = createServer(app);
const io = new Server(server);

app.use(express.static(path.join(path.resolve(), 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(morgan('dev'));
app.use(cors({
    origin: 'http://localhost:8080',
    credentials: true
}));

app.use('/api', authRouter);
app.use('/api/messages', messageRouter);

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on PORT: ${PORT}`);
});