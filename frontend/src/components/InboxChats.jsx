import React from 'react';

const messages = [
    { id: 1, user: 'loggedUser', text: 'Qué onda Emi, ¿Terminaste lo de ingenieria?', profilePic: 'url_de_foto_usuario_logueado' },
    { id: 2, user: 'otherUser', text: 'Si, Hay que exponer nomás mañana. Ya esta todo!', profilePic: 'url_de_foto_otro_usuario' },
    { id: 3, user: 'loggedUser', text: 'Dale dale, ahí hablo con Marce entonces que justo me escribio', profilePic: 'url_de_foto_usuario_logueado' },
    { id: 4, user: 'otherUser', text: '¡De una!', profilePic: 'url_de_foto_otro_usuario' },
    { id: 5, user: 'otherUser', text: 'Nos vemos mañana', profilePic: 'url_de_foto_otro_usuario' },
    // Agrega más mensajes aquí
];

const ChatBubble = ({ message }) => {
    const isLoggedUser = message.user === 'loggedUser';
    return (
        <li className={`flex items-end mb-4 ${isLoggedUser ? 'justify-end' : 'justify-start'}`}>
            {!isLoggedUser && (
                <img src={message.profilePic} alt="profile" className="w-8 h-8 rounded-full mr-2" />
            )}
            <div className={`max-w-xs px-4 py-2 rounded-lg ${isLoggedUser ? 'bg-blue-500 text-white' : 'bg-gray-300 text-black'}`}>
                {message.text}
            </div>
            {isLoggedUser && (
                <img src={message.profilePic} alt="profile" className="w-8 h-8 rounded-full ml-2" />
            )}
        </li>
    );
};

export const InboxChats = () => {
    return (
        <div className="h-screen bg-gray-900 text-white p-4 flex flex-col">
            <ul className="flex-grow overflow-y-auto">
                {messages.map(message => (
                    <ChatBubble key={message.id} message={message} />
                ))}
            </ul>
            <form className="flex space-x-2 mt-4">
                <input type="text" className="flex-grow p-2 rounded-lg border-2 border-gray-600 bg-gray-800 text-white focus:outline-none focus:border-blue-500" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg max-w-[100px]">Enviar</button>
            </form>
        </div>
    );
};