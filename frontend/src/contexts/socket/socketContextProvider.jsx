import { createContext, useEffect } from "react";
import { useSocket } from "../../hooks/useSocket";
import { useAuthContext } from "../user/authContextProvider";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {

    const [socket, online, connectSocket, disconnectSocket] = useSocket('http://localhost:3368');
    const { state } = useAuthContext();

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
            console.log(users);
        });

    }, [socket]);

    return (
        <SocketContext.Provider value={{ socket, online }}>
            {children}
        </SocketContext.Provider>
    );
};