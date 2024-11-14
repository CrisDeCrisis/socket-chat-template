import { Link } from 'react-router-dom';
import { useChatContext } from '../contexts/chat/chatContextProvider';
import { useAuthContext } from '../contexts/user/authContextProvider';
import { chatTypes } from '../contexts/chat/chatTypes';

export const SidebarChat = () => {
    // // Datos de ejemplo, estos serán reemplazados por datos del contexto
    // const chats = [
    //     { id: 1, name: 'Marce', profilePic: 'url_de_foto_1', online: true, lastMessage: 'Cris, ¿La tarea se entrega mañana?' },
    //     { id: 2, name: 'Emi', profilePic: 'url_de_foto_2', online: false, lastMessage: 'Nos vemos mañana.' },
    //     // Agrega más usuarios aquí
    // ];
    //! Recupera el state inicial vacio
    const { chatState, dispatch } = useChatContext();
    const { state } = useAuthContext();

    const selectChat = () => {

        dispatch({
            type: chatTypes.SELECT_CHAT,
            payload: chatState.users[0]._id
        });

    };

    return (
        <div className="h-screen bg-gray-800 text-white">
            <Link to='/home' className="p-4 border-b border-gray-700">
                <h2 className="ms-2 text-xl font-semibold">Chats</h2>
            </Link>
            <div onClick={selectChat}>
                {chatState.users
                    .filter(user => user._id !== state.user._id)
                    .map(user => (
                        <div key={user._id} className="flex items-center p-2 mb-2 shadow-lg">
                            <div className="relative">
                                <img src={''} alt={`${user.username} profile`} className="w-10 h-10 rounded-full" />
                                <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full ${user.online ? 'bg-green-500' : 'bg-gray-500'}`}></span>
                            </div>
                            <div className="ml-4">
                                <div className="text-lg font-medium">{user.username}</div>
                                <div className="text-sm text-gray-400">
                                    mensaje random para rellenar
                                    {/* {user.lastMessage.length > 25 ? `${user.lastMessage.slice(0, 25)}...` : user.lastMessage} */}
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};