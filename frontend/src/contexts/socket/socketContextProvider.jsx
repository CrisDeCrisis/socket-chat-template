import { createContext, useEffect } from "react";

import { useAuthContext } from "../user/authContextProvider";
import { useChatContext } from "../chat/chatContextProvider";
import { useSocket } from "../../hooks/useSocket";

import { chatTypes } from "../chat/chatTypes"

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {

    const [socket, online, connectSocket, disconnectSocket] = useSocket('http://localhost:3368');
    const { state } = useAuthContext();
    const { dispatch } = useChatContext();

    useEffect(() => {

        if (state.user) {
            connectSocket();
        };

    }, [state, connectSocket]);

    useEffect(() => {

        if (!state.user) {
            disconnectSocket();
        };

    }, [state, disconnectSocket]);

    useEffect(() => {

        socket?.on('users-list', (users) => {
            dispatch({
                type: chatTypes.LOAD_USERS,
                payload: users
            });
        });

    }, [socket, dispatch]);

    useEffect(() => {

        socket?.on('direct-message', (message) => {
            dispatch({
                type: chatTypes.NEW_MESSAGE,
                payload: message
            });
        });

    }, [socket, dispatch]);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    );
};