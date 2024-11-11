import { registerService } from '../api/API.service';
import { useNavigate, Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';

const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = async (user) => {
        await registerService(user);
        navigate('/login');
    };

    return (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-white mb-6 text-center">Registro</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2" htmlFor="username">Nombre</label>
                        <input
                            type="text"
                            id="username"
                            {...register('username', { required: 'El nombre es obligatorio' })}
                            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.username && <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2" htmlFor="email">Correo electrónico</label>
                        <input
                            type="email"
                            id="email"
                            {...register('email', { required: 'El correo electrónico es obligatorio' })}
                            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-400 mb-2" htmlFor="password">Contraseña</label>
                        <input
                            type="password"
                            id="password"
                            {...register('password', { required: 'La contraseña es obligatoria' })}
                            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                    </div>
                    <button
                        type="submit"
                        className="w-full p-3 mt-4 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        Registrarse
                    </button>
                </form>
                <p className="text-gray-400 text-center mt-4">
                    ¿Ya tienes una cuenta? <Link to="/login" className="text-blue-500 hover:underline">Inicia sesión</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;