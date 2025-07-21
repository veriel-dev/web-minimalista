import { Link } from 'wouter';
import { MatrixDrop } from '../components/layouts/MainLayoutNew';
import React, { useEffect } from 'react';

export const NotFoundPage = () => {
  const canvasRef = React.useRef<HTMLCanvasElement | null>(null);
  const [, setDrops] = React.useState<MatrixDrop[]>([]);
  const animationRef = React.useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const matrixChars =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?/~`';
    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    console.log(`Columns: ${columns}`);

    // Initialize matrix drops
    const newDrops: MatrixDrop[] = [];
    for (let i = 0; i < columns; i++) {
      const chars: string[] = [];
      for (let j = 0; j < 10; j++) {
        chars.push(matrixChars[Math.floor(Math.random() * matrixChars.length)]);
      }

      newDrops.push({
        x: i * fontSize,
        y: Math.random() * canvas.height,
        speed: Math.random() * 3 + 1,
        chars,
        opacity: Math.random() * 0.5 + 0.3,
      });
    }
    setDrops(newDrops);

    const animate = () => {
      // Create trailing effect
      ctx.fillStyle = 'rgba(0, 0, 0, 0.65)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px monospace`;

      newDrops.forEach(drop => {
        drop.y += drop.speed;

        // Reset drop when it goes off screen
        if (drop.y > canvas.height) {
          drop.y = -fontSize * drop.chars.length;
          drop.speed = Math.random() * 3 + 1;
        }

        // Draw characters
        drop.chars.forEach((char, index) => {
          const charY = drop.y + index * fontSize;
          if (charY > 0 && charY < canvas.height) {
            // Brightest character at the front
            const alpha = index === 0 ? 1 : Math.max(0, 1 - index * 0.1);
            ctx.fillStyle = `rgba(0, 255, 65, ${alpha * drop.opacity})`;
            ctx.fillText(char, drop.x, charY);
          }
        });

        // Randomly change characters
        if (Math.random() < 0.1) {
          const randomIndex = Math.floor(Math.random() * drop.chars.length);
          drop.chars[randomIndex] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
        }
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

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
