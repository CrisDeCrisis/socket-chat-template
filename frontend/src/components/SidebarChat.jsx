import { Link } from 'react-router-dom';

export const SidebarChat = () => {
    // Datos de ejemplo, estos serán reemplazados por datos del contexto
    const chats = [
        { id: 1, name: 'Marce', profilePic: 'url_de_foto_1', online: true, lastMessage: 'Cris, ¿La tarea se entrega mañana?' },
        { id: 2, name: 'Emi', profilePic: 'url_de_foto_2', online: false, lastMessage: 'Nos vemos mañana.' },
        // Agrega más usuarios aquí
    ];

    return (
        <div className="h-screen bg-gray-800 text-white">
            <Link to='/home' className="p-4 border-b border-gray-700">
                <h2 className="text-xl font-semibold">Chats</h2>
            </Link>
            <div>
                {chats.map(chat => (
                    <div key={chat.id} className="flex items-center p-2 mb-2 shadow-lg">
                        <div className="relative">
                            <img src={chat.profilePic} alt={`${chat.name} profile`} className="w-10 h-10 rounded-full" />
                            <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${chat.online ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                        </div>
                        <div className="ml-4">
                            <div className="text-lg font-medium">{chat.name}</div>
                            <div className="text-sm text-gray-400">
                                {chat.lastMessage.length > 25 ? `${chat.lastMessage.slice(0, 25)}...` : chat.lastMessage}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};