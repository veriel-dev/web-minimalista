import React, { useEffect } from 'react';

import { Footer } from './Footer';
import { ScrollToTop } from '../ui/ScrollElement';
import { NavBarNew } from './NavBarNew';

export interface MatrixDrop {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number;
}

interface Props {
  children: React.ReactNode;
}
export const MainLayoutNew = ({ children }: Props) => {
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
    <div className="min-h-screen bg-black">
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none h-full w-full"
        style={{ zIndex: 0 }}
      />
      <NavBarNew />
      {children}
      <Footer />
      <ScrollToTop variant="scrollToTopMinimalMatrix" />
    </div>
  );
};
