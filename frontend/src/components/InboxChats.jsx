import { useAuthContext } from "../contexts/user/authContextProvider";
import { useChatContext } from "../contexts/chat/chatContextProvider";
import { ChatBubble } from "./ChatBubble";
import { SendMessage } from "./SendMessage";

const messages = [
    // { id: 1, user: 'loggedUser', text: 'Qué onda Emi, ¿Terminaste lo de ingenieria?', profilePic: 'url_de_foto_usuario_logueado' },
    // { id: 2, user: 'otherUser', text: 'Si, Hay que exponer nomás mañana. Ya esta todo!', profilePic: 'url_de_foto_otro_usuario' },
    // { id: 3, user: 'loggedUser', text: 'Dale dale, ahí hablo con Marce entonces que justo me escribio', profilePic: 'url_de_foto_usuario_logueado' },
    // { id: 4, user: 'otherUser', text: '¡De una!', profilePic: 'url_de_foto_otro_usuario' },
    // { id: 5, user: 'otherUser', text: 'Nos vemos mañana', profilePic: 'url_de_foto_otro_usuario' },
    // Agrega más mensajes aquí
];

export const InboxChats = () => {

    const { chatState } = useChatContext();

    return (

        <div className="h-screen bg-gray-900 text-white p-4 flex flex-col">
            <ul className="flex-grow overflow-y-auto">
                {chatState.messages
                    .map((message) => (
                        <ChatBubble
                            key={message._id}
                            message={message}
                        />
                    ))}
            </ul>
            <SendMessage />
        </div>

    );

};