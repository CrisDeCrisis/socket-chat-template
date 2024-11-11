import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-6xl font-bold mb-4">Error 404</h1>
                <p className="text-2xl mb-8">Página no encontrada</p>
                <Link to="/" className="text-blue-500 hover:underline">Volver al inicio</Link>
            </div>
        </div>
    )
}

export default NotFound