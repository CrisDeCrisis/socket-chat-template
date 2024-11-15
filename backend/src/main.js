import cookie from "cookie";
import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { app } from './app.js';
import { PORT } from './configs/env.config.js';
import { connectDB } from './database/dataBase.js';
import { authJWT } from './helpers/authJWT.helper.js';
import { getUsersOnline, saveMessage, userOffline, userOnline } from "./controllers/socket.controller.js";

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});

io.on('connection', async (socket) => {

    const token = cookie.parse(socket.handshake.headers["cookie"]).token;

    const [valido, user] = authJWT(token);

    if (!valido) {
        console.log('Cliente no autenticado');
        return socket.disconnect();
    }

    await userOnline(user._id);

    // Unir un usuario a una sala con su _id
    socket.join(user._id);

    //TODO: saber que usuario esta activo mediante el _id

    //TODO: emitir todos los usuarios conectados
    io.emit('users-list', await getUsersOnline());

    //TODO: socket join, _id

    //TODO: escuchar cuando el cliente manda un mensaje
    socket.on('direct-message', async (payload) => {

        const message = await saveMessage(payload);
        io.to(payload.to).emit('direct-message', message);
        io.to(payload.from).emit('direct-message', message);

    });
    //direct-message

    //TODO: desconectar
    //marcar en la base de datos que el usuario se desconecto
    socket.on('disconnect', async () => {
        await userOffline(user._id);
        io.emit('users-list', await getUsersOnline());
    });

    //TODO: emitir todos los usuarios conectados

});

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on PORT: ${PORT}`);
});