import { createServer } from 'node:http';
import { Server } from 'socket.io';
import { app } from './app.js';
import { PORT } from './configs/env.config.js';
import { connectDB } from './database/dataBase.js';
import { authJWT } from './helpers/authJWT.helper.js';

const server = createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    }
});

io.on('connection', (socket) => {

    const [valido, _id] = authJWT(socket.handshake.query['x-token']);

    if (!valido) {
        console.log('Cliente no autenticado', _id); //! Revisar, se comporta de forma extraña.
        return socket.disconnect();
    }

    console.log('Cliente conectado');
    // TODO: validar el JWT
    // Si el token no es válido, desconectar

    //TODO: saber que usuario esta activo mediante el _id

    //TODO: emitir todos los usuarios conectados

    //TODO: socket join, _id

    //TODO: escuchar cuando el cliente manda un mensaje
    //mensaje-personal

    //TODO: desconectar
    //marcar en la base de datos que el usuario se desconecto
    socket.on('disconnect', () => {
        console.log('Cliente desconectado');
    });

    //TODO: emitir todos los usuarios conectados

});

server.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on PORT: ${PORT}`);
});