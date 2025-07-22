import { useEffect, useRef, useState } from 'react';

export interface MatrixDrop {
  x: number;
  y: number;
  speed: number;
  chars: string[];
  opacity: number;
}

interface UseMatrixEffectOptions {
  fontSize?: number;
  fadeSpeed?: number;
  charChangeRate?: number;
  speedRange?: [number, number];
  opacityRange?: [number, number];
}
export const useMatrixEffect = (options: UseMatrixEffectOptions = {}) => {
  const {
    fontSize = 14,
    fadeSpeed = 0.65,
    charChangeRate = 0.1,
    speedRange = [1, 4],
    opacityRange = [0.3, 0.8],
  } = options;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drops, setDrops] = useState<MatrixDrop[]>([]);
  const animationRef = useRef<number | null>(null);
  const dropsRef = useRef<MatrixDrop[]>([]);

  // Matrix characters
  const matrixChars =
    '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

  const createDrops = (canvas: HTMLCanvasElement): MatrixDrop[] => {
    const columns = Math.floor(canvas.width / fontSize);
    const newDrops: MatrixDrop[] = [];

    for (let i = 0; i < columns; i++) {
      const chars: string[] = [];
      const charCount = Math.floor(Math.random() * 15) + 5; // 5-20 chars per drop

      for (let j = 0; j < charCount; j++) {
        chars.push(matrixChars[Math.floor(Math.random() * matrixChars.length)]);
      }

      newDrops.push({
        x: i * fontSize,
        y: Math.random() * canvas.height - charCount * fontSize,
        speed: Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0],
        chars,
        opacity: Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0],
      });
    }

    return newDrops;
  };

  const updateDrop = (drop: MatrixDrop, canvas: HTMLCanvasElement) => {
    drop.y += drop.speed;

    // Reset drop when it goes off screen
    if (drop.y > canvas.height) {
      drop.y = -fontSize * drop.chars.length;
      drop.speed = Math.random() * (speedRange[1] - speedRange[0]) + speedRange[0];
      drop.opacity = Math.random() * (opacityRange[1] - opacityRange[0]) + opacityRange[0];
    }

    // Randomly change characters
    if (Math.random() < charChangeRate) {
      const randomIndex = Math.floor(Math.random() * drop.chars.length);
      drop.chars[randomIndex] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
    }
  };

  const drawDrop = (ctx: CanvasRenderingContext2D, drop: MatrixDrop, canvas: HTMLCanvasElement) => {
    drop.chars.forEach((char, index) => {
      const charY = drop.y + index * fontSize;
      if (charY > 0 && charY < canvas.height + fontSize) {
        // Create fade effect from bright green to darker
        const alpha = index === 0 ? 1 : Math.max(0, 1 - index * 0.15);
        const brightness = index === 0 ? 255 : Math.max(100, 255 - index * 30);

        ctx.fillStyle = `rgba(0, ${brightness}, 65, ${alpha * drop.opacity})`;
        ctx.fillText(char, drop.x, charY);
      }
    });
  };

  const animate = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear with trail effect
    ctx.fillStyle = `rgba(0, 0, 0, ${fadeSpeed})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.font = `${fontSize}px 'Courier New', monospace`;
    ctx.textAlign = 'start';

    // Update and draw all drops
    dropsRef.current.forEach(drop => {
      updateDrop(drop, canvas);
      drawDrop(ctx, drop, canvas);
    });

    animationRef.current = requestAnimationFrame(animate);
  };

  const initializeCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const newDrops = createDrops(canvas);
    dropsRef.current = newDrops;
    setDrops(newDrops);
  };

  useEffect(() => {
    initializeCanvas();

    const handleResize = () => {
      initializeCanvas();
    };

    window.addEventListener('resize', handleResize);

    // Start animation
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [fontSize, fadeSpeed, charChangeRate]);

  return {
    canvasRef,
    drops,
    isAnimating: animationRef.current !== null,
  };
};
