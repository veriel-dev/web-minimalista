import { Link } from 'wouter';
import { useMatrixEffect } from '../hooks/useMatrixt';

export const NotFoundPage = () => {
  const { canvasRef } = useMatrixEffect({
    fontSize: 14,
    fadeSpeed: 0.65,
    charChangeRate: 0.1,
    speedRange: [1, 4],
    opacityRange: [0.3, 0.8],
  });
  return (
    <div className="min-h-screen  bg-black backdrop-blur-sm flex flex-col items-center justify-center p-4">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none h-full w-full"
        style={{ zIndex: 0 }}
      />
      <div className="relative mb-8">
        <div className="text-[180px] md:text-[240px] font-bold  bg-transparent">404</div>
        <div className="absolute inset-0 text-transparent text-[180px] md:text-[240px] font-black text-stroke-green">
          404
        </div>
      </div>

      <h1 className="relative z-10 text-2xl md:text-3xl  mb-6 text-center text-green-500 font-bold">
        Página no encontrada!!!
      </h1>

      <p className="text-green-400 mb-12 max-w-md text-center relative z-10 font-semibold">
        La página que intentas visitar no existe o ha sido movida a otra ubicación
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Link
          href="/"
          className="border-green-400/70 border-2 text-green-400  hover:border-green-500 hover:text-green-500 font-bold px-8 py-3 rounded-md transition-colors duration-300 z-10 relative"
        >
          Volver al inicio
        </Link>
      </div>
    </div>
  );
};
