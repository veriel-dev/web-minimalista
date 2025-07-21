import { memo } from 'react';

export const Footer = memo(() => {
  return (
    <footer className="border-t border-green-900/50 mt-6 z-10 relative bg-black/20 backdrop-blur-sm">
      <div className=" mx-w-6xl mx-auto px-4 py-8">
        <p className="text-center text-green-300">
          © {new Date().getFullYear()} VerielDev. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
});
