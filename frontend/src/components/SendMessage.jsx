import { useContext, useState } from "react";
import { useAuthContext } from "../contexts/user/authContextProvider";
import { useChatContext } from "../contexts/chat/chatContextProvider";
import { SocketContext } from "../contexts/socket/socketContextProvider";


export const SendMessage = () => {

    const [message, setMessage] = useState('');

    const { state } = useAuthContext();
    const { chatState } = useChatContext();
    const { socket } = useContext(SocketContext);

    const handleChange = ({ target }) => {
        setMessage(target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (message.trim().length > 0) {
            console.log(message);
            setMessage('');

            //TODO Emitir un evento de socket para enviar el msj
            //? {
            //?     for: //usuario logueado
            //?     to: //usuario al que se le envia el mensaje
            //?     message: //message
            //? }

            socket.emit('direct-message', {
                for: state.user._id,
                to: chatState.chatActive,
                message,
            });

            //TODO Hacer el dispatch del msj
        }
    }

    return (

        <form
            onSubmit={handleSubmit}
            className="flex space-x-2 mt-4">
            <input
                type="text"
                placeholder="Escribe un mensaje..."
                value={message}
                onChange={handleChange}
                className="flex-grow p-2 rounded-lg border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg max-w-[100px] hover:bg-blue-600">Enviar</button>
        </form>

    )
}
