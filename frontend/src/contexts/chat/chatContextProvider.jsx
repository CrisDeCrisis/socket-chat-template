import { createContext, useContext, useEffect, useReducer } from 'react'
import { chatReducer } from './chatReducer';
import { chatTypes } from './chatTypes';

const chatContext = createContext();

export const ChatContextProvider = ({ children }) => {

    const initialState = {
        _id: '', //ID del usuario conectado
        chatActivo: null, //ID del chat activo
        users: [], //Todos los usuarios de la base de datos
        messages: [], //Mensajes del chat
    };

    const [chatState, dispatch] = useReducer(chatReducer, initialState);


    return (
        <chatContext.Provider value={{ chatState, dispatch }}>
            {children}
        </chatContext.Provider>
    );
};

export const useChatContext = () => useContext(chatContext);