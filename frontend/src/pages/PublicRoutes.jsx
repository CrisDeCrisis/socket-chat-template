import { useAuthContext } from "../contexts/user/authContextProvider";
import { Navigate, Outlet } from "react-router-dom";
import { LoadingPage } from "../views";

export const PublicRoutes = () => {

    const { state } = useAuthContext();

    if (state.user === undefined) {
        return <LoadingPage />;
    };

    return !state.user ? <Outlet /> : <Navigate to={"/"} />;
};