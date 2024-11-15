
export const ChatBubble = ({ message }) => {

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