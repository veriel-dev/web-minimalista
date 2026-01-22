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

const DEFAULT_SPEED_RANGE: [number, number] = [1, 4];
const DEFAULT_OPACITY_RANGE: [number, number] = [0.3, 0.8];

export const useMatrixEffect = (options: UseMatrixEffectOptions = {}) => {
  const {
    fontSize = 14,
    fadeSpeed = 0.65,
    charChangeRate = 0.1,
    speedRange = DEFAULT_SPEED_RANGE,
    opacityRange = DEFAULT_OPACITY_RANGE,
  } = options;

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [drops, setDrops] = useState<MatrixDrop[]>([]);
  const animationRef = useRef<number | null>(null);
  const dropsRef = useRef<MatrixDrop[]>([]);

  // Store ranges in refs to avoid useEffect re-runs
  const speedRangeRef = useRef(speedRange);
  const opacityRangeRef = useRef(opacityRange);

  useEffect(() => {
    speedRangeRef.current = speedRange;
    opacityRangeRef.current = opacityRange;
  }, [speedRange, opacityRange]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const matrixChars =
      '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:,.<>?/~`';

    const createDrops = (): MatrixDrop[] => {
      const columns = Math.floor(canvas.width / fontSize);
      const newDrops: MatrixDrop[] = [];
      const [minSpeed, maxSpeed] = speedRangeRef.current;
      const [minOpacity, maxOpacity] = opacityRangeRef.current;

      for (let i = 0; i < columns; i++) {
        const chars: string[] = [];
        const charCount = Math.floor(Math.random() * 15) + 5;

        for (let j = 0; j < charCount; j++) {
          chars.push(matrixChars[Math.floor(Math.random() * matrixChars.length)]);
        }

        newDrops.push({
          x: i * fontSize,
          y: Math.random() * canvas.height - charCount * fontSize,
          speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
          chars,
          opacity: Math.random() * (maxOpacity - minOpacity) + minOpacity,
        });
      }

      return newDrops;
    };

    const updateDrop = (drop: MatrixDrop) => {
      const [minSpeed, maxSpeed] = speedRangeRef.current;
      const [minOpacity, maxOpacity] = opacityRangeRef.current;

      drop.y += drop.speed;

      if (drop.y > canvas.height) {
        drop.y = -fontSize * drop.chars.length;
        drop.speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        drop.opacity = Math.random() * (maxOpacity - minOpacity) + minOpacity;
      }

      if (Math.random() < charChangeRate) {
        const randomIndex = Math.floor(Math.random() * drop.chars.length);
        drop.chars[randomIndex] = matrixChars[Math.floor(Math.random() * matrixChars.length)];
      }
    };

    const drawDrop = (ctx: CanvasRenderingContext2D, drop: MatrixDrop) => {
      drop.chars.forEach((char, index) => {
        const charY = drop.y + index * fontSize;
        if (charY > 0 && charY < canvas.height + fontSize) {
          const alpha = index === 0 ? 1 : Math.max(0, 1 - index * 0.15);
          const brightness = index === 0 ? 255 : Math.max(100, 255 - index * 30);

          ctx.fillStyle = `rgba(0, ${brightness}, 65, ${alpha * drop.opacity})`;
          ctx.fillText(char, drop.x, charY);
        }
      });
    };

    const initCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      const newDrops = createDrops();
      dropsRef.current = newDrops;
      setDrops(newDrops);
    };

    const runAnimation = () => {
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.fillStyle = `rgba(0, 0, 0, ${fadeSpeed})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = `${fontSize}px 'Courier New', monospace`;
      ctx.textAlign = 'start';

      dropsRef.current.forEach(drop => {
        updateDrop(drop);
        drawDrop(ctx, drop);
      });

      animationRef.current = requestAnimationFrame(runAnimation);
    };

    initCanvas();
    runAnimation();

    const handleResize = () => {
      initCanvas();
    };

    window.addEventListener('resize', handleResize);

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
