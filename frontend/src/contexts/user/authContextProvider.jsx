import { createContext, useContext, useEffect, useReducer } from 'react'
import { loginService, logoutService, sessionService } from '../../api/API.service';
import { authReducer } from './authReduder';
import { authTypes } from './authTypes';
import toast from 'react-hot-toast';

const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
    const InitialState = {
        user: undefined,
    };

    const [state, dispatch] = useReducer(authReducer, InitialState);

    const authLogin = async (user) => {
        try {
            const response = await loginService(user);
            if (response) {
                dispatch({
                    type: authTypes.LOGIN,
                    payload: response
                });
                toast.success(`Bienvenido ${response.user.username}!`);
            }
        } catch (error) {
            console.error({ 'Error al logear usuario': error });
        }
    };

    const authSession = async () => {
        try {
            const response = await sessionService();
            if (response.user) {
                dispatch({
                    type: authTypes.SESSION,
                    payload: response
                });
            } else {
                dispatch({
                    type: authTypes.LOGOUT,
                });
            }
        } catch (error) {
            console.error({ 'Error al obtener sesion': error });
            dispatch({
                type: authTypes.LOGOUT,
            });
        }
    };

    const authLogout = async () => {
        try {
            const response = await logoutService();
            if (response.ok) {
                toast.success(`Hasta pronto! ${state.user.username}`);
                dispatch({
                    type: authTypes.LOGOUT,
                });
            }
        } catch (error) {
            console.error({ 'Error al deslogear usuario': error });
        }
    };

    useEffect(() => {
        authSession();
    }, []);

    return (
        <authContext.Provider value={{ state, authLogin, authSession, authLogout }}>
            {children}
        </authContext.Provider>
    )
};

export const useAuthContext = () => useContext(authContext);