import { useAuthContext } from '../contexts/user/authContextProvider.jsx'

const Home = () => {
    const { authLogout } = useAuthContext();

    return (
        <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold mb-4">React Context Session</h1>
            <p className="text-lg">Bienvenido a React Context Session.</p>
            <button
                onClick={authLogout}
                className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
            >
                Cerrar Sesión
            </button>
        </div>
    );
};

export default Home;