import { Link } from "wouter"

export const NotFoundPage = () => {
    return (
        <div className="min-h-screen bg-main text-primary flex flex-col items-center justify-center p-4">
            <div className="relative mb-8">
                <div className="text-[180px] md:text-[240px] font-bold text-zinc-900">404</div>
                <div className="absolute inset-0 text-[180px] md:text-[240px] font-bold bg-gradient-to-r from-blue-500 to-blue-400 bg-clip-text text-transparent opacity-80">404</div>
            </div>

            <h1 className="text-2xl md:text-3xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Página no encontrada!!!
            </h1>

            <p className="text-gray-400 mb-12 max-w-md text-center">
                La página que intentas visitar no existe o ha sido movida a otra ubicación
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md transition-colors duration-300"
                >
                    Volver al inicio
                </Link>
            </div>
        </div>
    )
}

